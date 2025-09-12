import { configDotenv } from 'dotenv';

configDotenv();

export const databaseConfig = {
  connectionString: process.env.DATABASE_URL ?? '',
};
