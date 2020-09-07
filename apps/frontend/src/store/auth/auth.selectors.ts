import { createSelector } from '@reduxjs/toolkit';
import { IAppState, IAuthSlice } from '../../contracts/store';

/**
 * Select root user state
 */
function selectAuthState(state: IAppState) {
  return state.auth;
}

/**
 * Select the client's JWT, if set (else null)
 */
export const SelectAuthJwt = createSelector(
  selectAuthState,
  (res: IAuthSlice) => res.jwt
);

/**
 * Select whether the authentication request is loading
 */
export const SelectAuthIsLoading = createSelector(
  selectAuthState,
  (res: IAuthSlice) => res.loading
);
