"use client"

import { Menu, X } from "lucide-react"

interface MobileMenuProps {
    isOpen: boolean
    setIsOpen: (open: boolean) => void
    onLinkClick: () => void
}

export default function MobileMenu({ isOpen, setIsOpen, onLinkClick }: MobileMenuProps) {
    return (
        <div className="md:hidden relative z-50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 z-50 relative"
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isOpen && (
                <nav className="fixed top-[72px] left-0 right-0 w-full p-4 space-y-4 z-60 text-right rounded-md backdrop-blur-md bg-white/80 shadow-sm">
                    <div className="max-w-6xl mx-auto px-6">
                        <a
                            href="#work"
                            onClick={() => {
                                onLinkClick()
                                setIsOpen(false)
                            }}
                            className="block text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Work
            </a>
                        <a
                            href="#skills"
                            onClick={() => {
                                onLinkClick()
                                setIsOpen(false)
                            }}
                            className="block text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Skills
            </a>
                        <a
                            href="#about me"
                            onClick={() => {
                                onLinkClick()
                                setIsOpen(false)
                            }}
                            className="block text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            About Me
            </a>
                        <a
                            href="#contact"
                            onClick={() => {
                                onLinkClick()
                                setIsOpen(false)
                            }}
                            className="block text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Contact
            </a>
                    </div>
                </nav>
            )}
        </div>
    )
}
