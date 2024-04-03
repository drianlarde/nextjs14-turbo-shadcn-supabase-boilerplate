'use server';

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export const createSupabaseServerComponentClient = () =>
    createServerComponentClient(
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
