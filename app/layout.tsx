import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import MobileMenu from "@/components/MobileMenu"
import { useIsMobile } from "@/hooks/use-mobile"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Colin O'Neill - Designer",
    description:
        "UX/UI/Product Designer creating meaningful digital experiences through thoughtful design and user-centered research.",
    generator: 'v0.dev'
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const isMobile = useIsMobile()

    return (
        <html lang="en" className="scroll-smooth">
            <body className={inter.className}>
                {isMobile && <MobileMenu />}
                {children}
            </body>
        </html>
    )
}
