// Project data
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

// Global variables
let currentProject = null
let currentImageIndex = 0
let isDarkMode = false

// DOM elements
const themeToggle = document.getElementById("theme-toggle")
const themeToggleMobile = document.getElementById("theme-toggle-mobile")
const mobileMenuToggle = document.getElementById("mobile-menu-toggle")
const mobileMenu = document.getElementById("mobile-menu")
const menuIcon = document.getElementById("menu-icon")
const closeIcon = document.getElementById("close-icon")
const projectsGrid = document.getElementById("projects-grid")
const projectModal = document.getElementById("project-modal")
const modalTitle = document.getElementById("modal-title")
const modalContent = document.getElementById("modal-content")
const closeModal = document.getElementById("close-modal")
const contactForm = document.getElementById("contact-form")

// Import Lucide icons library
const lucide = require("lucide")

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  initializeTheme()
  setupEventListeners()
  renderProjects()
  setupSmoothScrolling()
  setupActiveNavigation()
  lucide.createIcons()
})

// Theme management
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    isDarkMode = true
    document.documentElement.classList.add("dark")
  }
}

function toggleTheme() {
  isDarkMode = !isDarkMode
  if (isDarkMode) {
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
  } else {
    document.documentElement.classList.remove("dark")
    localStorage.setItem("theme", "light")
  }
}

// Event listeners
function setupEventListeners() {
  // Theme toggles
  themeToggle.addEventListener("click", toggleTheme)
  themeToggleMobile.addEventListener("click", toggleTheme)

  // Mobile menu
  mobileMenuToggle.addEventListener("click", toggleMobileMenu)

  // Modal
  closeModal.addEventListener("click", closeProjectModal)
  projectModal.addEventListener("click", (e) => {
    if (e.target === projectModal) {
      closeProjectModal()
    }
  })

  // Contact form
  contactForm.addEventListener("submit", handleContactForm)

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (projectModal.classList.contains("active")) {
      if (e.key === "Escape") {
        closeProjectModal()
      } else if (e.key === "ArrowLeft") {
        previousImage()
      } else if (e.key === "ArrowRight") {
        nextImage()
      }
    }
  })
}

// Mobile menu toggle
function toggleMobileMenu() {
  const isOpen = !mobileMenu.classList.contains("hidden")

  if (isOpen) {
    mobileMenu.classList.add("hidden")
    menuIcon.classList.remove("hidden")
    closeIcon.classList.add("hidden")
  } else {
    mobileMenu.classList.remove("hidden")
    menuIcon.classList.add("hidden")
    closeIcon.classList.remove("hidden")
  }
}

// Smooth scrolling
function setupSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]')

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })

        // Close mobile menu if open
        if (!mobileMenu.classList.contains("hidden")) {
          toggleMobileMenu()
        }
      }
    })
  })
}

// Active navigation
function setupActiveNavigation() {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link")

  function updateActiveNav() {
    const scrollPosition = window.scrollY + 100

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute("id")

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("text-blue-600", "dark:text-cyan-400", "bg-blue-100", "dark:bg-teal-900/30")
          link.classList.add("text-slate-600", "dark:text-slate-300")

          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.remove("text-slate-600", "dark:text-slate-300")
            link.classList.add("text-blue-600", "dark:text-cyan-400", "bg-blue-100", "dark:bg-teal-900/30")
          }
        })
      }
    })
  }

  window.addEventListener("scroll", updateActiveNav)
  updateActiveNav() // Initial call
}

