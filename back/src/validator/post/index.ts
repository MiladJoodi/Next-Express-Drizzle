import { upsertPostSchema } from "../../db/schema"

export const postValidator = {
    upsert: <T>(body: T) => upsertPostSchema.parse(body)
}