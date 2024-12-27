import type { Metadata } from "next";
import { Bebas_Neue } from "@next/font/google";
import "./globals.css";
import ClientLayout from "./client.layout";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
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
      <head>
        <link rel="icon" href="app/favicon.ico" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
