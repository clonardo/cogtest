import { SomeAction } from '../../contracts/store';

/**
 * Check to see if an action is valid + has the provided string as a namespace,
 * between two brackets (e.g., `[Credentials] SHOW_LOGIN` when passing `Credentials` )
 */
export const hasTargetNamespace = (
  tgtNamespace: string,
  action: SomeAction
): boolean => {
  return (
    action && action.type && action.type.indexOf(`[${tgtNamespace}]`) != -1
  );
};

/**
 * Check to see if an action key (trimmed, after namespace is removed) matches the supplied argument
 * (e.g., `[Credentials] SHOW_LOGIN` should return true when passing `SHOW_LOGIN` )
 */
export const isTargetedCommand = (
  tgtCommand: string,
  action: SomeAction
): boolean => {
  if (action && action.type && tgtCommand) {
    const postSplit = action.type.split(']');
    if (postSplit && postSplit.length > 1) {
      return postSplit[1].trim().toLowerCase() == tgtCommand.toLowerCase();
    } else {
      return false;
    }
  } else {
    return false;
  }
};

/**
 * Check to see if an action is valid + has the provided string as a namespace,
 * between two brackets (e.g., `[Credentials] SHOW_LOGIN` when passing `Credentials` ),
 * and the provided command after the brackets (e.g., `SHOW_LOGIN`)
 *
 * @param tgtNamespace Namespace (ex. brackets) to try to match
 * @param tgtCommand Command to try to match
 * @param action Action to query against
 */
export const isTargetedNamespaceAndCommand = (
  tgtNamespace: string,
  tgtCommand: string,
  action: SomeAction
): boolean => {
  if (action && tgtNamespace && tgtCommand) {
    return (
      hasTargetNamespace(tgtNamespace, action) &&
      isTargetedCommand(tgtCommand, action)
    );
  } else {
    return false;
  }
};

/**
 * Extract a payload of type TPayload from an action, if provided. Else return null
 * @param action Action that should have payload
 */
export const extractPayload = <TPayload>(
  action: SomeAction<TPayload>
): TPayload | null => {
  if (action && action.payload) {
    return action.payload;
  } else {
    return null;
  }
};

/**
 * Create a namespaced action with optional payload and meta params
 *
 * @param actionNamespace key to coerce to uppercase + enclose in brackets
 * @param actionCommand key to coerce to uppercase + add after namespace in types
 * @param payload optional payload
 * @param meta optional meta obj
 */
export const createActionWithNamespace = <TPayload = any, TMeta = any>(
  actionNamespace: string,
  actionCommand: string,
  payload?: TPayload,
  meta?: TMeta
): SomeAction<TPayload, TMeta> => {
  const cleanPayload = payload != undefined ? { payload: payload } : {};
  const cleanMeta = meta != undefined ? { meta: meta } : {};
  const cleanType = `[${actionNamespace.toUpperCase()}] ${actionCommand.toUpperCase()}`;
  return ({
    ...{ type: cleanType },
    ...cleanPayload,
    ...cleanMeta,
  } as any) as SomeAction<TPayload, TMeta>;
};
