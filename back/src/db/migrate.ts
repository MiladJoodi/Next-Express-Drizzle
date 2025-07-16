import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Pool } from "pg";

async function main() {
    try {

        console.log("migrating...")

        const pool = new Pool({ connectionString: process.env.POSTGRES_URL })
        const db: NodePgDatabase = drizzle(pool)
        await migrate(db, { migrationsFolder: './src/db/drizzle' })

        console.log("migrating done")

        // process.exit()
        await pool.end()
    } catch (e) {
        console.log(e)
    }
}

main()