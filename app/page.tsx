import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"

const projects = [
  {
    id: "fintech-app",
    title: "FinTech Mobile App",
    description: "A comprehensive financial management app with intuitive budgeting tools and investment tracking.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Mobile Design", "FinTech", "User Research"],
    year: "2024",
  },
  {
    id: "healthcare-dashboard",
    title: "Healthcare Dashboard",
    description: "Patient management system designed for healthcare professionals with focus on accessibility.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Web Design", "Healthcare", "Data Visualization"],
    year: "2023",
  },
  {
    id: "ecommerce-redesign",
    title: "E-commerce Redesign",
    description: "Complete redesign of an online marketplace focusing on conversion optimization.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["E-commerce", "Conversion", "A/B Testing"],
    year: "2023",
  },
  {
    id: "saas-platform",
    title: "SaaS Platform",
    description: "Enterprise software platform with complex workflows simplified through thoughtful UX design.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["SaaS", "Enterprise", "Complex Systems"],
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
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
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
            <div className="flex items-center space-x-8">
              <Link href="#work" className="text-gray-600 hover:text-gray-900 transition-colors">
                Work
              </Link>
              <Link href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-8">
            <Image
              src="/Logo.png?height=128&width=128"
              alt="Colin O'Neill"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 leading-tight">UX/UI/Product Designer</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            I create meaningful digital experiences through thoughtful design and user-centered research.
          </p>
          <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800">
            <Link href="#work">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-50">
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

      {/* Projects Section */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-16 text-center">Selected Work</h2>
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div key={project.id} className="group">
                <Link href={`/projects/${project.id}`}>
                  <div
                    className={`grid md:grid-cols-2 gap-12 items-center ${
                      index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                    }`}
                  >
                    <div className={`space-y-6 ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
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
                      <h3 className="text-2xl md:text-3xl font-light text-gray-900 group-hover:text-gray-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
                      <div className="flex items-center text-gray-900 group-hover:text-gray-600 transition-colors">
                        <span className="text-sm font-medium">View Case Study</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                    <div className={`${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                      <div className="aspect-[3/2] overflow-hidden rounded-lg bg-gray-100">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
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
      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2025 Colin O'Neill. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
