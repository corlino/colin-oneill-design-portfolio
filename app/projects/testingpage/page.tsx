"use client"

import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"

import { ArrowDown, CheckCircle2, ChevronLeft, ChevronRight, ExternalLink, Linkedin, ScrollText, X } from "lucide-react";



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

const edWaitTimesCaseStudy = {
    title: "ED Wait Times Website Redesign",
    eyebrow: "Sample product design case study",
    company: "Fraser Health Authority",
    year: "2025",
    heroImage: {
        src: "/edwtproject/feature.png",
        alt: "ED Wait Times redesign preview",
        width: 900,
        height: 700,
    },
    summary:
        "A responsive redesign concept that helps patients understand emergency department wait times with more context, less anxiety, and clearer next steps.",
    meta: [
        { label: "Role", value: "Product Designer" },
        { label: "Timeline", value: "8 weeks" },
        { label: "Focus", value: "Healthcare UX, data visualization, service clarity" },
        { label: "Tools", value: "Figma, user interviews, journey mapping" },
    ],
    gallery: [
        {
            src: "/edwtproject/Wireframes.png",
            alt: "Wireframes for the ED Wait Times redesign",
            title: "Wireframes",
            caption: "Early structure and layout explorations for the redesigned wait times experience.",
            width: 3967,
            height: 4145,
        },
        {
            src: "/edwtproject/Flowchart.png",
            alt: "User flowchart for the ED Wait Times redesign",
            title: "Flowchart",
            caption: "A patient decision flow showing how users move from symptoms to care options.",
            width: 4094,
            height: 2360,
        },
        {
            src: "/edwtproject/Current.png",
            alt: "Current ED Wait Times website interface",
            title: "Current State",
            caption: "The existing interface used to understand friction, ambiguity, and data interpretation issues.",
            width: 3926,
            height: 3768,
        },
        {
            src: "/edwtproject/New.png",
            alt: "Proposed ED Wait Times redesign interface",
            title: "Proposed Design",
            caption: "A redesigned wait times interface with clearer context and supporting patient guidance.",
            width: 4388,
            height: 5279,
        },
        {
            src: "/edwtproject/Iterations.png",
            alt: "Design iterations for the ED Wait Times redesign",
            title: "Iterations",
            caption: "Explorations showing how the interface evolved through multiple design directions.",
            width: 7077,
            height: 3346,
        },
        {
            src: "/edwtproject/FinalDesign2.png",
            alt: "Final design screens for the ED Wait Times redesign",
            title: "Final Screens",
            caption: "A wide view of final screens and interaction states for the redesigned experience.",
            width: 10979,
            height: 4067,
        },
    ],
    sections: [
        {
            label: "Context",
            title: "Wait time data was shaping urgent decisions",
            body:
                "Patients were using posted emergency department wait times to decide where to seek care. The existing experience presented a single number without enough explanation, which made high-stakes choices feel more confusing and stressful.",
        },
        {
            label: "Problem",
            title: "A long wait time could discourage the right visit",
            body:
                "The interface did not clearly explain what the wait time represented, how urgent symptoms should be handled, or why the closest site may still be the best option. Users could mistake an estimate for a guaranteed delay and choose care based on incomplete context.",
        },
        {
            label: "Approach",
            title: "Translate clinical complexity into practical guidance",
            body:
                "I mapped the patient decision journey, reviewed the existing information architecture, and explored ways to pair wait time data with plain-language support. The goal was not to hide the number, but to make it easier to interpret.",
        },
        {
            label: "Design response",
            title: "A page that balances speed, context, and confidence",
            body:
                "The redesign uses a clearer facility summary, wait time range, trend indicators, acuity education, and direct guidance for emergency symptoms. The layout prioritizes scannable information first, then deeper detail for users who need more confidence before choosing a site.",
        },
        {
            label: "Outcome",
            title: "A calmer decision-making experience",
            body:
                "The concept gives patients a more complete picture of what is happening at each site and reduces the chance that a single high number becomes the only factor in their decision. It also gives healthcare teams a stronger foundation for explaining operational context.",
        },
    ],
    highlights: [
        "Reframed wait times as a range with supporting context",
        "Added trend-based cues to show whether demand is rising or easing",
        "Created plain-language education around triage and urgency",
        "Improved mobile scanning for patients making decisions quickly",
    ],
    reflection: {
        title: "Designing for urgency means designing for interpretation.",
        body:
            "This sample case study frames the work around a product designer's responsibility to make complex systems understandable without oversimplifying them. For patients, the most useful interface is not just accurate. It is calm, legible, and supportive in the moment they need it.",
    },
}


