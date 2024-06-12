import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import type { ReactNode } from "react";
import Footer from "../../components/Footer";
import "./globals.css";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Catalogue",
  description: "Joun's web dev portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html>
      <body className={`${inconsolata.className} pr-2`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
