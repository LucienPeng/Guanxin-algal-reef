import { createSlice } from '@reduxjs/toolkit';
import { ErrorState } from './error.model';

const initialState: ErrorState = {
  title: null,
  code: null,
  message: null,
};

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError(state, action) {
      state.title = action.payload.title;
      state.code = action.payload.code;
      state.message = action.payload.message;
    },
    clearError(state) {
      state.title = null;
      state.code = null;
      state.message = null;
    }
  },
});

export const errorAction = errorSlice.actions;
export default errorSlice.reducer;
