import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import ApolloWrapper from "@/lib/ApolloWrapper";
import Footer from "@/components/Footer/Footer";

const myLocal = localFont({
  src: "./norwester.otf",
  variable: "--font-norwester",
});

export const metadata: Metadata = {
  title: "Wassp Multibeam",
  description: "Code test for the Web Guys",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myLocal.variable}>
        <ApolloWrapper>
          <Navbar />
          {children}
          <Footer />
        </ApolloWrapper>
      </body>
    </html>
  );
}
