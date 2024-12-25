

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { useState, useEffect } from 'react';

export const metadata: Metadata = {
  title: 'Harshwardhan Patil',
  description: ' Hi, I am a passionate developer with a focus on cloud computing, building scalable solutions. I work with both backend and frontend technologies to create maintainable applications optimized for the cloud, ensuring reliable deployment and management.',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
