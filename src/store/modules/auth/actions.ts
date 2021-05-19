import { AuthActions, HANDLE_FETCHING, HANDLE_SIGN_REQUEST, RequestHeaders, HANDLE_SIGN_IN } from './types';

export const handleSignInRequest = (email: string, password: string): AuthActions => {
  return {
    type: HANDLE_SIGN_REQUEST,
    payload: {
      email,
      password,
    }
  };
};

export const handleFetching = (fetching: boolean): AuthActions => {
  return {
    type: HANDLE_FETCHING,
    payload: fetching,
  };
};

export const handleSignIn = (headers: RequestHeaders): AuthActions => {
  return {
    type: HANDLE_SIGN_IN,
    payload: headers,
  }
};
