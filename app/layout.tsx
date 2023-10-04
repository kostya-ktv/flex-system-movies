import { fontsToConnect } from '@/styles/fonts';
import './globals.css';
import type { Metadata } from 'next';
import { MainLayout } from '@/components/shared';
import AppProviders from '@/providers';

export const metadata: Metadata = {
  title: 'Flex Dynamic Movies',
  description: 'Best movies platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fontsToConnect}`}>
        <AppProviders>
          <MainLayout>{children}</MainLayout>
        </AppProviders>
      </body>
    </html>
  );
}
