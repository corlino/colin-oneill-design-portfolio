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
    <div className="bg-white min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">

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


              {/* FULL-WIDTH HERO IMAGE */}
              <div className="w-full mb-16">
                  <Image
                      src="/placeholder.png"
                      alt="ED Wait Time Screens"
                      title="High-level mockups of the ED Wait Times platform"
                      width={1440}
                      height={542}
                      className="w-full h-auto object-cover"
                  />
              </div>


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
            The Emergency Department (ED) Wait Times website—originally created and managed by the Vancouver
            Coastal Health design team—provides estimated wait times for hospitals and Urgent Primary Care Centres
            (UPCCs) across BC’s Lower Mainland.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Although the tool covers both Vancouver Coastal Health (VCH) and Fraser Health Authority (FHA) sites,
            the majority of content and design decisions are controlled by VCH. Fraser Health stakeholders expressed
            concerns that the system’s existing method for calculating and displaying wait times was unintentionally
            discouraging patients from visiting Fraser Health sites.
          </p>
        </section>

              <div className="w-full h-px bg-gray-200 my-16"></div>



        {/* PROBLEM */}
        <section className="mb-16">
          <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">PROBLEM</h2>
          <h3 className="text-2xl font-medium text-gray-900 mb-6">
            Patients are not going to the nearest emergency site
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                Local users become discouraged from visiting their nearest emergency or UPCC site when they see a high posted wait time.
              </p>
              <ul className="list-disc ml-4 space-y-1">
                <li>Facilities appear overwhelmed, even when they are not.</li>
                <li>The data is often unreliable and does not reflect actual experiences.</li>
              </ul>
            </div>

            <Image
              src="/placeholder.png"
              alt="ED website screenshot"
              title="Current wait time interface causing confusion"
              width={800}
              height={600}
              className="w-full rounded-lg object-cover shadow-sm"
            />
          </div>
        </section>

              <div className="w-full h-px bg-gray-200 my-16"></div>



        {/* SOLUTION BREAKDOWN */}
        <section className="mb-16">
          <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">SOLUTION BREAKDOWN</h2>
          <h3 className="text-2xl font-medium text-gray-900 mb-6">
            Improving the design with engaging insights
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>To support clearer, more realistic decision-making, Fraser Health leadership proposed an updated wait time model and several new data-driven features:</p>
              <ul className="list-disc ml-4 space-y-1">
                <li>Showcase a range of wait times rather than the 90th percentile.</li>
                <li>Include an hourly trend graph to give users a better understanding of patient volumes.</li>
                <li>Add Canadian Triage &amp; Acuity Scale (CTAS) graph to help users understand severity.</li>
                <li>Introduce a built-in CTAS Calculator that lets users assess themselves.</li>
              </ul>
            </div>

            <Image
              src="/placeholder.png"
              alt="Proposed visual designs"
              title="Proposed updated layout and data visualizations"
              width={800}
              height={600}
              className="w-full rounded-lg object-cover shadow-sm"
            />
          </div>
        </section>

              <div className="w-full h-px bg-gray-200 my-16"></div>


        {/* RESEARCH */}
        <section className="mb-16">
          <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">RESEARCH</h2>
          <h3 className="text-2xl font-medium text-gray-900 mb-6">
            Creating documentation based on research
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Fraser Health facilities often show very high estimated wait times on the website (often 3–5 hours).
            They represent the 90th percentile of wait times experienced by patients, which we believe is the reason
            patients are not seeking emergency medical attention immediately at their nearest site.
          </p>

          <ul className="list-disc ml-4 text-gray-700 leading-relaxed space-y-1 mb-8">
            <li>Spoke with users who had experience using the website during an emergency.</li>
            <li>Developed documentation about their experience of the platform.</li>
            <li>Worked with stakeholders to understand pain points.</li>
          </ul>

          <div className="grid md:grid-cols-2 gap-6">
            <Image
              src="/placeholder.png"
              alt="Research diagram 1"
              title="Research annotation and user documentation"
              width={800}
              height={600}
              className="rounded-lg shadow-sm w-full object-cover"
            />
            <Image
              src="/placeholder.png"
              alt="Research diagram 2"
              title="User journey visuals and system mapping"
              width={800}
              height={600}
              className="rounded-lg shadow-sm w-full object-cover"
            />
          </div>
              </section>


              <div className="w-full h-px bg-gray-200 my-16"></div>


        {/* RESEARCH ANALYSIS */}
        <section className="mb-16">
          <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">RESEARCH ANALYSIS</h2>
          <h3 className="text-2xl font-medium text-gray-900 mb-4">
            Users misinterpret the posted wait times
          </h3>

          <p className="text-gray-700 leading-relaxed">
            High numbers make high-stakes decisions quickly. Long numbers create anxiety and lead to avoidance of local facilities.
            The number behind the data is misleading. Users misinterpret the 90th percentile as a guarantee rather than an estimate.
            Graphical data improves perception and trust. Visual trends help users understand variability.
            CTAS is not widely understood by the public. Introducing it requires clear visual design and easy reading, not clinical jargon.
          </p>
              </section>


              <div className="w-full h-px bg-gray-200 my-16"></div>


        {/* IDEATION */}
        <section className="mb-16">
          <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">IDEATION</h2>
          <h3 className="text-2xl font-medium text-gray-900 mb-6">Exploring best possible solutions</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <Image
              src="/placeholder.png"
              alt="Ideation visuals"
              title="Early sketches and ideation for improved ED dashboard"
              width={800}
              height={600}
              className="rounded-lg shadow-sm w-full object-cover"
            />
            <Image
              src="/placeholder.png"
              alt="Ideation visuals"
              title="Concept exploration for CTAS and wait time graphs"
              width={800}
              height={600}
              className="rounded-lg shadow-sm w-full object-cover"
            />
          </div>
        </section>

              <div className="w-full h-px bg-gray-200 my-16"></div>



        {/* FINAL DESIGN */}
        <section className="mb-20">
          <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">FINAL DESIGN</h2>
          <h3 className="text-2xl font-medium text-gray-900 mb-6">New and improved dashboard design</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>The final solution delivered:</p>
              <ul className="list-disc ml-4 space-y-1">
                <li>Updated Fraser Health hospital ED and UPCC cards.</li>
                <li>Added an hourly graph based on historical wait time data.</li>
                <li>Canadian Triage &amp; Acuity Scale (CTAS) graph.</li>
                <li>CTAS Calculator tool.</li>
              </ul>
            </div>

            <Image
              src="/placeholder.png"
              alt="Final design mockups"
              title="High-fidelity mockups for redesigned ED wait time experience"
              width={800}
              height={600}
              className="rounded-lg shadow-sm w-full object-cover"
            />
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
