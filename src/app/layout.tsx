import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creative Portfolio | Software Developer",
  description: "A minimalist portfolio showcasing software development projects and experience",
  keywords: ["software developer", "portfolio", "projects", "experience", "skills"],
  authors: [{ name: "Software Developer" }],
  creator: "Software Developer",
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
