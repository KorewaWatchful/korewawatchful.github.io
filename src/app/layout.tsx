import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gamid Muratbekov - Full-Stack Software Engineer",
  description:
    "Gamid Muratbekov, a full-stack engineer building performant apps, from low-level C++ systems to cross-platform mobile tools.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Gamid Muratbekov - Full-Stack Software Engineer",
    description:
      "Explore the portfolio of Gamid Muratbekov: developer of scalable platforms, open-source projects, and cross-platform apps.",
    url: "https://gamid.dev",
    siteName: "Gamid Muratbekov",
    images: [
      {
        url: "https://gamid.dev/og.png",
        width: 1200,
        height: 630,
        alt: "Gamid Muratbekov - Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gamid Muratbekov - Full-Stack Software Engineer",
    description:
      "Developer of high-performance systems and open-source projects.",
    images: ["https://gamid.dev/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
