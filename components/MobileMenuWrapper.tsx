"use client"

import { useIsMobile } from "@/hooks/use-mobile"
import MobileMenu from "@/components/MobileMenu"

export default function MobileMenuWrapper() {
    const isMobile = useIsMobile()

    if (!isMobile) return null

    return <MobileMenu />
}
