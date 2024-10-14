import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

import users from "./user";

const guestBookEntries = pgTable("guestbook_entries", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),
});

export const guestBookEntriesRelation = relations(
  guestBookEntries,
  ({ one }) => ({
    user: one(users, {
      fields: [guestBookEntries.userId],
      references: [users.id],
    }),
  }),
);

export const insertGuestBookEntriesSchema = createInsertSchema(
  guestBookEntries,
).omit({
  userId: true,
  createdAt: true,
});

export default guestBookEntries;
