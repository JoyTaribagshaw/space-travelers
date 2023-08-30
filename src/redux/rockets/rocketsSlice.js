import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: {},
  loading: false,
  error: null,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    setRockets(state, action) {
      state.rockets = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export default rocketsSlice.reducer;
