import type { Metadata } from "next";
import { Montserrat, Oxanium } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev Stage",
};

const oxanium = Oxanium({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-oxanium",
});

const montserraat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oxanium.variable} ${montserraat.variable}`}>
      <body className="bg-gray-900 text-gray-100 antialiased bg-[url(/Background.svg)] bg-no-repeat bg-top md:bg-right-top">
        {children}
      </body>
    </html>
  );
}
