export const HANDLE_SIGN_IN = '@auth/HANDLE_SIGN_IN';
export const HANDLE_SIGN_REQUEST = '@auth/HANDLE_SIGN_REQUEST';
export const HANDLE_FETCHING = '@auth/HANDLE_FETCHING';

export interface RequestHeaders {
  accessToken: string;
  client: string;
  uid: string;
}

export type AuthState = {
  isSignedIn: boolean;
  fetching: boolean;
  headers?: RequestHeaders;
};

export type HandleSignInAction = {
  type: typeof HANDLE_SIGN_REQUEST;
  payload: {
    email: string;
    password: string;
  }
};

export type HandleSignIn = {
  type: typeof HANDLE_SIGN_IN;
  payload: RequestHeaders;
}

export type HandleFetching = {
  type: typeof HANDLE_FETCHING;
  payload: boolean;
};

export type AuthActions = HandleSignInAction | HandleSignIn | HandleFetching;
