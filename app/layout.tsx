import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Ad from "@/components/Advertise/Ad";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const vazir = Vazirmatn({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazir.className}`}>
        <Ad />

        <main className=" mx-auto">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
