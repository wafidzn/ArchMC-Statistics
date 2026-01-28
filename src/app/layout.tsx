import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import { embedConfig } from "@/config/embed";
import "./globals.css";

export const metadata: Metadata = {
  title: embedConfig.homepage.title,
  description: embedConfig.homepage.description,
  keywords: embedConfig.seo.keywords,
  authors: [{ name: embedConfig.seo.author }],
  creator: embedConfig.seo.author,
  publisher: embedConfig.siteName,
  
  // OpenGraph
  openGraph: {
    title: embedConfig.homepage.title,
    description: embedConfig.homepage.description,
    url: embedConfig.siteUrl,
    siteName: embedConfig.siteName,
    images: [
      {
        url: embedConfig.homepage.image,
        width: 1200,
        height: 630,
        alt: embedConfig.homepage.imageAlt,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: embedConfig.homepage.title,
    description: embedConfig.homepage.description,
    images: [embedConfig.homepage.image],
    creator: embedConfig.social.twitter,
  },
  
  // Additional meta tags
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
  
  // Verification codes from config
  verification: {
    ...(embedConfig.verification.google && { google: embedConfig.verification.google }),
    ...(embedConfig.verification.bing || embedConfig.verification.yandex ? {
      other: {
        ...(embedConfig.verification.bing && { "msvalidate.01": embedConfig.verification.bing }),
        ...(embedConfig.verification.yandex && { "yandex-verification": embedConfig.verification.yandex }),
      }
    } : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#FF7B00" />
        <link rel="stylesheet" href="https://use.typekit.net/YOUR_KIT_ID.css" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="font-effra antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
