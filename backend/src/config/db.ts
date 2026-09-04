import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn("⚠️ SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing in .env");
}

// We use the service_role key because this backend acts as an admin layer
export const supabase = createClient(supabaseUrl || "", supabaseKey || "", {
  auth: { persistSession: false }
});

// For index.ts compatibility (removing the mongoose connect function)
export default () => {
  if (supabaseUrl && supabaseKey) {
    console.log("Supabase client initialized.");
  }
};
