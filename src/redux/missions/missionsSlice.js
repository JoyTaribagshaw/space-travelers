import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';

// get missions
export const fetchMissions = createAsyncThunk('misson/getmission', async () => {
  const rockets = await fetch(url);
  const data = await rockets.json();
  return data;
});

const missionsslice = createSlice({
  name: 'missionData',
  initialState: {
    missions: [],
    status: 'Data not loaded',
    error: null,
  },
  reducers: {
    joiningMission: (state, action) => {
      const id = action.payload;
      state.missions = state.missions.map((mission) => {
        if (mission.mission_id !== id) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
    },
    leavingMission: (state, action) => {
      const id = action.payload;
      state.missions = state.missions.map((mission) => {
        if (mission.mission_id !== id) return mission;
        return { ...mission, reserved: false };
      });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = 'Date Loeaded';
        state.missions = action.payload;
      });
  },
});
export const { joiningMission, leavingMission } = missionsslice.actions;
export default missionsslice.reducer;
