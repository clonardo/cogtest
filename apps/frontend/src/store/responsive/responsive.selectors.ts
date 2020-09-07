import { createSelector } from '@reduxjs/toolkit';
import { IAppState } from '../../contracts/store';
import { IBrowser } from 'redux-responsive';

/**
 * Select responsive/browser state
 */
function selectBrowserState(state: IAppState) {
  return state.browser;
}

/**
 * Is the breakpoint shown is >= 992px (medium), return true
 */
export const SelectIsLargeScreen = createSelector(
  selectBrowserState,
  (res: IBrowser) => {
    return (
      res.mediaType == 'medium' ||
      res.mediaType == 'large' ||
      res.mediaType == 'infinity'
    );
  }
);
