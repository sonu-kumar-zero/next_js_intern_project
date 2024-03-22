import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({ subsets: ["latin"], weight: ['500'] });

export const metadata: Metadata = {
  title: "Discussion Fourm",
  description: "A Website For People to see stories, post by other people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
