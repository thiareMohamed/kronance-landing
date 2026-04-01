import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kronance.vercel.app"),
  title: {
    default: "Kronance | Build, Secure, Deploy and Scale",
    template: "%s | Kronance",
  },
  description:
    "Kronance is the all-in-one platform for modern development, DevOps, DevSecOps and AI-powered delivery.",
  keywords: [
    "Kronance",
    "DevOps",
    "DevSecOps",
    "AI APIs",
    "Cloud platform",
    "Developer platform",
    "Next.js SaaS landing page",
  ],
  openGraph: {
    title: "Kronance Platform",
    description:
      "Build, secure, deploy and scale globally on a unified platform.",
    type: "website",
    url: "https://kronance.vercel.app",
    siteName: "Kronance",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kronance Platform",
    description:
      "All-in-one platform for development, DevOps, DevSecOps and AI.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
