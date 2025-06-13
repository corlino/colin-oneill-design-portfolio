"use client"

import React from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import MobileMenu from "./MobileMenu"

export default function MobileMenuWrapper() {
    const isMobile = useIsMobile()

    return <>{isMobile && <MobileMenu />}</>
}
