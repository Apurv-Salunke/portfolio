import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apurv Salunke | Digital Craftsman",
  description: "Building thoughtful digital solutions for businesses and individuals. Specializing in web development, AI integration, and innovative software solutions.",
  keywords: [
    "software developer",
    "digital craftsman",
    "web development",
    "AI solutions",
    "React developer",
    "Next.js",
    "full-stack developer",
    "Apurv Salunke"
  ],
  authors: [{ name: "Apurv Salunke", url: "https://github.com/Apurv-Salunke" }],
  creator: "Apurv Salunke",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://apurv-salunke.vercel.app",
    title: "Apurv Salunke | Digital Craftsman",
    description: "Building thoughtful digital solutions for businesses and individuals",
    siteName: "Apurv Salunke Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Apurv Salunke | Digital Craftsman",
    description: "Building thoughtful digital solutions for businesses and individuals",
    creator: "@salunke_apurv"
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        url: "/icon.svg",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/apple-touch-icon.png",
      },
      {
        rel: "android-chrome",
        sizes: "192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome",
        sizes: "512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
} 