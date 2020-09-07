export const USER_RESET = '@USER/RESET';
export const USER_FETCH_SUCCESS = '@USER/FETCH_SUCCESS';
export const USER_FETCH_START = '@USER/FETCH_START';
export const USER_FETCH_END = '@USER/FETCH_END';
export const USER_FETCH_ERROR = '@USER/FETCH_ERROR';
export const USER_SET_UUID = '@USER/SET_UUID';

export const userReset = () => ({
  type: USER_RESET,
});

export const userFetchStart = () => ({
  type: USER_FETCH_START,
});

export const userFetchEnd = () => ({
  type: USER_FETCH_END,
});

export const userFetchError = () => ({
  type: USER_FETCH_ERROR,
});

export const userFetchSuccess = (data) => ({
  type: USER_FETCH_SUCCESS,
  payload: data,
});

/**
 * Set a unique ID for the client
 *
 * @param data UUID to set
 */
export const userSetUuid = (data: string) => ({
  type: USER_SET_UUID,
  payload: data,
});
