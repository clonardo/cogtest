import { IAuthSlice, IUserSlice, IRunnerSlice } from './slices';
import { IBrowser } from 'redux-responsive';
import { ToastrState } from 'react-redux-toastr';

/**
 * Combined state type for app
 */
export type IAppState = {
  user: IUserSlice;
  auth: IAuthSlice;
  browser: IBrowser;
  runner: IRunnerSlice;
  toastr: ToastrState;
};
