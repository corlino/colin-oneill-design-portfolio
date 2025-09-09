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
    subtitle: "Simplifying IT request workflow and onboarding with an AI chatbot tool.",
    year: "2025",
    company: "Fraser Health Authority",
    duration: "January - June",
    role: "UX/UI Designer",
    team: "Managing Consultant, Data Engineers, Data Analyst, Data Scientists",
    tags: ["Chatbot", "AI LLM", "Machine Learning Tool"],
    overview:
      "The Advance IT team at Fraser Health manages requests from staff regarding the Meditech Expanse platform, which is a tool that supports healthcare information systems and manages data.",
    problem:
      "The Advance IT team at Fraser Health faces significant challenges due to the high volume and complexity of IT support requests. To find solutions, staff must manually search through numerous Quick Reference Guides that span hundreds of pages, consult scattered source materials across various support websites, or use a public-facing chatbot which offers only a narrow scope of support.",

        //solution
        solution: {
            title: "Solution",
            sections: [
                {
                    body: "The client requested a new AI chatbot tool, called Calexis, to be a centralized internal platform that uses LLM-powered search to:",
                    bullets: [
                        "Aggregate QRGs, documentation, and Advance-related support material.",
                        "Provide user-friendly features that support improved response time.",
                        "Extend the scope of the legacy Advance Virtual Assistant(AVA) chatbot, but limit use to the internal IT team.",
                    ],
                },
            ],
        },


        images: [
            
            {
                src: "/calexis-userflow.png?height=600&width=400",
                description: "Advance IT Support Team User Flow Chart"
            },
            {
                src: "/calexis-userjourney.png?height=400&width=800",
                description: "Advance IT Support Team User Journey Map"
            },

            {
                src: "/calexis-persona.png?height=400&width=800",
                description: "Persona of an Advance IT Support Specialist"
            },
            {
                src: "/calexis-wireframes.png?height=600&width=400",
                description: "Initial Wireframe Designs"
            },

            {
                src: "/calexis-initialdesigns.png?height=600&width=400",
                description: "Initial High-Fidelity Designs"
            },
            {
                src: "/calexis-initialdesigns2.png?height=600&width=400",
                description: "Improved High-Fidelity Design"
            },
            {
                src: "/calexis-finaldesign2.png?height=600&width=400",
                description: "Final Hi-Fidelity Designs, Shifting from Web App to MS Teams App"
            },
            {
                src: "/calexis-finaldesign.png?height=600&width=400",
                description: "Final Design Mockup"
            },
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
                    "Conducted research on AI assistant interface best practices and features.",
                    "Stakeholder interviews with Advance IT managers and specialists to understand their workflow and pain points.",
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
            "All-in-one platforms are intuitive and can significantly streamline staff workflows.",
            "For AI chat tools to be effective, they must have user-friendly design and strong supporting features.",
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
          "The Fraser Health Quality Team is responsible for managing patient safety data and quality of care within the healthcare network. This information is shared site teams and used to drive discussions on improving safety practices.",
      problem:
          "The Patient Safety Learning System (PSLS) is a tool used by the Fraser Health Quality Team to manage patient safety reports. Most reported incidents fall under harm levels 1 to 3 involving no harm, minor harm, and moderate harm events. These are often overlooked, as the team tends to prioritize level 4 and 5 incidents involving Severe Harm or Death. The problem with this is that the organization of these low harm events are not intuitive resulting in reports going unaddressed for prolonged periods of time, and trends have shown that some low harm events have escalated to high harm.",

      //solution
      solution: {
          title: "Solution",
          sections: [
              {
                  body: "The Patient Safety Learning System Platform is a new tool that would access the reporting data from the legacy system and move the approach for addressing patient safety concerns from reactive to proactive.",
                  bullets: [
                      "Provides an AI Theming feature which would categorize the numerous amount of low and high harm reports.",
                      "A report-generating wizard that streamlines the report creation process and moves these to the site committees efficiently with user-friendly templates (Not included in MLP).",
                      "AI model that flags low-harm incidents with potential to escalate to high-harm incidents, encouraging early intervention.",
                  ],
              },
          ],
      },

      images: [
          {
              src: "/psls-mockup.png?height=600&width=400",
              description: "Final Minimum Lovable Product Mockup"
          },
          {
              src: "/psls-userflow.png?height=600&width=400",
              description: "Quality Team Director User Flow Chart"
          },
          {
              src: "/psls-userjourneymap.png?height=600&width=400",
              description: "Quality Team Director User Journey Map"
          },
          {
              src: "/psls-persona.png?height=400&width=800",
              description: "Quality Team Director Persona"
          },
          {
              src: "/psls-initialwireframes.png?height=600&width=400",
              description: "Initial Wireframes - Theming, Breakdown, Escalation"
          },
          {
              src: "/psls-mlpwireframe.png?height=600&width=400",
              description: "Revised Wireframes - Theming, Breakdown, Escalation"
          },
          {
              src: "/psls-finaldesigns.png?height=600&width=400",
              description: "Minimum Lovable Product High Fidelity Design"
          },
          {
              src: "/psls-mockup2.png?height=400&width=800",
              description: "Minimum Lovable Product High Fidelity Design Mockup"
          },
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
                      "Researched modern web application interfaces and intuitive AI analytics tools.",
                      "Organized stakeholder interviews with Quality team directors and coordinators to understand pain points and processes for generating reports and data utilization.",
                  ],
              },
              {
                  heading: "Design & Testing",
                  bullets: [
                      "Created wireframes and high-fidelity designs using Figma.",
                      "Interviewed Fraser Health Quality team members for feedback and validation.",
                      "Ran usability tests with Quality team members for further feedback and support.",
                  ],
              },
          ],
      },

      projectedResults: [
          <>
              <strong>Free up Resources:</strong> Quality team coordinators have more time to perform other tasks when they spend less of there day manually adjusting PSLS generated reports.
          </>,
          <>
              <strong>Improved Workflow:</strong> Organizing the harm events by theme can provide higher quality insights into drivers and areas affected.
          </>,
          <>
              <strong>Reactive to Proactive:</strong> By flagging low-harm events that could become a greater issue, teams can work quicker to address the problem before it escalates.
          </>,
      ],

      keyTakeaways: [
          "Designing for proactive action can shift how healthcare teams approach safety, moving from reacting to harmful events, towards preventing them.",
          "AI-powered categorization helps make sense of overwhelming data, enabling teams to focus on patterns and systemic issues.",
          "Close collaboration with stakeholders throughout the design process ensures the solution aligns with real-world needs.",

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
          "The Advance Analytics platform is a multi-page tool featuring a series of Power BI dashboards that visualizes data from key areas across the Fraser Health network. These dashboards focus on metrics that impact patient outcomes and are reviewed daily by healthcare staff and providers to monitor trends, identify anomalies, and uncover potential gaps in care.",
      problem:
          "The Advance Analytic Platform has proven to be a scalable product; however, the number of requests received from various networks across Fraser Health has exceeded our UX team’s workload capacity. We were not able to meet the demand for pages with the number of UX designers on the team, and when design and development is rushed, it becomes a struggle to follow best practices.",


      //solution
      solution: {
          title: "Solution",
          sections: [
              {
                  body: "The Advance Analytics Platform Figma UI Kit was intended to streamline the wireframing process, allowing our team to simply drag and drop charts into a template and use the properties to customize them as needed.",
                  bullets: [
                      "The UI kit provides a number of different graph styles for our team to use with customizable properties.",
                      "Ensuring low-fidelity designs are shown first to clients shifts the focus from design and colours to metrics and data.",
                      "Utilizing variables to switch from low to high fidelity instantly to get high quality designs to our client validation meetings more efficiently.",

                  ],
              },
          ],
      },

      images: [
          {
              src: "/aap-persona.png?height=400&width=800",
              description: "UX Team Persona"
          },
          {
              src: "/aap-userflow.png?height=600&width=400",
              description: "UX Team User Flow"
          },
          {
              src: "/aap-userjourneymap.png?height=600&width=400",
              description: "UX Team User Journey Map"
          },
          {
              src: "/aap-trailer.gif?height=600&width=400",
              description: "AAP UI Kit Summary"
          },
          {
              src: "/aap-examples.png?height=600&width=400",
              description: "Example Dashboards"
          },
          {
              src: "/aap-lohi.png?height=600&width=400",
              description: "Example Low Fidelity/High Fidelity Designs"
          },
          {
              src: "/aap-mockup.png?height=600&width=400",
              description: "AAP Full Template Mockup"
          },
          {
              src: "/aap-moleculardesign.png?height=400&width=800",
              description: "High Level View of Components Used"
          },
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
          "A modular graph system using 298 variants that allows our team to simply drag and drop components into the page template.",
          "Supported less experienced members on the team to learn figma and understand how variants and components work.",
          "It was an effective way of streamlining the wireframe building process, and moving from low to high fidelity designs instantly.",
      ],


      keyTakeaways: [
          "Advocating in our organization to upgrade our Figma accounts was valuable to our work and showed immediate return on investment.",
          "Currently we are still using this system as an quick and intuitive way to move wireframes to production efficiently.",
      ],
    },
  //BEAM BUDDY //////////////////////////////////////////////////////////////////////////
  "beam-buddy": {
    title: "Beam Buddy",
    subtitle: "A flashlight toy designed for ease of use and to help alleviate fear of the dark",
    year: "2023",
    company: "Simon Fraser University",
    duration: "October - November",
    role: "UX Designer, 3D Designer, Graphic Designer",
    team: "Teammate",
    tags: ["Product Design", "3D Design", "UX Research"],
      overview:
          "Beam Buddy is a kid-friendly flashlight designed for children around the age of 6. Created as part of a design challenge to build a functional, appealing, and durable product, the concept centered around ease of use, child-safe materials, and playful aesthetics.",
      problem:
          "Traditional flashlights are often too bulky, fragile, or unintuitive for young children. The goal of this project was to develop a flashlight that children could easily grasp, operate, and enjoy, while also being able to withstand rough handling.",

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
                          <strong>Material Choices:</strong> Durable and child-safe.
                      </>,
                      <>
                          <strong>Playful Aesthetic:</strong> Bright colours and a friendly, approachable design.
                      </>,
                  ],
              },
          ],
      },

      images: [
          {
              src: "/initialsketch.png?height=600&width=400",
              description: "Early Exploration Digital Sketches"
          },
          {
              src: "/initialsketch3.png?height=400&width=800",
              description: "3D Digital Sketches"
          },
          {
              src: "/persona.png?height=400&width=800",
              description: "Child User Persona"
          },

          {
              src: "/initialsketch2.png?height=400&width=800",
              description: "Multiview Digital Sketches"
          },

          {
              src: "/flashlightfinal.png?height=600&width=400",
              description: "Final 3D Modelled Concept"
          },
          {
              src: "/Toy2.png?height=600&width=400",
              description: "Final 3D Modelled Concept "
          },

          {
              src: "/poster.png?height=400&width=800",
              description: "Beam Buddy Poster with Details"
          },
          
          {
              src: "/FlashlightVideo.gif?height=400&width=800",
              description: "3D 360 Degree View"
          },
          
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
                      "Created a relevant child persona to document our research and craft the typical user of this product.",
                      "Analyzed toy safety standards and common material choices in children's products to ensure the design was durable and child-safe.",
                      "Researched similar products, including toy cameras and handheld electronics, to inspire intuitive interaction patterns.",
                  ],
              },
              {
                  heading: "Design",
                  bullets: [
                      "Created multiview sketches to visualize form and construction details.",
                      "Built a 3D-rendered version for final presentation, integrating illustrations for storytelling support and highlighting key product features.",
                  ],
              },
          ],
      },

      projectedResults: [
          <>
              <strong>Child-friendly Interface:</strong> The camera-inspired design makes it easier for children to intuitively aim and use the flashlight and may even spark an interest in photogrpahy.
          </>,
          <>
              <strong>Improved Durability:</strong> The thoughtful material selection ensures the product can withstand drops and rough play.
          </>,
          <>
              <strong>Appealing Aesthetic:</strong> Simple and colourful design would encourage frequent use by our users.
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
                          {project.images.slice(0, 2).map((img, index) => (
                              <button
                                  key={index}
                                  onClick={() => setActiveImage(img.src)}
                                  className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group"
                              >
                                  <Image
                                      src={img.src}
                                      alt={`${project.title} - Image ${index + 1}`}
                                      width={800}
                                      height={600}
                                      className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                                  />

                                  {/* Overlay with blur and description */}
                                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-center px-4">
                                      <p className="text-white text-lg font-light">{img.description}</p>
                                  </div>
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
                          {project.images.slice(2, 4).map((img, index) => (
                              <button
                                  key={index}
                                  onClick={() => setActiveImage(img.src)}
                                  className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group"
                              >
                                  <Image
                                      src={img.src}
                                      alt={`${project.title} - Image ${index + 1}`}
                                      width={800}
                                      height={600}
                                      className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                                  />

                                  {/* Overlay with blur and description */}
                                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-center px-4">
                                      <p className="text-white text-lg font-light">{img.description}</p>
                                  </div>
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
                          {project.images.slice(4, 6).map((img, index) => (
                              <button
                                  key={index}
                                  onClick={() => setActiveImage(img.src)}
                                  className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group"
                              >
                                  <Image
                                      src={img.src}
                                      alt={`${project.title} - Image ${index + 1}`}
                                      width={800}
                                      height={600}
                                      className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                                  />

                                  {/* Overlay with blur and description */}
                                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-center px-4">
                                      <p className="text-white text-lg font-light">{img.description}</p>
                                  </div>
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
                          {project.images.slice(6, 8).map((img, index) => (
                              <button
                                  key={index}
                                  onClick={() => setActiveImage(img.src)}
                                  className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group"
                              >
                                  <Image
                                      src={img.src}
                                      alt={`${project.title} - Image ${index + 1}`}
                                      width={800}
                                      height={600}
                                      className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                                  />

                                  {/* Overlay with blur and description */}
                                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-center px-4">
                                      <p className="text-white text-lg font-light">{img.description}</p>
                                  </div>
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
              View Next Project
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
