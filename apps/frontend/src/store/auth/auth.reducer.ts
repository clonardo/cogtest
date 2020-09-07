import {
  LOGIN_START,
  LOGIN_END,
  LOGOUT_START,
  LOGOUT_END,
} from './auth.actions';
import { Action, PayloadAction } from '@reduxjs/toolkit';
import { IAuthSlice } from '../../contracts/store';

const initialState: IAuthSlice = {
  loading: false,
  jwt: null,
};

/**
 * Current auth state reducer
 */
export const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case LOGIN_START:
    case LOGOUT_START:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_END:
      const actionWithPayload = action as PayloadAction<string>;
      if (actionWithPayload.payload && actionWithPayload.payload != '') {
        return {
          ...state,
          loading: false,
          jwt: actionWithPayload.payload,
        };
      } else {
        return {
          ...state,
          loading: false,
          jwt: null,
        };
      }
    case LOGOUT_END:
      return {
        ...state,
        loading: false,
        jwt: null,
      };
    default:
      return state;
  }
};
