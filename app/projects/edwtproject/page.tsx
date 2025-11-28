"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ArrowLeft } from "lucide-react"


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
                  src="/edwtHeroImage.png"
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
          ED Wait Time Patient Experience Improvement
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
                          alt="ED website screenshot"
                          title="Current wait time interface"
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
                  <div className="w-full mb-16">
                      <Image
                          src="/edwtproject/Flowchart.png" // <-- replace with your actual path
                          alt="Research flow diagram"
                          width={1400}
                          height={900}
                          className="w-full rounded-lg object-cover"
                      />
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
                  <div className="grid md:grid-cols-2 gap-8">
                      <Image
                          src="/edwtproject/Wireframes.png"
                          alt="Wireframe"
                          title="Current wait time interface"
                          width={800}
                          height={600}
                          className="w-full rounded-lg object-cover"
                      />

                      <div className="text-gray-700 space-y-4 leading-relaxed">
                          <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">IDEATION</h2>
                          <h3 className="text-2xl font-medium text-gray-900 mb-6">Exploring best possible solutions</h3>
                              Improving the design with engaging insights

                          <ul className="list-disc ml-4 space-y-1">
                              <li>Collected inspiration from other competition and other health network ed services.</li>
                              <li>Consulted with data engineers about available data.</li>
                              <li>Worked with stakeholders to understand the volumes and trends among patients showing up in emergency departments and urgent care centres.</li>
                          </ul>
                      </div>
                  </div>
              </section>


              <div className="w-full h-px bg-gray-200 my-16"></div>



        {/* FINAL DESIGN */}
        <section className="mb-16">
          

          <div className="grid md:grid-cols-2 gap-8">
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
                          src="/edwtproject/FinalDesign1.png" // <-- replace with your actual path
                          alt="Research flow diagram"
                          width={1400}
                          height={900}
                          className="w-full rounded-lg object-cover"
                      />
                  </div>
                  <div className="w-full mb-16">

                  <Image
                      src="/edwtproject/FinalDesign2.png" // <-- replace with your actual path
                      alt="Research flow diagram"
                      width={1400}
                      height={900}
                      className="w-full rounded-lg object-cover"
                      />
                      </div>

                  {/* Projected Results */}
                  <h3 className="text-2xl font-medium text-gray-900 mb-6">Projected Results</h3>

                  <div className="flex flex-col gap-4">
                      <div className="bg-white px-6 py-4 rounded-xl border-2 border-blue-500 shadow-sm text-center mb-4">
                          Improve decision-making among patients looking for emergency care
    </div>

                      <div className="bg-white px-6 py-4 rounded-xl border-2 border-blue-500 shadow-sm text-center mb-4">
                          Provide meaningful CTAS indentification insights
                  </div>

                      <div className="bg-white px-6 py-4 rounded-xl border-2 border-blue-500 shadow-sm text-center mb-4">
                          Enhance Fraser Health patient satisfaction with the website service
    </div>
                      </div>
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
                title="View Calexis Chatbot Case Study"
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
