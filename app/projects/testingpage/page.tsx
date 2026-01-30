"use client"

import Link from "next/link"
import Image from "next/image"

import { ArrowRight, ArrowDown, ExternalLink } from "lucide-react";
import { Linkedin, Github } from "lucide-react";



import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import MobileMenu from "@/components/MobileMenu"
import { useState } from "react";

const projects = [


    {
        id: "edwtproject",              // <-- MATCHES THE STATIC PAGE ROUTE
        isStatic: true,                 // <-- ADDED
        title: "ED Wait Times Website Redesign",
        description: "Improving the decision-making process for patients.",
        image: "/edwttn.png?height=400&width=600",
        tags: ["Figma", "Web Design", "Feature Design", "Data Visualization"],
        year: "2025",
        company: "Fraser Health Authority",
    },
    {
        id: "pslsproject",         
        isStatic: true,         
        title: "AI Patient Safety Platform",
        description:
            "Integrating AI with patient safety data to reduce harm.",
        image: "/pslstn.png?height=400&width=600",
        tags: ["Tailwind", "Healthcare", "Web Design", "Data Visualization"],
        year: "2025",
        company: "Fraser Health Authority",
    },


    {
        id: "calexisproject",       
        isStatic: true,             
        title: "Calexis AI Chatbot Teams App",
        description:
            "Enhancing the way digital support teams respond to solutions.",
        image: "/calexistn.png?height=400&width=600",
        tags: ["Chatbot", "AI LLM", "Machine Learning Tool"],
        year: "2025",
        company: "Fraser Health Authority",
    },

  

  //  {
  //  id: "calexis-app",
  //  title: "Calexis Chatbot",
  //      description: "Designed an AI-powered chatbot that automates IT support requests and streamlines employee onboarding. Simplified workflows, reduced ticket resolution time, and improved user satisfaction through conversational design and iterative testing.",
  //  image: "/calexis-mockup.png?height=400&width=600",
  //  tags: ["Chatbot", "AI LLM", "Machine Learning Tool"],
  //  year: "2025",
  //},
   
  //{
  //  id: "beam-buddy",
  //  title: "Beam Buddy",
  //    description: "Developed a user-centered flashlight that helps children feel safe and confident in the dark through ergonomic form, child-safe materials, and simplified interaction design that reduces cognitive effort.",
  //  image: "/flashlightfinal.png?height=400&width=600",
  //    tags: ["Product Design", "Flashlight", "3D Design", "UX Research"],
  //  year: "2023",
  //},
]