// Render projects
function renderProjects() {
  projectsGrid.innerHTML = projects
    .map(
      (project) => `
        <div class="card-hover overflow-hidden dark:bg-slate-800/50 dark:border-teal-800/30 border-0 shadow-xl shadow-blue-500/5 rounded-3xl bg-white cursor-pointer" onclick="openProjectModal(${project.id})">
            <div class="relative overflow-hidden">
                <img src="${project.image}" alt="${project.title}" class="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="absolute top-4 right-4 p-2 bg-white/90 dark:bg-slate-800/90 glass-effect rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <i data-lucide="external-link" class="h-5 w-5 text-blue-600 dark:text-cyan-400"></i>
                </div>
            </div>
            
            <div class="p-8">
                <div class="flex items-center justify-between mb-4">
                    <span class="border border-blue-200 dark:border-teal-700 text-blue-700 dark:text-cyan-300 bg-blue-50 dark:bg-teal-900/30 px-3 py-1 rounded-full font-medium text-sm">
                        ${project.category}
                    </span>
                </div>
                
                <h3 class="font-bold text-2xl text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                    ${project.title}
                </h3>
                <p class="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">${project.description}</p>
                
                <div class="space-y-4 mb-6">
                    <div class="flex justify-between text-sm">
                        <span class="text-slate-500 dark:text-slate-400 font-medium">Role:</span>
                        <span class="font-semibold text-slate-700 dark:text-slate-200">${project.role}</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span class="text-slate-500 dark:text-slate-400 font-medium">Duration:</span>
                        <span class="font-semibold text-slate-700 dark:text-slate-200">${project.duration}</span>
                    </div>
                </div>
                
                <div class="flex flex-wrap gap-2">
                    ${project.tags
                      .map(
                        (tag) => `
                        <span class="text-xs bg-gradient-to-r from-blue-100 to-teal-100 dark:from-teal-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-cyan-300 border-0 px-3 py-1 rounded-full">
                            ${tag}
                        </span>
                    `,
                      )
                      .join("")}
                </div>
            </div>
        </div>
    `,
    )
    .join("")

  // Re-initialize Lucide icons for the new content
  lucide.createIcons()
}

// Project modal functions
function openProjectModal(projectId) {
  currentProject = projects.find((p) => p.id === projectId)
  currentImageIndex = 0

  if (!currentProject) return

  modalTitle.textContent = currentProject.title
  modalContent.innerHTML = generateModalContent(currentProject)
  projectModal.classList.add("active")
  document.body.style.overflow = "hidden"

  // Re-initialize Lucide icons and setup carousel
  lucide.createIcons()
  setupCarousel()
}

function closeProjectModal() {
  projectModal.classList.remove("active")
  document.body.style.overflow = ""
  currentProject = null
  currentImageIndex = 0
}

