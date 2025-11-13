import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Noto_Sans({
  weight: ['200'],
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const geistMono = Noto_Sans_Mono({
  weight: ['200'],
  variable: "--font-noto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Iqbal Nugraha | Portfolio",
  description: "Muhammad Iqbal Nugraha's website developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
