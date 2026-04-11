import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mykhailo Trunov — Senior Front-end Engineer",
  description: "Minimalist personal portfolio for Mykhailo Trunov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen font-mono antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
