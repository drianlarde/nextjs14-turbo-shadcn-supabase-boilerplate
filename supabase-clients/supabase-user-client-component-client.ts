// https://supabase.com/docs/guides/auth/auth-helpers/nextjs-server-components#creating-a-supabase-client
'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

// apologies for the name, but it's the best I could come up with as
// the util exported from @supabase/auth-helpers-nextjs is called
// createClientComponentClient
export const supabaseUserClientComponentClient = createClientComponentClient({
    options: {
        global: {
            fetch,
        },
    },
});
