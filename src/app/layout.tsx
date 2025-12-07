import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/shared/CustomCursor";
import Navigation from "@/components/shared/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Liam Portfolio 2025",
  description: "Portfolio of Vũ Hồng Linh - Business Analyst & UI/UX Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased bg-white text-black selection:bg-black selection:text-white overflow-x-hidden`}
      >
        <CustomCursor />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
