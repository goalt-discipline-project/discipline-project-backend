import { drizzle } from 'drizzle-orm/node-postgres';
import { databaseConfig } from '../config.js';

export function getConnection() {
  const db = drizzle(databaseConfig.connectionString);
  return db;
}
