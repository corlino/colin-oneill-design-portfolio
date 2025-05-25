"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  Calendar,
  Users,
  Target,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const projects = [
    {
      id: 1,
      title: "EcoTrack - Sustainability App",
      category: "Mobile App Design",
      description:
        "A comprehensive mobile application helping users track their carbon footprint and adopt sustainable lifestyle habits.",
      image: "/placeholder.svg?height=400&width=600",
      images: [
        "/placeholder.svg?height=400&width=600&text=EcoTrack+Dashboard",
        "/placeholder.svg?height=400&width=600&text=EcoTrack+Tracking",
        "/placeholder.svg?height=400&width=600&text=EcoTrack+Social",
      ],
      tags: ["UX Research", "Mobile Design", "Prototyping"],
      duration: "3 months",
      role: "Lead UX Designer",
      team: "4 designers, 6 developers",
      challenge:
        "Users struggled to understand their environmental impact and needed motivation to change habits. Existing apps were too complex and didn't provide actionable insights.",
      solution:
        "Gamified tracking system with personalized recommendations and social features. Created an intuitive onboarding flow and simplified data visualization to make environmental impact tangible.",
      impact: "40% increase in user engagement, 25% improvement in habit formation, 4.7/5 app store rating",
      keyFeatures: [
        "Carbon footprint calculator with real-time tracking",
        "Personalized sustainability challenges and goals",
        "Social sharing and community features",
        "AI-powered recommendations for eco-friendly alternatives",
      ],
      designProcess: [
        "Conducted 20+ user interviews to understand pain points",
        "Created user personas and journey maps",
        "Developed low-fi wireframes and prototypes",
        "Performed usability testing with 50+ participants",
        "Iterated based on feedback and launched MVP",
      ],
      tools: ["Figma", "Principle", "Maze", "Hotjar"],
      outcomes: [
        "Reduced user onboarding time by 60%",
        "Achieved 85% user retention after 30 days",
        "Featured in App Store's 'Apps We Love' section",
      ],
    },
    {
      id: 2,
      title: "FinanceFlow - Banking Dashboard",
      category: "Web Application",
      description:
        "Redesigned banking dashboard focusing on improved financial insights and streamlined transaction management.",
      image: "/placeholder.svg?height=400&width=600",
      images: [
        "/placeholder.svg?height=400&width=600&text=FinanceFlow+Overview",
        "/placeholder.svg?height=400&width=600&text=FinanceFlow+Analytics",
        "/placeholder.svg?height=400&width=600&text=FinanceFlow+Transactions",
      ],
      tags: ["Dashboard Design", "Data Visualization", "User Research"],
      duration: "4 months",
      role: "Senior Product Designer",
      team: "3 designers, 8 developers, 2 researchers",
      challenge:
        "Complex financial data was overwhelming users and reducing platform adoption. Users couldn't easily understand their spending patterns or find important information.",
      solution:
        "Simplified information architecture with progressive disclosure and smart categorization. Implemented clear data visualization and personalized insights dashboard.",
      impact: "60% reduction in support tickets, 35% increase in daily active users, 4.6/5 user satisfaction",
      keyFeatures: [
        "Intelligent spending categorization and insights",
        "Customizable dashboard with drag-and-drop widgets",
        "Advanced filtering and search capabilities",
        "Real-time notifications and alerts system",
      ],
      designProcess: [
        "Analyzed user behavior data and support tickets",
        "Conducted card sorting and tree testing sessions",
        "Created information architecture and user flows",
        "Designed high-fidelity prototypes and design system",
        "A/B tested key features before full rollout",
      ],
      tools: ["Figma", "Sketch", "InVision", "Hotjar", "Mixpanel"],
      outcomes: [
        "Improved task completion rate by 45%",
        "Decreased average session time while increasing engagement",
        "Won 'Best Financial UX' award at FinTech Summit 2023",
      ],
    },
    {
      id: 3,
      title: "MedConnect - Telemedicine Platform",
      category: "Healthcare Design",
      description:
        "End-to-end telemedicine platform connecting patients with healthcare providers through intuitive video consultations.",
      image: "/placeholder.svg?height=400&width=600",
      images: [
        "/placeholder.svg?height=400&width=600&text=MedConnect+Consultation",
        "/placeholder.svg?height=400&width=600&text=MedConnect+Scheduling",
        "/placeholder.svg?height=400&width=600&text=MedConnect+Records",
      ],
      tags: ["Healthcare UX", "Video Interface", "Accessibility"],
      duration: "6 months",
      role: "UX/UI Designer",
      team: "5 designers, 12 developers, 3 healthcare consultants",
      challenge:
        "Creating trust and ease-of-use for users unfamiliar with digital healthcare. Ensuring HIPAA compliance while maintaining excellent user experience.",
      solution:
        "Clear onboarding flow, simplified scheduling, and anxiety-reducing design patterns. Implemented accessibility features and built trust through transparent communication.",
      impact: "95% user satisfaction rate, 50% faster appointment booking, 30% reduction in no-shows",
      keyFeatures: [
        "HIPAA-compliant video consultation system",
        "Integrated appointment scheduling and reminders",
        "Digital prescription and medical record management",
        "Multi-language support and accessibility features",
      ],
      designProcess: [
        "Collaborated with healthcare professionals and patients",
        "Conducted accessibility audits and compliance reviews",
        "Created patient journey maps and pain point analysis",
        "Designed and tested video interface prototypes",
        "Implemented feedback from beta testing with real patients",
      ],
      tools: ["Figma", "Adobe XD", "Principle", "Axure", "UserTesting"],
      outcomes: [
        "Achieved WCAG 2.1 AA accessibility compliance",
        "Reduced patient onboarding time by 70%",
        "Expanded to serve 50,000+ patients across 3 states",
      ],
    },
    {
      id: 4,
      title: "LearnSpace - Educational Platform",
      category: "EdTech Design",
      description:
        "Interactive learning platform for K-12 students with adaptive content delivery and progress tracking.",
      image: "/placeholder.svg?height=400&width=600",
      images: [
        "/placeholder.svg?height=400&width=600&text=LearnSpace+Dashboard",
        "/placeholder.svg?height=400&width=600&text=LearnSpace+Lessons",
        "/placeholder.svg?height=400&width=600&text=LearnSpace+Progress",
      ],
      tags: ["EdTech", "Adaptive Design", "Child-Friendly UX"],
      duration: "5 months",
      role: "Product Designer",
      team: "4 designers, 10 developers, 2 education specialists",
      challenge:
        "Keeping young learners engaged while ensuring educational effectiveness. Balancing fun elements with serious learning objectives.",
      solution:
        "Gamified learning paths with age-appropriate visual design and reward systems. Created adaptive content that adjusts to individual learning pace and style.",
      impact:
        "70% improvement in course completion rates, 45% increase in learning retention, 4.8/5 teacher satisfaction",
      keyFeatures: [
        "Adaptive learning algorithm that adjusts to student pace",
        "Gamified progress tracking with achievements and badges",
        "Interactive multimedia content and virtual labs",
        "Parent and teacher dashboard for progress monitoring",
      ],
      designProcess: [
        "Researched child psychology and learning methodologies",
        "Conducted user testing with students, parents, and teachers",
        "Created age-appropriate design systems and guidelines",
        "Developed interactive prototypes for key learning modules",
        "Iterated based on classroom testing and feedback",
      ],
      tools: ["Figma", "Principle", "After Effects", "Maze", "Lookback"],
      outcomes: [
        "Adopted by 200+ schools across the district",
        "Improved standardized test scores by 15%",
        "Received 'Innovation in Education' award",
      ],
    },
    {
      id: 5,
      title: "WorkFlow - Project Management Tool",
      category: "Productivity App",
      description:
        "Collaborative project management tool designed for remote teams with focus on transparency and communication.",
      image: "/placeholder.svg?height=400&width=600",
      images: [
        "/placeholder.svg?height=400&width=600&text=WorkFlow+Boards",
        "/placeholder.svg?height=400&width=600&text=WorkFlow+Timeline",
        "/placeholder.svg?height=400&width=600&text=WorkFlow+Analytics",
      ],
      tags: ["Collaboration", "Workflow Design", "Team Management"],
      duration: "4 months",
      role: "Lead Designer",
      team: "3 designers, 7 developers, 1 product manager",
      challenge:
        "Remote teams struggled with project visibility and communication gaps. Existing tools were either too complex or too simple.",
      solution:
        "Real-time collaboration features with intuitive task management and status tracking. Designed flexible workflows that adapt to different team structures.",
      impact: "80% improvement in project delivery time, 90% user adoption rate, 4.5/5 user rating",
      keyFeatures: [
        "Real-time collaborative workspaces and boards",
        "Automated workflow triggers and notifications",
        "Advanced reporting and analytics dashboard",
        "Integration with popular development and communication tools",
      ],
      designProcess: [
        "Interviewed remote team leads and project managers",
        "Analyzed existing workflow patterns and pain points",
        "Created user journey maps for different team roles",
        "Prototyped and tested collaborative features",
        "Conducted extensive beta testing with remote teams",
      ],
      tools: ["Figma", "Miro", "Principle", "Hotjar", "FullStory"],
      outcomes: [
        "Reduced project planning time by 50%",
        "Increased team productivity metrics by 35%",
        "Secured $2M Series A funding based on user traction",
      ],
    },
    {
      id: 6,
      title: "FoodieFind - Restaurant Discovery",
      category: "Mobile App",
      description:
        "Location-based restaurant discovery app with personalized recommendations and social dining features.",
      image: "/placeholder.svg?height=400&width=600",
      images: [
        "/placeholder.svg?height=400&width=600&text=FoodieFind+Discovery",
        "/placeholder.svg?height=400&width=600&text=FoodieFind+Reviews",
        "/placeholder.svg?height=400&width=600&text=FoodieFind+Social",
      ],
      tags: ["Location-based UX", "Social Features", "Recommendation Engine"],
      duration: "3 months",
      role: "UX Designer",
      team: "2 designers, 5 developers, 1 data scientist",
      challenge:
        "Users overwhelmed by too many dining options and unreliable reviews. Difficulty discovering restaurants that match personal preferences.",
      solution:
        "AI-powered personalization with curated recommendations and verified reviews. Implemented social features to leverage friend recommendations and dining history.",
      impact: "4.8/5 app store rating, 200% increase in restaurant bookings, 60% user retention after 3 months",
      keyFeatures: [
        "AI-powered restaurant recommendations based on preferences",
        "Social dining features with friend recommendations",
        "Verified review system with photo verification",
        "Integrated reservation and ordering capabilities",
      ],
      designProcess: [
        "Conducted ethnographic research on dining behavior",
        "Created user personas based on dining preferences",
        "Designed and tested recommendation algorithms",
        "Prototyped social features and sharing mechanisms",
        "Optimized onboarding flow through A/B testing",
      ],
      tools: ["Figma", "Sketch", "InVision", "Hotjar", "Amplitude"],
      outcomes: [
        "Partnered with 5,000+ restaurants in launch cities",
        "Generated $500K in restaurant booking revenue",
        "Featured as 'App of the Day' in iOS App Store",
      ],
    },
  ]

  const skills = [
    {
      category: "Design",
      items: [
        "User Experience Design",
        "User Interface Design",
        "Interaction Design",
        "Visual Design",
        "Design Systems",
      ],
    },
    {
      category: "Research",
      items: ["User Research", "Usability Testing", "A/B Testing", "Analytics", "Persona Development"],
    },
    { category: "Tools", items: ["Figma", "Sketch", "Adobe Creative Suite", "Principle", "InVision", "Miro"] },
    { category: "Development", items: ["HTML/CSS", "JavaScript", "React", "Design Tokens", "Responsive Design"] },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Research & Discovery",
      description:
        "Understanding user needs, business goals, and market landscape through comprehensive research methods.",
    },
    {
      step: "02",
      title: "Define & Ideate",
      description:
        "Synthesizing insights to define problems and generate creative solutions through collaborative ideation.",
    },
    {
      step: "03",
      title: "Design & Prototype",
      description: "Creating wireframes, mockups, and interactive prototypes to visualize and test design concepts.",
    },
    {
      step: "04",
      title: "Test & Iterate",
      description: "Validating designs through user testing and iterating based on feedback and data insights.",
    },
    {
      step: "05",
      title: "Deliver & Monitor",
      description:
        "Collaborating with development teams and monitoring post-launch metrics for continuous improvement.",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "process", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Theme management
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const openProjectModal = (project: any) => {
    setSelectedProject(project)
    setCurrentImageIndex(0) // Reset to first image when opening modal
  }

  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length)
    }
  }

  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)
    }
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-teal-900 transition-all duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl z-50 border-b border-cyan-100 dark:border-teal-800/30 shadow-lg shadow-cyan-500/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">AC</span>
              </div>
              <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Alex Chen
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "About", "Projects", "Process", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-semibold transition-all duration-300 px-4 py-2 rounded-full ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-600 dark:text-cyan-400 bg-blue-100 dark:bg-teal-900/30"
                      : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-blue-50 dark:hover:bg-teal-900/20"
                  }`}
                >
                  {item}
                </button>
              ))}

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-3 rounded-xl bg-gradient-to-r from-blue-100 to-teal-100 dark:from-teal-900/30 dark:to-cyan-900/30 text-blue-600 dark:text-cyan-400 hover:from-blue-200 hover:to-teal-200 dark:hover:from-teal-800/40 dark:hover:to-cyan-800/40 transition-all duration-300 shadow-lg"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center space-x-3">
              <button
                onClick={toggleTheme}
                className="p-3 rounded-xl bg-gradient-to-r from-blue-100 to-teal-100 dark:from-teal-900/30 dark:to-cyan-900/30 text-blue-600 dark:text-cyan-400"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-3 rounded-xl bg-gradient-to-r from-blue-100 to-teal-100 dark:from-teal-900/30 dark:to-cyan-900/30 text-blue-600 dark:text-cyan-400"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-6 border-t border-cyan-100 dark:border-teal-800/30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl">
              {["Home", "About", "Projects", "Process", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-3 px-4 text-lg font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-blue-50 dark:hover:bg-teal-900/20 rounded-lg transition-all duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-slate-900 dark:via-teal-900/20 dark:to-blue-900/20 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-teal-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-cyan-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-teal-100 dark:from-teal-900/30 dark:to-cyan-900/30 rounded-full text-blue-700 dark:text-cyan-300 text-sm font-semibold">
                  ✨ Available for new opportunities
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-teal-800 dark:from-white dark:via-cyan-200 dark:to-blue-200 bg-clip-text text-transparent">
                    UX Designer crafting
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                    meaningful
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-teal-800 dark:from-white dark:via-cyan-200 dark:to-blue-200 bg-clip-text text-transparent">
                    digital experiences
                  </span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                  I'm Alex Chen, a passionate UX/Product Designer with 5+ years of experience creating user-centered
                  solutions that drive business growth and delight users.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="border-2 border-blue-200 dark:border-teal-700 text-blue-700 dark:text-cyan-300 hover:bg-blue-50 dark:hover:bg-teal-900/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Get In Touch
                </Button>
              </div>

              <div className="flex space-x-6">
                <Link
                  href="mailto:alex@example.com"
                  className="p-3 rounded-xl bg-gradient-to-r from-blue-100 to-teal-100 dark:from-teal-900/30 dark:to-cyan-900/30 text-blue-600 dark:text-cyan-400 hover:from-blue-200 hover:to-teal-200 dark:hover:from-teal-800/40 dark:hover:to-cyan-800/40 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Mail className="h-6 w-6" />
                </Link>
                <Link
                  href="https://github.com"
                  className="p-3 rounded-xl bg-gradient-to-r from-blue-100 to-teal-100 dark:from-teal-900/30 dark:to-cyan-900/30 text-blue-600 dark:text-cyan-400 hover:from-blue-200 hover:to-teal-200 dark:hover:from-teal-800/40 dark:hover:to-cyan-800/40 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="p-3 rounded-xl bg-gradient-to-r from-blue-100 to-teal-100 dark:from-teal-900/30 dark:to-cyan-900/30 text-blue-600 dark:text-cyan-400 hover:from-blue-200 hover:to-teal-200 dark:hover:from-teal-800/40 dark:hover:to-cyan-800/40 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div className="w-full max-w-md mx-auto">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=600&width=500"
                      alt="Alex Chen - UX Designer"
                      width={500}
                      height={600}
                      className="rounded-3xl shadow-2xl shadow-blue-500/20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-3xl"></div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-teal-500/30 rounded-3xl transform rotate-6 scale-105 blur-xl"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="p-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg">
            <ChevronDown className="h-6 w-6 text-blue-600 dark:text-cyan-400" />
          </div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section id="about" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-teal-50/50 dark:from-teal-900/10 dark:to-cyan-900/10"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 to-blue-800 dark:from-white dark:to-cyan-200 bg-clip-text text-transparent mb-6">
              About Me
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              I believe great design happens at the intersection of user needs, business goals, and technical
              possibilities. My approach combines data-driven insights with creative problem-solving to deliver
              impactful solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-500 dark:bg-slate-800/50 dark:border-teal-800/30 border-0 shadow-xl shadow-blue-500/5 rounded-3xl bg-gradient-to-br from-white to-cyan-50/30 dark:from-slate-800/50 dark:to-teal-900/20 group hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-6 h-6 bg-white rounded-lg"></div>
                  </div>
                  <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-6">{skillGroup.category}</h3>
                  <div className="space-y-3">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="mr-2 mb-2 bg-gradient-to-r from-blue-100 to-teal-100 dark:from-teal-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-cyan-300 border-0 px-3 py-1 rounded-full font-medium"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-24 bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-800 dark:to-teal-900/20 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-teal-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-teal-400/10 to-cyan-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 to-blue-800 dark:from-white dark:to-cyan-200 bg-clip-text text-transparent mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              A selection of projects showcasing my design process and problem-solving approach
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <Card
                    className="overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer dark:bg-slate-800/50 dark:border-teal-800/30 border-0 shadow-xl shadow-blue-500/5 rounded-3xl bg-white hover:-translate-y-2"
                    onClick={() => openProjectModal(project)}
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <ExternalLink className="h-5 w-5 text-blue-600 dark:text-cyan-400" />
                      </div>
                    </div>

                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <Badge
                          variant="outline"
                          className="border-blue-200 dark:border-teal-700 text-blue-700 dark:text-cyan-300 bg-blue-50 dark:bg-teal-900/30 px-3 py-1 rounded-full font-medium"
                        >
                          {project.category}
                        </Badge>
                      </div>

                      <h3 className="font-bold text-2xl text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{project.description}</p>

                      <div className="space-y-4 mb-6">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-500 dark:text-slate-400 font-medium">Role:</span>
                          <span className="font-semibold text-slate-700 dark:text-slate-200">{project.role}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-500 dark:text-slate-400 font-medium">Duration:</span>
                          <span className="font-semibold text-slate-700 dark:text-slate-200">{project.duration}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="text-xs bg-gradient-to-r from-blue-100 to-teal-100 dark:from-teal-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-cyan-300 border-0 px-3 py-1 rounded-full"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto dark:bg-slate-800 dark:border-teal-800/30 border-0 rounded-3xl shadow-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-blue-800 dark:from-white dark:to-cyan-200 bg-clip-text text-transparent">
                      {selectedProject?.title}
                    </DialogTitle>
                  </DialogHeader>

                  {selectedProject && (
                    <div className="space-y-8">
                      {/* Project Image Gallery */}
                      <div className="relative">
                        <div className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-teal-100 dark:from-teal-900/30 dark:to-cyan-900/30">
                          <Image
                            src={
                              selectedProject.images?.[currentImageIndex] || selectedProject.image || "/placeholder.svg"
                            }
                            alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                            fill
                            className="object-cover transition-all duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        {/* Image Navigation */}
                        {selectedProject.images && selectedProject.images.length > 1 && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                prevImage()
                              }}
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
                            >
                              <ChevronLeft className="h-5 w-5 text-blue-600 dark:text-cyan-400" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                nextImage()
                              }}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
                            >
                              <ChevronRight className="h-5 w-5 text-blue-600 dark:text-cyan-400" />
                            </button>

                            {/* Image Indicators */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                              {selectedProject.images.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    goToImage(index)
                                  }}
                                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentImageIndex
                                      ? "bg-white shadow-lg scale-125"
                                      : "bg-white/50 hover:bg-white/75 hover:scale-110"
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>

                      {/* Project Overview */}
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-2xl">
                          <div className="p-2 bg-gradient-to-r from-blue-500 to-teal-600 rounded-xl">
                            <Calendar className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Duration</p>
                            <p className="font-bold text-slate-700 dark:text-slate-200">{selectedProject.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-2xl">
                          <div className="p-2 bg-gradient-to-r from-blue-500 to-teal-600 rounded-xl">
                            <Users className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Team</p>
                            <p className="font-bold text-slate-700 dark:text-slate-200">{selectedProject.team}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-2xl">
                          <div className="p-2 bg-gradient-to-r from-blue-500 to-teal-600 rounded-xl">
                            <Target className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Role</p>
                            <p className="font-bold text-slate-700 dark:text-slate-200">{selectedProject.role}</p>
                          </div>
                        </div>
                      </div>

                      {/* Challenge & Solution */}
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl">
                          <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-4 flex items-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                            Challenge
                          </h3>
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            {selectedProject.challenge}
                          </p>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl">
                          <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-4 flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            Solution
                          </h3>
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            {selectedProject.solution}
                          </p>
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="p-6 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-2xl">
                        <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-6">Key Features</h3>
                        <ul className="grid md:grid-cols-2 gap-4">
                          {selectedProject.keyFeatures?.map((feature: string, index: number) => (
                            <li key={index} className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                              <span className="text-slate-600 dark:text-slate-300 leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Design Process */}
                      <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl">
                        <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-6">Design Process</h3>
                        <div className="space-y-4">
                          {selectedProject.designProcess?.map((step: string, index: number) => (
                            <div key={index} className="flex items-start space-x-4">
                              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                {index + 1}
                              </div>
                              <span className="text-slate-600 dark:text-slate-300 leading-relaxed pt-1">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Impact & Results */}
                      <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl">
                        <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-4 flex items-center">
                          <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl mr-3">
                            <TrendingUp className="h-5 w-5 text-white" />
                          </div>
                          Impact & Results
                        </h3>
                        <p className="text-green-800 dark:text-green-300 font-semibold mb-4 text-lg">
                          {selectedProject.impact}
                        </p>
                        <ul className="space-y-2">
                          {selectedProject.outcomes?.map((outcome: string, index: number) => (
                            <li key={index} className="text-green-700 dark:text-green-400 flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tools Used */}
                      <div>
                        <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-4">Tools Used</h3>
                        <div className="flex flex-wrap gap-3">
                          {selectedProject.tools?.map((tool: string, index: number) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="border-blue-200 dark:border-teal-700 text-blue-700 dark:text-cyan-300 bg-blue-50 dark:bg-teal-900/30 px-4 py-2 rounded-full font-medium"
                            >
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-teal-50/30 dark:from-teal-900/10 dark:to-cyan-900/10"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 to-blue-800 dark:from-white dark:to-cyan-200 bg-clip-text text-transparent mb-6">
              My Design Process
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              A human-centered approach that ensures every solution is both usable and valuable
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center gap-8 p-8 rounded-3xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 dark:hover:from-teal-900/20 dark:hover:to-cyan-900/20 transition-all duration-500 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-600 text-white rounded-3xl flex items-center justify-center font-bold text-2xl shadow-xl shadow-blue-500/25 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500/40 transition-all duration-300">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-2xl text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-teal-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-teal-400/20 to-cyan-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto leading-relaxed">
              I'm always interested in new opportunities and collaborations. Let's discuss how we can create something
              amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-2xl mb-6 text-white">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-teal-600 rounded-xl">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-lg">alex.chen.design@email.com</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-teal-600 rounded-xl">
                      <Linkedin className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-lg">linkedin.com/in/alexchen-ux</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-teal-600 rounded-xl">
                      <Github className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-lg">github.com/alexchen-design</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                <h3 className="font-bold text-xl mb-4 text-white">Currently</h3>
                <p className="text-cyan-200 leading-relaxed">
                  Open to new opportunities • Based in San Francisco, CA • Available for freelance projects and
                  full-time positions
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl shadow-2xl">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-3 text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-white/70 backdrop-blur-sm transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-3 text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-white/70 backdrop-blur-sm transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-3 text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-white/70 backdrop-blur-sm transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-teal-600 hover:from-blue-600 hover:to-teal-700 text-white py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-teal-900/20"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-slate-400 text-lg">© 2024 Alex Chen. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link
                href="mailto:alex@example.com"
                className="p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-teal-600/20 text-cyan-400 hover:from-blue-500/30 hover:to-teal-600/30 hover:text-cyan-300 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Mail className="h-6 w-6" />
              </Link>
              <Link
                href="https://github.com"
                className="p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-teal-600/20 text-cyan-400 hover:from-blue-500/30 hover:to-teal-600/30 hover:text-cyan-300 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-teal-600/20 text-cyan-400 hover:from-blue-500/30 hover:to-teal-600/30 hover:text-cyan-300 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
