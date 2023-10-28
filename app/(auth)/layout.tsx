import { PropsWithChildren } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "../globals.css";
import { dark } from "@clerk/themes";

export const metadata = {
    title: "Threads",
    description: "A Next.js 14 Meta Threads Application",
};

const inter = Inter({ subsets: ["latin"]});

export default function RootLayout({ children }: PropsWithChildren ) {
    return (
        <ClerkProvider
            appearance={{
                baseTheme: dark,
            }}
        >
            <html lang='en'>
            <body className={`${inter.className} bg-dark-1`}>{children}</body>
            </html>
        </ClerkProvider>
    );
}
