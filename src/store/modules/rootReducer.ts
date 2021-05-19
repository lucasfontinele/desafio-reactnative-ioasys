import { combineReducers } from 'redux';

import { ApplicationState } from '../createStore';

import auth from './auth/reducer';
import investor from './investor/reducer';

export default combineReducers<ApplicationState>({
  auth,
  investor,
});
