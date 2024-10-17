import localFont from "next/font/local";
import { Syne, Poppins } from "next/font/google";

import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Home | Md Sakib Hossen",
  description: "I am a Full Stack Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-[300]`} suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
