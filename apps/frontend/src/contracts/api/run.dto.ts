/**
 * Object representing a whole run.
 * There will be multiple results per run.
 */
export interface IRunDto {
    /**
     * Distinct client ID
     */
    clientId: string;
    /**
     * Distinct run ID
     */
    runId:string;
    /**
     * "Created At" time
     */
    createdAt: string;
  }
  