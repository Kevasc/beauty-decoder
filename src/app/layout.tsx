import type { Metadata } from "next";
import { Bebas_Neue } from "@next/font/google";
import "./globals.css";

// Load the Google Font with specific configurations
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"], // Only using the 400 weight
});

export const metadata: Metadata = {
  title: "Skincare",
  description: "A tool to find the right skincare for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bebasNeue.className}>
      <head />
      <body>{children}</body>
    </html>
  );
}
