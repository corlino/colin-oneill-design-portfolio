"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUp, ArrowUpRight } from "lucide-react"

export default function BeamBuddyProject() {
    return (
        <div className="bg-white min-h-screen">

            {/* Texture Overlay */}
            <div className="fixed inset-0 z-50 pointer-events-none">
                <Image
                    src="/texture4.png"
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
                    src="/pleachproject/pleachHeroImage.png"
                    alt="Pleach Platform Screens"
                    width={1440}
                    height={542}
                    className="w-full h-auto object-cover"
                />
            </div>

            <div className="max-w-8xl mx-auto px-8 pb-20">

                {/* Header */}
                <div className="text-gray-500 text-lg mb-4">
                    Simon Fraser University • 2023
        </div>

                <h1 className="text-4xl md:text-5xl font-semibold mb-6">
                    Beam Buddy
        </h1>

                <p className="text-xl text-gray-700 mb-10 max-w-3xl">
                    A flashlight toy designed for ease of use and to help alleviate fear of the dark.
        </p>

                <div className="text-gray-700 text-lg space-y-1 mb-16">
                    <p><strong>Duration:</strong> October – November</p>
                    <p><strong>Role:</strong> UX Designer, 3D Designer, Graphic Designer</p>
                    <p><strong>Team:</strong> 1 teammate</p>
                </div>

                <div className="w-full h-px bg-gray-200 my-16" />

                {/* Overview */}
                <section className="mb-16">
                    <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">OVERVIEW</h2>
                    <p className="text-lg text-gray-700 max-w-3xl">
                        Beam Buddy is a kid-friendly flashlight designed for children around the age of six.
                        Created as part of a design challenge, the project focused on ease of use, durability,
                        and playful aesthetics to encourage comfort and confidence in low-light environments.
          </p>
                </section>

                <div className="w-full h-px bg-gray-200 my-16" />

                {/* Problem */}
                <section className="mb-16 grid md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">PROBLEM</h2>
                        <h3 className="text-3xl font-medium mb-6">
                            Traditional flashlights aren’t designed for children
            </h3>

                        <ul className="text-lg text-gray-700 list-disc ml-5 space-y-2">
                            <li>Too bulky or heavy for small hands</li>
                            <li>Unintuitive switches and interactions</li>
                            <li>Fragile materials that break during play</li>
                        </ul>
                    </div>

                    <Image
                        src="/placeholder.jpg"
                        alt="Problem visual"
                        width={800}
                        height={600}
                        className="rounded-lg object-cover"
                    />
                </section>

                <div className="w-full h-px bg-gray-200 my-16" />

                {/* Solution */}
                <section className="mb-16 grid md:grid-cols-2 gap-8">
                    <Image
                        src="/placeholder.jpg"
                        alt="Solution visual"
                        width={800}
                        height={600}
                        className="rounded-lg object-cover"
                    />

                    <div>
                        <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">SOLUTION</h2>
                        <h3 className="text-3xl font-medium mb-6">
                            A playful, camera-inspired flashlight
            </h3>

                        <ul className="text-lg text-gray-700 list-disc ml-5 space-y-2">
                            <li>Easy-to-hold form designed for small hands</li>
                            <li>Large, intuitive on/off button</li>
                            <li>Durable and child-safe materials</li>
                            <li>Bright, friendly aesthetic</li>
                        </ul>
                    </div>
                </section>

                <div className="w-full h-px bg-gray-200 my-16" />

                {/* Research */}
                <section className="mb-16">
                    <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">RESEARCH</h2>
                    <h3 className="text-3xl font-medium mb-6">
                        Designing for ergonomics, safety, and confidence
          </h3>

                    <ul className="text-lg text-gray-700 list-disc ml-5 space-y-2 mb-10 max-w-3xl">
                        <li>Created a child persona to guide decision-making</li>
                        <li>Reviewed toy safety standards and materials</li>
                        <li>Analyzed similar products like toy cameras</li>
                    </ul>

                    <Image
                        src="/placeholder.jpg"
                        alt="Research diagram"
                        width={1400}
                        height={900}
                        className="rounded-lg mb-6"
                    />

                    {/* Keep these links as requested */}
                    <div className="flex flex-col items-end gap-2">
                        <Link
                            href="/edwtproject/Persona.png"
                            target="_blank"
                            className="flex items-center gap-1 text-blue-600 hover:underline"
                        >
                            <ArrowUpRight size={16} /> Persona
            </Link>

                        <Link
                            href="/edwtproject/UJM.png"
                            target="_blank"
                            className="flex items-center gap-1 text-blue-600 hover:underline"
                        >
                            <ArrowUpRight size={16} /> User Journey Map
            </Link>
                    </div>
                </section>

                <div className="w-full h-px bg-gray-200 my-16" />

                {/* Design */}
                <section className="mb-16">
                    <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">DESIGN</h2>
                    <h3 className="text-3xl font-medium mb-6">
                        From sketches to a 3D-rendered concept
          </h3>

                    <Image
                        src="/placeholder.jpg"
                        alt="Design sketches"
                        width={1400}
                        height={900}
                        className="rounded-lg mb-8"
                    />

                    <Image
                        src="/placeholder.jpg"
                        alt="Final 3D model"
                        width={1400}
                        height={900}
                        className="rounded-lg"
                    />
                </section>

                <div className="w-full h-px bg-gray-200 my-16" />

                {/* Projected Results */}
                <section className="mb-16">
                    <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">PROJECTED RESULTS</h2>

                    <div className="flex flex-col gap-4 max-w-3xl">
                        <div className="border rounded-xl px-6 py-4 text-lg">
                            Child-friendly interface that encourages intuitive use
            </div>
                        <div className="border rounded-xl px-6 py-4 text-lg">
                            Improved durability for rough play
            </div>
                        <div className="border rounded-xl px-6 py-4 text-lg">
                            Appealing aesthetic that promotes frequent engagement
            </div>
                    </div>
                </section>

                <div className="w-full h-px bg-gray-200 my-16" />

                {/* Reflection */}
                <section className="mb-16">
                    <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">REFLECTION</h2>
                    <h3 className="text-3xl font-medium mb-4">Key Takeaways</h3>

                    <ul className="text-lg text-gray-700 list-disc ml-5 space-y-2 max-w-3xl">
                        <li>Designing for children requires extra attention to ergonomics and safety</li>
                        <li>3D rendering is invaluable for communicating product intent</li>
                    </ul>
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
                    <p>© 2026 Colin O&apos;Neill. All rights reserved.</p>
                </div>
            </footer>

        </div>
    )
}