const pslsCaseStudy = {
    title: "AI Patient Safety Platform",
    eyebrow: "Sample product design case study",
    company: "Fraser Health Authority",
    year: "2025",
    heroImage: {
        src: "/pslsproject/solution.png",
        alt: "AI Patient Safety Platform interface preview",
        width: 1440,
        height: 542,
    },
    summary:
        "Integrating AI with patient safety data to help quality teams identify patterns, reduce manual reporting effort, and respond to harm earlier.",
    meta: [
        { label: "Role", value: "UX/UI Designer" },
        { label: "Timeline", value: "February 2025 - October 2025" },
        { label: "Focus", value: "Healthcare UX, AI workflows, data visualization" },
        { label: "Tools", value: "Figma" },
    ],
    gallery: [
        {
            src: "/pslsproject/initialwireframes.png",
            alt: "Initial wireframes for the AI Patient Safety Platform",
            title: "Initial Wireframes",
            caption: "Early wireframes exploring how safety report data could be organized and reviewed.",
            width: 11584,
            height: 5174,
        },
        {
            src: "/pslsproject/psls-flowchart.png",
            alt: "PSLS workflow flowchart",
            title: "Flowchart",
            caption: "A mapped workflow showing how coordinators move from reports to safety themes.",
            width: 6009,
            height: 3141,
        },
        {
            src: "/pslsproject/current.png",
            alt: "Current patient safety reporting dashboard",
            title: "Current State",
            caption: "The legacy reporting interface used to identify manual work and visibility gaps.",
            width: 4674,
            height: 2664,
        },
        {
            src: "/pslsproject/solution.png",
            alt: "Proposed PSLS AI solution interface",
            title: "AI Solution",
            caption: "A proposed interface for surfacing safety themes and report patterns with AI support.",
            width: 2177,
            height: 1907,
        },
        {
            src: "/pslsproject/ideation1.png",
            alt: "AI Patient Safety Platform ideation screens",
            title: "Ideation",
            caption: "Design explorations for dashboards, theming, and reporting flows.",
            width: 6264,
            height: 4044,
        },
        {
            src: "/pslsproject/finaldesigns.png",
            alt: "Final designs for the AI Patient Safety Platform",
            title: "Final Designs",
            caption: "Final dashboard screens for reviewing patient safety data and recurring themes.",
            width: 6076,
            height: 3166,
        },
    ],
    sections: [
        {
            label: "Context",
            title: "Patient safety teams needed clearer visibility into harm events",
            body:
                "The Quality Team oversees the collection, analysis, and reporting of patient safety incidents across Fraser Health. Existing tools helped teams view reports, but the process of reviewing incidents, extracting themes, and preparing reporting packages remained highly manual.",
        },
        {
            label: "Problem",
            title: "Valuable lower-harm incidents were being overlooked",
            body:
                "Most incidents fall under Harm Levels 1-3, but lower-harm events can be deprioritized when teams are focused on severe cases. Report creation was slow and inconsistent, making it harder to identify early warning signs across sites.",
        },
        {
            label: "Solution",
            title: "An AI-data-driven patient safety platform",
            body:
                "The proposed platform uses AI theming to categorize large volumes of reports, gives teams instant access to low-harm and high-harm event metrics, and provides a modern dashboard for exploring safety trends and recurring themes.",
        },
        {
            label: "Research & insights",
            title: "Understanding workflows, pain points, and data patterns",
            body:
                "Stakeholder interviews and workflow observations showed that coordinators can spend weeks manually reviewing reports and generating monthly packages. Consistent reporting, quicker theme extraction, and earlier visibility into patterns became core design priorities.",
        },
        {
            label: "Outcome",
            title: "A stronger foundation for proactive patient safety work",
            body:
                "The concept helps quality teams move from reactive manual reporting toward faster pattern recognition, clearer dashboards, and more proactive conversations around patient harm reduction.",
        },
    ],
    highlights: [
        "AI theming engine for categorizing large volumes of safety reports",
        "Improved visibility into lower-harm and high-harm incidents",
        "Reduced manual effort in monthly reporting workflows",
        "Modern dashboard for spotting recurring safety trends",
    ],
    reflection: {
        title: "AI is most useful when it helps teams see what manual workflows hide.",
        body:
            "This case study focuses on using AI as a practical layer for organizing complex safety data, not as a replacement for clinical judgment. The design goal was to help teams find patterns earlier and spend more time acting on insights.",
    },
}

