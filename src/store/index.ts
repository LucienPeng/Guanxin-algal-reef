import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth-slice';
import { RootState } from './store.model';

const store = configureStore<RootState>({
  reducer: {
    auth: authReducer,
  },
});

export default store;
