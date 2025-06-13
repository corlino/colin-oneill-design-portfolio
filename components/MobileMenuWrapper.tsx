"use client"

import MobileMenu from "./MobileMenu"
import { useIsMobile } from "@/hooks/use-mobile"

export default function MobileMenuWrapper() {
    const isMobile = useIsMobile()

    if (!isMobile) return null
    return <MobileMenu />
}
