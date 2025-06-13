"use client"

import MobileMenu from "./MobileMenu"
import { useIsMobile } from "@/hooks/use-mobile"

export default function MobileMenuWrapper() {
    const isMobile = useIsMobile()
    console.log("MobileMenuWrapper rendering; isMobile =", isMobile)
    if (!isMobile) return null
    return <MobileMenu />
}
