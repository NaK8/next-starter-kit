import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";

import { env } from "@/env/server";

import * as schema from "./schema/index";

config({ path: ".env" });

const sql = neon(env.DATABASE_URL);
export const db = drizzle(sql, {
  schema,
});
