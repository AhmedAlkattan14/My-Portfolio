import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora, Unbounded } from "next/font/google";
import "./globals.css";
import Nav from "./Nav";

import LoaderWrapper from "./LoaderWrapper";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmedalkattan14.github.io"),
  title: {
    default: "Ahmed Alkattan - Frontend Developer & UI Designer",
    template: "%s | Ahmed Alkattan Portfolio"
  },
  description: "Passionate Frontend Developer specializing in React, Next.js, and modern web technologies. Creating elegant, responsive, and user-friendly web interfaces with clean code.",
  keywords: [
    "Ahmed Alkattan",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "UI Designer",
    "Web Developer",
    "JavaScript",
    "TypeScript",
    "Portfolio"
  ],
  authors: [{ name: "Ahmed Alkattan" }],
  creator: "Ahmed Alkattan",
  publisher: "Ahmed Alkattan",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahmedalkattan.dev",
    title: "Ahmed Alkattan - Frontend Developer & UI Designer",
    description: "Passionate Frontend Developer specializing in React, Next.js, and modern web technologies.",
    siteName: "Ahmed Alkattan Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ahmed Alkattan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Alkattan - Frontend Developer & UI Designer",
    description: "Passionate Frontend Developer specializing in React, Next.js, and modern web technologies.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://ahmedalkattan.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ahmed Alkattan",
    "jobTitle": "Frontend Developer",
    "description": "Passionate Frontend Developer specializing in React, Next.js, and modern web technologies",
    "url": "https://ahmedalkattan.dev",
    "sameAs": [
      "https://github.com/AhmedAlkattan14cx",
      "https://www.linkedin.com/in/ahmed-alkattan/",
      "https://www.facebook.com/profile.php?id=100006087603110",
      "https://www.instagram.com/ahmed_elqattan/"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "UI Design",
      "Frontend Development"
    ],
    "alumniOf": "Software Engineering",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fc4100" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Ahmed Alkattan" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} ${unbounded.variable} font-sans`}
      >
        <Nav />
        <LoaderWrapper>
          <main id="main-content" className="pt-12 sm:pt-14 md:pt-16 lg:pt-18">
            {children}
          </main>
        </LoaderWrapper>

      </body>
    </html>
  );
}

