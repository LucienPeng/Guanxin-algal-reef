import { createSlice } from '@reduxjs/toolkit';
import { AuthStage, AuthState } from './auth.model';

const initialState: AuthState = {
  isLoggedIn: false,
  authStage: AuthStage.LoggedOut,
  accessToken: null,
  refreshToken: null,
  email: null,
  session: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isLoggedIn = true;
      state.authStage = AuthStage.LoggedIn;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    resetState(state) {
      state.isLoggedIn = false;
      state.authStage = AuthStage.LoggedOut;
      state.email = null;
      state.session = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
    // Start the update password flow on the first login
    updatePwdInit(state, action) {
      state.authStage = AuthStage.InitialUpdatePwd;
      state.session = action.payload.session;
      state.email = action.payload.email;
    },
    backToLogin(state) {
      state.authStage = AuthStage.LoggedOut;
      state.email = null;
      state.session = null;
    },
    changeAuthStage(state, action) {
      state.authStage = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
