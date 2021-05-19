import { AuthState, AuthActions, HANDLE_SIGN_IN, HANDLE_FETCHING } from './types';

const initialState: AuthState = {
  isSignedIn: false,
  fetching: false,
}

export default function reducer(
  state = initialState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case HANDLE_SIGN_IN:
      return { ...state, isSignedIn: true, headers: action.payload };
    case HANDLE_FETCHING:
      return { ...state, fetching: action.payload };
    default:
      return state;
  }
}
