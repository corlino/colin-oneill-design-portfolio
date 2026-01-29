"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUp, ArrowUpRight } from "lucide-react"

export default function PocketWatchProject() {
    return (
        <div className="bg-white min-h-screen">

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
                            href="/projects/beambuddyproject"
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
                    src="/pocketwatchproject/pocketwatchHeroImage.png"
                    alt="Hero Image"
                    width={1440}
                    height={542}
                    className="w-full h-auto object-cover"
                />
            </div>

            <div className="max-w-8xl mx-auto px-8 pb-20">

                {/* Header */}
                <div className="text-gray-500 text-lg mb-4">
                    Personal Project • 2026
        </div>

                <h1 className="text-4xl md:text-5xl font-semibold mb-6">
                    Pocket Watch WIP
        </h1>

                <p className="text-xl text-gray-700 mb-10 max-w-3xl">
                    <strong>A mobile app concept designed to improve management and tracking of finances.</strong>
        </p>

                <div className="text-gray-700 text-lg space-y-1 mb-16">
                    <p><strong>Duration:</strong> December – January</p>
                    <p><strong>Role:</strong> UX/UI Designer, Graphic Designer</p>
                    <p><strong>Tools:</strong> Figma</p>
                </div>

                <div className="w-full h-px bg-gray-200 my-16" />

                {/* Overview */}
                <section className="mb-16">
                    <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">OVERVIEW</h2>
                    <h3 className="text-3xl font-medium mb-6">
                        Simple Fin-tech Solution
            </h3>
                    <p className="text-lg text-gray-700 max-w-3xl">
                        Pocket Watch is a concept mobile finance app designed to help people better understand their spending, budgets, and subscriptions in one place. I created this project as a product design case study to explore how financial data can be simplified without losing meaning. The work covers problem definition, competitive research, ideation, and high-fidelity UI designs.</strong>.
          </p>
                </section>

                <div className="w-full h-px bg-gray-200 my-16" />



                {/* Problem */}

            <section className="mb-16">
                    <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">OVERVIEW</h2>
                    <h3 className="text-3xl font-medium mb-6">
                    Keeping track of personal finances is harder than it should be
            </h3>
                    <p className="text-lg text-gray-700 max-w-3xl">
                    I’ve personally struggled with staying aware of recurring expenses and understanding where my money was going month to month. Many finance apps try to do everything at once, which often results in cluttered dashboards and confusing experiences that make users disengage instead of feel in control.</strong>.
          </p>
                </section>



                <div className="w-full h-px bg-gray-200 my-16" />

                {/* Research */}
                <section className="mb-16 grid md:grid-cols-2 gap-8">
                    <div>

                    <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">RESEARCH & IDEATION</h2>
                    <h3 className="text-3xl font-medium mb-6">
                        Initial ideas and why we pivoted
          </h3>

                    <ul className="text-lg text-gray-700 list-disc ml-5 space-y-2 mb-10 max-w-3xl">
                        <li>Initial sketches helped us move towards solution.</li>
                        <li>First impressions from users indicated designs seemed too sharp.</li>
                        <li>The scale of the toy seemed too small for kids, easy to drop, and easy to misplace.</li>
                    </ul>


                    <p className="text-lg text-gray-700 max-w-3xl">
                            Based on what we heard on our ideas, we needed to scale up our design, smooth the edges, and begin considering what materials may work best for the product.
          </p>

                        <div className="flex flex-col items-start gap-2 mt-1">
                            <Link
                                href="/beambuddyproject/persona.png"
                                target="_blank"
                                className="flex items-center gap-1 text-blue-600 hover:underline"
                            >
                                <ArrowUpRight size={16} /> Persona
            </Link>

                            <Link
                                href="/beambuddyproject/beambuddyposter.png"
                                target="_blank"
                                className="flex items-center gap-1 text-blue-600 hover:underline"
                            >
                                <ArrowUpRight size={16} /> Poster
            </Link>
                            </div>

                        <Image
                            src="/beambuddyproject/initialsketch.png"
                            alt="Research sketches"
                            width={1400}
                            height={900}
                            className="rounded-lg mb-6"
                        />
                        </div>

                    <Image
                        src="/beambuddyproject/initialsketch3.png"
                        alt="Research sketches"
                        width={1400}
                        height={900}
                        className="rounded-lg mb-6"
                    />

                    
                </section>

                <div className="w-full h-px bg-gray-200 my-16" />

                {/* Solution */}
                <section className="mb-16 grid md:grid-cols-2 gap-8">
                    <Image
                        src="/beambuddyproject/initialsketch2.png"
                        alt="Solution visual"
                        width={800}
                        height={600}
                        className="rounded-lg object-cover"
                    />

                    <div>
                        <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">SOLUTION</h2>
                        <h3 className="text-3xl font-medium mb-6">
                            A child-friendly light for comfort and creativity
            </h3>

                        <ul className="text-lg text-gray-700 list-disc ml-5 space-y-2">
                            <li>Smooth and easy-to-hold in small hands.</li>
                            <li>Intuitive on/off button that is simple and easy to access.</li>
                            <li>Designed with durable and child-safe materials.</li>
                            <li>Friendly aesthetic and colors invite users to interact.</li>
                            </ul>


                            <Image
                                src="/beambuddyproject/interactiondiagram.png"
                                alt="Solution visual"
                                width={800}
                                height={600}
                                className="rounded-lg object-cover"
                            />
                    </div>


                    


                </section>

                <div className="w-full h-px bg-gray-200 my-16" />

               

                {/* FINAL DESIGN */}
                <section className="mb-16">

                    <div className="grid md:grid-cols-2 gap-8 mb-8"> 
                        <div className="text-gray-700 leading-relaxed space-y-3">
                            <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">FINAL DESIGN</h2>
                            <h3 className="text-3xl font-medium text-gray-900 mb-6">The Beam Buddy is born</h3>
                         
                            <ul className="text-lg list-disc ml-4 space-y-1">
                                <li>Sleek design for comfort and long-lasting fun.</li>
                                <li>Camera-inspired design to encourage creativity and interest in photography.</li>
                                <li>High-contrast compnents for easy accessility.</li>
                                <li>Durable materials include, rubber, plastic, and polycarbonate.</li>
                            </ul>

                            <div className="w-full mb-8">
                                <Image
                                    src="/beambuddyproject/beambuddy-3d1.png"
                                    alt="Final Designs"
                                    width={1400}
                                    height={900}
                                    className="w-full rounded-lg object-cover"
                                />
                            </div>

                        </div>

                        <Image
                            src="/beambuddyproject/beambuddygif.gif"
                            alt="3D Gif"
                            width={1400}
                            height={900}
                            className="w-full rounded-lg object-cover"
                        />
                    </div>

                    

                    {/* Projected Goals */}
                    <h3 className="text-3xl font-medium text-gray-900 mb-6">Projected Results</h3>

                    <div className="flex flex-col gap-4">
                        <div className="text-lg bg-white px-6 py-4 rounded-xl border-2 border-blue-500 shadow-sm text-center">
                            Improved nighttime comfort for children who are adventurous but experience nyctophobia.
    </div>

                        <div className="text-lg bg-white px-6 py-4 rounded-xl border-2 border-blue-500 shadow-sm text-center">
                            Increased creative engagement and interest in the arts.
    </div>

                        <div className="text-lg bg-white px-6 py-4 rounded-xl border-2 border-blue-500 shadow-sm text-center">
                            Positive parent perception and word-of-mouth interest.
    </div>

                    </div>

                </section>



                <div className="w-full h-px bg-gray-200 my-16"></div>


                {/* Reflection */}
                <section className="mb-16">
                    <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">REFLECTION</h2>
                    <h3 className="text-3xl font-medium mb-4">Key Takeaways</h3>

                    <ul className="text-lg text-gray-700 list-disc ml-5 space-y-2 max-w-3xl">
                        <li>Designing for children requires extra attention to ergonomics, safety, and aesthetic.</li>
                        <li>Picking the right materials is especially important in it's appeal and durability.</li>
                        <li>Inspiring an interest in photography seemed less likely as we progressed, and any child that develops an interest in this hobby/profession after playing with Beam Buddy may be a coincidence.</li>

                    </ul>
                </section>

                {/* OTHER CASE STUDIES */}
                <section className="pt-10 border-t border-gray-200">
                    <h2 className="text-xl font-medium text-gray-900 mb-6">
                        Other Case Studies
          </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Link
                            href="/projects/pleachproject"
                            className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
                        >
                            <Image
                                src="/pleachtn.png"
                                alt="Project thumbnail"
                                width={800}
                                height={600}
                                className="object-cover w-full"
                            />
                            <div className="p-4 text-lg font-medium text-gray-800">
                                Pleach App
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
                                ED Wait Times Website Redesign
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
