"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="md:hidden relative z-50">
      <button onClick={toggleMenu} className="p-2 z-50 relative">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <nav className="absolute top-12 right-0 w-screen bg-white shadow-md p-4 space-y-4 z-40">
                  <a href="#work" className="text-gray-600 hover:text-gray-900 transition-colors">Work</a>
                  <a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors">Skills</a>
                  <a href="#about me" className="text-gray-600 hover:text-gray-900 transition-colors">About Me</a>
                  <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
        </nav>
      )}
    </div>
  )
}
