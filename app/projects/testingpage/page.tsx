"use client"

import Link from "next/link"
import Image from "next/image"

import { ArrowRight, ArrowDown, ExternalLink, MessageCircleMore, ChevronLeft, ChevronRight } from "lucide-react";
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

const heroCarouselItems = [
    {
        href: "/projects/pocketwatchproject",
        src: "/pocketwatchproject/feature.png",
        alt: "Project thumbnail",
    },
    {
        href: "/projects/pleachproject",
        src: "/pleachproject/feature.png",
        alt: "Pleach project thumbnail",
    },
    {
        href: "/projects/edwtproject",
        src: "/edwtproject/feature.png",
        alt: "ED Wait Times project thumbnail",
    },
]

export default function HomePage() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [heroSlideIndex, setHeroSlideIndex] = useState(0);

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    const goToPreviousHeroSlide = () => {
        setHeroSlideIndex((current) =>
            current === 0 ? heroCarouselItems.length - 1 : current - 1
        );
    };

    const goToNextHeroSlide = () => {
        setHeroSlideIndex((current) =>
            current === heroCarouselItems.length - 1 ? 0 : current + 1
        );
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
            <section className="relative z-10 py-20 px-8">

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


                    <div className="space-y-8">
                        <div className="space-y-5 text-center">
                            <h1 className="text-3xl md:text-4xl text-gray-900 leading-tight">
                                I'm Colin,
                            </h1>

                            <h1 className="text-5xl md:text-6xl text-gray-900 leading-tight font-semibold">
                                Product & UXUI Designer
                            </h1>

                            <p className="text-2xl md:text-3xl text-gray-700 leading-tight">
                                Based in Vancouver BC
                            </p>
                        </div>

                        <div className="mx-auto w-full max-w-3xl">
                            <div className="flex w-full items-center gap-3">
                                <button
                                    type="button"
                                    onClick={goToPreviousHeroSlide}
                                    aria-label="Previous slide"
                                    className="h-10 w-10 shrink-0 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                                >
                                    <ChevronLeft className="mx-auto h-5 w-5" />
                                </button>

                                <div className="relative w-full overflow-visible">
                                    <div className="relative aspect-[4/3] w-full overflow-visible">
                                        {heroCarouselItems.map((item, index) => {
                                            const isActive = index === heroSlideIndex;
                                            return (
                                                <Link
                                                    key={`${item.href}-${index}`}
                                                    href={item.href}
                                                    aria-hidden={!isActive}
                                                    tabIndex={isActive ? 0 : -1}
                                                    className={`absolute inset-0 transition-opacity duration-500 ease-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}
                                                >
                                                    <div className="w-full h-full transition-transform duration-300 ease-out hover:scale-[1.02]">
                                                        <Image
                                                            src={item.src}
                                                            alt={item.alt}
                                                            title="View Case Study"
                                                            width={800}
                                                            height={600}
                                                            className="object-contain w-full h-full"
                                                        />
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={goToNextHeroSlide}
                                    aria-label="Next slide"
                                    className="h-10 w-10 shrink-0 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                                >
                                    <ChevronRight className="mx-auto h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800">
                                <Link href="#work">
                                    View Case Studies
                                    <ArrowDown className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>

                            <Button asChild size="lg" variant="outline">
                                <Link href="#contact">
                                    Let's chat
                                    <MessageCircleMore className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="mt-8 border-t border-gray-200 pt-8 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
                        <div id="about" className="md:col-span-7">
                            <h2 className="text-lg font-medium text-gray-900">About</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                I’ve led projects where insights from interviews, testing, and competitor analysis directly influenced key design and product decisions. I also bring experience building and scaling design systems that create consistency, improve collaboration between design and engineering, and enable teams to ship more efficiently. <span className="font-medium text-gray-900"> My goal is to always create thoughtful, human-centered experiences that solve real problems that support business needs</span>.
                            </p>
                        </div>

                        <div className="md:col-span-5">
                            <div className="rounded-xl border border-gray-200 bg-white/70 p-5 space-y-4 text-lg text-gray-600">
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

                </div>
            </section>

            {/* Projects Section */}
            <section id="work" className="py-20 px-8 bg-blue-50">
                <div className="max-w-8xl mx-auto space-y-24">

                    <div className="space-y-12">
                        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
                            Healthcare Products
      </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {projects.map((project) => (
                                <Link
                                    key={project.id}
                                    href={`/projects/${project.id}`}
                                    className="group block focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-xl"
                                >
                                    <article className="
              h-full
              rounded-xl
              bg-white
              border border-gray-100
              shadow-sm
              transition-all duration-300
              group-hover:-translate-y-1
              group-hover:shadow-xl
            ">
                                        {/* Image */}
                                        <div className="aspect-[3/2] overflow-hidden rounded-t-xl bg-gray-100">
                                            <Image
                                                src={project.image || "/placeholder.svg"}
                                                alt={project.title}
                                                width={600}
                                                height={400}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>

                                        {/* Text */}
                                        <div className="space-y-2 p-6">
                                            <h4 className="text-xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                                                {project.title}
                                            </h4>

                                            <p className="text-gray-400 text-base leading-relaxed">
                                                {project.description}
                                            </p>

                                            <div className="text-gray-400 text-sm">
                                                {project.company} • {project.year}
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>

                        <div className="space-y-12">
                            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
                                Other Products
      </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                {projects2.map((project2) => (
                                    <Link
                                        key={project2.id}
                                        href={`/projects/${project2.id}`}
                                        className="group block focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-xl"
                                    >
                                        <article className="
              h-full
              rounded-xl
              bg-white
              border border-gray-100
              shadow-sm
              transition-all duration-300
              group-hover:-translate-y-1
              group-hover:shadow-xl
            ">
                                            {/* Image */}
                                            <div className="aspect-[3/2] overflow-hidden rounded-t-xl bg-gray-100">
                                                <Image
                                                    src={project2.image || "/placeholder.svg"}
                                                    alt={project2.title}
                                                    width={600}
                                                    height={400}
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                            </div>

                                            {/* Text */}
                                            <div className="space-y-2 p-6">
                                                <h4 className="text-xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                                                    {project2.title}
                                                </h4>

                                                <p className="text-gray-400 text-base leading-relaxed">
                                                    {project2.description}
                                                </p>

                                                <div className="text-gray-400 text-sm">
                                                    {project2.company} • {project2.year}
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                ))}
                            </div>



                        </div>


                    </div>

                </div>
            </section>



            {/* Hero Section testing 22222222*/}
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
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-10 pt-6 items-start">

                        {/* Left: Identity + CTA */}
                        <div className="md:col-span-7 space-y-6 md:space-y-8">

                          
                            <h1 className="text-3xl md:text-4xl text-gray-900 leading-tight">
                                My name is <span className="font-semibold text-[#47C7F0]">Colin</span>,

                            </h1>


                            <h1 className="text-3xl md:text-4xl text-gray-900 leading-tight">
                                I bring new ideas to an organization that supports 
      <span className="font-semibold"> intuitive interfaces, usable products, and trusted insights.</span>

                            </h1>

                            <div className="flex flex-wrap items-center gap-4 pt-4">
                                <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800">
                                    <Link href="#work">
                                        View Case Studies
                            <ArrowDown className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>

                                <Button asChild size="lg" variant="outline">
                                    <Link href="#contact">
                                        Let's chat
                                    <MessageCircleMore className="ml-2 h-4 w-4" />

                        </Link>
                                </Button>
                            </div>
                        </div>

                        {/* Right: Portrait */}
                        <div className="md:col-span-5 space-y-4 flex justify-start items-start">
                            <div className="relative w-full max-w-xs lg:max-w-sm aspect-square">
                                <video
                                    src="/Robot.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-contain opacity-75"
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
                            <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
                                With <span className="font-medium text-gray-900">3+ years of industry experience</span>, I’ve led projects where insights from interviews, testing, and competitor analysis directly influenced key design and product decisions. <span className="font-medium text-gray-900"> My goal is to always create thoughtful, human-centered experiences that solve real problems and support business goals</span>.
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
