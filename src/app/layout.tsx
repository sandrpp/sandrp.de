import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "sandrp.de | Terminal",
    description: "Sandros Portfolio",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="de">
        <body className={`${jetbrainsMono.className} antialiased selection:bg-[#169C9C] selection:text-black`}>
        {children}
        </body>
        </html>
    );
}