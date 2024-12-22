import type { Metadata } from "next";
import "./globals.css";
import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Zencharge",
  description: "Zencharge-Web",
};

const tanpearl = localFont({
  src: "../public/fonts/tan-pearl.otf",
  variable: "--font-tanpearl",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${tanpearl.variable}`}>
      <body>
        <AppBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
