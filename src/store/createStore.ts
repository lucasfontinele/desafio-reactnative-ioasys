import { createStore, applyMiddleware, Middleware, Reducer } from 'redux';

import { AuthActions, AuthState } from './modules/auth/types';
import { InvestorActions, InvestorState } from './modules/investor/types';

export interface ApplicationState {
  auth: AuthState;
  investor: InvestorState;
}

export type StoreAction = AuthActions | InvestorActions;

export default (
  reducers: Reducer<ApplicationState, StoreAction>,
  middlewares: Middleware[]
) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