const calexisCaseStudy = {
    title: "Calexis AI Chatbot Teams App",
    eyebrow: "Sample product design case study",
    company: "Fraser Health Authority",
    year: "2025",
    heroImage: {
        src: "/calexisproject/mockup.png",
        alt: "Calexis AI Chatbot Teams App interface preview",
        width: 1440,
        height: 542,
    },
    summary:
        "Enhancing the way digital support teams respond to Meditech Expanse requests through a centralized AI chatbot in Microsoft Teams.",
    meta: [
        { label: "Role", value: "UX/UI Designer" },
        { label: "Timeline", value: "January - June" },
        { label: "Focus", value: "Conversational UX, internal tools, AI support workflows" },
        { label: "Tools", value: "Figma, AI assistant research, stakeholder interviews" },
    ],
    gallery: [
        {
            src: "/calexisproject/calexis-ufc.png",
            alt: "Calexis user flow chart",
            title: "User Flow",
            caption: "A support workflow showing how staff move from a question to a documented answer.",
            width: 6009,
            height: 3141,
        },
        {
            src: "/calexisproject/problem.png",
            alt: "Calexis problem workflow",
            title: "Problem Flow",
            caption: "A map of the fragmented tools and manual searching that slowed down support work.",
            width: 9792,
            height: 6003,
        },
        {
            src: "/calexisproject/solution.png",
            alt: "Calexis solution concept",
            title: "Solution Concept",
            caption: "A centralized chatbot concept for searching QRGs and support documentation.",
            width: 6882,
            height: 5613,
        },
        {
            src: "/calexisproject/ideation.png",
            alt: "Calexis ideation screens",
            title: "Ideation",
            caption: "Early interaction explorations for chatbot prompts, answers, and escalation paths.",
            width: 4023,
            height: 6144,
        },
        {
            src: "/calexisproject/mockup.png",
            alt: "Calexis app mockup",
            title: "Mockup",
            caption: "A high-level product mockup showing the chatbot experience in context.",
            width: 2648,
            height: 2190,
        },
        {
            src: "/calexisproject/finaldesigns.png",
            alt: "Final Calexis chatbot designs",
            title: "Final Designs",
            caption: "Final screens for the Teams-based chatbot and support workflow.",
            width: 14178,
            height: 6855,
        },
    ],
    sections: [
        {
            label: "Context",
            title: "Advance IT teams needed faster access to support knowledge",
            body:
                "The Advance IT team at Fraser Health manages requests about the Meditech Expanse platform. Staff questions often require quick access to accurate documentation, system guidance, onboarding materials, and troubleshooting steps.",
        },
        {
            label: "Problem",
            title: "Fragmented tools slowed down IT support",
            body:
                "Support teams had to manually search across hundreds of pages of QRGs and multiple websites. The existing public chatbot had limited scope, leaving staff without a reliable internal tool for complex support requests.",
        },
        {
            label: "Solution",
            title: "A centralized AI-powered internal chatbot",
            body:
                "Calexis brings LLM-powered search into a Microsoft Teams app, giving support staff conversational access to internal documentation and extending chatbot functionality for Meditech Expanse workflows.",
        },
        {
            label: "Research & insights",
            title: "Understanding IT workflows and support needs",
            body:
                "Research included AI assistant interface best practices, stakeholder interviews with Advance IT managers and specialists, and an audit of the existing AVA chatbot to understand usability gaps and support expectations.",
        },
        {
            label: "Outcome",
            title: "A faster path from question to documented answer",
            body:
                "The concept reduces manual search time, centralizes support knowledge, and gives internal teams a more reliable conversational tool for answering complex system questions.",
        },
    ],
    highlights: [
        "LLM-powered search across QRGs and internal documentation",
        "Microsoft Teams app experience for internal support workflows",
        "Reduced manual searching across fragmented support materials",
        "Clearer paths for answers, escalation, and documentation reuse",
    ],
    reflection: {
        title: "Conversational tools work best when they respect the support workflow around them.",
        body:
            "This project frames AI as a workflow companion for support teams. The value is not only in faster answers, but in making documentation easier to access, trust, and reuse during real support conversations.",
    },
}