function generateModalContent(project) {
  return `
        <div class="space-y-8">
            <!-- Project Image Gallery -->
            <div class="relative carousel-container">
                <div class="carousel-track" id="carousel-track">
                    ${project.images
                      .map(
                        (image, index) => `
                        <img src="${image}" alt="${project.title} - Image ${index + 1}" class="carousel-slide" />
                    `,
                      )
                      .join("")}
                </div>
                
                ${
                  project.images.length > 1
                    ? `
                    <button class="carousel-nav prev" onclick="previousImage()">
                        <i data-lucide="chevron-left" class="h-5 w-5 text-blue-600 dark:text-cyan-400"></i>
                    </button>
                    <button class="carousel-nav next" onclick="nextImage()">
                        <i data-lucide="chevron-right" class="h-5 w-5 text-blue-600 dark:text-cyan-400"></i>
                    </button>
                    
                    <div class="carousel-indicators">
                        ${project.images
                          .map(
                            (_, index) => `
                            <button class="carousel-indicator ${index === 0 ? "active" : ""}" onclick="goToImage(${index})"></button>
                        `,
                          )
                          .join("")}
                    </div>
                `
                    : ""
                }
            </div>
            
            <!-- Project Overview -->
            <div class="grid md:grid-cols-3 gap-6">
                <div class="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-2xl">
                    <div class="p-2 bg-gradient-to-r from-blue-500 to-teal-600 rounded-xl">
                        <i data-lucide="calendar" class="h-5 w-5 text-white"></i>
                    </div>
                    <div>
                        <p class="text-sm text-slate-500 dark:text-slate-400 font-medium">Duration</p>
                        <p class="font-bold text-slate-700 dark:text-slate-200">${project.duration}</p>
                    </div>
                </div>
                <div class="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-2xl">
                    <div class="p-2 bg-gradient-to-r from-blue-500 to-teal-600 rounded-xl">
                        <i data-lucide="users" class="h-5 w-5 text-white"></i>
                    </div>
                    <div>
                        <p class="text-sm text-slate-500 dark:text-slate-400 font-medium">Team</p>
                        <p class="font-bold text-slate-700 dark:text-slate-200">${project.team}</p>
                    </div>
                </div>
                <div class="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-2xl">
                    <div class="p-2 bg-gradient-to-r from-blue-500 to-teal-600 rounded-xl">
                        <i data-lucide="target" class="h-5 w-5 text-white"></i>
                    </div>
                    <div>
                        <p class="text-sm text-slate-500 dark:text-slate-400 font-medium">Role</p>
                        <p class="font-bold text-slate-700 dark:text-slate-200">${project.role}</p>
                    </div>
                </div>
            </div>
            
            <!-- Challenge & Solution -->
            <div class="grid md:grid-cols-2 gap-8">
                <div class="p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl">
                    <h3 class="font-bold text-xl text-slate-900 dark:text-white mb-4 flex items-center">
                        <div class="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        Challenge
                    </h3>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed">${project.challenge}</p>
                </div>
                <div class="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl">
                    <h3 class="font-bold text-xl text-slate-900 dark:text-white mb-4 flex items-center">
                        <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        Solution
                    </h3>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed">${project.solution}</p>
                </div>
            </div>
            
            <!-- Key Features -->
            <div class="p-6 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-2xl">
                <h3 class="font-bold text-xl text-slate-900 dark:text-white mb-6">Key Features</h3>
                <ul class="grid md:grid-cols-2 gap-4">
                    ${project.keyFeatures
                      .map(
                        (feature) => `
                        <li class="flex items-start space-x-3">
                            <div class="w-6 h-6 bg-gradient-to-r from-blue-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <div class="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                            <span class="text-slate-600 dark:text-slate-300 leading-relaxed">${feature}</span>
                        </li>
                    `,
                      )
                      .join("")}
                </ul>
            </div>
            
            <!-- Design Process -->
            <div class="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl">
                <h3 class="font-bold text-xl text-slate-900 dark:text-white mb-6">Design Process</h3>
                <div class="space-y-4">
                    ${project.designProcess
                      .map(
                        (step, index) => `
                        <div class="flex items-start space-x-4">
                            <div class="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                ${index + 1}
                            </div>
                            <span class="text-slate-600 dark:text-slate-300 leading-relaxed pt-1">${step}</span>
                        </div>
                    `,
                      )
                      .join("")}
                </div>
            </div>
            
            <!-- Impact & Results -->
            <div class="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl">
                <h3 class="font-bold text-xl text-slate-900 dark:text-white mb-4 flex items-center">
                    <div class="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl mr-3">
                        <i data-lucide="trending-up" class="h-5 w-5 text-white"></i>
                    </div>
                    Impact & Results
                </h3>
                <p class="text-green-800 dark:text-green-300 font-semibold mb-4 text-lg">${project.impact}</p>
                <ul class="space-y-2">
                    ${project.outcomes
                      .map(
                        (outcome) => `
                        <li class="text-green-700 dark:text-green-400 flex items-start space-x-2">
                            <div class="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>${outcome}</span>
                        </li>
                    `,
                      )
                      .join("")}
                </ul>
            </div>
            
            <!-- Tools Used -->
            <div>
                <h3 class="font-bold text-xl text-slate-900 dark:text-white mb-4">Tools Used</h3>
                <div class="flex flex-wrap gap-3">
                    ${project.tools
                      .map(
                        (tool) => `
                        <span class="border border-blue-200 dark:border-teal-700 text-blue-700 dark:text-cyan-300 bg-blue-50 dark:bg-teal-900/30 px-4 py-2 rounded-full font-medium">
                            ${tool}
                        </span>
                    `,
                      )
                      .join("")}
                </div>
            </div>
        </div>
    `
}

// Carousel functions
function setupCarousel() {
  updateCarousel()
}

function updateCarousel() {
  if (!currentProject || !currentProject.images) return

  const track = document.getElementById("carousel-track")
  const indicators = document.querySelectorAll(".carousel-indicator")

  if (track) {
    track.style.transform = `translateX(-${currentImageIndex * 100}%)`
  }

  indicators.forEach((indicator, index) => {
    if (index === currentImageIndex) {
      indicator.classList.add("active")
    } else {
      indicator.classList.remove("active")
    }
  })
}

function nextImage() {
  if (!currentProject || !currentProject.images) return

  currentImageIndex = (currentImageIndex + 1) % currentProject.images.length
  updateCarousel()
}

function previousImage() {
  if (!currentProject || !currentProject.images) return

  currentImageIndex = (currentImageIndex - 1 + currentProject.images.length) % currentProject.images.length
  updateCarousel()
}

function goToImage(index) {
  if (!currentProject || !currentProject.images) return

  currentImageIndex = index
  updateCarousel()
}

// Contact form handling
function handleContactForm(e) {
  e.preventDefault()

  const formData = new FormData(e.target)
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  }

  // Here you would typically send the data to your server
  console.log("Contact form submitted:", data)

  // Show success message (you can customize this)
  alert("Thank you for your message! I'll get back to you soon.")

  // Reset form
  e.target.reset()
}

// Utility functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Performance optimizations
const debouncedScroll = debounce(() => {
  // Any scroll-based optimizations can go here
}, 16)

window.addEventListener("scroll", debouncedScroll)
