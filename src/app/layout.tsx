import type { Metadata } from "next";
import { Bebas_Neue } from "@next/font/google";
import "./globals.css";
import ClientLayout from "./client.layout";

// Load the Google Font with specific configurations
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"], // Only using the 400 weight
});

export const metadata: Metadata = {
  title: "Beauty Decoder",
  description: "A tool to find the right beauty products for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bebasNeue.className}>
      <head />

      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
