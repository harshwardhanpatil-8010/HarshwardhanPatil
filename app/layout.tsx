import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { Analytics } from '@/components/Analytics';
import { LazyLoad } from '@/components/ui/LazyLoad';
import { inter } from './fonts';

export const metadata: Metadata = {
  title: 'Harshwardhan Patil',
  description: ' Hi, I am a passionate developer with a focus on cloud computing, building scalable solutions. I work with both backend and frontend technologies to create maintainable applications optimized for the cloud, ensuring reliable deployment and management.',
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <LazyLoad>
            <Analytics />
          </LazyLoad>
        </ThemeProvider>
      </body>
    </html>
  );
}
