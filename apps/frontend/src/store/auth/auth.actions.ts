export const LOGIN_START = '@AUTH/LOGIN_START';
export const LOGIN_END = '@AUTH/LOGIN_END';
export const LOGOUT_START = '@AUTH/LOGOUT_START';
export const LOGOUT_END = '@AUTH/LOGOUT_END';

export const loginStart = () => ({
  type: LOGIN_START,
});

/**
 * On successful login, set the JWT
 * 
 * @param jwt JWT as string
 */
export const loginEnd = (jwt:string) => ({
  type: LOGIN_END,
  payload: jwt
});

export const logoutStart = () => ({
  type: LOGOUT_START,
});

export const logoutEnd = () => ({
  type: LOGOUT_END,
});
