import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://enterprise.accredian.com"),
  title: "Accredian Enterprise — India's #1 Corporate Learning Platform",
  description:
    "Partner with IITs, IIMs, and global universities to upskill your workforce at scale. 200+ enterprise clients, 50K+ learners, 98% satisfaction. Get a free demo today.",
  keywords: [
    "enterprise learning",
    "corporate training",
    "L&D platform",
    "IIT programs",
    "IIM courses",
    "upskilling",
    "workforce development",
    "Accredian",
  ],
  authors: [{ name: "Accredian" }],
  creator: "Accredian",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://enterprise.accredian.com",
    title: "Accredian Enterprise — Build the Skills Your Enterprise Needs",
    description:
      "India's most trusted enterprise learning platform. 200+ clients, 50K+ learners, programs from IITs & IIMs. Schedule a free demo.",
    siteName: "Accredian Enterprise",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Accredian Enterprise — Corporate Learning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accredian Enterprise — Build the Skills Your Enterprise Needs",
    description:
      "India's most trusted enterprise learning platform. 200+ clients, 50K+ learners, programs from IITs & IIMs.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-inter antialiased`}>{children}</body>
    </html>
  );
}
