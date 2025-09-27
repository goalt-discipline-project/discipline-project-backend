import { configDotenv } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

configDotenv();

export default defineConfig({
  dialect: 'postgresql',
  out: './drizzle',
  schema: ['./src/fizz-buzz/fizz-buzz.table.ts'],
  dbCredentials: {
    url: process.env.DATABASE_URL ?? '',
  },
});
