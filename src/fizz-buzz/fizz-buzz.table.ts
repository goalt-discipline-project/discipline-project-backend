import { pgTable, text, varchar } from 'drizzle-orm/pg-core';
import { ulid } from 'ulid';

export const fizzBuzzTable = pgTable('fizz-buzz', {
  id: text().primaryKey().$defaultFn(ulid),
  fizz: varchar({ length: 255 }).notNull(),
  buzz: varchar({ length: 255 }).notNull(),
});
