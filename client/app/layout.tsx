'use client';

import './globals.css';
import { Poppins } from 'next/font/google';
import { Josefin_Sans } from 'next/font/google';
import { ReactNode } from 'react';
import { ThemeProvider } from './utils/theme-provider';
import { Toaster } from 'react-hot-toast';
import { Providers } from './Provider';
import { SessionProvider } from 'next-auth/react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-Poppins',
});

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-Josefin',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='eng'>
      <body
        className={`${poppins.variable} ${josefin.variable} !bg-white bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300 `}
      >
        <Providers>
          <SessionProvider>
            <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
              {children}
              <Toaster position='top-center' reverseOrder={false} />
            </ThemeProvider>
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}
