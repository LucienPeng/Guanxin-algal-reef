export interface NewPasswordResponse {
  readonly challengeName: string;
  readonly session: string;
  readonly challengeParameters: {
    readonly USER_ID_FOR_SRP: string;
    readonly userAttributes: string;
  };
  readonly authenticationResult: null | boolean;
}

export interface LoginSuccessResponse {
  readonly challengeName: null;
  readonly session: null;
  readonly challengeParameters: {};
  readonly authenticationDetails: {
    readonly accessToken: string;
    readonly expiresIn: number;
    readonly tokenType: string;
    readonly refreshToken: string;
    readonly idToken: string;
  };
}

export type LoginResponse = LoginSuccessResponse | NewPasswordResponse;

// Update Password API
export interface UpdatePasswordRequestParam {
  readonly email: string;
  readonly newPassword: string;
  readonly session: string;
};
export interface UpdatePasswordSuccessResponse {
  readonly authenticationDetails: {
    readonly accessToken: string,
    readonly expiresIn: string,
    readonly tokenType: string,
    readonly refreshToken: string,
  }
};

// Recover Password API
export interface RecoverPasswordRequestParam {
  readonly email: string;
};

// Refresh Token API
export interface RefreshTokenRequestParam {
  readonly email: string;
  readonly refreshToken: string;
};
export interface RefreshTokenSuccessResponse {
  readonly authenticationDetails: {
    readonly accessToken: string,
    readonly expiresIn: number,
    readonly tokenType: string,
    readonly refreshToken: null,
    readonly idToken: string;
  };
  readonly challengeName: null;
  readonly session: null;
};
