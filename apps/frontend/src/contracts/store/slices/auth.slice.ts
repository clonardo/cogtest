/**
 * Slice of state pertaining to current authentication state
 */
export type IAuthSlice = {
  loading: boolean;
  /**
   * JWT, persisted client-side
   */
  jwt: string;
};
