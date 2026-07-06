import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akash Anipakalu Giridhar | Solutions Engineer",
  description:
    "Solutions Engineer and builder: PathWise (live SaaS), BreezeML (open source ML library on PyPI), and research papers on AI and the future of presales.",
  metadataBase: new URL("https://www.akashanipakalugiridhar.com"),
  openGraph: {
    title: "Akash Anipakalu Giridhar | Solutions Engineer",
    description:
      "A live SaaS product, an open source ML library, and research papers with reproducible code.",
    type: "website",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
