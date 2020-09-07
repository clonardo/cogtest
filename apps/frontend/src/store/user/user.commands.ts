import { createActionWithNamespace } from '../../common/store-utils';

/**
 * Namespace/prefix for "commands" that will be intercepted + handled in middleware
 */
export const USER_CMD_PREFIX = 'USER_CMD';

/**
 * Commands to be handled by user middleware
 */
export enum USER_COMMANDS {
  /**
   * Middleware cmd to initialize "user" state
   */
  INIT = 'INIT',
}

/**
 * Make a command to initialize the User store
 */
export const MakeInitUserStoreCommand = () => {
  return createActionWithNamespace(USER_CMD_PREFIX, USER_COMMANDS.INIT);
};
