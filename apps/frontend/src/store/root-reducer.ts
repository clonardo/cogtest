import { userReducer } from './user';
import { authReducer } from './auth';
import { runnerReducer } from './runner';
import { combineReducers } from 'redux';
import { IAppState } from '../contracts/store';
import { responsiveStateReducer } from 'redux-responsive';
import { reducer as toastrReducer } from 'react-redux-toastr';

const reducerObj = {
  user: userReducer,
  auth: authReducer,
  runner: runnerReducer,
  browser: responsiveStateReducer,
  toastr: toastrReducer,
};

/**
 * Redux root reducer
 */
export const rootReducer = combineReducers<IAppState>(reducerObj);
