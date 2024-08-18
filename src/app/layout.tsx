import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import ParallaxComponentServer from "@/components/ParallaxComponent/ParallaxComponentServer";
import {StoreProvider} from "@/redux/StoreProvider";
import {FooterComponent} from "@/components/FooterComponent/FooterComponent";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Movie",
    description: "Created by Volodymyr Fylypiv ",
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <StoreProvider>
            <html lang="en">
            <body className={inter.className}>
            <HeaderComponent/>
            <ParallaxComponentServer/>
            {children}
            <FooterComponent/>
            </body>
            </html>
        </StoreProvider>
    );
}
