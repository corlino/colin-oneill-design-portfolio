import type React from "react";
import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";

import "./globals.css";
import ProtectedLayout from "./protectedlayout";

// Load Albert Sans
const albertSans = Albert_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"], // adjust weights as needed
    display: "swap",
    variable: "--font-albert-sans", // exposes as CSS variable
});

export const metadata: Metadata = {
    title: "Colin O'Neill - Designer",
    description:
        "UX/UI/Product Designer creating meaningful digital experiences through thoughtful design and user-centered research.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${albertSans.variable} scroll-smooth`}>
            <body className="font-sans">
                <ProtectedLayout>{children}</ProtectedLayout>
            </body>
        </html>
    );
}
