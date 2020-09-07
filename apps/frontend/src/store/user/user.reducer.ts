import {
  USER_RESET,
  USER_FETCH_SUCCESS,
  USER_FETCH_START,
  USER_FETCH_END,
  USER_FETCH_ERROR,
  USER_SET_UUID,
} from './user.actions';
import { IUserSlice } from '../../contracts/store';

const initialState: IUserSlice = {
  loading: false,
  logged: false,
  user: null,
  uuid: null,
};

/**
 * Current user reducer
 */
export const userReducer = (state: IUserSlice = initialState, action) => {
  switch (action.type) {
    case USER_FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case USER_FETCH_END:
      return {
        ...state,
        loading: false,
      };
    case USER_FETCH_ERROR:
    case USER_RESET:
      return initialState;
    case USER_FETCH_SUCCESS:
      return {
        ...state,
        logged: action.payload.logged,
        user: action.payload.user,
      };
    case USER_SET_UUID:
      return {
        ...state,
        uuid: action.payload,
      };
    default:
      return state;
  }
};
