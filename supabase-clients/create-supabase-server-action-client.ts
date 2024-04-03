'use server';

import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export const createSupabaseServerActionClient = () =>
    createServerActionClient(
        {
            cookies,
        },
        {
            options: {
                global: {
                    fetch,
                },
            },
        },
    );
