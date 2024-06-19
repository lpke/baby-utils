'use client';

import { useState } from 'react';
import { AppContextProvider } from '@/utils/context';

/**
 * Client component for wrapping the app in providers/context that require client-only code.
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <AppContextProvider value={{ darkMode, setDarkMode }} deps={[darkMode]}>
      <div className={darkMode ? 'dark' : 'light'}>
        <main className="min-h-[100svh] w-full bg-gray-200 text-lg text-gray-950 transition-colors selection:bg-teal-300 dark:bg-gray-800 dark:text-gray-100 dark:selection:bg-teal-600">
          {children}
        </main>
      </div>
    </AppContextProvider>
  );
}
