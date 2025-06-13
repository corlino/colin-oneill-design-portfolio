"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isOpen && (
                <nav className="absolute top-12 left-0 w-full bg-white shadow-md p-4 space-y-4 z-50">
                    <a href="#home" className="block text-lg">Home</a>
                    <a href="#about" className="block text-lg">About</a>
                    <a href="#projects" className="block text-lg">Projects</a>
                    <a href="#contact" className="block text-lg">Contact</a>
                </nav>
            )}
        </div>
    )
}
