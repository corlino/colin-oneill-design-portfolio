"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ArrowLeft } from "lucide-react"
import { ArrowUpRight } from "lucide-react"


import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import MobileMenu from "@/components/MobileMenu"
import { useState } from "react";

export default function PSLSProjectPage() {

  

  return (
      <div className="bg-white min-h-screen pb-20">

          {/* FULL-WIDTH HERO IMAGE */}
          <div className="w-full top-0 left-0 right-0 mb-16">
              <Image
                  src="/pslsproject/pslsHeroImage.png"
                  alt="ED Wait Time Screens"
                  title="High-level mockups of the ED Wait Times platform"
                  width={1440}
                  height={542}
                  className="w-full h-auto object-cover"
              />
          </div>

      <div className="max-w-6xl mx-auto px-6">

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


              


              {/* HEADER TEXT */}
              <div className="mb-4 text-gray-500 text-sm">
                  Fraser Health Authority • 2025
        </div>

              <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 leading-snug">
                  Patient Safety Learning System (PSLS) Platform
        </h1>

              <div className="text-gray-700 text-sm mb-10 space-y-1">
                  <p><span className="font-semibold">Duration:</span> February – October</p>
                  <p><span className="font-semibold">Role:</span> UX/UI Designer</p>
              </div>

              <div className="w-full h-px bg-gray-200 my-16"></div>

              {/* CONTEXT */}
              <section className="mb-16">
                  <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">CONTEXT</h2>
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">Improving How Patient Safety Data is Used</h3>

                  <p className="text-gray-700 leading-relaxed">
                      Fraser Health’s Quality Team oversees the collection, analysis, and reporting of patient safety incidents across the health authority. These incidents—known as PSLS reports—provide critical insight into safety trends, recurring issues, and the drivers behind harm events.
          </p>

                  <p className="mt-4 text-gray-700 leading-relaxed">
                      While PSLS contains valuable information, the legacy system lacks modern usability, proactive insights, and automation. This created an opportunity to design a platform that enhances reporting workflows, reduces manual effort, and uses AI to identify emerging risks earlier.
          </p>
              </section>

              <div className="w-full h-px bg-gray-200 my-16"></div>


              {/* PROBLEM */}
              <section className="mb-16">
                  <div className="grid md:grid-cols-2 gap-8">

                      <div className="text-gray-700 space-y-4 leading-relaxed">
                          <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">PROBLEM</h2>
                          <h3 className="text-2xl font-medium text-gray-900 mb-6">
                              Valuable lower-harm incidents are being overlooked
              </h3>

                          <ul className="list-disc ml-4 space-y-1">
                              <li>The existing PSLS interface is outdated and requires significant manual work.</li>
                              <li>Most incidents fall under Harm Levels 1–3 but are deprioritized in favor of severe cases.</li>
                              <li>Teams often respond reactively instead of identifying early warning signs.</li>
                              <li>Report creation is slow, inconsistent, and requires manual theme extraction.</li>
                          </ul>
                      </div>

                      <Image
                          src="/placeholder.png"
                          alt="PSLS workflow visualization"
                          title="Current challenges with PSLS workflow"
                          width={800}
                          height={600}
                          className="w-full rounded-lg object-cover"
                      />
                  </div>
              </section>

              <div className="w-full h-px bg-gray-200 my-16"></div>


              {/* SOLUTION */}
              <section className="mb-16">
                  <div className="grid md:grid-cols-2 gap-8">

                      <Image
                          src="/placeholder.png"
                          alt="Proposed PSLS solutions"
                          width={800}
                          height={600}
                          className="w-full rounded-lg object-cover"
                      />

                      <div className="text-gray-700 space-y-4 leading-relaxed">
                          <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">SOLUTION</h2>
                          <h3 className="text-2xl font-medium text-gray-900 mb-6">
                              A proactive, AI-supported patient safety platform
              </h3>

                          <ul className="list-disc ml-4 space-y-1">
                              <li>AI Theming engine to categorize large volumes of safety reports.</li>
                              <li>A guided report-generation wizard for consistent, efficient reporting.</li>
                              <li>Risk-flagging system that identifies lower-harm events likely to escalate.</li>
                              <li>A modern, user-friendly dashboard for exploring safety trends.</li>
                          </ul>
                      </div>

                  </div>
              </section>

              <div className="w-full h-px bg-gray-200 my-16"></div>


              {/* RESEARCH & INSIGHTS */}
              <section className="mb-16">
                  <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">RESEARCH & INSIGHTS</h2>
                  <h3 className="text-2xl font-medium text-gray-900 mb-6">
                      Understanding workflows, pain points, and data patterns
          </h3>

                  <p className="text-gray-700 leading-relaxed mb-6">
                      Through stakeholder interviews, workflow observations, and interface reviews, several key insights emerged:
          </p>

                  <ul className="list-disc ml-4 space-y-2 text-gray-700 leading-relaxed mb-10">
                      <li>Coordinators spend hours manually reviewing and theming incidents.</li>
                      <li>Patterns across lower-harm events often go unnoticed until they escalate.</li>
                      <li>Committees need consistent, timely reporting packages.</li>
                      <li>The legacy interface slows down analysis and does not support proactive action.</li>
                  </ul>

                  <Image
                      src="/placeholder.png"
                      alt="Research diagrams"
                      width={1400}
                      height={900}
                      className="w-full rounded-lg object-cover"
                  />
              </section>

              <div className="w-full h-px bg-gray-200 my-16"></div>


              {/* HOW MIGHT WE */}
              <section className="mb-16">
                  <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">HOW MIGHT WE</h2>

                  <h3 className="text-2xl font-medium text-gray-900 mb-6">
                      Framing opportunities for proactive safety improvements
          </h3>

                  <div className="flex flex-col md:flex-row gap-4">
                      <div className="bg-blue-50 px-6 py-4 rounded-xl text-blue-900 shadow-sm">
                          …reduce the manual effort of reviewing safety events?
            </div>

                      <div className="bg-blue-50 px-6 py-4 rounded-xl text-blue-900 shadow-sm">
                          …identify early warning signs from lower-harm incidents?
            </div>

                      <div className="bg-blue-50 px-6 py-4 rounded-xl text-blue-900 shadow-sm">
                          …build trust in AI-generated insights for clinical teams?
            </div>
                  </div>
              </section>

              <div className="w-full h-px bg-gray-200 my-16"></div>


              {/* IDEATION */}
              <section className="mb-16">

                  <div className="grid md:grid-cols-2 gap-8 mb-8">

                      <Image
                          src="/placeholder.png"
                          alt="Ideation sketches"
                          width={1400}
                          height={900}
                          className="w-full rounded-lg object-cover"
                      />

                      <div className="text-gray-700 leading-relaxed space-y-3">
                          <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">
                              IDEATION
              </h2>

                          <h3 className="text-2xl font-medium text-gray-900 mb-6">
                              Exploring modern solutions for complex data
              </h3>

                          <p>Early concepts focused on:</p>

                          <ul className="list-disc ml-4 space-y-1">
                              <li>Dashboard layouts that improve data visibility.</li>
                              <li>Clear visualizations for incident trends and harm levels.</li>
                              <li>Ways to present AI-generated themes with transparency.</li>
                              <li>Guided workflows for report creation.</li>
                          </ul>
                      </div>

                  </div>

                  <div className="w-full mb-16">
                      <Image
                          src="/placeholder.png"
                          alt="Iterations"
                          width={1400}
                          height={900}
                          className="w-full rounded-lg object-cover"
                      />
                  </div>

              </section>

              <div className="w-full h-px bg-gray-200 my-16"></div>


              {/* FINAL DESIGN */}
              <section className="mb-16">

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div className="text-gray-700 leading-relaxed space-y-3">
                          <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">
                              FINAL DESIGN
              </h2>

                          <h3 className="text-2xl font-medium text-gray-900 mb-6">A modern AI-supported safety platform</h3>

                          <p>The final solution includes:</p>

                          <ul className="list-disc ml-4 space-y-1">
                              <li>AI-driven theming and trend detection.</li>
                              <li>Dashboard for exploring key safety insights.</li>
                              <li>Report wizard for streamlined committee workflows.</li>
                              <li>Risk flagging for proactive intervention.</li>
                          </ul>
                      </div>

                      <Image
                          src="/placeholder.png"
                          alt="Final design"
                          width={1400}
                          height={900}
                          className="w-full rounded-lg object-cover"
                      />
                  </div>

                  <div className="w-full mb-8">
                      <Image
                          src="/placeholder.png"
                          alt="Final system views"
                          width={1400}
                          height={900}
                          className="w-full object-cover"
                      />
                  </div>

                  <h3 className="text-2xl font-medium text-gray-900 mb-6">Projected Results</h3>

                  <div className="flex flex-col gap-4">
                      <div className="bg-white px-6 py-4 rounded-xl border-2 border-blue-500 shadow-sm text-center">
                          Reduced manual workload for Quality coordinators.
            </div>

                      <div className="bg-white px-6 py-4 rounded-xl border-2 border-blue-500 shadow-sm text-center">
                          Improved insights through automated AI-generated themes.
            </div>

                      <div className="bg-white px-6 py-4 rounded-xl border-2 border-blue-500 shadow-sm text-center">
                          Earlier identification of emerging safety risks.
            </div>
                  </div>

              </section>

              <div className="w-full h-px bg-gray-200 my-16"></div>


              {/* KEY TAKEAWAYS */}
              <section className="mb-16">
                  <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">
                      KEY TAKEAWAYS
          </h2>
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">Reflection</h3>

                  <p className="mt-4 text-gray-700 leading-relaxed">
                      Designing the PSLS Platform demonstrated how proactive safety approaches can shift organizational culture, helping teams move from reacting to harm toward preventing it.
                      This project reinforced the importance of trust in AI, thoughtful workflow design, and collaboration with subject matter experts to ensure tools fit real-world healthcare needs.
          </p>
              </section>


        {/* OTHER CASE STUDIES */}
        <section className="pt-10 border-t border-gray-200">
          <h2 className="text-xl font-medium text-gray-900 mb-6">Other Case Studies</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/projects/calexis-app"
              className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <Image
                src="/placeholder.png"
                alt="Project thumbnail"
                title="View Beam Buddy Case Study"
                width={800}
                height={600}
                className="object-cover w-full"
              />
              <div className="p-4 text-lg font-medium text-gray-800">Project Name</div>
            </Link>

            <Link
              href="/projects/psls-platform"
              className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <Image
                src="/placeholder.png"
                alt="Project thumbnail"
                title="View PSLS Platform Case Study"
                width={800}
                height={600}
                className="object-cover w-full"
              />
              <div className="p-4 text-lg font-medium text-gray-800">Project Name</div>
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
}
