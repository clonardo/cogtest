import { createSelector } from '@reduxjs/toolkit';
import { IAppState, IUserSlice } from '../../contracts/store';

/**
 * Select root user state
 */
function selectUserState(state: IAppState) {
  return state.user;
}

/**
 * Select the client's UUID, if set (else null)
 */
export const SelectClientUuid = createSelector(
  selectUserState,
  (res: IUserSlice) => res.uuid
);
