"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

import { ArrowRight, ArrowDown, ExternalLink, MessageCircleMore, ChevronLeft, ChevronRight, ScrollText } from "lucide-react";
import { Linkedin, Github } from "lucide-react";



import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import MobileMenu from "@/components/MobileMenu"
import { useEffect, useState } from "react";

const projects = [


    {
        id: "edwtproject",              // <-- MATCHES THE STATIC PAGE ROUTE
        isStatic: true,                 // <-- ADDED
        title: "ED Wait Times Website Redesign",
        description: "Improving the decision-making process for patients.",
        image: "/edwttn.png?height=400&width=600",
        tags: ["Figma", "Web Design", "Feature Design", "Data Visualization"],
        year: "2025",
        company: "Fraser Health Authority",
    },
    {
        id: "pslsproject",
        isStatic: true,
        title: "AI Patient Safety Platform",
        description:
            "Integrating AI with patient safety data to reduce harm.",
        image: "/pslstn.png?height=400&width=600",
        tags: ["Tailwind", "Healthcare", "Web Design", "Data Visualization"],
        year: "2025",
        company: "Fraser Health Authority",
    },


    {
        id: "calexisproject",
        isStatic: true,
        title: "Calexis AI Chatbot Teams App",
        description:
            "Enhancing the way digital support teams respond to solutions.",
        image: "/calexistn.png?height=400&width=600",
        tags: ["Chatbot", "AI LLM", "Machine Learning Tool"],
        year: "2025",
        company: "Fraser Health Authority",
    },



    //  {
    //  id: "calexis-app",
    //  title: "Calexis Chatbot",
    //      description: "Designed an AI-powered chatbot that automates IT support requests and streamlines employee onboarding. Simplified workflows, reduced ticket resolution time, and improved user satisfaction through conversational design and iterative testing.",
    //  image: "/calexis-mockup.png?height=400&width=600",
    //  tags: ["Chatbot", "AI LLM", "Machine Learning Tool"],
    //  year: "2025",
    //},

    //{
    //  id: "beam-buddy",
    //  title: "Beam Buddy",
    //    description: "Developed a user-centered flashlight that helps children feel safe and confident in the dark through ergonomic form, child-safe materials, and simplified interaction design that reduces cognitive effort.",
    //  image: "/flashlightfinal.png?height=400&width=600",
    //    tags: ["Product Design", "Flashlight", "3D Design", "UX Research"],
    //  year: "2023",
    //},
]

const projects2 = [


    {
        id: "pocketwatchproject",
        isStatic: true,
        title: "Pocket Watch Mobile App",
        description:
            "Concept designed to improve personal financial management.",
        image: "/pocketwatchtn.png?height=400&width=600",
        tags: ["Chatbot", "AI LLM", "Machine Learning Tool"],
        year: "2026",
        company: "Personal Project",
    },


    {
        id: "pleachproject",
        isStatic: true,
        title: "Pleach App",
        description:
            "Creating efficiency in the legal tech industry.",
        image: "/pleachtn.png?height=400&width=600",
        tags: ["Chatbot", "AI LLM", "Machine Learning Tool"],
        year: "2025",
        company: "Personal Project",
    },

    {
        id: "beambuddyproject",
        isStatic: true,
        title: "Beam Buddy",
        description:
            "A flashlight toy designed for an often-overlooked user group.",
        image: "/beambuddytn.png?height=400&width=600",
        tags: ["Chatbot", "AI LLM", "Machine Learning Tool"],
        year: "2023",
        company: "School Project",
    },

]




const skills = [
    "User Experience Design",
    "User Interface Design",
    "User Research",
    "Prototyping",
    "Wireframing",
    "Design Systems",
    "Usability Testing",
    "Information Architecture",
    "Interaction Design",
    "Product Design",
    "Figma",
    "3D Design",
    "Adobe Creative Suite",
    "Data Visualization",
    "Collaboration",
    "Heuristic Evaluation",
]

