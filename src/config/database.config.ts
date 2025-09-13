import { drizzle } from 'drizzle-orm/node-postgres';
import { databaseConfig } from './config.js';

export function getDbConnection() {
  const db = drizzle(databaseConfig.connectionString);
  return db;
}