const pocketWatchCaseStudy = {
    title: "Pocket Watch Mobile App",
    eyebrow: "Sample product design case study",
    company: "Personal Project",
    year: "2026",
    heroImage: {
        src: "/pocketwatchproject/feature.png",
        alt: "Pocket Watch mobile app preview",
        width: 2080,
        height: 2218,
    },
    summary:
        "A mobile finance app concept designed to make spending, budgets, and subscriptions easier to understand.",
    meta: [
        { label: "Role", value: "Product Designer" },
        { label: "Timeline", value: "December - January" },
        { label: "Focus", value: "Mobile UX, fintech, design systems" },
        { label: "Tools", value: "Figma" },
    ],
    gallery: [
        {
            src: "/pocketwatchproject/wireframes.png",
            alt: "Pocket Watch wireframes",
            title: "Wireframes",
            caption: "Early mobile layouts for the app structure and core finance flows.",
            width: 2654,
            height: 3584,
        },
        {
            src: "/pocketwatchproject/informationarchitecture.png",
            alt: "Pocket Watch information architecture",
            title: "Information Architecture",
            caption: "A map of the app structure for budgets, spending, subscriptions, and insights.",
            width: 1776,
            height: 893,
        },
        {
            src: "/pocketwatchproject/mainpages.png",
            alt: "Pocket Watch main pages",
            title: "Main Pages",
            caption: "High-fidelity mobile screens for the primary product experience.",
            width: 2633,
            height: 3413,
        },
    ],
    sections: [
        {
            label: "Context",
            title: "Personal finance tools can become difficult to scan",
            body:
                "Pocket Watch explores how a mobile app can help users understand spending patterns, recurring costs, and budgets without feeling overloaded.",
        },
        {
            label: "Problem",
            title: "Too much financial data can make simple decisions harder",
            body:
                "Many finance apps surface a large amount of information at once, which can make it harder for users to identify what changed and what needs attention.",
        },
        {
            label: "Design response",
            title: "A simpler mobile flow for repeated financial check-ins",
            body:
                "The concept organizes the experience around clear navigation, focused screens, and a consistent visual system that supports quick understanding.",
        },
    ],
    highlights: [
        "Mapped core app information architecture",
        "Created wireframes for mobile finance workflows",
        "Designed high-fidelity screens and reusable UI patterns",
    ],
    reflection: {
        title: "Financial clarity starts with reducing cognitive load.",
        body:
            "The project focuses on making financial information feel manageable, helping users build awareness without turning every screen into a dense dashboard.",
    },
}

