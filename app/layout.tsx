import type { Metadata } from "next";
import "./globals.css";
import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Zencharge",
  description: "Zencharge-Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
