import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import MobileMenuWrapper from "@/components/MobileMenuWrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Colin O'Neill - Designer",
    description:
        "UX/UI/Product Designer creating meaningful digital experiences through thoughtful design and user-centered research.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}