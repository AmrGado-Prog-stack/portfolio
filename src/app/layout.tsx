import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amr Gado | Front-End Engineer",
  description:
    "Amr Gado is a Front-End Engineer specializing in React, Next.js, TypeScript and modern web applications.",
  openGraph: {
    title: "Amr Gado | Front-End Engineer",
    description:
      "Amr Gado is a Front-End Engineer specializing in React, Next.js, TypeScript and modern web applications.",
    url: "https://amrgado.com",
    siteName: "Amr Gado Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amr Gado | Front-End Engineer",
    description:
      "Amr Gado is a Front-End Engineer specializing in React, Next.js, TypeScript and modern web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <div className="h-16" />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
