export enum AuthStage {
  LoggedIn = 'logged-in',
  LoggedOut = 'logged-out',

  // When user clicks on the forget password link => display email field
  RecoverPwdInit = 'recover-pwd-init',

  // When user clicks on the reset password button in email, display readonly email and new password fields
  RecoverPwdPhaseII = 'recover-pwd-phase-ii',

  // On reset password submits and success
  RecoverSuccess = 'recover-success',

  // User submits the password reset request
  RecoverRequested = 'recover-requested',

  // First login detected, show reset password screen
  InitialUpdatePwd = 'initial-update-pwd',

  // Update password success after first login
  UpdatePwdSuccess = 'update-success',
};

export interface AuthState {
  readonly isLoggedIn: boolean;
  readonly authStage: AuthStage;
  readonly accessToken: string | null;
  readonly refreshToken: string | null;
  readonly email: string | null;
  readonly session: string | null;
};

export interface LoginParams {
  readonly email: string;
  readonly password: string;
};

export interface RecoverPwdParams {
  readonly email: string;
};

export interface ResetPwdParams {
  readonly email: string;
  readonly password: string;
  readonly code: string;
};

export interface UpdatePwdParams {
  readonly email: string;
  readonly newPassword: string;
  readonly session: string;
};

export interface SetTokenParams {
  readonly accessToken: string;
  readonly refreshToken: string;
  readonly idToken: string;
};

export interface RefreshTokenParams {
  readonly accessToken: string;
  readonly refreshToken: string;
  readonly idToken: string;
};

export interface AccessToken {
  readonly sub: string;
  readonly iss: string;
  readonly client_id: string;
  readonly origin_jti: string;
  readonly event_id: string;
  readonly token_use: string;
  readonly scope: string;
  readonly auth_time: number;
  readonly exp: number;
  readonly iat: number;
  readonly jti: string;
  readonly username: string;
};

export interface IdToken {
  readonly sub: string;
  readonly iss: string;
  readonly 'cognito:username': string;
  readonly origin_jti: string;
  readonly aud: string;
  readonly event_id: string;
  readonly token_use: string;
  readonly auth_time: string;
  readonly exp: number;
  readonly iat: number;
  readonly jti: string;
  readonly email: string;
}
