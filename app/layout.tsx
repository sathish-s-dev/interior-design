import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/ui/navigation";
import Head from "next/head";
import Footer from "@/components/ui/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Interior Designer",
  description: "Interior Designer by Krutik Maru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <body className={`${inter.className} antialiased bg-black `}>
        <Navigation />
        <div className="w-full max-w-[1900px] mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
