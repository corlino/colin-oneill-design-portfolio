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
                            href="/projects/pocketwatchproject"
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
                    Pocket Watch Mobile App
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
                    <p className="text-lg text-gray-700">
                        Pocket Watch is a concept mobile finance app designed to help people better understand their spending, budgets, and subscriptions in one place. I created this project as a product design case study to explore how financial data can be simplified without losing meaning. The work covers problem definition, competitive research, ideation, and high-fidelity UI designs.
          </p>
                </section>

                <div className="w-full h-px bg-gray-200 my-16" />



                {/* Problem */}

            <section className="mb-16">
                    <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">PROBLEM</h2>
                    <h3 className="text-3xl font-medium mb-6">
                    Keeping track of personal finances is harder than it should be
            </h3>
                    <p className="text-lg text-gray-700">
                    I’ve personally struggled with staying aware of recurring expenses and understanding where my money was going month to month. Many finance apps try to do everything at once, which often results in cluttered dashboards and confusing experiences that make users disengage instead of feel in control.
          </p>
                </section>



                <div className="w-full h-px bg-gray-200 my-16" />

                {/* Research */}
                <section className="mb-16 grid md:grid-cols-2 gap-8">
                    <div>

                    <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">RESEARCH</h2>
                    <h3 className="text-3xl font-medium mb-6">
                    Reviewing existing market solutions
          </h3>

                        <p className="text-lg text-gray-700 max-w-3xl">
                            I reviewed several existing finance apps, including <strong>Mint, YNAB (You Need A Budget), and Wally</strong>. I looked closely at how these products present financial information, structure dashboards, and support budgeting behaviors. This process helped me identify component similarities and information hierarchy which shaped the direction of my design.
          </p>

                        <ul className="text-lg text-gray-700 list-disc ml-5 mt-2 space-y-2 mb-10 max-w-3xl">
                            <li>Mint automatically connects to thousands of banks to pull and categorize transactions, provides bill reminders, credit score monitoring, and gives a broad overview of financial health.</li>
                            <li>Wally combines automatic syncing with customizable budgets, multi-currency support, and receipt scanning to help users track spending and goals with flexibility and real-time insight.</li>
                            <li>YNAB centers around proactive, zero-based budgeting that encourages users to assign every dollar a job and teaches disciplined spending through its philosophy and educational resources.</li>
                            <li>Mint and YNAB are largely focused on automation and broad financial visibility and Wally blends automated tracking with goal-oriented tools.</li>

                        </ul>

                        </div>

                    <Image
                        src="/pocketwatchproject/competitors.png"
                        alt="Research sketches"
                        width={1400}
                        height={900}
                        className="rounded-lg mb-6 shadow-base"
                    />
                    
                </section>

                <div className="w-full h-px bg-gray-200 my-16" />


                {/* I&P */}
                <section className="mb-16">

                    <div className="grid md:grid-cols-2 gap-8 mb-8">

                        <Image
                            src="/pocketwatchproject/wireframes.png"
                            alt="Research sketches"
                            width={1400}
                            height={900}
                            className="rounded-lg mb-6 shadow-base"
                        />

                        <div className="text-gray-700 leading-relaxed space-y-3">

                        <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">IDEATION & PLANNING</h2>
                        <h3 className="text-3xl font-medium mb-6">
                            Site map and wireframes
          </h3>

                        <ul className="text-lg text-gray-700 list-disc ml-5 space-y-2 mb-10 max-w-3xl">
                            <li>Created initial site map to plan out the different screens and interactions.</li>
                            <li>Designed wireframes for layout reference.</li>
                        </ul>

                                <Image
                                    src="/pocketwatchproject/informationarchitecture.png"
                                    alt="Site map"
                                    width={1400}
                                    height={900}
                                    className="w-full rounded-lg object-cover mt-10"
                                />
       
                    </div>

                    
                </div>

                </section>

                <div className="w-full h-px bg-gray-200 my-16" />



                {/* Solution */}
                <section className="mb-16">

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="text-gray-700 leading-relaxed space-y-3">
                            <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">SOLUTION</h2>
                            <h3 className="text-3xl font-medium mb-6">
                                A simple manual approach to tracking transactions
            </h3>
                            <p className="text-lg text-gray-700 max-w-3xl">
                                Pocket Watch brings key financial information into a single, focused experience. The design emphasizes clear hierarchy, modern navigation, and a visual feedback that helps users quickly understand their financial situation. Rather than overwhelming users with raw data, the design highlights what matters most.
          </p>
                        </div>


                                <Image
                                    src="/pocketwatchproject/styling.png"
                                    alt="Site map"
                                    width={1400}
                                    height={900}
                                    className="w-full rounded-lg object-cover"
                                />


                        
                    </div>

                    <Image
                        src="/pocketwatchproject/mainpages.png"
                        alt="Wireframes"
                        width={1400}
                        height={900}
                        className="w-full rounded-lg object-cover shadow-base"
                    />

                <div className="w-full h-px bg-gray-200 my-16" />
                    </section>
               

                {/* FINAL DESIGN */}
                <section className="mb-16">

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="relative w-full max-w-md lg:max-w-lg aspect-square">

                        <video
                            src="/pocketwatchproject/PocketWatch.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                            />
                            </div>

                        <div className="text-gray-700 leading-relaxed space-y-3">
                            <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">FINAL DESIGN</h2>
                            <h3 className="text-3xl font-medium text-gray-900 mb-6">Pocket Watch offers control of your finances</h3>
                         
                            <p className="text-lg text-gray-700 max-w-3xl">
The final design uses a dark, teal-based color palette chosen to feel calm, trustworthy, and appropriate for frequent use. Teal tones were paired with subtle accent colors to separate categories and highlight important data without distracting from the content. Consistent components, spacing, and iconography were used across screens to create a cohesive and scalable system.          </p>

           
                        </div>

                        
                    </div>

            

                </section>



                <div className="w-full h-px bg-gray-200 my-16"></div>


                {/* Reflection */}
                <section className="mb-16">
                    <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">REFLECTION</h2>
                    <h3 className="text-3xl font-medium mb-4">Key Takeaways</h3>

                    <ul className="text-lg text-gray-700 list-disc ml-5 space-y-2">
                        <li><strong>Strengthened product thinking:</strong> This project enhanced my ability to prioritize and present complex, data-heavy information clearly, balancing user needs with business goals.</li>
                        <li><strong>Designing for real user behavior:</strong> I was reminded that effective interfaces are shaped by users interaction, emphasizing the value of problem definition and feedback ideation.</li>
                        <li><strong>Consistency and design systems:</strong> Following a design system reinforced the importance of maintaining visual and functional consistency, ensuring scalability and a cohesive user experience.</li>

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
                            href="/projects/beambuddyproject"
                            className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
                        >
                            <Image
                                src="/beambuddytn.png"
                                alt="Project thumbnail"
                                width={800}
                                height={600}
                                className="object-cover w-full"
                            />
                            <div className="p-4 text-lg font-medium text-gray-800">
                                Beam Buddy
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
