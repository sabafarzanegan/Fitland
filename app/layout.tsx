import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Fitland",
  description: "sport shop",
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
      <body className={`${vazir.className}  `}>
        {/* <Ad /> */}
        <main className="h-full mx-auto max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-[1900px]">
          <Header />
          <div className=" h-full">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
