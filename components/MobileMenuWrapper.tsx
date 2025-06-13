"use client"

import MobileMenu from "./MobileMenu"
import { useIsMobile } from "@/hooks/use-mobile"

const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const handleLinkClick = () => setMobileMenuOpen(false);

export default function MobileMenuWrapper() {
    const isMobile = useIsMobile()
    console.log("MobileMenuWrapper rendering; isMobile =", isMobile)
    if (!isMobile) return null
    return <MobileMenu />
}
