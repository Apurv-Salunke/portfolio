import type { Metadata } from "next";
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
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
