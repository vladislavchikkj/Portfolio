import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./globals.scss";

const sen = Sen({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "About me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sen.className}>{children}</body>
    </html>
  );
}
