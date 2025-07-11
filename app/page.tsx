"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowDown, ExternalLink } from "lucide-react";



import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import MobileMenu from "@/components/MobileMenu"
import { useState } from "react";

const projects = [
  {
    id: "calexis-app",
    title: "Calexis Chatbot",
    description: "A comprehensive financial management app with intuitive budgeting tools and investment tracking.",
    image: "/calexis-mockup.png?height=400&width=600",
    tags: ["Chatbot", "AI LLM", "Machine Learning Tool"],
    year: "2024",
  },
  {
    id: "psls-platform",
    title: "Patient Safety Learning System Platform",
    description: "Patient management system designed for healthcare professionals with focus on accessibility.",
    image: "/placeholder.svg?height=400&width=600",
      tags: ["Tailwind", "Healthcare", "Web Design", "Data Visualization"],
    year: "2023",
  },
  {
    id: "aap-uikit",
    title: "Advance Analytics Platform UI Kit",
    description: "Complete redesign of an online marketplace focusing on conversion optimization.",
    image: "/placeholder.svg?height=400&width=600",
      tags: ["Figma", "Power BI", "UI Chart Kit", "Data Visualization"],
    year: "2023",
  },
  {
    id: "beam-buddy",
    title: "Beam Buddy",
    description: "Enterprise software platform with complex workflows simplified through thoughtful UX design.",
    image: "/placeholder.svg?height=400&width=600",
      tags: ["Product Design", "Flashlight", "3D Design", "UX Research"],
    year: "2024",
  },
]

const skills = [
  "User Experience Design",
  "User Interface Design",
  "User Research",
  "Prototyping",
  "Wireframing",
  "Design Systems",
  "Usability Testing",
  "Information Architecture",
  "Interaction Design",
  "Visual Design",
  "Figma",
  "Sketch",
  "Adobe Creative Suite",
  "Principle",
  "InVision",
  "Miro",
]

export default function HomePage() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center space-x-3 transform transition-transform duration-200 hover:scale-110">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src="/Logo.png?height=32&width=32"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-medium text-gray-900">Colin O'Neill</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
                            <Link href="#work" className="block text-gray-600 hover:text-gray-900 text-base transform transition-transform duration-200 hover:scale-110 hover:font-medium">
                Work
              </Link>
                            <Link href="#skills" className="block text-gray-600 hover:text-gray-900 text-base transform transition-transform duration-200 hover:scale-110 hover:font-medium">
                Skills
              </Link>
                            <Link href="#about me" className="block text-gray-600 hover:text-gray-900 text-base transform transition-transform duration-200 hover:scale-110 hover:font-medium">
                              About Me
              </Link>
                            <Link href="#contact" className="block text-gray-600 hover:text-gray-900 text-base transform transition-transform duration-200 hover:scale-110 hover:font-medium">
                Contact
              </Link>
            </div>
                        <div className="md:hidden">
                            <MobileMenu
                                isOpen={mobileMenuOpen}
                                setIsOpen={setMobileMenuOpen}
                                onLinkClick={handleLinkClick}
                            />
                        </div>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-8">
            <Image
              src="/portrait.jpg?height=128&width=128"
              alt="Colin O'Neill"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 leading-tight">UX/UI/Product Designer</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            My name is Colin, I create meaningful digital experiences through thoughtful design and user-centered research.
          </p>
          <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800">
            <Link href="#work">
                            View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

     

      {/* Projects Section */}
            <section id="work" className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto space-y-20">
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-16 text-center">My Work</h2>
                    {projects.map((project, index) => (
                        <article key={project.id} className="group">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                         
                                {/* Text Content */}
                                <div className={`${index % 2 === 1 ? "md:order-2" : "md:order-1"} space-y-6`}>
                                    <h3 className="text-2xl md:text-3xl font-light text-gray-900 group-hover:text-gray-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                                        <span>{project.year}</span>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
                                    <Link
                                        href={`/projects/${project.id}`}
                                        className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transform hover:scale-110 transition-transform duration-200 px-3 py-2 rounded-md"
                                    >
                                        View Case Study
              <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>

                                {/* Image */}
                                <div className={`${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                                    <Link href={`/projects/${project.id}`}>
                                        <div className="aspect-[3/2] overflow-hidden rounded-lg bg-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                                            <Image
                                                src={project.image || "/placeholder.svg"}
                                                alt={project.title}
                                                width={600}
                                                height={400}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </Link>
                                </div>

                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-16 text-center">Skills & Expertise</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <div key={index} className="text-center">
                                <span className="text-gray-700 text-sm md:text-base">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


          {/* Bio Section */}
          <section id="about me" className="py-20 px-6 bg-gray-50">
              <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-16 text-center">About Me</h2>
                  <p className="text-sm md:text-base text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"> 
                      I am a 24 year old designer with experience working on various analytics tools and products. I work closely with cross-functional teams to deliver scalable solutions that improve decision-making across organizations.
          </p>
                  <p className="text-sm md:text-base text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                      Outside of work I enjoy creating personal 3D projects, listening to new music, and playing recreational volleyball.
          </p>
              </div>
          </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">Let's Work Together</h2>
          <p className="text-gray-600 text-lg mb-12 leading-relaxed">
            I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
            discuss a project.
          </p>
          <ContactForm />
          <div className="mt-12 flex justify-center space-x-6">
            <Button asChild variant="outline" size="sm">
              <a href="https://linkedin.com/in/colin-m-o-neill" target="_blank" rel="noopener noreferrer">
                LinkedIn
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href="https://colinoneill.artstation.com" target="_blank" rel="noopener noreferrer">
                Art Station
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
          <footer className="py-12 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2025 Colin O'Neill. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
