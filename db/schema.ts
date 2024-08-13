import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: text("name"),
  description: text("description"),
  url: varchar("url", { length: 2048 }),
});
