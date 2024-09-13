import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
	throw new Error('supabaseUrl and supabaseKey are required.');
}

const supabaseClient = createClient(supabaseUrl, supabaseKey);
// session management
// const clientSupabase = createClientComponentClient();
// const serverSupabase = createServerComponentClient();

// export { clientSupabase, serverSupabase };
export default supabaseClient;
