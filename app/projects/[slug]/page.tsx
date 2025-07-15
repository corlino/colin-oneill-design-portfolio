"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

import { useState } from "react"
import { X } from "lucide-react"

const projectsData = {
  //Calexis //////////////////////////////////////////////////////////////////////////
  "calexis-app": {
    title: "Calexis Chatbot",
    subtitle: "Simplifying IT workflow with AI",
    year: "2025",
    company: "Fraser Health Authority",
    duration: "January - Present",
    role: "UX/UI Designer",
    team: "Managing Consultant, Engineers, Data Analyst, Data Scientists",
    tags: ["Chatbot", "AI LLM", "Machine Learning Tool"],
    overview:
      "The Advance IT team at Fraser Health manages requests from staff regarding the Meditech Expanse platform, which is a tool that supports healthcare information systems and manages data.",
    problem:
      "The Advance IT team at Fraser Health faces significant challenges due to the high volume and complexity of IT support requests. To find solutions, staff must manually search through numerous Quick Reference Guides that span hundreds of pages, consult scattered source materials across various support websites, and rely on a limited public-facing chatbot—the Advanced Virtual Assistant (AVA)—which offers only a narrow scope of support.",

        //solution
        solution: {
            title: "Solution",
            sections: [
                {
                    body: "We designed Calexis, a centralized internal chatbot platform that uses LLM-powered search to:",
                    bullets: [
                        "Aggregate QRGs, documentation, and Advance-related support material.",
                        "Provide user-friendly features that support improved response time.",
                        "Extend the scope of the legacy Advance Virtual Assistant(AVA) chatbot, but limit use to the internal IT team.",
                    ],
                },
            ],
        },


    images: [
      "/calexis-mockup.png?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=400&width=800",
    ],
    //results: [
    //  "40% increase in user engagement",
    //  "60% improvement in budget completion rates",
    //  "4.8/5 App Store rating",
    //  "Featured in Apple's 'Apps We Love'",
    //],
    //Next Project
        nextProject: "psls-platform",

        //contribution
        contribution: {
        title: "My Contribution",
        sections: [
            {
                heading: "Discovery & Research",
                bullets: [
                    "Conducted research on AI Chatbot best practices and features.",
                    "Stakeholder interviews with Advance IT managers and associates to understand pain points.",
                    "Audited Advanced Virtual Assistant (AVA) and existing processes to uncover key usage gaps.",
                ],
            },
            {
                heading: "Design & Testing",
                bullets: [
                    "Created wireframes and high-fidelity designs using Figma",
                    "Consulted with Advance IT team members for feedback and validation",
                    "Ran usability tests with Advance IT team members for further feedback and support",
                ],
            },
        ],
        },

        projectedResults: [
            <>
                <strong>Free up Resources:</strong> by decreasing query resolution time by 50%, staff are able to address more queries per hour.
            </>,
            <>
                <strong>Increased User Satisfaction:</strong> An AI chatbot with pre-loaded QRGs and documents would reduce time spent searching for answers.
            </>,
            <>
                <strong>Scalable framework:</strong> Future tools can be developed to support other areas in the Fraser Health hospital and community network.
            </>,
        ],

        keyTakeaways: [
            "All-in-one platforms that are intuitive and can significantly streamline staff workflows.",
            "AI chat tools require thoughtful design beyond conversation—they must support user goals and offer task-oriented features.",
            "Close collaboration with IT and data teams was critical to building a solution that was both technically feasible and genuinely useful.",
        ],

    },
  //PSLS //////////////////////////////////////////////////////////////////////////
  "psls-platform": {
    title: "Patient Safety Learning System Platform",
    subtitle: "Improving patient safety event management and report generation",
    company: "Fraser Health Authority",
    year: "2025",
    duration: "January - Present",
    role: "UX/UI/Product Designer",
    team: "Managing Consultant, Data Scientists",
    tags: ["Tailwind", "Healthcare", "Web Design", "Data Visualization"],
      overview:
          "The Fraserhealth Quality Team is responsible for managing the data around patient safety and quality of care within the healthcare network. This information is shared with various teams and used in meetings to drive discussions on improving safety practices.",
      problem:
          "The Patient Safety Learning System (PSLS) is a tool used by the Fraser Health Quality Team to manage patient safety reports. Although the system’s user interface is outdated, a larger issue lies in the team's current workflow for addressing safety events. Most reported incidents fall under harm levels 1 to 3—No Harm, Minor Harm, and Moderate Harm—but these are often overlooked, as the team tends to prioritize level 4 and 5 incidents involving Severe Harm or Death.",

      //solution
      solution: {
          title: "Solution",
          sections: [
              {
                  body: "The Patient Safety Learning System Platform is a new tool that would access the reporting data from the legacy system and move the approach for addressing patient safety concerns from reactive to proactive.",
                  bullets: [
                      "Provides an AI Theming feature which would categorize the numerous amount of harm reports.",
                      "A report-generating wizard that streamlines the report creation process and moves these to the site committees efficiently.",
                      "Flag low-harm incidents that have the potential to escalate to high-harm incidents.",
                  ],
              },
          ],
      },


      images: [
          "/calexis-mockup.png?height=600&width=400",
          "/placeholder.svg?height=600&width=400",
          "/placeholder.svg?height=600&width=400",
          "/placeholder.svg?height=400&width=800",
      ],
      //results: [
      //    "40% increase in user engagement",
      //    "60% improvement in budget completion rates",
      //    "4.8/5 App Store rating",
      //    "Featured in Apple's 'Apps We Love'",
      //],

      //Next Project
      nextProject: "aap-uikit",

      //contribution
      contribution: {
          title: "My Contribution",
          sections: [
              {
                  heading: "Discovery & Research",
                  bullets: [
                      "Conducted research on modern application interfaces and intuitive AI features.",
                      "Stakeholder interviews with Quality team directors and coordinators to understand pain points and processes for generating reports and data utilization.",
                  ],
              },
              {
                  heading: "Design & Testing",
                  bullets: [
                      "Created wireframes and high-fidelity designs using Figma.",
                      "Interviewed Fraser Health Quality teams for feedback and validation on designs.",
                      "Ran usability tests with Quality team members for further feedback and support.",
                  ],
              },
          ],
      },

      projectedResults: [
          <>
              <strong>Free up Resources:</strong> Quality team coordinators have more time to work on other reports by reducing the need to manually.
          </>,
          <>
              <strong>Improved Workflow:</strong> Organizing the harm events by theme can provide higher quality insights into drivers and areas affected.
          </>,
          <>
              <strong>Reactive to Proactive:</strong> By flagging low-harm events that could become a greater issue, teams can work quicker to address the problem before it escalates.
          </>,
      ],

      keyTakeaways: [
          "Designing for proactive action can shift how healthcare teams approach safety—moving from reacting to harm toward preventing it.",
          "AI-powered categorization helps make sense of overwhelming data, enabling teams to focus on patterns and systemic issues.",
          "Workflow-centric design tailored to real user pain points, significantly reducing manual tasks and free up time for more impactful work.",
          "Close collaboration with stakeholders throughout the design process ensures the solution aligns with real-world needs and builds trust in AI-powered tools.",

      ],
    },
  //AAP UI KIT //////////////////////////////////////////////////////////////////////////
  "aap-uikit": {
    title: "Advance Analytics Platform UI Kit",
    subtitle: "Optimizing the wireframing and design process",
    year: "2024",
    company: "Fraser Health Authority",
    duration: "January - June",
    role: "UX/UI Designer",
    team: "Individual",
    tags: ["Figma", "Power BI", "UI Chart Kit", "Data Visualization"],
      overview:
          "The Advance Analytics platform is a multi-page tool featuring a series of Power BI dashboards that visualize data from key areas across the Fraser Health network. These dashboards focus on metrics that impact patient outcomes and are reviewed daily by healthcare staff and providers to monitor trends, identify anomalies, and uncover potential gaps in care.",
      problem:
          "The development of the Advance Analytic Platform has proven to be a scalable product; however, the number of requests received from various networks across Fraser Health has exceeded our UX team’s ability to keep up with demand. We were not able to meet the demand for pages with the number of UX designers on the team, and when development is rushed, following best practices can be difficult.",


      //solution
      solution: {
          title: "Solution",
          sections: [
              {
                  body: "The Advance Analytics Platform Figma UI Kit is intended to streamline the wireframing process, allowing our team to simply drag and drop assets into a template and use the properties to customize them as needed.",
                  bullets: [
                      "The UI kit provides a number of different graph styles for our team to use.",
                      "Utilizing variables to switch from low to high fidelity instantly to get high quality designs to our clients faster.",
                  ],
              },
          ],
      },


      images: [
          "/calexis-mockup.png?height=600&width=400",
          "/placeholder.svg?height=600&width=400",
          "/placeholder.svg?height=600&width=400",
          "/placeholder.svg?height=400&width=800",
      ],
      //results: [
      //    "40% increase in user engagement",
      //    "60% improvement in budget completion rates",
      //    "4.8/5 App Store rating",
      //    "Featured in Apple's 'Apps We Love'",
      //],
      //Next Project
      nextProject: "beam-buddy",

      //contribution
      contribution: {
          title: "Research & Design",
          sections: [
              {
                  heading: [],
                  bullets: [
                      "Created numerous chart and graph variants with customizable components.",
                      "Research into UI Kit best practices.",
                      "Understanding our teams pain points and focus on addressing these areas.",
                  ],
              },
              {
                  heading: [],
                  bullets: [],
              },
          ],
      },

      //projectedResults: [
      //    <>
      //        <strong>Free up Resources:</strong> by decreasing query resolution time by 50%, staff are able to address more queries per hour.
      //    </>,
      //    <>
      //        <strong>Increased User Satisfaction:</strong> An AI chatbot with pre-loaded QRGs and documentsthis reduces time spent searching for answers.
      //    </>,
      //    <>
      //        <strong>Scalable framework:</strong> Future tools can be developed at Fraser Health to support other areas in the healthcare network.
      //    </>,
      //],


      results: [
          "A modular graph system that allows our team to simply drag and drop components into the page template.",
          "Supporting less experienced members on the team to learn figma and understand how variants and components work.",
          "Enhanced our teams workflow by streamlining the wireframe building process, and moving from low to high fidelity designs instantly.",
      ],


      keyTakeaways: [
          "Figma is a powerful tool that can have a major impact working as a UXUI Designer.",
          "Advocating in our organization to upgrade our Figma accounts was valuable to our work and showed immediate return on investment.",
          "Currently we are still using this system as an quick and intuitive way to move wireframes to production efficiently.",
      ],
    },
  //BEAM BUDDY //////////////////////////////////////////////////////////////////////////
  "beam-buddy": {
    title: "Beam Buddy",
    subtitle: "A kid-safe flashlight that turns darkness into adventure and creativity.",
    year: "2023",
    company: "Simon Fraser University",
    duration: "October - November",
    role: "UX/Product Designer",
    team: "Teammate",
    tags: ["Product Design", "3D Design", "UX Research"],
      overview:
          "Beam Buddy is a kid-friendly flashlight designed specifically for 6-year-old children. Created as part of a design challenge to build a functional, appealing, and durable product for a young demographic, the concept centered around ease of use, child-safe materials, and playful aesthetics.",
      problem:
          "Traditional flashlights are often too bulky, fragile, or unintuitive for young children. The goal of this project was to develop a flashlight that children could easily grasp, operate, and enjoy—while also withstanding rough handling and maintaining its functionality.",

      //solution
      solution: {
          title: "Solution",
          sections: [
              {
                  body: "We developed Beam Buddy, a flashlight inspired by the shape and ergonomics of a child’s toy camera. The design focused on three key aspects:",
                  bullets: [
                      <>
                          <strong>Form Factor:</strong> Easy-to-hold shape for small hands, and easy-to-use with intuitive pointing and a large “on/off” button.
                      </>,
                      <>
                          <strong>Material Choices:</strong> Durable, child-safe, and visually engaging.
                      </>,
                      <>
                          <strong>Playful Aesthetic:</strong> Bright colours and a friendly, approachable design.
                      </>,
                  ],
              },
          ],
      },


      images: [
          "/calexis-mockup.png?height=600&width=400",
          "/placeholder.svg?height=600&width=400",
          "/placeholder.svg?height=600&width=400",
          "/placeholder.svg?height=400&width=800",
      ],
      //results: [
      //    "40% increase in user engagement",
      //    "60% improvement in budget completion rates",
      //    "4.8/5 App Store rating",
      //    "Featured in Apple's 'Apps We Love'",
      //],
      //Next Project
      nextProject: "calexis-app",

      //contribution
      contribution: {
          title: "My Contribution",
          sections: [
              {
                  heading: "Discovery & Research",
                  bullets: [
                      "Creating a relevant 6-year old persona to document our research and craft the typical user of this product.",
                      "Analyzed toy safety standards and common material choices in children's products to ensure the design was durable and child-safe.",
                      "Researched similar products, including toy cameras and handheld electronics, to inspire intuitive interaction patterns.",
                  ],
              },
              {
                  heading: "Design",
                  bullets: [
                      "Created multiview sketches to visualize form and construction details.",
                      "Built a refined 3D-rendered version for final presentation, integrating illustration and storytelling to highlight key product features.",
                  ],
              },
          ],
      },

      projectedResults: [
          <>
              <strong>Child-friendly Interface:</strong> The camera-inspired design makes it easier for children to intuitively aim and use the flashlight and may even spark their interest in photogrpahy.
          </>,
          <>
              <strong>Improved Durability:</strong> Thoughtful material selection ensures the product can withstand drops and rough play.
          </>,
          <>
              <strong>Appealing Aesthetic:</strong> Simple and colourful design encourages frequent use by children.
          </>,
      ],

      keyTakeaways: [
          "Researching about the tendencies of your user requires special attention to ergonomics, simplicity, and safety.",
          "Constructing a 3D rendered version of the product is an effective strategy for visualizing an idea.",

      ],
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
                          <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transform hover:scale-110 transition-transform duration-200 px-3 py-2 rounded-md">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-5 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
              <span>{project.year}</span>
              <span>•</span>
              <span>{project.duration}</span>
              <span>•</span>
              <span>{project.company}</span>
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
                          <p className="text-gray-600 font-light">{project.team}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-2 uppercase tracking-wide">Duration</h3>
                          <p className="text-gray-600 font-light">{project.duration}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-2 uppercase tracking-wide">Role</h3>
                          <p className="text-gray-600 font-light">{project.role}</p>
            </div>
          </div>


          <div className="space-y-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">Overview</h2>
                  <p className="text-gray-600 text-lg leading-relaxed font-light">{project.overview}</p>
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


            <div>
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">The Problem</h2>
              <p className="text-gray-600 text-lg leading-relaxed font-light">{project.problem}</p>
            </div>

                      {/*Solutions*/}
                      {project.solution?.sections && (
                          <div>
                              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
                                  {project.solution.title}
                              </h2>
                              <div className="space-y-10">
                                  {project.solution.sections.map((section, idx) => (
                                      <div key={idx}>
                                          <p className="text-gray-600 text-lg leading-relaxed font-light">{section.body}</p>
                                          <ul className="list-disc text-lg text-gray-600 space-y-1 pl-4 mt-4 font-light">
                                              {section.bullets.map((item, i) => (
                                                  <li key={i}>{item}</li>
                                              ))}
                                          </ul>
                                      </div>
                                  ))}
                              </div>
                          </div>
                      )}

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

                      {/*Contributions*/}
                      {project.contribution?.sections && (
                          <div>
                              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
                                  {project.contribution.title}
                              </h2>
                              <div className="space-y-10">
                                  {project.contribution.sections.map((section, idx) => (
                                      <div key={idx}>
                                          <h4 className="text-xl md:text-2xl text-gray-800 font-light mb-2">{section.heading}</h4>
                                          <ul className="list-disc text-lg text-gray-600 space-y-1 pl-4 font-light">
                                              {section.bullets.map((item, i) => (
                                                  <li key={i}>{item}</li>
                                              ))}
                                          </ul>
                                      </div>
                                  ))}
                              </div>
                          </div>
                      )}



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

                      {/* Projected Results */}
                      {project.projectedResults && (
                          <div>
                              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">Projected Results</h2>
                              <ul className="list-disc text-gray-600 text-lg space-y-2 pl-4 font-light">
                                  {project.projectedResults.map((item, i) => (
                                      <li key={i}>{item}</li>
                                  ))}
                              </ul>
                          </div>
                      )}


                      {/* Results */}
                      {project.results && (
                          <div>
                              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">Results</h2>
                              <ul className="list-disc text-gray-600 text-lg space-y-2 pl-4 font-light">
                                  {project.results.map((item, i) => (
                                      <li key={i}>{item}</li>
                                  ))}
                              </ul>
                          </div>
                      )}


                      {/* KeyTakeaways */}
                      {project.keyTakeaways && (
                          <div>
                              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">Key Takeaways</h2>
                              <ul className="list-disc text-gray-600 text-lg space-y-2 pl-4 font-light">
                                  {project.keyTakeaways.map((item, i) => (
                                      <li key={i}>{item}</li>
                                  ))}
                              </ul>
                          </div>
                      )}

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




      {/* Results
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
          */}

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
