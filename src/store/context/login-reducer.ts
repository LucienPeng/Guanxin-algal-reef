import { Reducer } from 'react';

export interface LoginFormState {
  readonly username: string;
  readonly password: string;
  readonly usernameValid: boolean | null;
  readonly passwordValid: boolean | null;
  readonly formValid: boolean | null;
  readonly errorMsg: string;
}

export const InitialLoginFormState: LoginFormState = {
  username: '',
  password: '',
  usernameValid: null,
  passwordValid: null,
  formValid: null,
  errorMsg: '',
};

// Reducer for login form
export const LoginFormReducer: Reducer<LoginFormState, LoginAction> = (
  state,
  action
) => {
  switch (action.type) {
    case LoginActionType.UsernameInput: {
      const currAction = action as LoginUserInputAction;
      const usernameValid =
        currAction.username.trim().length > 0 &&
        currAction.username.includes('@')
          ? true
          : false;

      return {
        ...state,
        username: currAction.username,
        usernameValid,
        formValid: usernameValid && state.passwordValid,
        errorMsg:
          (!usernameValid && '很抱歉，使用者帳號輸入不完整或錯誤') || '',
      };
    }
    case LoginActionType.UsernameBlur: {
      const usernameValid = (state.username || '').trim().length > 0;
      return {
        ...state,
        usernameValid,
        formValid: usernameValid && state.passwordValid,
        errorMsg:
          (!usernameValid && '很抱歉，使用者帳號輸入不完整或錯誤') || '',
      };
    }
    case LoginActionType.PasswordInput: {
      const currAction = action as LoginPasswordInputAction;
      const passwordValid = currAction.password.trim().length > 0;
      return {
        ...state,
        password: currAction.password,
        passwordValid,
        formValid: state.usernameValid && passwordValid,
        errorMsg: (!passwordValid && '很抱歉，密碼輸入不完整或錯誤') || '',
      };
    }
    case LoginActionType.PasswordBlur: {
      const passwordValid = (state.password || '').trim().length > 0;
      return {
        ...state,
        passwordValid,
        formValid: passwordValid && state.usernameValid,
        errorMsg: (!passwordValid && '很抱歉，密碼輸入不完整或錯誤') || '',
      };
    }
    case LoginActionType.LoginFailed: {
      return {
        ...state,
        errorMsg: '很抱歉，帳號或密碼錯誤',
      };
    }
    default: {
      return InitialLoginFormState;
    }
  }
};

/*** Login Form State ***/
export enum LoginActionType {
  UsernameInput = '[Login] UsernameInput',
  UsernameBlur = '[Login] UsernameBlur',
  PasswordInput = '[Login] PasswordInput',
  PasswordBlur = '[Login] PasswordBlur',
  LoginFailed = '[Login] LoginFailed',
}
interface LoginBaseAction {
  readonly type: LoginActionType;
}
export interface LoginUserInputAction extends LoginBaseAction {
  readonly username: string;
}
export interface LoginPasswordInputAction extends LoginBaseAction {
  readonly password: string;
}
export interface LoginUserBlurAction extends LoginBaseAction {}
export interface LoginPasswordBlurAction extends LoginBaseAction {}
export interface LoginFailedAction extends LoginBaseAction {}

export type LoginAction =
  | LoginUserInputAction
  | LoginUserBlurAction
  | LoginPasswordInputAction
  | LoginPasswordBlurAction
  | LoginFailedAction;

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
}
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
}
interface ResetBaseAction {
  readonly type: ResetPwdActionType;
}
export interface ResetEmailInputAction extends ResetBaseAction {
  readonly email: string;
}
export interface ResetPasswordInputAction extends ResetBaseAction {
  readonly password: string;
}
export interface PasscodeInputAction extends ResetBaseAction {
  readonly code: string;
}
export interface ResetRepeatPasswordInputAction extends ResetBaseAction {
  readonly repeatPassword: string;
}
export interface ResetSetErrorAction extends ResetBaseAction {
  readonly errorMsg: string;
}
export interface ResetEmailBlurAction extends ResetBaseAction {}
export interface ResetPasswordBlurAction extends ResetBaseAction {}
export interface PasscodeBlurAction extends ResetBaseAction {}
export interface ResetRepeatPasswordBlurAction extends ResetBaseAction {}
export type ResetAction =
  | ResetEmailInputAction
  | ResetPasswordInputAction
  | ResetRepeatPasswordInputAction
  | ResetEmailBlurAction
  | ResetPasswordBlurAction
  | ResetRepeatPasswordBlurAction
  | ResetSetErrorAction;

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
}

export type ResetPhase =
  | 'email'
  | 'password'
  | 'reset-requested'
  | 'reset-success';
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

export const InitialResetState: ResetPwdState = {
  code: '',
  email: '',
  password: '',
  repeatPassword: '',
  emailValid: null,
  passwordValid: null,
  repeatPasswordValid: null,
  codeValid: null,
  errorMsg: '',
};

// Reducer for reset password form
export const ResetPwdReducer: Reducer<ResetPwdState, ResetAction> = (
  state: ResetPwdState,
  action: ResetAction
): ResetPwdState => {
  switch (action.type) {
    case ResetPwdActionType.EmailInput: {
      const currAction = action as ResetEmailInputAction;
      const emailValid = currAction.email.trim().length > 0;
      return {
        ...state,
        email: currAction.email,
        emailValid,
      };
    }
    case ResetPwdActionType.EmailBlur: {
      const emailValid = state.email.trim().length > 0;
      return {
        ...state,
        emailValid,
      };
    }
    case ResetPwdActionType.PasswordInput: {
      const currAction = action as ResetPasswordInputAction;
      const passwordValid = currAction.password.trim().length > 0;
      return {
        ...state,
        password: currAction.password,
        passwordValid,
      };
    }
    case ResetPwdActionType.PasswordBlur: {
      const passwordValid = state.password.trim().length > 0;
      return {
        ...state,
        passwordValid,
      };
    }
    case ResetPwdActionType.PasscodeInput: {
      const currAction = action as PasscodeInputAction;
      const codeValid = currAction.code.trim().length > 0;
      return {
        ...state,
        code: currAction.code,
        codeValid,
      };
    }
    case ResetPwdActionType.PasscodeBlur: {
      const codeValid = state.code.trim().length > 0;
      return {
        ...state,
        codeValid,
      };
    }
    case ResetPwdActionType.RepeatPasswordInput: {
      const currAction = action as ResetRepeatPasswordInputAction;
      if (currAction.repeatPassword === state.password) {
        return {
          ...state,
          repeatPassword: currAction.repeatPassword,
          repeatPasswordValid: true,
          errorMsg: '',
        };
      }
      return {
        ...state,
      };
    }
    case ResetPwdActionType.RepeatPasswordBlur: {
      const repeatPasswordValid = state.repeatPassword.trim().length > 0;
      if (state.repeatPassword !== state.password) {
        return {
          ...state,
          repeatPasswordValid: false,
          errorMsg: "Sorry, the password are not correct or don't match.",
        };
      }
      return {
        ...state,
        repeatPasswordValid,
        errorMsg: '',
      };
    }
    case ResetPwdActionType.SetError: {
      const currAction = action as ResetSetErrorAction;
      return {
        ...state,
        errorMsg: currAction.errorMsg,
      };
    }
    default: {
      return InitialResetState;
    }
  }
};

export const InitialLoginState: LoginState = {
  isLoggedIn: false,
  resetPhase: 'email',
  refreshToken: null,
  accessToken: null,
  session: null,
  tokenValid: false,
  email: null,
  refreshTimer: null,
};
