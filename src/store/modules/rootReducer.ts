import { combineReducers } from 'redux';

import { ApplicationState } from '../createStore';

import auth from './auth/reducer';

export default combineReducers<ApplicationState>({
  auth,
});
