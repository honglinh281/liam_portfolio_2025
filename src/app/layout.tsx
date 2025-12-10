import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/shared/CustomCursor";
import Navigation from "@/components/shared/Navigation";
import Preloader from "@/components/shared/Preloader";
import BackToTop from "@/components/shared/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Liam",
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
        <Preloader />
        <BackToTop />
        <CustomCursor />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
