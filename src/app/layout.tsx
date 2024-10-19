import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "John's Blog",
    template: "John's Blog | %s",
  },
  description: "프론트엔드 개발자 john의 블로그",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.className}>
      <body className={"flex flex-col w-full max-w-screen-2xl mx-auto"}>
        <Header />
        <main className={"grow "}> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
