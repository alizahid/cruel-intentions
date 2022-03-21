declare namespace NodeJS {
  export interface ProcessEnv {
    UPSTASH_URL: string

    BLIZZARD_CLIENT_ID: string
    BLIZZARD_CLIENT_SECRET: string

    REFETCH_SECRET: string
  }
}
