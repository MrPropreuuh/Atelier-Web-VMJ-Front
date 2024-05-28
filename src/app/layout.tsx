"use client";

import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>L'Artelier</title>
        <meta name="description" content="S’offrir de l’art devient simple" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-background text-foreground flex flex-col`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
