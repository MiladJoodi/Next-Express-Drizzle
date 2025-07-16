import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";
import "dotenv/config";


const pool = new Pool({
    port: 5432,
    host: "localhost",
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
});

export const db:NodePgDatabase<typeof schema> = drizzle(pool, {schema})