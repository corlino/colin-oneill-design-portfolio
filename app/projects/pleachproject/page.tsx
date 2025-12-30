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

export default function PleachProject() {
    return (
        <div className="bg-white min-h-screen">

            <div className="fixed inset-0 z-50 pointer-events-none">
                <Image
                    src="/texture.jpg"
                    alt="Subtle texture overlay"
                    fill
                    className="object-cover opacity-5"
                    priority
                />
            </div>

            {/* Navigation */}
            <nav className="sticky top-0 left-0 right-0 z-40 px-8 relative backdrop-blur-md border-b border-gray-100">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/40" />

                <div className="relative max-w-8xl mx-auto py-3">
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            className="flex items-center space-x-3 transform transition-transform duration-200 hover:scale-110"
                        >
                            <div className="w-16 h-16 rounded-full overflow-hidden">
                                <Image
                                    src="/Logo.png?height=32&width=32"
                                    alt="Logo"
                                    width={32}
                                    height={32}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-xl font-medium text-gray-900">
                                Colin O&apos;Neill
              </span>
                        </Link>

                        <Link
                            href="/projects/pleachproject"
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
                    src="/pleach/pleach-hero.png"
                    alt="Pleach Platform Screens"
                    title="Pleach Compliance Workflow Prototype"
                    width={1440}
                    height={542}
                    className="w-full h-auto object-cover"
                />
            </div>

            <div className="max-w-8xl mx-auto px-8 pb-20">

                {/* HEADER TEXT */}
                <div className="mb-4 text-gray-500 text-lg">
                    Independent Product Prototype • 2025
        </div>

                <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-snug">
                    A human-in-the-loop compliance checklist platform for legal and case documentation
        </h1>

                <div className="text-lg text-gray-700 text-sm mb-10 space-y-1">
                    <p>
                        <span className="font-semibold">Status:</span> Early Prototype
          </p>
                    <p>
                        <span className="font-semibold">Role:</span> Product Design & UX
          </p>
                </div>

                <div className="w-full h-px bg-gray-200 my-16"></div>

                {/* CONTEXT */}
                <section className="mb-16">
                    <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">
                        CONTEXT
          </h2>
                    <h3 className="text-3xl font-medium text-gray-900 mb-4">
                        Reducing risk in document-heavy legal workflows
          </h3>

                    <p className="text-lg text-gray-700 leading-relaxed">
                        Pleach is a lightweight compliance platform where users purchase
                        credits to process case documents by drag-and-drop or email
                        forwarding. Based on the document type (initial filing, notice,
                        CMO, etc.), the tool generates a tailored checklist of compliance
                        rules and procedural requirements.
          </p>

                    <p className="text-lg mt-4 text-gray-700 leading-relaxed">
                        Checklists may be edited, expanded, or annotated by the user and
                        are stored for auditing — helping mitigate malpractice exposure and
                        ensuring teams maintain a defensible record of completed work.
          </p>
                </section>

                <div className="w-full h-px bg-gray-200 my-16"></div>

                {/* PROBLEM */}
                <section className="mb-16">
                    <div className="grid md:grid-cols-2 gap-8">
                        <Image
                            src="/pleach/current-workflow.png"
                            alt="Manual document workflow"
                            width={800}
                            height={600}
                            className="w-full rounded-lg object-cover"
                        />

                        <div className="text-gray-700 space-y-4 leading-relaxed">
                            <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">
                                PROBLEM
              </h2>
                            <h3 className="text-3xl font-medium text-gray-900 mb-6">
                                Compliance tracking is fragmented and difficult to audit
              </h3>

                            <ul className="text-lg list-disc ml-4 space-y-1">
                                <li>
                                    Checklists live across email threads, spreadsheets, and
                                    internal notes.
                </li>
                                <li>
                                    Document requirements change based on jurisdiction and filing
                                    type.
                </li>
                                <li>
                                    There is rarely a single authoritative record of work
                                    completed.
                </li>
                                <li>
                                    In malpractice reviews, task history is difficult to
                                    reconstruct.
                </li>
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
                                A credits-based HITL checklist system built around cases and documents
              </h3>

                            <ul className="text-lg list-disc ml-4 space-y-1 mb-10">
                                <li>
                                    Drag-and-drop or email-forward documents to generate compliance
                                    rules.
                </li>
                                <li>
                                    Human-in-the-loop validation ensures no automated output is
                                    applied blindly.
                </li>
                                <li>
                                    Users can edit, add, or annotate checklist items as work
                                    progresses.
                </li>
                                <li>
                                    Completed lists are preserved for auditing and legal defense.
                </li>
                            </ul>

                            <Image
                                src="/pleach/checklist-ui.png"
                                alt="Pleach checklist UI"
                                width={800}
                                height={600}
                                className="w-full rounded-lg object-cover"
                            />
                        </div>

                        <Image
                            src="/pleach/workspace.png"
                            alt="Pleach workspace mockup"
                            width={800}
                            height={600}
                            className="w-full rounded-lg object-cover"
                        />
                    </div>
                </section>

                <div className="w-full h-px bg-gray-200 my-16"></div>

                {/* RESEARCH & INSIGHTS */}
                <section className="mb-16">
                    <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">
                        RESEARCH & INSIGHTS
          </h2>
                    <h3 className="text-3xl font-medium text-gray-900 mb-6">
                        Understanding failure points in compliance workflows
          </h3>

                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Early interviews with legal and operations professionals surfaced
                        repeat risks in current workflows:
          </p>

                    <ul className="text-lg list-disc ml-4 space-y-2 text-gray-700 leading-relaxed mb-10">
                        <li>
                            Checklist work is distributed across tools and rarely centralized.
            </li>
                        <li>
                            Teams rely on institutional knowledge rather than explicit
                            procedure.
            </li>
                        <li>
                            Edge-case rules differ by document type and jurisdiction.
            </li>
                        <li>
                            HITL oversight is needed to ensure defensibility in legal contexts.
            </li>
                    </ul>

                    <Image
                        src="/pleach/flow-diagram.png"
                        alt="Pleach workflow diagram"
                        width={1400}
                        height={900}
                        className="w-full rounded-lg object-cover"
                    />
                </section>

                {/* HOW MIGHT WE */}
                <section className="mb-16">
                    <h3 className="text-3xl font-medium text-gray-900 mb-6">
                        How Might We...
          </h3>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="text-lg bg-blue-50 px-6 py-4 rounded-xl text-blue-900 shadow-sm">
                            …centralize checklist compliance around each case document?
            </div>

                        <div className="text-lg bg-blue-50 px-6 py-4 rounded-xl text-blue-900 shadow-sm">
                            …preserve a defensible audit record without burdening users?
            </div>

                        <div className="text-lg bg-blue-50 px-6 py-4 rounded-xl text-blue-900 shadow-sm">
                            …balance automation with explicit human oversight?
            </div>
                    </div>
                </section>

                <div className="w-full h-px bg-gray-200 my-16"></div>

                {/* FINAL DESIGN */}
                <section className="mb-16">
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <Image
                            src="/pleach/final-mockup.png"
                            alt="Pleach final mockup"
                            width={1400}
                            height={900}
                            className="w-full rounded-lg object-cover"
                        />

                        <div className="text-gray-700 leading-relaxed space-y-3">
                            <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">
                                PROTOTYPE
              </h2>

                            <h3 className="text-3xl font-medium text-gray-900 mb-6">
                                A lightweight HITL compliance workspace
              </h3>

                            <p>The working prototype includes:</p>

                            <ul className="text-lg list-disc ml-4 space-y-1">
                                <li>
                                    Credits-based document processing and upload workflow.
                </li>
                                <li>
                                    Editable, case-specific compliance checklists.
                </li>
                                <li>
                                    Persistent task history for later review or audit.
                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full mb-8">
                        <Image
                            src="/pleach/final-views.png"
                            alt="Pleach UI views"
                            width={1400}
                            height={900}
                            className="w-full object-cover"
                        />
                    </div>

                    <h3 className="text-3xl font-medium text-gray-900 mb-6">
                        Expected Impact
          </h3>

                    <div className="flex flex-col gap-4">
                        <div className="text-lg bg-white px-6 py-4 rounded-xl border-2 border-blue-500 shadow-sm text-center">
                            Reduced risk of missed procedural tasks.
            </div>

                        <div className="text-lg bg-white px-6 py-4 rounded-xl border-2 border-blue-500 shadow-sm text-center">
                            Clearer audit trails for malpractice investigations.
            </div>

                        <div className="text-lg bg-white px-6 py-4 rounded-xl border-2 border-blue-500 shadow-sm text-center">
                            Human-validated automation rather than full delegation to AI.
            </div>
                    </div>
                </section>

                <div className="w-full h-px bg-gray-200 my-16"></div>

                {/* KEY TAKEAWAYS */}
                <section className="mb-16">
                    <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">
                        KEY TAKEAWAYS
          </h2>
                    <h3 className="text-3xl font-medium text-gray-900 mb-4">
                        Reflection
          </h3>

                    <p className="text-lg mt-4 text-gray-700 leading-relaxed">
                        Pleach explores how compliance tooling can support — not replace —
                        professional judgment. By grounding the system in HITL review and
                        editable checklists, the prototype reinforces defensibility while
                        reducing manual overhead in document-heavy environments.
          </p>
                </section>

                {/* OTHER CASE STUDIES */}
                <section className="pt-10 border-t border-gray-200">
                    <h2 className="text-xl font-medium text-gray-900 mb-6">
                        Other Case Studies
          </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Link
                            href="/projects/calexisproject"
                            className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
                        >
                            <Image
                                src="/calexistn.png"
                                alt="Project thumbnail"
                                width={800}
                                height={600}
                                className="object-cover w-full"
                            />
                            <div className="p-4 text-lg font-medium text-gray-800">
                                Enhancing the way digital support teams respond to solutions
              </div>
                        </Link>

                        <Link
                            href="/projects/edwtproject"
                            className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
                        >
                            <Image
                                src="/edwttn.png"
                                alt="Project thumbnail"
                                width={800}
                                height={600}
                                className="object-cover w-full"
                            />
                            <div className="p-4 text-lg font-medium text-gray-800">
                                Improving the decision-making process for patients
              </div>
                        </Link>
                    </div>
                </section>
            </div>

            <footer className="py-12 bg-gray-50 border-t border-gray-100">
                <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
                    <p>© 2025 Colin O&apos;Neill. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
