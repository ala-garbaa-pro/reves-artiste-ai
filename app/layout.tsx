import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const SS3 = Source_Sans_3({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ss3'
});

export const metadata: Metadata = {
  title: "Rêve Artiste AI",
  description: "Create with your words, live like an artist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: '#624cf5' }
    }}>
      <html lang="en">
        <body className={cn("font-SS3 antialiased", SS3.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
