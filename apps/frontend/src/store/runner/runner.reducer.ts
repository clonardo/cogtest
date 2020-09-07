import {
  RUNNER_CONFIG_FETCH_SUCCESS,
  RUNNER_CONFIG_FETCH_START,
  RUNNER_CONFIG_FETCH_END,
  RUNNER_CONFIG_FETCH_ERROR,
} from './runner.actions';
import { IRunnerSlice } from '../../contracts/store';
import { Action, PayloadAction } from '@reduxjs/toolkit';

const initialState: IRunnerSlice = {
  loading: false,
  message: null,
  preloadUrls: [],
  sections: [],
};

/**
 * Runner state + config reducer
 */
export const runnerReducer = (
  state: IRunnerSlice = initialState,
  action: Action
) => {
  switch (action.type) {
    case RUNNER_CONFIG_FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case RUNNER_CONFIG_FETCH_END:
      return {
        ...state,
        loading: false,
      };
    case RUNNER_CONFIG_FETCH_ERROR:
      const actionWithPayload = action as PayloadAction<string>;
      const cleanedMessage =
        actionWithPayload &&
        actionWithPayload.payload &&
        actionWithPayload.payload != ''
          ? actionWithPayload.payload
          : 'An error has occurred';
      return {
        ...state,
        loading: false,
        message: cleanedMessage,
      };
    case RUNNER_CONFIG_FETCH_SUCCESS:
      return {
        ...state,
        // #CLTODO: build out
        // user: action.payload.user,
      };
    default:
      return state;
  }
};
