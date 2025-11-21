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
  title: "Jose Ramirez | Portfolio Site",
  description:
    "Personal portfolio showcasing my development work and projects.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[var(--background)] text-[var(--foreground)]">
      <head />

      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          bg-[var(--background)]
          text-[var(--foreground)]
        `}
      >
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        {children}
      </body>
    </html>
  );
}
