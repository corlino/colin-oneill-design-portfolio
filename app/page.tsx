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
        image: "/edwt-mockup.png?height=400&width=600",
        tags: ["Figma", "Web Design", "Feature Design", "Data Visualization"],
        year: "2025",
    },
    {
        id: "pslsproject",          // 👈 IMPORTANT: match folder name
        isStatic: true,             // 👈 ADD THIS
        title: "Integrating AI with patient safety data to reduce harm",
        description:
            "Modernized a healthcare reporting platform to make patient safety event management faster and more intuitive...",
        image: "/psls-mockup2.png?height=400&width=600",
        tags: ["Tailwind", "Healthcare", "Web Design", "Data Visualization"],
        year: "2025",
    },
    {
    id: "calexis-app",
    title: "Calexis Chatbot",
        description: "Designed an AI-powered chatbot that automates IT support requests and streamlines employee onboarding. Simplified workflows, reduced ticket resolution time, and improved user satisfaction through conversational design and iterative testing.",
    image: "/calexis-mockup.png?height=400&width=600",
    tags: ["Chatbot", "AI LLM", "Machine Learning Tool"],
    year: "2025",
  },
   
  {
    id: "beam-buddy",
    title: "Beam Buddy",
      description: "Developed a user-centered flashlight that helps children feel safe and confident in the dark through ergonomic form, child-safe materials, and simplified interaction design that reduces cognitive effort.",
    image: "/flashlightfinal.png?height=400&width=600",
      tags: ["Product Design", "Flashlight", "3D Design", "UX Research"],
    year: "2023",
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
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                                className="block text-[#47C7F0] hover:text-[#722BFF] text-base transform transition-transform duration-200 hover:scale-110 hover:font-medium"
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
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-5xl mx-auto">

                    {/* Top row: text + image */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-12 mb-12">

                        {/* Left: Text content */}
                        <div className="flex-2 flex flex-col">
                            <p className="text-xl md:text-2xl text-gray-600 mb-4">
                                Hi, my name is
        </p>

                            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                <span className="text-[#47C7F0]">Colin O'Neill</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-6 leading-relaxed">
                                I’m a <span className="font-bold">UX/UI & Product Designer</span> who likes building innovative experiences and solving difficult problems.
        </p>

                            <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800 w-fit">
                                <Link href="#work">
                                    View My Work
            <ArrowDown className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>

                        {/* Right: Portrait image */}
                        <div className="flex-1 flex justify-center md:justify-end">
                            <div className="w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden">
                                <Image
                                    src="/portrait.jpg?height=600&width=600"
                                    alt="Colin O'Neill"
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bottom row: two-column text */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                            Currently at <span className="font-bold">The Fraser Health Authority</span>
                        </p>

                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                            Previously at <span className="font-bold">
                                Precision NanoSystems Inc. & Simon Fraser University Segal School
        </span>
                        </p>
                    </div>

                </div>
            </section>








     

      {/* Projects Section */}
            <section id="work" className="py-20 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto space-y-20">
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
                                        href={
                                            project.isStatic
                                                ? `/projects/${project.id}`
                                                : `/projects/${project.id}`
                                        }
                                        className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transform hover:scale-110 transition-transform duration-200 px-3 py-2 rounded-md"
                                    >
                                        View Project
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



            {/* Design Process Section (4-stage flow) 
            <section id="process" className="py-20 px-6 bg-white">
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


            {/* Skills Section */}
            <section id="skills" className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
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


          {/* Bio Section */}
            <section id="about me" className="py-20 px-6 bg-gray-50">
              <div className="max-w-5xl mx-auto text-center">
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


      {/* Contact Section */}
            <section id="contact" className="py-20 px-6 bg-white">
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
          <footer className="py-12 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2025 Colin O'Neill. All rights reserved.</p>
                    <Link href="/projects/pslsproject" className="block text-gray-600 hover:text-gray-900 text-base transform transition-transform duration-200 hover:scale-110 hover:font-medium">
                        Testing
</Link>
        </div>
      </footer>
    </div>
  )
}
