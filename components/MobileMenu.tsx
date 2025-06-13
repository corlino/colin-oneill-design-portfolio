"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <div className="md:hidden fixed top-4 right-4 z-50">
            <button onClick={toggleMenu} className="p-2">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isOpen && (
                <nav className="absolute top-12 right-0 w-48 bg-white shadow-lg rounded p-4 space-y-4">
                    <a href="#work" className="block text-lg">Work</a>
                    <a href="#skills" className="block text-lg">Skills</a>
                    <a href="#about me" className="block text-lg">About Me</a>
                    <a href="#contact" className="block text-lg">Contact</a>
                </nav>
            )}
        </div>
    )
}


     