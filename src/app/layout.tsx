import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import StructuredData from "@/components/StructuredData";
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
  title: "Maxius - Modern Startup Solutions | Web Development & Consulting",
  description: "Innovative solutions for the modern startup ecosystem. Build, scale, and succeed with cutting-edge technology and expert guidance from Maxius.",
  keywords: ["startup solutions", "web development", "consulting", "technology", "scalable architecture"],
  authors: [{ name: "Maxius Team" }],
  creator: "Maxius",
  openGraph: {
    title: "Maxius - Modern Startup Solutions",
    description: "Innovative solutions for the modern startup ecosystem. Build, scale, and succeed with Maxius.",
    url: "https://maxius.io",
    siteName: "Maxius",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxius - Modern Startup Solutions",
    description: "Innovative solutions for the modern startup ecosystem.",
  },
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
