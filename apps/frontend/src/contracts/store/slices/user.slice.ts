/**
 * Slice of state pertaining to current user
 */
export type IUserSlice = {
  loading: boolean;
  logged: boolean;
  user: any;
  /**
   * UUID of client
   */
  uuid: string;
};
