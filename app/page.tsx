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
        id: "edwtproject",              // <-- MATCHES THE STATIC PAGE ROUTE
        isStatic: true,                 // <-- ADDED
        title: "Improving the decision-making process for patients",
        description: "Redesigned a healthcare platform to help patients make faster, informed decisions during emergencies.",
        image: "/edwttn.png?height=400&width=600",
        tags: ["Figma", "Web Design", "Feature Design", "Data Visualization"],
        year: "2025",
        company: "Fraser Health Authority",
    },
    {
        id: "pslsproject",          // 👈 IMPORTANT: match folder name
        isStatic: true,             // 👈 ADD THIS
        title: "Integrating AI with patient safety data to reduce harm",
        description:
            "Modernized a healthcare reporting platform to make patient safety event management faster and more intuitive.",
        image: "/pslstn.png?height=400&width=600",
        tags: ["Tailwind", "Healthcare", "Web Design", "Data Visualization"],
        year: "2025",
        company: "Fraser Health Authority",
    },


    {
        id: "calexisproject",          // 👈 IMPORTANT: match folder name
        isStatic: true,             // 👈 ADD THIS
        title: "Enhancing the way digital support teams respond to solutions",
        description:
            "Designed an AI-powered chatbot that automates IT support requests and streamlines employee onboarding.",
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
                    src="/texture.jpg"
                    alt="Subtle texture overlay"
                    fill
                    className="object-cover opacity-3"
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
            <section className="pt-24 pb-24 px-8">
                <div className="max-w-8xl mx-auto">

                    {/* ===================== */}
                    {/* Primary Hero Content */}
                    {/* ===================== */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">

                        {/* Left: Identity + CTA */}
                        <div className="lg:col-span-7 space-y-6">

                            {/* Intro */}
                            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
                                My name is
        </p>

                            {/* Name */}
                            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                                <span className="text-[#47C7F0]">Colin O'Neill</span>
                            </h1>

                            {/* Value Proposition */}
                            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
                                I design thoughtful and scalable digital experiences that create a balance between
                                user needs, technical constraints, and business outcomes.
        </p>

                            {/* CTAs */}
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
                        <div className="lg:col-span-5 flex justify-start lg:justify-start">
                            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border border-gray-200">
                                <Image
                                    src="/Profile.png"
                                    alt="Colin O'Neill"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover"
                                    priority
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
                        {/* About */}
                        <div className="md:col-span-7">
                            <h2 className="text-xl font-medium text-gray-900 mb-4">
                                About
        </h2>

                            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
I’m a UX/UI and Product Designer with a background in healthcare analytics and research-driven design. I enjoy collaborating across teams to solve complex problems and build products that feel intuitive and thoughtful.        </p>
                        </div>

                        {/* Experience Meta */}
                        <div className="md:col-span-5 space-y-4 text-lg text-gray-600">
                            <div>
                                <span className="text-gray-400">Currently</span>
                                <p className="font-medium text-gray-900">
                                    Fraser Health Authority
          </p>
                            </div>

                            <div>
                                <span className="text-gray-400">Previously</span>
                                <p className="font-medium text-gray-900">
                                    Precision NanoSystems Inc.
          </p>
                                <p className="font-medium text-gray-900">
                                    Simon Fraser University — Segal School
          </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>









     

            {/* Projects Section */}
            <section id="work" className="py-20 px-8 bg-blue-50">
                <div className="max-w-8xl mx-auto space-y-24">

                    {/* ===================== */}
                    {/* Work Projects */}
                    {/* ===================== */}
                    <div className="space-y-12">
                        <h3 className="text-2xl md:text-3xl font-light text-gray-900 text-center">
                            Projects
      </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {projects.map((project) => (
                                <Link
                                    key={project.id}
                                    href={`/projects/${project.id}`}
                                    className="group block rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                                >
                                    <article className="space-y-4 transition-transform duration-300 group-hover:-translate-y-1">
                                        {/* Image */}
                                        <div className="aspect-[3/2] overflow-hidden rounded-lg bg-gray-100 transition-shadow duration-300 group-hover:shadow-xl">
                                            <Image
                                                src={project.image || "/placeholder.svg"}
                                                alt={project.title}
                                                width={600}
                                                height={400}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>

                                        {/* Text */}
                                        <div className="space-y-2 px-1">
                                            <h4 className="text-xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                                                {project.title}
                                            </h4>

                                            <p className="text-gray-400 text-base leading-relaxed">
                                                {project.description}
                                            </p>

                                            <div className="text-gray-400 text-base">
                                                {project.company} • {project.year}
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                    </div>
            </section>






            {/* Design Process Section (4-stage flow) 
            <section id="process" className="py-20 bg-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
                        How I Work
    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto mb-10">
                        I follow a structured, collaborative approach to move from open-ended research to validated, production-ready solutions.
    </p>

                    <div className="grid md:grid-cols-4 gap-8 text-left text-gray-600">
                        <div className="p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-200">
                            <div className="flex items-center justify-between mb-3">
                                <div className="text-sm font-medium text-gray-900">1. Discover</div>
                                <div className="text-xs text-gray-400">Explore</div>
                            </div>
                            <p className="text-sm leading-relaxed mb-3">
                                I surface problems and opportunities through stakeholder interviews, user research, and analytics — casting a wide net to understand context and constraints.
        </p>
                            <div className="text-xs text-gray-500">
                                Artifacts: research notes, journey maps, analytics insights
        </div>
                        </div>

                        <div className="p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-200">
                            <div className="flex items-center justify-between mb-3">
                                <div className="text-sm font-medium text-gray-900">2. Define</div>
                                <div className="text-xs text-gray-400">Synthesize</div>
                            </div>
                            <p className="text-sm leading-relaxed mb-3">
                                I synthesize research into clear problem statements, prioritized user needs, and success criteria that align with business goals.
        </p>
                            <div className="text-xs text-gray-500">
                                Artifacts: personas, problem statements, prioritized roadmap
        </div>
                        </div>

                        <div className="p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-200">
                            <div className="flex items-center justify-between mb-3">
                                <div className="text-sm font-medium text-gray-900">3. Develop</div>
                                <div className="text-xs text-gray-400">Iterate</div>
                            </div>
                            <p className="text-sm leading-relaxed mb-3">
                                I rapidly ideate, wireframe, and prototype multiple solutions, collaborating closely with PMs and engineers to test feasibility.
        </p>
                            <div className="text-xs text-gray-500">
                                Artifacts: wireframes, interactive prototypes, design system updates
        </div>
                        </div>

                        <div className="p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-200">
                            <div className="flex items-center justify-between mb-3">
                                <div className="text-sm font-medium text-gray-900">4. Deliver</div>
                                <div className="text-xs text-gray-400">Validate</div>
                            </div>
                            <p className="text-sm leading-relaxed mb-3">
                                I validate solutions through usability testing and metrics, then hand off polished specs and work with engineering to ship and measure impact.
        </p>
                            <div className="text-xs text-gray-500">
                                Artifacts: usability reports, final prototypes, implementation specs, success metrics
        </div>
                        </div>
                    </div>
                </div>
            </section>

*/}


            {/* Skills Section 
            <section id="skills" className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-16 text-center">Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <div key={index} className="text-center hover:text-gray-900 transform hover:scale-110 transition-transform duration-200">
                                <span className="text-gray-700 text-sm md:text-base">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section id="about me" className="py-20 px-6 bg-gray-50">
              <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-16 text-center">About Me</h2>

                    <div className="flex-1 flex justify-center mb-10 ">
                        <div className="w-36 h-36 rounded-full overflow-hidden">
                            <Image
                                src="/colin.png?height=300&width=300"
                                alt="Colin O'Neill"
                                width={300}
                                height={300}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                  <p className="text-sm md:text-base text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
I’m a 25-year-old designer, born and raised in New Jersey, with citizenship in both Canada and the United States. I have experience collaborating with cross-functional teams to create scalable solutions that enhance decision-making and resolve user pain points.</p>
                  <p className="text-sm md:text-base text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                      Outside of work I enjoy creating personal 3D projects, listening to new music, and playing recreational volleyball.
          </p>
              </div>
          </section>
            */}

      {/* Contact Section */}
            <section id="contact" className="py-20 px-8 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">Let's Work Together</h2>
          <p className="text-gray-600 text-lg mb-12 leading-relaxed">
            I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
            discuss a project.
          </p>
<div className="text-left">
                        <ContactForm />
                        </div>
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
          <footer className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2025 Colin O'Neill. All rights reserved.</p>
                    <Link href="/projects/calexisproject" className="block text-gray-600 hover:text-gray-900 text-base transform transition-transform duration-200 hover:scale-110 hover:font-medium">
                        Testing
</Link>
        </div>
      </footer>
    </div>
  )
}
