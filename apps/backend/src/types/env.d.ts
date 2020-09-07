declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'test' | 'prod' | 'dev';

    /**
     * DB hostname/URL
     */
    APP_PG_URL: string;
    /**
     * DB port number
     */
    APP_PG_PORT: number;
    /**
     * DB username
     */
    APP_PG_USER: string;
    /**
     * DB password
     */
    APP_PG_PW: string;
    /**
     * DB name
     */
    APP_PG_DB: string;

    /**
     * DigitalOcean Storage Spaces: API Key
     */
    DO_STORAGE_KEY: string;
    /**
     * DigitalOcean Storage Spaces: Client Secret
     */
    DO_STORAGE_SECRET: string;
    /**
     * DigitalOcean Storage Spaces: Region + domain- e.g., nyc3.digitaloceanspaces.com
     */
    DO_STORAGE_ENDPOINT: string;
    /**
     * DigitalOcean Storage Spaces: bucket name (e.g., cl-cogtests)
     */
    DO_STORAGE_BUCKET: string;

    /**
     * JWT secret key
     */
    JWT_SECRET:string;
  }
}
