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
    // This reducer will be called when the `missions` action is dispatched
    setRockets(state, action) {
      state.rockets = action.payload;
    },
    // This reducer will be called when the `loading` action is dispatched
    setLoading(state, action) {
      state.loading = action.payload;
    },
    // This reducer will be called when the `error` action is dispatched
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export default rocketsSlice.reducer;