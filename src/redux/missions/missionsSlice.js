/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { createSelector } from 'reselect';

const url = 'https://api.spacexdata.com/v3/missions';

// get missions
export const getmission = createAsyncThunk('misson/getmission', async () => {
  try {
    const responce = await axios.get(url);
    return responce.data;
  } catch (error) {
    throw new Error('did not load data');
  }
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
      const missionId = action.payload;
      state.data = state.data.map((mission) => (mission.mission_id === missionId ? { ...mission, reserved: true } : mission));
    },
    leavingMission: (state, action) => {
      const missionId = action.payload;
      state.data = state.data.map((mission) => (mission.mission_id === missionId ? { ...mission, reserved: false } : mission));
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getmission.fulfilled, (state, action) => {
        state.status = 'Date Loeaded';
        state.missions = action.payload;
      });
  },
});

export const MissionsData = (state) => state.missions.data;

export const selectMappedMissions = createSelector(
  [MissionsData],
  (data) => data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
    reserved: mission.reserved || false, // Default reserved status
  })),
);

export const { joiningMission, leavingMission } = missionsslice.actions;
export default missionsslice.reducer;
