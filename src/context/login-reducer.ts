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

/*** Login Form State ***/
export enum LoginActionType {
  UsernameInput = '[Login] UsernameInput',
  UsernameBlur = '[Login] UsernameBlur',
  PasswordInput = '[Login] PasswordInput',
  PasswordBlur = '[Login] PasswordBlur',
  LoginFailed = '[Login] LoginFailed',
}

export interface LoginBaseAction {
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
