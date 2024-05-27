import type { Metadata } from "next";
import { Inconsolata, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Catalogue",
  description: "Joun's web dev portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>
        <Header />
        <main className="container mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
