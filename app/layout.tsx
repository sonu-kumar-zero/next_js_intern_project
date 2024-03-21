import type { Metadata } from "next";
import { Inter, Roboto, Poppins, Barlow } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ['500'] });
const poppins = Poppins({ subsets: ["devanagari"], weight: ['500'] });
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
