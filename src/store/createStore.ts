import { createStore, applyMiddleware, Middleware, Reducer } from 'redux';

import { AuthActions, AuthState } from './modules/auth/types';

export interface ApplicationState {
  auth: AuthState;
}

export type StoreAction = AuthActions;

export default (
  reducers: Reducer<ApplicationState, StoreAction>,
  middlewares: Middleware[]
) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
