"use client";

import { Geist, Geist_Mono, Ubuntu } from "next/font/google";
import "./globals.css";
import NetworkCanvas from "@/components/NetworkCanvas";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  weight: "400",
  variable: "--font-ubuntu",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${ubuntu.variable} antialiased`}>
        <NetworkCanvas />
        {children}
      </body>
    </html>
  );
}
