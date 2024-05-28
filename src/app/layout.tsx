import LanguageProvider from "@/context/LanguageContext";
import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";

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
        <LanguageProvider>
          <Header />
          <main>{children}</main>
        </LanguageProvider>
        <Footer />
      </body>
    </html>
  );
}
