/*** Login Form State ***/
export interface LoginFormState {
  readonly username: string;
  readonly password: string;
  readonly usernameValid: boolean | null;
  readonly passwordValid: boolean | null;
  readonly formValid: boolean | null;
  readonly errorMsg: string;
};
export enum LoginActionType {
  UsernameInput = '[Login] UsernameInput',
  UsernameBlur = '[Login] UsernameBlur',
  PasswordInput = '[Login] PasswordInput',
  PasswordBlur = '[Login] PasswordBlur'
};
interface LoginBaseAction {
  readonly type: LoginActionType;
};
export interface LoginUserInputAction extends LoginBaseAction {
  readonly username: string;
};
export interface LoginPasswordInputAction extends LoginBaseAction {
  readonly password: string;
};
export interface LoginUserBlurAction extends LoginBaseAction { }
export interface LoginPasswordBlurAction extends LoginBaseAction { }
export type LoginAction = LoginUserInputAction | LoginUserBlurAction | LoginPasswordInputAction | LoginPasswordBlurAction;

/*** Password Reset State ***/
export interface ResetPwdState {
  readonly code: string;
  readonly email: string;
  readonly password: string;
  readonly repeatPassword: string;
  readonly emailValid: boolean | null;
  readonly passwordValid: boolean | null;
  readonly repeatPasswordValid: boolean | null;
  readonly codeValid: boolean | null;
  readonly errorMsg: string;
};
export enum ResetPwdActionType {
  EmailInput = '[ResetPwd] EmailInput',
  EmailBlur = '[ResetPwd] EmailBlur',
  PasscodeInput = '[ResetPwd] PasscodeInput',
  PasscodeBlur = '[ResetPwd] PasscodeBlur',
  PasswordInput = '[ResetPwd] PasswordInput',
  PasswordBlur = '[ResetPwd] PasswordBlur',
  RepeatPasswordInput = '[ResetPwd] RepeatPasswordInput',
  RepeatPasswordBlur = '[ResetPwd] RepeatPasswordBlur',
  SetError = '[ResetPwd] SetError',
};
interface ResetBaseAction {
  readonly type: ResetPwdActionType;
}
export interface ResetEmailInputAction extends ResetBaseAction {
  readonly email: string;
};
export interface ResetPasswordInputAction extends ResetBaseAction {
  readonly password: string;
};
export interface PasscodeInputAction extends ResetBaseAction {
  readonly code: string;
};
export interface ResetRepeatPasswordInputAction extends ResetBaseAction {
  readonly repeatPassword: string;
};
export interface ResetSetErrorAction extends ResetBaseAction {
  readonly errorMsg: string;
};
export interface ResetEmailBlurAction extends ResetBaseAction {};
export interface ResetPasswordBlurAction extends ResetBaseAction {};
export interface PasscodeBlurAction extends ResetBaseAction {};
export interface ResetRepeatPasswordBlurAction extends ResetBaseAction {};
export type ResetAction =
  ResetEmailInputAction |
  ResetPasswordInputAction |
  ResetRepeatPasswordInputAction |
  ResetEmailBlurAction |
  ResetPasswordBlurAction |
  ResetRepeatPasswordBlurAction |
  ResetSetErrorAction;

/*** Login State (LoginContext) ***/
export interface LoginState {
  readonly isLoggedIn: boolean;
  readonly resetPhase: ResetPhase;
  readonly refreshToken: string | null;
  readonly accessToken: string | null;
  readonly session: string | null;
  readonly tokenValid: boolean;
  readonly email: string | null;
  readonly refreshTimer: ReturnType<typeof setInterval> | null;
};

export type ResetPhase = 'email' | 'password' | 'reset-requested' | 'reset-success';
export interface LoginFormProps {
  readonly className?: string;
  readonly resetPhase?: ResetPhase;
}
export interface LoginParams {
  readonly email: string;
  readonly password: string;
}
export interface ResetPasswordParams {
  readonly email: string;
}
export interface UpdatePasswordParams {
  readonly password: string;
}
