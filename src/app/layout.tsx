import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "sandrp.de",
    description: "Sandros Website",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
     return (
         <html lang="de">
         <body className={`${jetbrainsMono.className} antialiased selection:bg-[#bd4954] selection:text-black`}>
         {children}
         </body>
         </html>
     );
}