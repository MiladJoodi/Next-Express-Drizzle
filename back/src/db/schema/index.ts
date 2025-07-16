import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";


export const posts = pgTable('posts', {
    id: uuid('id').defaultRandom().primaryKey(),
    title: varchar('title', {length: 255}).notNull(),
    content: varchar('content', {length: 255}).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
})


export type Post = InferSelectModel<typeof posts>
export type NewPost = InferInsertModel<typeof posts>

export const upsertPostSchema = createInsertSchema(posts)