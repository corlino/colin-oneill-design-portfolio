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

export default function CalexisProjectPage() {

    return (
        <div className="bg-white min-h-screen pb-20">

            {/* FULL-WIDTH HERO IMAGE */}
            <div className="w-full top-0 left-0 right-0 mb-16">
                <Image
                    src="/calexisproject/calexisHeroImage.png"
                    alt="Calexis chatbot interface"
                    title="Calexis chatbot high-level designs"
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
                    Calexis Chatbot
              </h1>

                <p className="text-gray-700 mb-6 max-w-3xl">
                    Simplifying IT request workflow and onboarding with an AI chatbot tool.
              </p>

                <div className="text-gray-700 text-sm mb-10 space-y-1">
                    <p><span className="font-semibold">Duration:</span> January – June</p>
                    <p><span className="font-semibold">Role:</span> UX/UI Designer</p>
                </div>

                <div className="w-full h-px bg-gray-200 my-16"></div>

                {/* CONTEXT */}
                <section className="mb-16">
                    <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">CONTEXT</h2>
                    <h3 className="text-2xl font-medium text-gray-900 mb-4">
                        Advance IT request management at Fraser Health
                  </h3>

                    <p className="text-gray-700 leading-relaxed">
                        The Advance IT team at Fraser Health manages requests from staff regarding the Meditech Expanse platform, which supports healthcare information systems and data management.
                  </p>

                    <p className="mt-4 text-gray-700 leading-relaxed">
                        The team supports a wide range of inquiries related to system functionality, onboarding, and troubleshooting, all of which require quick access to accurate and up-to-date documentation.
                  </p>
                </section>

                <div className="w-full h-px bg-gray-200 my-16"></div>

                {/* PROBLEM */}
                <section className="mb-16">
                    <div className="grid md:grid-cols-2 gap-8">

                        <Image
                            src="/calexisproject/problem.png"
                            alt="Advance IT support user flow"
                            title="Advance IT Support Team User Flow"
                            width={800}
                            height={600}
                            className="w-full rounded-lg object-cover"
                        />

                        <div className="text-gray-700 space-y-4 leading-relaxed">
                            <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">PROBLEM</h2>
                            <h3 className="text-2xl font-medium text-gray-900 mb-6">
                                Fragmented tools slow down IT support
                          </h3>

                            <ul className="list-disc ml-4 space-y-1">
                                <li>High volume and complexity of IT support requests.</li>
                                <li>Manual searching through hundreds of pages of QRGs.</li>
                                <li>Support materials scattered across multiple websites.</li>
                                <li>The existing public chatbot offers limited scope and usefulness.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <div className="w-full h-px bg-gray-200 my-16"></div>

                {/* SOLUTION */}
                <section className="mb-16">
                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="text-gray-700 flex flex-col leading-relaxed">

                            <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">
                                SOLUTION
                          </h2>

                            <h3 className="text-2xl font-medium text-gray-900 mb-6">
                                A centralized AI-powered internal chatbot
                          </h3>

                            <ul className="list-disc ml-4 space-y-1 mb-10">
                                <li>LLM-powered search across QRGs and internal documentation.</li>
                                <li>Improved response time through conversational access to knowledge.</li>
                                <li>Extended functionality of the legacy AVA chatbot, scoped for internal IT use.</li>
                            </ul>

                        </div>

                        <Image
                            src="/calexisproject/solution.png"
                            alt="Advance IT support persona"
                            width={800}
                            height={600}
                            className="w-full rounded-lg object-cover"
                        />

                    </div>
                </section>

                <div className="w-full h-px bg-gray-200 my-16"></div>

                {/* RESEARCH & INSIGHTS */}
                <section className="mb-16">
                    <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">RESEARCH & INSIGHTS</h2>
                    <h3 className="text-2xl font-medium text-gray-900 mb-6">
                        Understanding IT workflows and support needs
                  </h3>

                    <ul className="list-disc ml-4 space-y-2 text-gray-700 leading-relaxed mb-10">
                        <li>Researched AI assistant interface best practices.</li>
                        <li>Conducted stakeholder interviews with Advance IT managers and specialists.</li>
                        <li>Audited the existing AVA chatbot to identify usability gaps.</li>
                    </ul>

                    <Image
                        src="/calexisproject/calexis-ufc.png"
                        alt="Advance IT user journey map"
                        title="Advance IT Support Team User Journey"
                        width={1400}
                        height={900}
                        className="w-full rounded-lg object-cover"
                    />
                </section>


                {/* Right-aligned stacked links */}
                <div className="flex flex-col items-end gap-2 mb-16">

                    <Link
                        href="/calexisproject/calexis-userpersona.png"
                        target="_blank"
                        className="flex items-center gap-1 text-blue-600 hover:underline"
                    >
                        <ArrowUpRight size={16} />
            Persona
        </Link>

                    <Link
                        href="/calexisproject/calexis-ujm.png"
                        target="_blank"
                        className="flex items-center gap-1 text-blue-600 hover:underline"
                    >
                        <ArrowUpRight size={16} />
            User Journey Map
        </Link>

                </div>

                {/* HOW MIGHT WE */}
                <section className="mb-16">
                    <h3 className="text-2xl font-medium text-gray-900 mb-6">
                        How Might We...
                  </h3>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="bg-blue-50 px-6 py-4 rounded-xl text-blue-900 shadow-sm">
                            …reduce time spent searching for support documentation?
                      </div>

                        <div className="bg-blue-50 px-6 py-4 rounded-xl text-blue-900 shadow-sm">
                            …improve response time for high-volume IT requests?
                      </div>

                        <div className="bg-blue-50 px-6 py-4 rounded-xl text-blue-900 shadow-sm">
                            …design an AI tool that integrates naturally into existing workflows?
                      </div>
                    </div>
                </section>

                <div className="w-full h-px bg-gray-200 my-16"></div>

                {/* IDEATION */}
                <section className="mb-16">
                    <div className="grid md:grid-cols-2 gap-8">

                    <div className="text-gray-700 leading-relaxed space-y-3 mb-12">
                        <h2 className="text-xs font-semibold tracking-widest text-gray-500">
                            IDEATION
                      </h2>

                        <h3 className="text-2xl font-medium text-gray-900">
                            Designing scalable AI-assisted support
                      </h3>

                        <ul className="list-disc ml-4 space-y-1">
                            <li>Conversational UI patterns for efficient information retrieval.</li>
                            <li>Clear citation and source referencing for trust and accuracy.</li>
                            <li>Flexible framework to support future expansion.</li>
                        </ul>
                        </div>

                        <Image
                            src="/calexisproject/ideation2.png"
                            alt="Improved high-fidelity designs"
                            width={1400}
                            height={900}
                            className="w-full rounded-lg object-cover"
                        />

                </div>
                    <div className="w-full space-y-12">
                        

                        <Image
                            src="/calexisproject/ideation.png"
                            alt="Improved high-fidelity designs"
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
                            src="/calexisproject/mockup.png"
                            alt="Final Calexis design"
                            title="Final Calexis Designs"
                            width={1400}
                            height={900}
                            className="w-full rounded-lg object-cover"
                        />

                        <div className="text-gray-700 leading-relaxed space-y-3">
                            <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">
                                FINAL DESIGN
                          </h2>

                            <h3 className="text-2xl font-medium text-gray-900 mb-6">
                                An AI chatbot embedded in daily IT workflows
                          </h3>

                            <ul className="list-disc ml-4 space-y-1">
                                <li>Integrated into Microsoft Teams for accessibility.</li>
                                <li>Context-aware responses powered by internal documentation.</li>
                                <li>Improved adoption through familiar tooling.</li>
                            </ul>
                        </div>
                    </div>


                    <div className="w-full mb-8">
                        <Image
                            src="/calexisproject/finaldesigns.png"
                            alt="Final system views"
                            title="Final Designs Overview and Drilldown"
                            width={1400}
                            height={900}
                            className="w-full object-cover"
                        />
                    </div>


                    <h3 className="text-2xl font-medium text-gray-900 mb-6">Projected Results</h3>

                    <div className="flex flex-col gap-4">
                        <div className="bg-white px-6 py-4 rounded-xl border-2 border-blue-500 shadow-sm text-center">
                            50% reduction in query resolution time.
                      </div>

                        <div className="bg-white px-6 py-4 rounded-xl border-2 border-blue-500 shadow-sm text-center">
                            Increased user satisfaction through faster access to information.
                      </div>

                        <div className="bg-white px-6 py-4 rounded-xl border-2 border-blue-500 shadow-sm text-center">
                            Scalable framework for future AI tools across Fraser Health.
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
                        This project reinforced the value of all-in-one platforms in streamlining workflows.
                        Designing effective AI tools requires strong UX foundations, reliable data, and close collaboration with IT and data teams to ensure real-world usefulness.
                  </p>
                </section>

                <div className="w-full h-px bg-gray-200 my-16"></div>


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
