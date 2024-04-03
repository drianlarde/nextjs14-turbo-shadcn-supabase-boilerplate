'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedCursor from 'react-animated-cursor';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-[#FAFAFA]">
            <AnimatedCursor
                innerSize={10}
                outerSize={30}
                color="250, 204, 21"
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={2}
            />
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="mb-4 text-center text-4xl font-bold text-zinc-700"
            >
                NextJS 14 (App Router) Boilerplate
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="mb-6 max-w-md text-center text-gray-600"
            >
                This includes: TailwindCSS, ui/shadcn, NextJS 14 Server Actions
                + API Route Handlers, Supabase Client.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                className="mb-8 text-xl font-semibold text-yellow-500"
            >
                Happy Hacking!
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                className="mb-8"
            >
                <Button className="rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-zinc-700 transition-colors duration-300 hover:bg-yellow-500 hover:text-zinc-800">
                    <a
                        href="https://github.com/your-repo"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View on GitHub
                    </a>
                </Button>
            </motion.div>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
                className="text-sm text-gray-500"
            >
                Made by Abelarde, Adrian Angelo and Dzelle Faith Tan (GDSC PLM -
                Web Development Leads)
            </motion.p>
        </main>
    );
}
