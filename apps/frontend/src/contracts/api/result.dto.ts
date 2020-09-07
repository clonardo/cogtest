/**
 * Result object for a single Result entity.
 * There will be multiple results per run.
 */
export interface IResultDto {
  /**
   * Distinct result ID
   */
  _id: string;
  /**
   * Distinct client ID
   */
  clientId: string;
  /**
   * "Created At" time
   */
  createdAt: string;
}
