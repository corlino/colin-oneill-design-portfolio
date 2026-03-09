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
                    <p><strong>Role:</strong> Product Designer</p>
                    <p><strong>Tools:</strong> Figma</p>
                </div>

                <div className="w-full h-px bg-gray-200 my-16" />

                {/* Overview */}
                <section className="mb-16">
                    <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">EXECUTIVE SUMMARY</h2>
                    <h3 className="text-3xl font-medium mb-6">
                        Simple Fin-tech Solution
            </h3>
                    <p className="text-lg text-gray-700">
                        Pocket Watch is a concept mobile finance app designed to help people better understand their spending, budgets, and subscriptions in one place. I created this project as a product design case study to explore how financial data can be simplified without losing meaning. The work covers problem definition, competitive research, ideation, and high-fidelity designs.
          </p>

                    <div className="mt-10">

                        <div className="grid md:grid-cols-4 gap-4">
                            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                                <div className="text-xs font-semibold tracking-wider text-gray-500 mb-2">01</div>
                                <h5 className="text-base font-medium text-gray-900 mb-2">Define the problem</h5>
                                <p className="text-sm text-gray-700">
                                    Framed the core challenge around helping users understand their spending patterns and recurring expenses without dashboard overload.
                                </p>
                            </div>

                            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                                <div className="text-xs font-semibold tracking-wider text-gray-500 mb-2">02</div>
                                <h5 className="text-base font-medium text-gray-900 mb-2">Review competitors</h5>
                                <p className="text-sm text-gray-700">
                                    Audited Mint, YNAB, and Wally to compare hierarchy, budgeting features, and UI design patterns.
                                </p>
                            </div>

                            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                                <div className="text-xs font-semibold tracking-wider text-gray-500 mb-2">03</div>
                                <h5 className="text-base font-medium text-gray-900 mb-2">Map and structure</h5>
                                <p className="text-sm text-gray-700">
                                    Planned out the user journey and put together wireframes to inform a simple and clear navigation through all of the app's features.
                                </p>
                            </div>

                            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                                <div className="text-xs font-semibold tracking-wider text-gray-500 mb-2">04</div>
                                <h5 className="text-base font-medium text-gray-900 mb-2">Design the interface</h5>
                                <p className="text-sm text-gray-700">
                                    Translated the structure into polished screens with a consistent visual design system and clear application goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="w-full h-px bg-gray-200 my-16" />



                {/* Problem */}

            <section className="mb-16">
                    <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">PROBLEM SPACE</h2>
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

                    <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">COMPETITOR ANALYSIS</h2>
                    <h3 className="text-3xl font-medium mb-6">
                    Reviewing existing market solutions
          </h3>

                        <p className="text-lg text-gray-700 max-w-3xl">
                            I reviewed several existing finance apps, including <strong>Mint, YNAB (You Need A Budget), and Wally</strong>. The goal was to see how these products present financial information, structure dashboards, and support budgeting behaviors. This process helped me identify component similarities and information hierarchy which shaped the direction of my design.
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
                            className="rounded-lg mb-6"
                        />

                        <div className="text-gray-700 leading-relaxed space-y-3">

                        <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">IDEATION & PLANNING</h2>
                        <h3 className="text-3xl font-medium mb-6">
                            User flow and wireframes
          </h3>

                        <ul className="text-lg text-gray-700 list-disc ml-5 space-y-2 mb-10 max-w-3xl">
                            <li>Created initial user flow to plan out the different screens and interactions.</li>
                            <li>Designed wireframes for layout reference.</li>
                        </ul>

                            <div className="mt-4">

                                <Image
                                    src="/pocketwatchproject/informationarchitecture.png"
                                    alt="User flow map"
                                    width={1400}
                                    height={900}
                                    className="w-full rounded-lg object-cover mt-10"
                                />
       </div>
                    </div>

                    
                </div>

                </section>

                <div className="w-full h-px bg-gray-200 my-16" />

                {/* Design System */}
                <section className="mb-16">

                    {/* Section Intro */}
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-sm font-semibold tracking-widest text-gray-500 mb-4">
                            DESIGN SYSTEM
    </h2>

                        <h3 className="text-4xl font-semibold leading-tight mb-6">
                            Creating a scalable visual foundation
    </h3>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            To ensure consistency across the product, I developed a lightweight
                            design system that defined typography, color tokens, spacing rules,
                            and reusable UI components. This system allowed the interface to scale
                            quickly while maintaining clarity for financial data and dense
                            information displays.
    </p>
                    </div>



                    {/* SYSTEM FOUNDATIONS */}
                    <div className="grid md:grid-cols-2 gap-16 mb-24">

                        <div className="space-y-6">
                            <h4 className="text-2xl font-semibold">
                                System Foundations
      </h4>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                The design system is built on a small set of foundational tokens
                                that define the visual language of the interface.
      </p>
                            <ul className="text-lg text-gray-700 list-disc ml-5 space-y-2">
                                <li>Typography scale optimized for financial readability.</li>
                                <li>Color tokens for portfolio performance states.</li>
                                <li>8pt spacing system for layout rhythm.</li>
                                <li>Reusable card and chart components.</li>
                            </ul>

                         
                        </div>

                        <Image
                            src="/pocketwatchproject/styling.png"
                            alt="Pocketwatch design tokens and styling"
                            width={1400}
                            height={900}
                            className="rounded-xl shadow-sm"
                        />

                    </div>



                    {/* DESIGN TOKENS GRID */}
                    <div className="mb-28">

                        <h4 className="text-2xl font-semibold mb-8">
                            Design Tokens
    </h4>

                        <div className="grid md:grid-cols-3 gap-10">

                            <div className="space-y-4">
                                <h5 className="font-medium text-lg">Typography</h5>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    A structured typography scale improves readability for dense
                                    financial data and charts.
        </p>

                                <Image
                                    src="/pocketwatchproject/styling.png"
                                    alt="Typography scale"
                                    width={600}
                                    height={400}
                                    className="rounded-lg"
                                />
                            </div>


                            <div className="space-y-4">
                                <h5 className="font-medium text-lg">Color Tokens</h5>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Semantic color tokens communicate portfolio gains, losses,
                                    and neutral states.
        </p>

                                <Image
                                    src="/pocketwatchproject/styling.png"
                                    alt="Color tokens"
                                    width={600}
                                    height={400}
                                    className="rounded-lg"
                                />
                            </div>


                            <div className="space-y-4">
                                <h5 className="font-medium text-lg">Spacing</h5>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    An 8pt spacing system ensures visual rhythm and alignment
                                    across layouts and components.
        </p>

                                <Image
                                    src="/pocketwatchproject/styling.png"
                                    alt="Spacing scale"
                                    width={600}
                                    height={400}
                                    className="rounded-lg"
                                />
                            </div>

                        </div>

                    </div>



                    {/* COMPONENT SYSTEM */}
                    <div className="grid md:grid-cols-2 gap-16 items-center mb-28">

                        <div className="space-y-6">
                            <h4 className="text-2xl font-semibold">
                                Component Library
      </h4>

                            <p className="text-gray-700 leading-relaxed">
                                Reusable components were designed to standardize complex
                                financial interfaces including data cards, charts, and
                                portfolio summaries.
      </p>

                            <ul className="space-y-3 text-gray-700">

                                <li>• Portfolio performance cards</li>
                                <li>• Financial charts</li>
                                <li>• Asset tables</li>
                                <li>• Transaction summaries</li>

                            </ul>
                        </div>

                        <Image
                            src="/pocketwatchproject/styling.png"
                            alt="Component library"
                            width={1400}
                            height={900}
                            className="rounded-xl shadow-sm"
                        />

                    </div>

                </section>


                <div className="w-full h-px bg-gray-200 my-16" />

                {/* Solution */}
                <section className="mb-16">

                    <div className="mb-8">
                        <div className="text-gray-700 leading-relaxed space-y-3 max-w-4xl">
                            <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">
                                SOLUTION
    </h2>

                            <h3 className="text-3xl font-medium mb-6">
                                A simple manual approach to tracking transactions
    </h3>

                            <p className="text-lg text-gray-700">
                                Pocket Watch brings key financial information into a single, focused experience.
                                The design emphasizes clear hierarchy, modern navigation, and visual feedback that
                                helps users quickly understand their financial situation. Rather than overwhelming
                                users with raw data, the design highlights what matters most.
    </p>
                        </div>
                    </div>

                    <Image
                        src="/pocketwatchproject/mainpages.png"
                        alt="Wireframes"
                        width={1400}
                        height={900}
                        className="w-full rounded-lg object-cover"
                    />

                </section>


                <div className="w-full h-px bg-gray-200 my-16" />


                {/* FINAL DESIGN */}
                <section className="mb-16">

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="relative w-full max-w-md lg:max-w-lg aspect-square flex items-center justify-center mx-auto">
                        <video
                            src="/pocketwatchproject/PocketWatch.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-contain"
                            />
                            </div>

                        <div className="text-gray-700 leading-relaxed space-y-3">
                            <h2 className="text-base font-semibold tracking-widest text-gray-500 mb-3">FINAL DESIGN</h2>
                            <h3 className="text-3xl font-medium text-gray-900 mb-6">Pocket Watch offers control over your finances</h3>
                         
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
