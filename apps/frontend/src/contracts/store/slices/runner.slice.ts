import { ITaskConfig, ISection } from '@cogtest/shared-utils';

/**
 * Slice of state showing runner config
 */
export type IRunnerSlice = {
  loading: boolean;
  /**
   * Message (error or otherwise)
   */
  message: string;
  /**
   * Video preload URLs
   */
  preloadUrls: string[];

  /**
   * Array of all sections
   */
  sections: ISection[];
};
