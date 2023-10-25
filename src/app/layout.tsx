import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Easy Language",
  description: "A language learning app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} bg-[#131516] text-gray-300`}>
      <body className="max-w-7xl mx-auto h-full">
        <Navbar />
        <div className="pt-12">{children}</div>
      </body>
    </html>
  );
}
