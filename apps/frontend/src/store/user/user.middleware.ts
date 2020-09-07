import { Dispatch, Middleware, MiddlewareAPI } from 'redux';
import { v4 } from 'uuid';
import {
  isTargetedCommand,
  isTargetedNamespaceAndCommand,
  hasTargetNamespace,
} from '../../common/store-utils';
import axios from 'axios';
import { SomeAction, IAppState } from '../../contracts';
import { SelectClientUuid } from './user.selectors';
import { userSetUuid } from './user.actions';
import { USER_CMD_PREFIX, USER_COMMANDS } from './user.commands';

const targetNamespace = USER_CMD_PREFIX;

/**
 * Create a middleware instance to handle User commands
 */
export const UserMiddlewareFactory = (): Middleware => {
  const userCommandMiddleware: Middleware = ({
    getState,
    dispatch,
  }: MiddlewareAPI<Dispatch, IAppState>) => (next: Dispatch) => (
    action: SomeAction
  ) => {
    if (hasTargetNamespace(targetNamespace, action)) {
      if (isTargetedCommand(USER_COMMANDS.INIT, action)) {
        // Command: init state
        if (!SelectClientUuid(getState())) {
          // case: UUID is null, dispatch an action to set one.
          const newUuid = v4();
          next(userSetUuid(newUuid));
        } else {
          console.log('Init: UUID already set');
        }
      }
    }
    return next(action);
  };
  return userCommandMiddleware;
};
