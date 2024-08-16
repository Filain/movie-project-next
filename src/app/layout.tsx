import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import ParallaxComponentServer from "@/components/ParallaxComponent/ParallaxComponentServer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie",
  description: "Created by Volodymyr Fylypiv ",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
      <HeaderComponent/>
      {/*<ParallaxComponentServer/>*/}
      {children}

      </body>
    </html>
  );
}
