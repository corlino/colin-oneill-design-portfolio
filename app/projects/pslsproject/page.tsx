"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ArrowLeft } from "lucide-react"
import { ArrowUpRight } from "lucide-react"
import { ArrowUp } from "lucide-react"


import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import MobileMenu from "@/components/MobileMenu"
import { useState } from "react";

export default function PSLSProjectPage() {

  return (
      <div className="bg-white min-h-screen">

          <div className="fixed inset-0 z-50 pointer-events-none">
              <Image
                  src="/texture3.png"
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
                      <Link href="/" className="flex items-center space-x-3 transform transition-transform duration-200 hover:scale-110">
                          <div className="w-16 h-16 rounded-full overflow-hidden">
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

                      <Link
                          href="/projects/pslsproject"
                          className="inline-flex items-center text-xl font-medium text-gray-600 hover:text-gray-900 transform hover:scale-110 transition-transform duration-200 px-3 py-2 rounded-md"
                      >
                          <ArrowUp className="h-4 w-4" />
                          <span className="ml-2 hidden md:inline">Back to Top</span>
                      </Link>



                  </div>
              </div>
          </nav>



          {/* FULL-WIDTH HERO IMAGE */}
          <div className="w-full top-0 left-0 right-0 mb-16">
              <Image
                  src="/pslsproject/pslsHeroImage.png"
                  alt="ED Wait Time Screens"
                  title="High-level mockups of the PSLS platform"
                  width={1440}
                  height={542}
                  className="w-full h-auto object-cover"
              />
          </div>

          <div className="max-w-8xl mx-auto px-8 pb-20">


             

              {/* HEADER TEXT */}
              <div className="mb-4 text-gray-500 text-lg">
                  Fraser Health Authority • 2025
        </div>

              <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-snug">
                  Integrating AI with patient safety data to reduce harm
        </h1>

              <div className="text-gray-700 text-lg mb-10 space-y-1">
                  <p><span className="font-semibold">Duration:</span> February – October</p>
                  <p><span className="font-semibold">Role:</span> UX/UI Designer</p>
              </div>

              <div className="w-full h-px bg-gray-200 my-16"></div>

              {/* CONTEXT */}
              <section className="mb-16">
                  <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">CONTEXT</h2>
                  <h3 className="text-3xl font-medium text-gray-900 mb-4">Patient safety and harm events</h3>

                  <p className="text-lg text-gray-700 leading-relaxed">
                      The Quality Team oversees the collection, analysis, and reporting of patient safety incidents across The Fraser Health Authority. Patient safety reports enable front-line staff to document any event that caused harm or had the potential to cause harm to a patient. This may be anything from an unsupervised fall to a delay in an individual's lab results.
   </p>

                  <p className="text-lg mt-4 text-gray-700 leading-relaxed">
The current tools allow the Quality team to view reporting data, pull specific reports, and identify areas for improvement, but the process remains highly manual. This gap created an opportunity to design a new solution that better organizes data, reduces manual effort, and provides clearer visibility into key areas of patient harm.
          </p>
              </section>

              <div className="w-full h-px bg-gray-200 my-16"></div>


              {/* PROBLEM */}
              <section className="mb-16">
                  <div className="grid md:grid-cols-2 gap-8">

                      <Image
                          src="/pslsproject/current.png"
                          alt="One of several patient safety dashboards"
                          title="Example patient safety dashboard"
                          width={800}
                          height={600}
                          className="w-full rounded-lg object-cover"
                      />

                      <div className="text-gray-700 space-y-4 leading-relaxed">
                          <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">PROBLEM</h2>
                          <h3 className="text-3xl font-medium text-gray-900 mb-6">
                              Valuable lower-harm incidents are being overlooked
              </h3>

                          <ul className="text-lg list-disc ml-4 space-y-1">
                              <li>The existing PSLS interface is outdated and requires significant manual work.</li>
                              <li>Most incidents fall under Harm Levels 1–3 but are deprioritized in favour of severe cases.</li>
                              <li>Teams often respond reactively instead of identifying early warning signs.</li>
                              <li>Report creation is slow, inconsistent, and requires manual theme extraction.</li>
                          </ul>
                      </div>

                      
                  </div>
              </section>

              <div className="w-full h-px bg-gray-200 my-16"></div>


              {/* SOLUTION */}
              <section className="mb-16">
                  <div className="grid md:grid-cols-2 gap-8">

                      <div className="text-gray-700 flex flex-col leading-relaxed">

                          <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">
                              SOLUTION
      </h2>

                          <h3 className="text-3xl font-medium text-gray-900 mb-6">
                              An AI-data-driven patient safety platform
      </h3>

                          <ul className="text-lg list-disc ml-4 space-y-1 mb-10">
                              <li>AI-theming engine to categorize large volumes of safety reports.</li>
                              <li>Instant access to low-harm and high-harm event metrics used to flag key areas.</li>
                              <li>A modern and user-friendly dashboard for exploring safety trends and themes.</li>
                          </ul>

                          <Image
                              src="/pslsproject/solution2.png"
                              alt="Proposed PSLS solutions"
                              width={800}
                              height={600}
                              className="w-full rounded-lg object-cover"
                          />

                      </div>

                      <Image
                          src="/pslsproject/solution.png"
                          alt="Proposed PSLS solutions"
                          title="Proposed PSLS solutions"
                          width={800}
                          height={600}
                          className="w-full rounded-lg object-cover"
                      />

                  </div>
              </section>



              <div className="w-full h-px bg-gray-200 my-16"></div>


              {/* RESEARCH & INSIGHTS */}
              <section className="mb-16">
                  <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">RESEARCH & INSIGHTS</h2>
                  <h3 className="text-3xl font-medium text-gray-900 mb-6">
Understanding workflows, pain points, and data patterns
          </h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Through stakeholder interviews, workflow observations, and iterative feedback, several key insights emerged:
          </p>

                  <ul className="text-lg list-disc ml-4 space-y-2 text-gray-700 leading-relaxed mb-10">
                      <li>Coordinators spend three weeks manually reviewing and generating monthly reports for each of the sites.</li>
                      <li>Patterns across lower-harm events may go unnoticed until resources are available to address them.</li>
                      <li>Site patient safety leadership committees need consistent and timely reporting packages.</li>
                      <li>The legacy interface slows down analysis and does not support proactive action.</li>
                  </ul>

                  <Image
                      src="/pslsproject/psls-flowchart.png"
                      alt="Research diagrams"
                      title="Flowchart"
                      width={1400}
                      height={900}
                      className="w-full rounded-lg object-cover"
                  />
              </section>

              {/* Right-aligned stacked links */}
              <div className="text-lg flex flex-col items-end gap-2 mb-16">

                  <Link
                      href="/pslsproject/psls-persona.png"
                      target="_blank"
                      className="flex items-center gap-1 text-blue-600 hover:underline"
                  >
                      <ArrowUpRight size={16} />
            Persona
        </Link>

                  <Link
                      href="/pslsproject/psls-ujm.png"
                      target="_blank"
                      className="flex items-center gap-1 text-blue-600 hover:underline"
                  >
                      <ArrowUpRight size={16} />
            User Journey Map
        </Link>

              </div>


              {/* HOW MIGHT WE */}
              <section className="mb-16">

                  <h3 className="text-3xl font-medium text-gray-900 mb-6">
                      How Might We...
          </h3>

                  <div className="flex flex-col md:flex-row gap-4">
                      <div className="text-lg bg-blue-50 px-6 py-4 rounded-xl text-blue-900 shadow-sm">
                          …reduce the manual effort of reviewing safety events?

            </div>

                      <div className="text-lg bg-blue-50 px-6 py-4 rounded-xl text-blue-900 shadow-sm">
                          …identify early warning signs from lower-harm incidents?
            </div>

                      <div className="text-lg bg-blue-50 px-6 py-4 rounded-xl text-blue-900 shadow-sm">
                          …harness an AI-driven solution to reevaluate patient safety insights for clinical teams?
            </div>
                  </div>
              </section>

              <div className="w-full h-px bg-gray-200 my-16"></div>


              {/* IDEATION */}
              <section className="mb-16">

                  <div className="text-gray-700 leading-relaxed space-y-3 mb-12">
                      <h2 className="text-base font-semibold tracking-widest text-gray-500">
                          IDEATION
    </h2>

                      <h3 className="text-3xl font-medium text-gray-900">
                          Exploring modern solutions for complex data
    </h3>

                      <p>Early concepts focused on:</p>

                      <ul className="text-lg list-disc ml-4 space-y-1">
                          <li>Dashboard layouts that improve data visibility.</li>
                          <li>Clear visualizations for incident trends and harm levels.</li>
                          <li>
                              System for flagging areas with potential for high-harm events to occur.
      </li>
                          <li>Guided workflows for report creation.</li>
                      </ul>
                  </div>

                  <div className="w-full space-y-12">
                      <Image
                          src="/pslsproject/initialwireframes.png"
                          alt="Ideation wireframes"
                          title="Iteration #1 and #2 Overview and Drilldown"
                          width={1400}
                          height={900}
                          className="w-full rounded-lg object-cover"
                      />

                      <Image
                          src="/pslsproject/wireframefull.png"
                          alt="Full wireframe"
                          title="Iteration #2 Extended"
                          width={1400}
                          height={900}
                          className="w-full rounded-lg object-cover"
                      />
             
                      <Image
                          src="/pslsproject/Ideation2.png"
                          alt="Ideations HiFi"
                          title="Initial High Fidelity Designs"
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

                      <Image
                          src="/pslsproject/finalmockup.png"
                          alt="Final design"
                          title="Final Design Mockup"
                          width={1400}
                          height={900}
                          className="w-full rounded-lg object-cover"
                      />

                      <div className="text-gray-700 leading-relaxed space-y-3">
                          <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">
                              FINAL DESIGN
              </h2>

                          <h3 className="text-3xl font-medium text-gray-900 mb-6">A modern AI-supported safety platform</h3>

                          <p>The final solution includes:</p>

                          <ul className="text-lg list-disc ml-4 space-y-1">
                              <li>AI-supported themes and sub-themes compiled from PSLS report data.</li>
                              <li>Data-driven dashboard for exploring different key harm areas.</li>
                              <li>Risk flagging for proactive intervention.</li>
                          </ul>
                      </div>

                      
                  </div>

                  <div className="w-full mb-8">
                      <Image
                          src="/pslsproject/finaldesigns.png"
                          alt="Final system views"
                          title="Final Designs Overview and Drilldown"
                          width={1400}
                          height={900}
                          className="w-full object-cover"
                      />
                  </div>

                  <h3 className="text-3xl font-medium text-gray-900 mb-6">Projected Results</h3>

                  <div className="flex flex-col gap-4">
                      <div className="text-lg bg-white px-6 py-4 rounded-xl border-2 border-blue-500 shadow-sm text-center">
                          Reduced manual workload for Quality coordinators.
            </div>

                      <div className="text-lg bg-white px-6 py-4 rounded-xl border-2 border-blue-500 shadow-sm text-center">
Improved insights through automated AI-generated themes and sub-themes.
            </div>

                      <div className="text-lg bg-white px-6 py-4 rounded-xl border-2 border-blue-500 shadow-sm text-center">
Earlier identification of emerging safety risks.
            </div>
                  </div>

              </section>

              <div className="w-full h-px bg-gray-200 my-16"></div>


              {/* KEY TAKEAWAYS */}
              <section className="mb-16">
                  <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">
                      KEY TAKEAWAYS
          </h2>
                  <h3 className="text-3xl font-medium text-gray-900 mb-4">Reflection</h3>

                  <p className="text-lg mt-4 text-gray-700 leading-relaxed">
                      Designing a patient safety platform demonstrated how approaching the problem of patient harm proactively might shift organizational culture, helping teams move from reacting to harm events toward preventing them.
                      This project reinforces trust in AI algorithms, not as a means to replace healthcare staff but to support their work and improve efficiency, leading to better quality care across the health authority. 
          </p>
              </section>


        {/* OTHER CASE STUDIES */}
        <section className="pt-10 border-t border-gray-200">
          <h2 className="text-xl font-medium text-gray-900 mb-6">Other Case Studies</h2>

          <div className="grid md:grid-cols-2 gap-6">
                      <Link
                          href="/projects/calexisproject"
                          className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
                      >
                          <Image
                              src="/calexistn.png"
                              alt="Project thumbnail"
                              title="View Case Study"
                              width={800}
                              height={600}
                              className="object-cover w-full"
                          />
                          <div className="p-4 text-lg font-medium text-gray-800">Enhancing the way digital support teams respond to solutions</div>
                      </Link>

                      <Link
                          href="/projects/edwtproject"
                          className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
                      >
                          <Image
                              src="/edwttn.png"
                              alt="Project thumbnail"
                              title="View Case Study"
                              width={800}
                              height={600}
                              className="object-cover w-full"
                          />
                          <div className="p-4 text-lg font-medium text-gray-800">Improving the decision-making process for patients</div>
                      </Link>
          </div>
        </section>


         

          </div>

          <footer className="py-12 bg-gray-50 border-t border-gray-100">
              <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
                  <p>© 2025 Colin O'Neill. All rights reserved.</p>

              </div>
          </footer>

    </div>
  )
}