const heroCarouselItems = [
    {
        href: "/projects/pocketwatchproject",
        src: "/pocketwatchproject/feature.png",
        alt: "Project thumbnail",
    },
    {
        href: "/projects/pleachproject",
        src: "/pleachproject/feature.png",
        alt: "Pleach project thumbnail",
    },
    {
        href: "/projects/edwtproject",
        src: "/edwtproject/feature.png",
        alt: "ED Wait Times project thumbnail",
    },
]

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: "easeOut" as const },
    },
}

const stagger = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
}

export default function HomePage() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [heroSlideIndex, setHeroSlideIndex] = useState(0);

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    const goToPreviousHeroSlide = () => {
        setHeroSlideIndex((current) =>
            current === 0 ? heroCarouselItems.length - 1 : current - 1
        );
    };

    const goToNextHeroSlide = () => {
        setHeroSlideIndex((current) =>
            current === heroCarouselItems.length - 1 ? 0 : current + 1
        );
    };

    useEffect(() => {
        const autoPlayInterval = setInterval(() => {
            setHeroSlideIndex((current) =>
                current === heroCarouselItems.length - 1 ? 0 : current + 1
            );
        }, 4000);

        return () => clearInterval(autoPlayInterval);
    }, []);

    return (


        <div className="min-h-screen">

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
                {/* Blur fade overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/40" />

                <div className="relative max-w-8xl mx-auto py-3">
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            className="flex items-center space-x-3 transition-transform duration-200 hover:scale-150"
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

                        </Link>

                        <div className="hidden md:flex items-center space-x-10">
                            <Link href="#work" className="text-gray-600 hover:text-gray-900 text-xl transition-transform duration-200 hover:scale-110 hover:font-medium">
                                Work
        </Link>

                            <Link href="#process" className="text-gray-600 hover:text-gray-900 text-xl transition-transform duration-200 hover:scale-110 hover:font-medium">
                                Process
        </Link>
                            <Link href="#contact" className="text-gray-600 hover:text-gray-900 text-xl transition-transform duration-200 hover:scale-110 hover:font-medium">
                                Contact
        </Link>

                           

                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#47C7F0] hover:text-[#722BFF] text-xl transition-transform duration-200 hover:scale-110 hover:font-medium"
                            >
                                Resume
        </a>
                        </div>

                        <div className="md:hidden">
                            <MobileMenu
                                isOpen={mobileMenuOpen}
                                setIsOpen={setMobileMenuOpen}
                                onLinkClick={handleLinkClick}
                            />
                        </div>
                    </div>
                </div>
            </nav>



            {/* Hero Section */}
            <section className="relative z-10 py-20 px-8">

                {/* Background */}
                <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
                    <Image
                        src="/top.png"
                        alt="Hero Background"
                        width={1920}
                        height={1080}
                        className="absolute top-0 left-0 w-[1920px] h-[1080px] max-w-none"
                        priority
                    />
                </div>

                <div className="max-w-8xl mx-auto">

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center"
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div className="md:col-span-6 space-y-6 text-left" variants={fadeUp}>
                            <motion.h1 className="text-4xl md:text-5xl text-gray-900 leading-tight" variants={fadeUp}>
                                I'm Colin,
                            </motion.h1>

                            <motion.h1 className="text-5xl md:text-7xl text-gray-900 leading-tight font-semibold" variants={fadeUp}>
                                Product & UXUI Designer
                            </motion.h1>

                            <motion.h1 className="text-4xl md:text-5xl text-gray-900 leading-tight" variants={fadeUp}>
                                Based in Vancouver, BC
                            </motion.h1>

                            <motion.div className="flex flex-wrap items-center gap-4 pt-2" variants={fadeUp}>
                                <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                                    <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800">
                                        <Link href="#work">
                                            Check Out My Work
                                            <ArrowDown className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </motion.div>

                                <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                                    <Button asChild size="lg" variant="outline">
                                        <a href="/resume.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            Read My Resume
                                            <ScrollText className="ml-2 h-4 w-4" />
                                        </a>
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="md:col-span-6 w-full"
                            variants={fadeUp}
                            whileHover={{ y: -2 }}
                            transition={{ type: "spring", stiffness: 220, damping: 22 }}
                        >
                            <div className="flex w-full items-center gap-1.5">
                                <motion.button
                                    type="button"
                                    onClick={goToPreviousHeroSlide}
                                    aria-label="Previous slide"
                                    className="h-10 w-10 shrink-0 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                                    whileHover={{ scale: 1.06 }}
                                    whileTap={{ scale: 0.94 }}
                                >
                                    <ChevronLeft className="mx-auto h-5 w-5" />
                                </motion.button>

                                <div className="relative w-full overflow-visible">
                                    <div className="relative aspect-[4/3] w-full overflow-visible">
                                        {heroCarouselItems.map((item, index) => {
                                            const isActive = index === heroSlideIndex;
                                            return (
                                                <Link
                                                    key={`${item.href}-${index}`}
                                                    href={item.href}
                                                    aria-hidden={!isActive}
                                                    tabIndex={isActive ? 0 : -1}
                                                    className={`absolute inset-0 transition-opacity duration-500 ease-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}
                                                >
                                                    <div className="w-full h-full transition-transform duration-300 ease-out hover:scale-[1.02]">
                                                        <Image
                                                            src={item.src}
                                                            alt={item.alt}
                                                            title="View Case Study"
                                                            width={800}
                                                            height={600}
                                                            className="object-contain w-full h-full"
                                                        />
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>

                                <motion.button
                                    type="button"
                                    onClick={goToNextHeroSlide}
                                    aria-label="Next slide"
                                    className="h-10 w-10 shrink-0 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                                    whileHover={{ scale: 1.06 }}
                                    whileTap={{ scale: 0.94 }}
                                >
                                    <ChevronRight className="mx-auto h-5 w-5" />
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="mt-8 border-t border-gray-200 pt-8 grid grid-cols-1 md:grid-cols-12 gap-10 items-start"
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                    >
                        <motion.div
                            id="about"
                            className="md:col-span-6"
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
                        >
                            <h2 className="text-lg font-medium text-gray-900">About</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                I’ve led projects where insights from interviews, testing, and competitor analysis directly influenced key design and product decisions. I also bring experience building and scaling design systems that create consistency, improve collaboration between design and engineering, and enable teams to ship more efficiently. <span className="font-medium text-gray-900"> My goal is to always create thoughtful, human-centered experiences that solve real problems that support business needs</span>.
                            </p>
                        </motion.div>

                        <motion.div
                            className="md:col-span-6"
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
                        >
                            <div className="rounded-xl border border-gray-200 bg-white/70 p-5 space-y-4 text-lg text-gray-600">
                                <div>
                                    <span className="text-gray-400">Currently @</span>
                                    <p className="font-medium text-gray-900">Fraser Health Authority</p>
                                </div>

                                <div>
                                    <span className="text-gray-400">Previously @</span>
                                    <p className="font-medium text-gray-900">Precision NanoSystems Inc.</p>
                                    <p className="font-medium text-gray-900">
                                        Simon Fraser University — Segal School
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </section>


            {/* Projects Section */}
            <section id="work" className="relative isolate py-20 px-8 bg-blue-50 overflow-hidden">


             

                <div className="absolute left-0 w-full h-full -z-10 overflow-hidden">
                    <Image
                        src="/white1.png"
                        alt=""
                        width={1920}
                        height={1080}
                        className="absolute top-0 left-0 w-[1920px] h-[1080px] max-w-none"
                        priority
                    />
                </div>


                <motion.div
                    className="relative z-10 max-w-8xl mx-auto space-y-24"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={stagger}
                >

                    <motion.div className="space-y-12" variants={fadeUp}>
                        <motion.h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 text-center" variants={fadeUp}>
                            Healthcare Products
      </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-fr">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
                                >
                                    <Link
                                        href={`/projects/${project.id}`}
                                        className="group block h-full focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-xl"
                                    >
                                    <article className="
              h-full
              rounded-xl
              bg-white
              border border-gray-100
              shadow-sm
              transition-all duration-300
              group-hover:-translate-y-1
              group-hover:shadow-xl
            ">
                                        {/* Image */}
                                        <div className="aspect-[3/2] overflow-hidden rounded-t-xl bg-gray-100">
                                            <Image
                                                src={project.image || "/placeholder.svg"}
                                                alt={project.title}
                                                width={600}
                                                height={400}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>

                                        {/* Text */}
                                        <div className="space-y-2 p-6">
                                            <h4 className="text-xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                                                {project.title}
                                            </h4>

                                            <p className="text-gray-400 text-base leading-relaxed">
                                                {project.description}
                                            </p>

                                            <div className="text-gray-400 text-sm">
                                                {project.company} • {project.year}
                                            </div>
                                        </div>
                                    </article>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div className="space-y-12" variants={fadeUp}>
                            <motion.h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 text-center" variants={fadeUp}>
                                Other Products
      </motion.h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-fr">
                                {projects2.map((project2, index) => (
                                    <motion.div
                                        key={project2.id}
                                        initial={{ opacity: 0, y: 24 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
                                    >
                                        <Link
                                            href={`/projects/${project2.id}`}
                                            className="group block h-full focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-xl"
                                        >
                                        <article className="
              h-full
              rounded-xl
              bg-white
              border border-gray-100
              shadow-sm
              transition-all duration-300
              group-hover:-translate-y-1
              group-hover:shadow-xl
            ">
                                            {/* Image */}
                                            <div className="aspect-[3/2] overflow-hidden rounded-t-xl bg-gray-100">
                                                <Image
                                                    src={project2.image || "/placeholder.svg"}
                                                    alt={project2.title}
                                                    width={600}
                                                    height={400}
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                            </div>

                                            {/* Text */}
                                            <div className="space-y-2 p-6">
                                                <h4 className="text-xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                                                    {project2.title}
                                                </h4>

                                                <p className="text-gray-400 text-base leading-relaxed">
                                                    {project2.description}
                                                </p>

                                                <div className="text-gray-400 text-sm">
                                                    {project2.company} • {project2.year}
                                                </div>
                                            </div>
                                        </article>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>



                        </motion.div>


                    </motion.div>

                </motion.div>
            </section>





            <section id="process" className="relative z-10 py-20 px-8 min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh]">

                {/* Background Image */}
                <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
                    <Image
                        src="/bottom.png"   // Replace with your desired background
                        alt="Process Background"
                        width={1920}
                        height={1080}
                        className="absolute bottom-0 right-0 w-[1920px] h-[1080px] max-w-none"
                        priority
                    />
                </div>

                <motion.div
                    className="max-w-5xl mx-auto text-center"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={stagger}
                >
                    <motion.h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12" variants={fadeUp}>
                        How I Work
    </motion.h2>

                    <motion.p className="text-gray-600 max-w-2xl mx-auto mb-10" variants={fadeUp}>
                        My work typically follows a structured, end-to-end design process that spans from early-stage exploration, to validated production-quality solutions.
    </motion.p>

                    <div className="grid md:grid-cols-4 gap-8 text-left text-gray-600">
                        <motion.div className="p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-200" variants={fadeUp}>
                            <div className="flex items-center justify-between mb-3">
                                <div className="text-sm font-medium text-gray-900">1. Discover</div>
                                <div className="text-xs text-gray-400">Explore</div>
                            </div>
                            <p className="text-sm leading-relaxed mb-3">
                                I surface problems and opportunities through stakeholder interviews, user research, and analytics — casting a wide net to understand context and constraints.
        </p>
                            <div className="text-xs text-gray-500">
                                Artifacts: research notes, user journey maps, analytics insights, sketches
        </div>
                        </motion.div>

                        <motion.div className="p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-200" variants={fadeUp}>
                            <div className="flex items-center justify-between mb-3">
                                <div className="text-sm font-medium text-gray-900">2. Define</div>
                                <div className="text-xs text-gray-400">Synthesize</div>
                            </div>
                            <p className="text-sm leading-relaxed mb-3">
                                I synthesize research into clear problem statements, prioritized user needs, and success criteria that align with business goals.
        </p>
                            <div className="text-xs text-gray-500">
                                Artifacts: problem documentation, personas, user flows, prioritized roadmap, empathy maps
        </div>
                        </motion.div>

                        <motion.div className="p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-200" variants={fadeUp}>
                            <div className="flex items-center justify-between mb-3">
                                <div className="text-sm font-medium text-gray-900">3. Develop</div>
                                <div className="text-xs text-gray-400">Iterate</div>
                            </div>
                            <p className="text-sm leading-relaxed mb-3">
                                I rapidly ideate, wireframe, and prototype multiple solutions, collaborating closely with PMs and engineers to test feasibility.
        </p>
                            <div className="text-xs text-gray-500">
                                Artifacts: wireframes, design systems, high-fidelity designs, interactive prototypes
        </div>
                        </motion.div>

                        <motion.div className="p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-200" variants={fadeUp}>
                            <div className="flex items-center justify-between mb-3">
                                <div className="text-sm font-medium text-gray-900">4. Deliver</div>
                                <div className="text-xs text-gray-400">Validate</div>
                            </div>
                            <p className="text-sm leading-relaxed mb-3">
                                I validate solutions through usability testing and metrics, then hand off polished specs and work with engineering to ship and measure impact.
        </p>
                            <div className="text-xs text-gray-500">
                                Artifacts: usability reports, final prototypes, success metrics, delivery plan
        </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>


            {/* Contact Section */}
            <section id="contact" className="bg-blue-50 relative isolate overflow-hidden py-20 px-8 min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh]">

               

                <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
                    <Image
                        src="/white2.png"   // Replace with your desired background
                        alt="Contact Background"
                        width={1920}
                        height={1080}
                        className="absolute top-0 right-0 w-[1920px] h-[1080px] max-w-none"
                        priority
                    />
                </div>

                <motion.div
                    className="relative z-10 max-w-2xl mx-auto text-center"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={stagger}
                >
                    <motion.h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8" variants={fadeUp}>Let's Work Together</motion.h2>
                    <motion.p className="text-gray-600 text-lg mb-12 leading-relaxed" variants={fadeUp}>
                        I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
                        discuss a project.
    </motion.p>

                    <motion.div className="text-left" variants={fadeUp}>
                        <ContactForm />
                    </motion.div>

                    <motion.div className="mt-12 flex justify-center space-x-6" variants={fadeUp}>
                        <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                            <Button asChild variant="outline" size="sm">
                                <a href="https://linkedin.com/in/colin-m-o-neill" target="_blank" rel="noopener noreferrer">
                                LinkedIn
          <Linkedin className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                        </motion.div>
                        <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                            <Button asChild variant="outline" size="sm">
                                <a href="https://colinoneill.artstation.com" target="_blank" rel="noopener noreferrer">
                                Art Station
          <ExternalLink className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-gray-100">
                <motion.div
                    className="max-w-6xl mx-auto text-center text-gray-500 text-sm"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                >
                    <p>© 2026 Colin O'Neill. All rights reserved.</p>
                    {/* <Link href="/projects/testingpage" className="block text-gray-600 hover:text-gray-900 text-base transform transition-transform duration-200 hover:scale-110 hover:font-medium">
                        Testing
</Link> */}
                </motion.div>
            </footer>
        </div>
    )

}
