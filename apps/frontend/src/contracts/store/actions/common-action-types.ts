import { Action, ActionMeta, ReduxCompatibleReducer } from 'redux-actions';

/**
 * Untyped action, possibly with metadata
 */
export type SomeAction<TPayload = any, TMeta = any> =
  | Action<TPayload>
  | ActionMeta<TPayload, TMeta>;
