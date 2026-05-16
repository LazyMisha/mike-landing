import type { Metadata, Viewport } from 'next';
import { Suspense } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Mykhailo Trunov — Senior Front-end Engineer',
    template: '%s | Mykhailo Trunov',
  },
  description: 'Minimalist personal portfolio for Mykhailo Trunov',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col font-mono antialiased">
        <ThemeProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
          <Suspense fallback={null}>
            <ScrollToTop />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
