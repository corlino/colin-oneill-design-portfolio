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

export default function EDWTProjectPage() {

  

  return (
      <div className="bg-white min-h-screen pb-20">

          {/* FULL-WIDTH HERO IMAGE */}
          <div className="w-full top-0 left-0 right-0 mb-16">
              <Image
                  src="/edwtproject/edwtHeroImage.png"
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
                  Improving the decision-making process for patients
        </h1>

        <div className="text-gray-700 text-sm mb-10 space-y-1">
          <p><span className="font-semibold">Duration:</span> August – November</p>
          <p><span className="font-semibold">Role:</span> UX/UI Designer</p>
        </div>

              <div className="w-full h-px bg-gray-200 my-16"></div>


        {/* CONTEXT */}
        <section className="mb-16">
          <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">CONTEXT</h2>
          <h3 className="text-2xl font-medium text-gray-900 mb-4">Healthcare in BC</h3>

          <p className="text-gray-700 leading-relaxed">
                      The Emergency Department Wait Times website is managed by Vancouver Coastal Health (VCH) technical teams. This tool provides estimated wait times for Emergency Departments (EDs) and Urgent Primary Care Centres (UPCCs) across BC’s Lower Mainland.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            While managed by VCH, they collaborate with Fraser Health Authority (FHA) sites to ensure BC’s residents have access to the most up to date wait time data. FHA stakeholders expressed concerns that the system’s existing method for calculating and displaying wait times was unintentionally discouraging patients from visiting sites.
          </p>
        </section>

              <div className="w-full h-px bg-gray-200 my-16"></div>



        {/* PROBLEM */}
        <section className="mb-16">
          

            <div className="grid md:grid-cols-2 gap-8">
            <div className="text-gray-700 space-y-4 leading-relaxed">

                          <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">PROBLEM</h2>
                          <h3 className="text-2xl font-medium text-gray-900 mb-6">
                              Patients are not going to the nearest emergency site
          </h3>
          
              <ul className="list-disc ml-4 space-y-1">
                <li>Local users become discouraged from visiting their nearest emergency or UPCC site when they see a high posted wait time.</li>
                <li>Facilities appear overwhelmed, even when they are not.</li>
                <li>The data is often unreliable and does not reflect actual experiences.</li>
              </ul>
            </div>

            <Image
              src="/edwtproject/Current.png"
              alt="ED website screenshot"
              title="Current wait time interface"
              width={800}
              height={600}
              className="w-full rounded-lg object-cover"
            />
          </div>
        </section>

              <div className="w-full h-px bg-gray-200 my-16"></div>              


        {/* SOLUTION BREAKDOWN */}
              <section className="mb-16">
                  <div className="grid md:grid-cols-2 gap-8">
                      <Image
                          src="/edwtproject/New.png"
                          alt="ED website new"
                          title="Proposed Designs"
                          width={800}
                          height={600}
                          className="w-full rounded-lg object-cover"
                      />

                      <div className="text-gray-700 space-y-4 leading-relaxed">
                          <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">SOLUTION BREAKDOWN</h2>
                          <h3 className="text-2xl font-medium text-gray-900 mb-6">
                              Improving the design with engaging insights
          </h3>

                          <ul className="list-disc ml-4 space-y-1">
                              <li>Showcase a range of wait times rather than the 90th percentile.</li>
                              <li>Include an hourly trend graph to give users a better understanding of patient volumes.</li>
                              <li>Add Canadian Triage &amp; Acuity Scale (CTAS) graph to help users understand severity.</li>
                              <li>Introduce a built-in CTAS Calculator that lets users assess themselves.</li>
                          </ul>
                      </div>
                  </div>
              </section>

              <div className="w-full h-px bg-gray-200 my-16"></div>


              {/* RESEARCH */}
              <section className="mb-16">
                  {/* Section Label */}
                  <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">
                      RESEARCH
    </h2>

                  {/* Title */}
                  <h3 className="text-2xl font-medium text-gray-900 mb-6">
                      ED wait times influence users’ decision–making
    </h3>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
                      Fraser Health facilities often show very high estimated wait times on the website
                      (often 3–5 hours). They represent the 90th percentile of wait times experienced by
                      patients, which we believe is the reason patients are not seeking emergency medical
                      attention immediately at their nearest site.
    </p>

                  {/* Bullet Points */}
                  <ul className="list-disc ml-5 text-gray-700 leading-relaxed space-y-2 mb-10">
                      <li>Spoke with users who had experience using the website in its current form during an emergency.</li>
                      <li>Developed documentation about the user experience of the platform to help drive insights.</li>
                      <li>Worked with stakeholders to understand pain points within.</li>
                  </ul>

                  {/* Diagram */}
                  <div className="w-full mb-4">
                      <Image
                          src="/edwtproject/Flowchart.png"
                          alt="Research flow diagram"
                          title="User flow chart"
                          width={1400}
                          height={900}
                          className="w-full rounded-lg object-cover"
                      />
                  </div>

                  {/* Right-aligned stacked links */}
                  <div className="flex flex-col items-end gap-2 mb-16">

                      <Link
                          href="/edwtproject/Persona.png"
                          target="_blank"
                          className="flex items-center gap-1 text-blue-600 hover:underline"
                      >
                          <ArrowUpRight size={16} />
            Persona
        </Link>

                      <Link
                          href="/edwtproject/UJM.png"
                          target="_blank"
                          className="flex items-center gap-1 text-blue-600 hover:underline"
                      >
                          <ArrowUpRight size={16} />
            User Journey Map
        </Link>

                  </div>

                  {/* Users Misinterpret... */}
                  <h3 className="text-2xl font-medium text-gray-900 mb-6">
                      Users misinterpret the posted wait times
    </h3>

                  <ul className="list-disc ml-5 text-gray-700 leading-relaxed space-y-2 mb-16">
                      <li>Users make high-stakes decisions quickly. Long numbers create anxiety and lead to avoidance of local facilities.</li>
                      <li>Context behind the number is missing. Users misinterpret the 90th percentile as a guarantee rather than an estimate.</li>
                  </ul>

                  {/* How Might We Cards */}
                  <h3 className="text-2xl font-medium text-gray-900 mb-6">How Might We…</h3>

                  <div className="flex flex-col md:flex-row gap-4">
                      <div className="bg-blue-50 px-6 py-4 rounded-xl text-blue-900 shadow-sm">
                          …better communicate the factors that influence wait times to patients?
        </div>

                      <div className="bg-blue-50 px-6 py-4 rounded-xl text-blue-900 shadow-sm">
                          …help patients make informed decisions about which facility meets their needs best?
        </div>

                      <div className="bg-blue-50 px-6 py-4 rounded-xl text-blue-900 shadow-sm">
                          …improve patient confidence in wait time accuracy?
        </div>
                  </div>
              </section>



              <div className="w-full h-px bg-gray-200 my-16"></div>


              {/* IDEATION */}
              <section className="mb-16">

                  {/* Top grid: text + image */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">

                      {/* Side image */}
                      <Image
                          src="/edwtproject/Wireframes.png"
                          alt="Ideation"
                          title="Wireframes"
                          width={1400}
                          height={900}
                          className="w-full rounded-lg object-cover"
                      />

                      {/* Text column */}
                      <div className="text-gray-700 leading-relaxed space-y-3">
                          <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">
                              IDEATION
      </h2>

                          <h3 className="text-2xl font-medium text-gray-900 mb-6">
                              Exploring early concepts and potential directions
      </h3>

                          <p>In this phase we began shaping how the dashboard could support clinicians and patients more effectively:</p>

                          <ul className="list-disc ml-4 space-y-1">
                              <li>Sketching UI options for triage clarity.</li>
                              <li>Mapping the user flow for hospital and UPCC selection.</li>
                              <li>Evaluating alternative visual layouts for wait time displays.</li>
                              <li>Early CTAS breakdown concepts and calculator placement.</li>
                          </ul>
                      </div>

                      

                  </div>

                  {/* Full-width image underneath */}
                  <div className="w-full mb-16">
                      <Image
                          src="/edwtproject/Iterations.png"
                          alt="Additional design concepts"
                          title="Iterations"
                          width={1400}
                          height={900}
                          className="w-full rounded-lg object-cover"
                      />
                  </div>

              </section>




              <div className="w-full h-px bg-gray-200 my-16"></div>






        {/* FINAL DESIGN */}
              <section className="mb-16">

                  <div className="grid md:grid-cols-2 gap-8 mb-8"> {/* increased mb to 8 */}
                      <div className="text-gray-700 leading-relaxed space-y-3">
                          <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">FINAL DESIGN</h2>
                          <h3 className="text-2xl font-medium text-gray-900 mb-6">New and improved dashboard design</h3>
                          <p>The final solution delivered:</p>
                          <ul className="list-disc ml-4 space-y-1">
                              <li>Updated Fraser Health hospital ED and UPCC cards.</li>
                              <li>Added an hourly graph based on historical wait time data.</li>
                              <li>Canadian Triage &amp; Acuity Scale (CTAS) graph.</li>
                              <li>CTAS Calculator tool.</li>
                          </ul>
                      </div>

                      <Image
                          src="/edwtproject/FinalDesign1.png"
                          alt="Mobile Designs"
                          width={1400}
                          height={900}
                          className="w-full rounded-lg object-cover"
                      />
                  </div>

                  {/* Add gap between the first block and the next image */}
                  <div className="w-full mb-8">
                      <Image
                          src="/edwtproject/FinalDesign2.png"
                          alt="Final Browser Designs"
                          width={1400}
                          height={900}
                          className="w-full object-cover"
                      />
                  </div>

                  {/* Projected Goals */}
                  <h3 className="text-2xl font-medium text-gray-900 mb-6">Projected Results</h3>

                  <div className="flex flex-col gap-4">
                      <div className="bg-white px-6 py-4 rounded-xl border-2 border-blue-500 shadow-sm text-center">
                          Ensure patients choose the best site that meets their needs and provides them with timely care.
    </div>

                      <div className="bg-white px-6 py-4 rounded-xl border-2 border-blue-500 shadow-sm text-center">
                          Provide meaningful CTAS identification insights to support patients' understanding of wait times.
    </div>
                  </div>

              </section>



              <div className="w-full h-px bg-gray-200 my-16"></div>


              {/* Reflection */}
              <section className="mb-16">
                  <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">REFLECTION</h2>
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">Key Takeaways</h3>

                  <p className="mt-4 text-gray-700 leading-relaxed"> The ED Wait Times website is a key tool that many of my friends and colleagues have used during times where they were having an emergency. While the work I did was for an already existing product, I found it to be a fulfilling experience improving the design of a platform that actively influences the lives of it's users. In the future it would be great for FHA to build a standalone tool for their own sites, but I admire the collaboration among health authorities and was happy to contribute.
 </p>
              </section>




        {/* OTHER CASE STUDIES */}
        <section className="pt-10 border-t border-gray-200">
          <h2 className="text-xl font-medium text-gray-900 mb-6">Other Case Studies</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/projects/calexisproject"
              className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
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
              href="/projects/pslsproject"
              className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <Image
                src="/pslstn.png"
                alt="Project thumbnail"
                title="View Case Study"
                width={800}
                height={600}
                className="object-cover w-full"
              />
              <div className="p-4 text-lg font-medium text-gray-800">Integrating AI with patient safety data to reduce harm</div>
            </Link>
          </div>
        </section>


              <footer className="py-12 bg-gray-50 border-t border-gray-100">
                  <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
                      <p>© 2025 Colin O'Neill. All rights reserved.</p>
                
                  </div>
              </footer>

      </div>
    </div>
  )
}