const projects2 = [


    {
        id: "pocketwatchproject",
        isStatic: true,
        title: "Pocket Watch Mobile App",
        description:
            "Concept designed to improve personal financial management.",
        image: "/pocketwatchtn.png?height=400&width=600",
        tags: ["Chatbot", "AI LLM", "Machine Learning Tool"],
        year: "2026",
        company: "Personal Project",
    },


    {
        id: "pleachproject",
        isStatic: true,
        title: "Pleach App",
        description:
            "Creating efficiency in the legal tech industry.",
        image: "/pleachtn.png?height=400&width=600",
        tags: ["Chatbot", "AI LLM", "Machine Learning Tool"],
        year: "2025",
        company: "Personal Project",
    },

    {
        id: "beambuddyproject",
        isStatic: true,
        title: "Beam Buddy",
        description:
            "A flashlight toy designed for an often-overlooked user group.",
        image: "/beambuddytn.png?height=400&width=600",
        tags: ["Chatbot", "AI LLM", "Machine Learning Tool"],
        year: "2023",
        company: "School Project",
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
  "Product Design",
  "Figma",
  "3D Design",
  "Adobe Creative Suite",
  "Data Visualization",
  "Collaboration",
  "Heuristic Evaluation",
]

export default function HomePage() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
  

        <div className="min-h-screen">

                <div className="fixed inset-0 z-50 pointer-events-none">
                    <Image
                        src="/texture4.png"
                        alt="Subtle texture overlay"
                        fill
                        className="object-cover opacity-5"
                        priority
                    />
                </div>


           
        

      {/* Navigation */}
            <nav className="sticky top-0 left-0 right-0 z-40 px-8 relative backdrop-blur-md border-b border-gray-100">
                {/* Blur fade overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/40" />

                <div className="relative max-w-8xl mx-auto py-3">
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            className="flex items-center space-x-3 transition-transform duration-200 hover:scale-150"
                        >
                            <div className="w-16 h-16 rounded-full overflow-hidden">
                                <Image
                                    src="/Logo.png?height=32&width=32"
                                    alt="Logo"
                                    width={32}
                                    height={32}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                        </Link>

                        <div className="hidden md:flex items-center space-x-10">
                            <Link href="#work" className="text-gray-600 hover:text-gray-900 text-xl transition-transform duration-200 hover:scale-110 hover:font-medium">
                                Work
        </Link>
                            
                            
                            <Link href="#contact" className="text-gray-600 hover:text-gray-900 text-xl transition-transform duration-200 hover:scale-110 hover:font-medium">
                                Contact
        </Link>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#47C7F0] hover:text-[#722BFF] text-xl transition-transform duration-200 hover:scale-110 hover:font-medium"
                            >
                                Resume
        </a>
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
            <section className="relative z-10 pt-16 pb-32 px-8 min-h-[90vh]">

                {/* Background */}
                <div className="absolute top-0 left-0 w-full h-full -z-10">
                    <Image
                        src="/top.png"
                        alt=""
                        fill
                        className="object-cover object-left-top"
                        priority
                    />
                </div>

                <div className="max-w-8xl mx-auto">

                    {/* ===================== */}
                    {/* Primary Hero Content */}
                    {/* ===================== */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">

                        {/* Left: Message */}
                        <div className="lg:col-span-8 space-y-8">

                            {/* Eyebrow / Identity */}
                            <p className="text-lg md:text-xl text-gray-500">
                                Hi, I’m <span className="font-semibold text-[#47C7F0]">Colin</span> ,
                    Product & UXUI Designer
                </p>

                            {/* Primary Headline */}
                            <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 leading-tight">
                                I design UX that makes complex products
                    <span className="text-[#47C7F0]"> intuitive, usable, and trusted.</span>
                          
                </h1>

                            {/* Supporting Subhead */}
                            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                                With <span className="font-medium text-gray-900">2+ years of experience</span> in
                    healthcare and biotechnology, I help teams turn technical systems into human-centered digital experiences.
                </p>

                            {/* Credibility Line */}
                            <p className="text-lg text-gray-500">
                                Currently designing at <span className="font-medium text-gray-900">Fraser Health Authority</span> ·
                    Previously at <span className="font-medium text-gray-900">Precision NanoSystems</span>
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-wrap items-center gap-4 pt-4">
                                <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800">
                                    <Link href="#work">
                                        View Case Studies
                            <ArrowDown className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>

                                <Button asChild size="lg" variant="outline">
                                    <Link href="#about">
                                        How I Work
                        </Link>
                                </Button>
                            </div>
                        </div>

                        {/* Right: Visual */}
                        <div className="lg:col-span-4 flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-md lg:max-w-lg aspect-square">
                                <video
                                    src="/Robot.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-contain opacity-80"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>



            {/* Hero Section */}
            <section className="relative z-10 pt-12 pb-32 px-8 min-h-[90vh]">

                {/* Hero Background Image */}
                <div className="absolute top-0 left-0 w-full h-full -z-10">
                    <Image
                        src="/top.png"
                        alt=""
                        fill
                        className="object-cover object-left-top"
                        priority
                    />
                </div>


                <div className="max-w-8xl mx-auto">


                    {/* ===================== */}
                    {/* Primary Hero Content */}
                    {/* ===================== */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        {/* Left: Identity + CTA */}
                        <div className="lg:col-span-7 space-y-6">

                            <p className="text-3xl md:text-4xl text-gray-600 max-w-2xl leading-relaxed">
                                My name is <span className="font-bold text-[#47C7F0]">Colin</span>
                            </p>



                            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
                                I’m a <span className="font-medium text-[#47C7F0]">Product-oriented UX designing machine</span> {" "}
           engineered to break down complex challenges and build elegant, ai-driven and
          user-optimized digital experiences.
        </p>

                            <div className="flex items-center gap-4 pt-4">
                                <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800">
                                    <Link href="#work">
                                        View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        {/* Right: Portrait */}
                        <div className="lg:col-span-5 flex justify-start">
                            <div className="relative w-full max-w-md lg:max-w-lg aspect-square">
                                <video
                                    src="/Robot.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-contain opacity-90"
                                />
                            </div>
                        </div>
                    </div>

                    {/* ===================== */}
                    {/* About + Meta */}
                    {/* ===================== */}
                    <div
                        id="about"
                        className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-10 border-t border-gray-200 pt-12"
                    >
                        <div className="md:col-span-7">
                            <h2 className="text-lg font-medium text-gray-900">About</h2>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                                Outside of work, I enjoy building robots, designing in 3D, playing
                                volleyball, and learning new languages. I also like reading and staying current on emerging technology and design trends.
        </p>
                        </div>

                        <div className="md:col-span-5 space-y-4 text-lg text-gray-600">
                            <div>
                                <span className="text-gray-400">Currently @</span>
                                <p className="font-medium text-gray-900">Fraser Health Authority</p>
                            </div>

                            <div>
                                <span className="text-gray-400">Previously @</span>
                                <p className="font-medium text-gray-900">Precision NanoSystems Inc.</p>
                                <p className="font-medium text-gray-900">
                                    Simon Fraser University — Segal School
          </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>





      {/* Footer */}
          <footer className="py-12 border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2026 Colin O'Neill. All rights reserved.</p>
                    
        </div>
      </footer>
            </div>
  )

}