const pleachCaseStudy = {
    title: "Pleach App",
    eyebrow: "Sample product design case study",
    company: "Personal Project",
    year: "2025",
    heroImage: {
        src: "/pleachproject/feature.png",
        alt: "Pleach legal compliance app preview",
        width: 2080,
        height: 2218,
    },
    summary:
        "A legal tech concept for processing case documents and generating practical compliance checklists.",
    meta: [
        { label: "Role", value: "Product Designer & Developer" },
        { label: "Timeline", value: "September - Present" },
        { label: "Focus", value: "Legal tech, compliance workflows, document review" },
        { label: "Tools", value: "GitHub, TypeScript, Figma, OpenAI ChatGPT" },
    ],
    gallery: [
        {
            src: "/pleachproject/wireframes.png",
            alt: "Pleach wireframes",
            title: "Wireframes",
            caption: "Early layouts for document upload, checklist generation, and review flows.",
            width: 5998,
            height: 4646,
        },
        {
            src: "/pleachproject/designs.png",
            alt: "Pleach interface designs",
            title: "Interface Designs",
            caption: "Refined screens for reviewing and managing generated compliance checklists.",
            width: 6100,
            height: 4624,
        },
        {
            src: "/pleachproject/feature.png",
            alt: "Pleach feature preview",
            title: "Feature Preview",
            caption: "A focused preview of the Pleach product direction.",
            width: 2080,
            height: 2218,
        },
    ],
    sections: [
        {
            label: "Context",
            title: "Legal workflows depend on careful procedural follow-through",
            body:
                "Pleach focuses on document-heavy legal workflows where rules, deadlines, and procedural requirements can be difficult to track consistently.",
        },
        {
            label: "Problem",
            title: "Missed compliance steps can create serious risk",
            body:
                "Legal professionals need a clearer way to review documents, understand required actions, and preserve a record of completed compliance work.",
        },
        {
            label: "Design response",
            title: "Generate, review, edit, and download checklists",
            body:
                "The concept supports a simple flow where users upload a document, review generated checklist items, make edits, and keep a completed record.",
        },
    ],
    highlights: [
        "Designed document intake and checklist review flows",
        "Supported editable generated checklist items",
        "Created a clearer path for preserving compliance records",
    ],
    reflection: {
        title: "Automation works best when review stays visible.",
        body:
            "Pleach treats generated outputs as a starting point for human review, keeping the interface focused on clarity, control, and accountability.",
    },
}

const beamBuddyCaseStudy = {
    title: "Beam Buddy",
    eyebrow: "Sample product design case study",
    company: "School Project",
    year: "2023",
    heroImage: {
        src: "/beambuddyproject/beambuddyHeroImage.png",
        alt: "Beam Buddy flashlight toy preview",
        width: 4320,
        height: 1200,
    },
    summary:
        "A child-friendly flashlight toy designed around comfort, simple interaction, and fear of the dark.",
    meta: [
        { label: "Role", value: "Product Designer, 3D Designer, UX Researcher" },
        { label: "Timeline", value: "October - November" },
        { label: "Focus", value: "Product design, child-centered UX, physical interaction" },
        { label: "Tools", value: "Figma & Blender" },
    ],
    gallery: [
        {
            src: "/beambuddyproject/initialsketch.png",
            alt: "Beam Buddy initial sketches",
            title: "Initial Sketches",
            caption: "Early product sketches exploring shape, scale, and child-friendly form.",
            width: 1030,
            height: 852,
        },
        {
            src: "/beambuddyproject/interactiondiagram.png",
            alt: "Beam Buddy interaction diagram",
            title: "Interaction Diagram",
            caption: "A simple diagram showing the product interaction and light behavior.",
            width: 1090,
            height: 696,
        },
        {
            src: "/beambuddyproject/beambuddy-3d.png",
            alt: "Beam Buddy 3D render",
            title: "3D Render",
            caption: "A Blender render showing the final product form and playful direction.",
            width: 1920,
            height: 1080,
        },
    ],
    sections: [
        {
            label: "Context",
            title: "The prompt was to design a product for a child",
            body:
                "Beam Buddy was created for a university product design assignment focused on young children and the fear of the dark.",
        },
        {
            label: "Problem",
            title: "Traditional flashlights are often designed for adults",
            body:
                "Many flashlights are too bulky, fragile, sharp, or complex for young children to comfortably use during play or at night.",
        },
        {
            label: "Design response",
            title: "A softer, simpler light for small hands",
            body:
                "The final concept uses a smooth form, simple on/off interaction, durable materials, and friendly styling to make the product easier and more inviting to use.",
        },
    ],
    highlights: [
        "Designed around children ages 3-6",
        "Explored scale, softness, and simple physical interaction",
        "Created sketches, diagrams, and 3D product renders",
    ],
    reflection: {
        title: "Physical form shapes emotional comfort.",
        body:
            "Beam Buddy connects usability with reassurance, using product form and interaction design to make the dark feel less intimidating.",
    },
}

