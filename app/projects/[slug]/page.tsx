"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

import { useState } from "react"
import { X } from "lucide-react"

const projectsData = {
  "calexis-app": {
        sections: [
            {
                type: "heading",
                level: 1,
                title: "My Contribution"
            },
            {
                type: "heading",
                level: 2,
                title: "Discovery & Research"
            },
            {
                type: "list",
                items: [
                    "Conducted research on AI Chatbot best practices and features",
                    "Stakeholder interviews with Advance IT managers and associates to understand pain points",
                    "Audited Advanced Virtual Assistant (AVA) and existing processes to uncover key usage gaps"
                ]
            },
            {
                type: "heading",
                level: 2,
                title: "Design & Testing"
            },
            {
                type: "list",
                items: [
                    "Created wireframes and high-fidelity designs using Figma",
                    "Consulted with Advance IT team members for feedback and validation",
                    "Ran usability tests with Advance IT team members for further feedback and support"
                ]
            }
        ]

    images: [
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=400&width=800",
    ],
    results: [
      "40% increase in user engagement",
      "60% improvement in budget completion rates",
      "4.8/5 App Store rating",
      "Featured in Apple's 'Apps We Love'",
    ],
    nextProject: "psls-platform",
  },
  "psls-platform": {
    title: "Patient Safety Learning System Platform",
    subtitle: "Streamlining Patient Care Management",
    year: "2025",
    duration: "6 months",
    role: "Senior UX Designer",
    team: "Product Manager, 3 Engineers, Medical Advisor",
    tags: ["Tailwind", "Healthcare", "Web Design", "Data Visualization"],
    overview:
      "A patient management system designed for healthcare professionals to efficiently track patient information, appointments, and treatment plans while maintaining HIPAA compliance.",
    problem:
      "Healthcare professionals were spending too much time navigating complex systems instead of focusing on patient care. The existing system had poor information hierarchy and lacked accessibility features.",
    solution:
      "We redesigned the interface with a focus on information hierarchy, accessibility, and workflow optimization. Key features include smart search, customizable dashboards, and voice-to-text capabilities.",
    images: [
      "/placeholder.svg?height=500&width=800",
      "/placeholder.svg?height=500&width=800",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    results: [
      "35% reduction in task completion time",
      "90% user satisfaction score",
      "WCAG 2.1 AA compliance achieved",
      "Deployed across 50+ healthcare facilities",
    ],
    nextProject: "aap-uikit",
  },
  "aap-uikit": {
    title: "Advance Analytics Platform UI Kit",
    subtitle: "Optimizing the Online Shopping Experience",
    year: "2023",
    duration: "3 months",
    role: "UX/UI Designer",
    team: "Product Manager, Frontend Developer, Marketing Manager",
    tags: ["Figma", "Power BI", "UI Chart Kit", "Data Visualization"],
    overview:
      "Complete redesign of an online marketplace focusing on improving conversion rates and user experience. The project involved extensive user research and A/B testing to validate design decisions.",
    problem:
      "The existing e-commerce platform had a high bounce rate and low conversion rates. Users were abandoning their carts due to a confusing checkout process and poor product discovery.",
    solution:
      "We streamlined the user journey with improved navigation, enhanced product pages, simplified checkout, and personalized recommendations based on user behavior.",
    images: [
      "/placeholder.svg?height=500&width=800",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=500&width=800",
    ],
    results: [
      "25% increase in conversion rate",
      "40% reduction in cart abandonment",
      "50% improvement in mobile sales",
      "$2M additional revenue in first quarter",
    ],
    nextProject: "beam-buddy",
  },
  "beam-buddy": {
    title: "Beam Buddy",
    subtitle: "Simplifying Complex Enterprise Workflows",
    year: "2022",
    duration: "4 months",
    role: "Lead Product Designer",
    team: "2 Product Managers, 5 Engineers, UX Researcher",
    tags: ["Product Design", "Flashlight", "3D Design", "UX Research"],
    overview:
      "Enterprise software platform designed to streamline complex business workflows. The challenge was to make powerful features accessible while maintaining the depth required for enterprise users.",
    problem:
      "The existing platform was powerful but difficult to use, requiring extensive training. New users were overwhelmed by the interface, and even experienced users struggled with efficiency.",
    solution:
      "We implemented a modular design system with progressive disclosure, contextual help, and customizable workspaces. The new design reduces cognitive load while maintaining full functionality.",
    images: [
      "/placeholder.svg?height=500&width=800",
      "/placeholder.svg?height=500&width=800",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    results: [
      "60% reduction in onboarding time",
      "45% increase in feature adoption",
      "30% improvement in user satisfaction",
      "20% reduction in support tickets",
    ],
    nextProject: "calexis-app",
  },
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

    const [activeImage, setActiveImage] = useState<string | null>(null)

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
            <Button asChild variant="ghost" size="sm">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
              <span>{project.year}</span>
              <span>•</span>
              <span>{project.duration}</span>
              <span>•</span>
              <span>{project.role}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-4">{project.title}</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">{project.subtitle}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-2 uppercase tracking-wide">Team</h3>
              <p className="text-gray-600">{project.team}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-2 uppercase tracking-wide">Duration</h3>
              <p className="text-gray-600">{project.duration}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-2 uppercase tracking-wide">Role</h3>
              <p className="text-gray-600">{project.role}</p>
            </div>
          </div>


          <div className="space-y-20">
            <div>
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{project.overview}</p>
                      </div>

                      {/* Pictures */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                          {project.images.slice(0, 2).map((image, index) => (
                              <button
                                  key={index}
                                  onClick={() => setActiveImage(image)}
                                  className="aspect-video overflow-hidden rounded-lg bg-gray-100 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
                              >
                                  <Image
                                      src={image || "/placeholder.svg"}
                                      alt={`${project.title} - Image ${index + 1}`}
                                      width={800}
                                      height={600}
                                      className="w-full h-full object-cover"
                                  />
                              </button>
                          ))}
                      </div>




                      {/* Updated Sections */}
                      {project.sections
                          ? project.sections.map((section, index) => {
                              if (section.type === "heading") {
                                  const HeadingTag = `h${section.level}` as keyof JSX.IntrinsicElements;
                                  return (
                                      <HeadingTag
                                          key={index}
                                          className={`text-gray-900 mb-4 ${section.level === 1
                                                  ? "text-3xl font-light mt-12"
                                                  : "text-2xl font-medium mt-8"
                                              }`}
                                      >
                                          {section.title}
                                      </HeadingTag>
                                  );
                              }

                              if (section.type === "list") {
                                  return (
                                      <ul
                                          key={index}
                                          className="list-disc pl-6 space-y-2 text-gray-600 text-lg"
                                      >
                                          {section.items.map((item: string, i: number) => (
                                              <li key={i}>{item}</li>
                                          ))}
                                      </ul>
                                  );
                              }

                              if (section.type === "text") {
                                  return (
                                      <p
                                          key={index}
                                          className="text-gray-600 text-lg leading-relaxed mb-6"
                                      >
                                          {section.content}
                                      </p>
                                  );
                              }

                              return null;
                          })
                          : (
                              <>
                                  <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">Overview</h2>
                                  <p className="text-gray-600 text-lg leading-relaxed">{project.overview}</p>
                                  <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 mt-10">The Problem</h2>
                                  <p className="text-gray-600 text-lg leading-relaxed">{project.problem}</p>
                                  <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 mt-10">The Solution</h2>
                                  <p className="text-gray-600 text-lg leading-relaxed">{project.solution}</p>
                              </>
                          )}


            <div>
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">The Solution</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{project.solution}</p>
                      </div>

                      {/* Pictures */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                          {project.images.slice(2, 4).map((image, index) => (
                              <button
                                  key={index}
                                  onClick={() => setActiveImage(image)}
                                  className="aspect-video overflow-hidden rounded-lg bg-gray-100 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
                              >
                                  <Image
                                      src={image || "/placeholder.svg"}
                                      alt={`${project.title} - Image ${index + 1}`}
                                      width={800}
                                      height={600}
                                      className="w-full h-full object-cover"
                                  />
                              </button>
                          ))}
                      </div>


          </div>
        </div>
      </section>


      {/* Results */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-12">Results & Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {project.results.map((result, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg">
                <p className="text-gray-900 font-medium">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-8">Next Project</h2>
          <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800">
            <Link href={`/projects/${project.nextProject}`}>
              View Next Case Study
              <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2025 Colin O'Neill. All rights reserved.</p>
        </div>
          </footer>

          {/*Add Modal*/}
          {activeImage && (
              <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
                  <button
                      className="absolute top-6 right-6 text-white hover:text-gray-300"
                      onClick={() => setActiveImage(null)}
                      aria-label="Close modal"
                  >
                      <X size={32} />
                  </button>
                  <div className="max-w-4xl w-full max-h-[90vh]">
                      <Image
                          src={activeImage}
                          alt="Full-size project image"
                          width={1600}
                          height={900}
                          className="w-full h-auto object-contain rounded-lg"
                          style={{ maxHeight: "80vh" }}
                      />
                  </div>
              </div>
          )}








    </div>
  )
}