const caseStudies: Record<string, typeof edWaitTimesCaseStudy> = {
    edwtproject: edWaitTimesCaseStudy,
    pslsproject: pslsCaseStudy,
    calexisproject: calexisCaseStudy,
    pocketwatchproject: pocketWatchCaseStudy,
    pleachproject: pleachCaseStudy,
    beambuddyproject: beamBuddyCaseStudy,
}


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
    const [selectedProject, setSelectedProject] = useState<string | null>(null);
    const [activeGalleryImage, setActiveGalleryImage] = useState<(typeof edWaitTimesCaseStudy.gallery)[number] | null>(null);

    const activeCaseStudy = selectedProject ? caseStudies[selectedProject] : null;
    const isProjectOverlayOpen = Boolean(activeCaseStudy);

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

    const openGalleryImage = (image: (typeof edWaitTimesCaseStudy.gallery)[number]) => {
        setActiveGalleryImage(image);
    };

    const closeGalleryImage = () => {
        setActiveGalleryImage(null);
    };

    const closeProjectOverlay = () => {
        closeGalleryImage();
        setSelectedProject(null);
    };

    useEffect(() => {
        const autoPlayInterval = setInterval(() => {
            setHeroSlideIndex((current) =>
                current === heroCarouselItems.length - 1 ? 0 : current + 1
            );
        }, 4000);

        return () => clearInterval(autoPlayInterval);
    }, []);

    useEffect(() => {
        if (!isProjectOverlayOpen) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                if (activeGalleryImage) {
                    closeGalleryImage();
                    return;
                }

                closeProjectOverlay();
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [activeGalleryImage, isProjectOverlayOpen]);

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
                 
                                <span className="text-xl font-medium text-gray-900">Test Page</span>
                            

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
                                Based in North America
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
                                I’ve led projects where insights from interviews, testing, and competitor analysis directly influenced key design and product decisions. I also have experience building and scaling design systems that create consistency, improve collaboration between design and engineering, and enable teams to ship more efficiently. <span className="font-medium text-gray-900"> My goal is to always create thoughtful, human-centered experiences that solve real problems that support business needs</span>.
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
                                    {caseStudies[project.id] ? (
                                        <button
                                            type="button"
                                            onClick={() => setSelectedProject(project.id)}
                                            className="group block h-full w-full text-left focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-xl"
                                            aria-haspopup="dialog"
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
                                        </button>
                                    ) : (
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
                                    )}
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
                                        {caseStudies[project2.id] ? (
                                            <button
                                                type="button"
                                                onClick={() => setSelectedProject(project2.id)}
                                                className="group block h-full w-full text-left focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-xl"
                                                aria-haspopup="dialog"
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
                                            </button>
                                        ) : (
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
                                        )}
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
                    <p>© 2026 Colin O'Neill. All rights reserved. TESTING PAGE</p>
                    
                </motion.div>
            </footer>

            <AnimatePresence>
                {activeCaseStudy && (
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={`${selectedProject}-overlay-title`}
                        className="fixed inset-0 z-[70] overflow-y-auto bg-white text-gray-900"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="sticky top-0 z-20 border-b border-gray-200 bg-white/90 px-6 py-4 backdrop-blur-md">
                            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                                        Project preview
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        {activeCaseStudy.company} • {activeCaseStudy.year}
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={closeProjectOverlay}
                                    className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                                    aria-label="Close project overlay"
                                >
                                    Close
                                    <X className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        <article className="mx-auto max-w-7xl px-6 py-12 md:py-16">
                            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                                <div>
                                    <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-[#47C7F0]">
                                        {activeCaseStudy.eyebrow}
                                    </p>
                                    <h1
                                        id={`${selectedProject}-overlay-title`}
                                        className="text-4xl font-semibold leading-tight text-gray-950 md:text-6xl"
                                    >
                                        {activeCaseStudy.title}
                                    </h1>
                                    <p className="mt-6 max-w-3xl text-xl leading-relaxed text-gray-600">
                                        {activeCaseStudy.summary}
                                    </p>
                                </div>

                                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
                                    <Image
                                        src={activeCaseStudy.heroImage.src}
                                        alt={activeCaseStudy.heroImage.alt}
                                        width={activeCaseStudy.heroImage.width}
                                        height={activeCaseStudy.heroImage.height}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                {activeCaseStudy.meta.map((item) => (
                                    <div key={item.label} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-400">
                                            {item.label}
                                        </p>
                                        <p className="mt-3 text-base font-medium leading-relaxed text-gray-900">
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="my-14 h-px w-full bg-gray-200" />

                            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                                <aside className="lg:sticky lg:top-28 lg:self-start">
                                    <h2 className="text-2xl font-medium text-gray-950">Project Highlights</h2>
                                    <ul className="mt-6 space-y-4">
                                        {activeCaseStudy.highlights.map((highlight) => (
                                            <li key={highlight} className="flex gap-3 text-gray-700">
                                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#47C7F0]" />
                                                <span className="leading-relaxed">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </aside>

                                <div className="space-y-12">
                                    {activeCaseStudy.sections.map((section) => (
                                        <section key={section.label} className="border-b border-gray-200 pb-10 last:border-b-0">
                                            <p className="text-sm font-medium uppercase tracking-[0.22em] text-gray-400">
                                                {section.label}
                                            </p>
                                            <h2 className="mt-3 text-3xl font-medium leading-tight text-gray-950">
                                                {section.title}
                                            </h2>
                                            <p className="mt-5 text-lg leading-relaxed text-gray-600">
                                                {section.body}
                                            </p>
                                        </section>
                                    ))}
                                </div>
                            </div>

                            <div className="my-14 h-px w-full bg-gray-200" />


                            <section className="mt-16">
                                <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                                    <div>
                                        <p className="text-sm font-medium uppercase tracking-[0.22em] text-gray-400">
                                            Gallery
                                        </p>
                                        <h2 className="mt-3 text-3xl font-medium leading-tight text-gray-950">
                                            Project visuals
                                        </h2>
                                    </div>
                                    <p className="max-w-xl text-base leading-relaxed text-gray-500">
                                        Click an image to open a full-screen view with the full visual visible.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                                    {activeCaseStudy.gallery.map((image) => (
                                        <button
                                            key={image.title}
                                            type="button"
                                            onClick={() => openGalleryImage(image)}
                                            className="group overflow-hidden rounded-xl border border-gray-200 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                                        >
                                            <div className="relative aspect-square overflow-hidden bg-white/80 p-2">
                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    width={600}
                                                    height={600}
                                                    className="h-full w-full rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="p-3">
                                                <h3 className="text-sm font-medium text-gray-950">{image.title}</h3>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </section>

                            <div className="mt-16 rounded-2xl bg-gray-950 p-8 text-white md:p-10">
                                <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#47C7F0]">
                                    Reflection
                                </p>
                                <h2 className="mt-3 text-3xl font-medium">{activeCaseStudy.reflection.title}</h2>
                                <p className="mt-5 max-w-4xl text-lg leading-relaxed text-gray-300">
                                    {activeCaseStudy.reflection.body}
                                </p>
                            </div>
                        </article>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {activeGalleryImage && (
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-label={`${activeGalleryImage.title} full-screen gallery image`}
                        className="fixed inset-0 z-[90] bg-gray-950 text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        <div className="absolute left-4 right-4 top-4 z-20 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-gray-950/80 p-3 backdrop-blur md:left-6 md:right-6 md:top-6">
                            <div>
                                <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/50">
                                    Gallery Image
                                </p>
                                <p className="mt-1 text-sm font-medium text-white">{activeGalleryImage.title}</p>
                            </div>

                            <button
                                type="button"
                                onClick={closeGalleryImage}
                                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white px-4 py-2 text-sm font-medium text-gray-950 transition-colors hover:bg-gray-200"
                                aria-label="Close gallery image"
                            >
                                Close
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        <div className="flex h-full w-full items-stretch justify-center px-4 pb-6 pt-28 md:px-8">
                            <div className="flex max-h-full w-full max-w-7xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl backdrop-blur">
                                <div className="border-b border-gray-200 p-4 md:p-5">
                                    <h2 className="text-xl font-medium text-gray-950">{activeGalleryImage.title}</h2>
                                    <p className="mt-2 max-w-4xl text-sm leading-relaxed text-gray-700">
                                        {activeGalleryImage.caption}
                                    </p>
                                </div>

                                <div className="overflow-y-auto p-3 md:p-5">
                                    <Image
                                        src={activeGalleryImage.src}
                                        alt={activeGalleryImage.alt}
                                        width={activeGalleryImage.width}
                                        height={activeGalleryImage.height}
                                        draggable={false}
                                        className="h-auto w-full select-none rounded-lg object-contain"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )

}
