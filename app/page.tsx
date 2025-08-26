"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Server,
  Database,
  Code,
  Shield,
  Zap,
  Globe,
  Settings,
  TestTube,
  Cloud,
  GitBranch,
  Terminal,
  Layers,
  CheckCircle,
  TrendingUp,
  Cpu,
  Monitor,
  Smartphone,
  Palette,
  Lock,
  Activity,
  BarChart3,
  Rocket,
  Star,
  Heart,
  Coffee,
  Target,
  Award,
  Users,
  MessageSquare,
  FileCode,
  Wrench,
  Lightbulb,
  Sparkles,
  ArrowRight,
  Play,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "services", "projects", "experience", "contact"]
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

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const skillsData = [
    {
      category: "Backend Development",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      skills: [
        { name: "Node.js", icon: Server, level: 90 },
        { name: "Nest.js", icon: Layers, level: 75 },
        { name: "RESTful APIs", icon: Globe, level: 90 },
        { name: "GraphQL", icon: FileCode, level: 45 },
        { name: "Server-side Logic", icon: Cpu, level: 85 },
      ],
    },
    {
      category: "Database & Storage",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      skills: [
        { name: "PostgreSQL", icon: Database, level: 80 },
        { name: "MongoDB", icon: Database, level: 85 },
        { name: "Firebase", icon: Cloud, level: 75 },
        { name: "Database Design", icon: Settings, level: 85 },
      ],
    },
    {
      category: "Authentication & Security",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      skills: [
        { name: "JWT", icon: Shield, level: 90 },
        { name: "OAuth", icon: Lock, level: 80 },
        { name: "Token Management", icon: Shield, level: 85 },
      ],
    },
    {
      category: "DevOps & Cloud",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
      skills: [
        { name: "Docker", icon: Settings, level: 80 },
        { name: "Kubernetes", icon: Cloud, level: 50 },
        { name: "CI/CD (Vercel)", icon: GitBranch, level: 85 },
        { name: "AWS", icon: Cloud, level: 70 },
        { name: "Linux", icon: Terminal, level: 85 },
      ],
    },
    {
      category: "Testing & QA",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/30",
      skills: [
        { name: "Manual Testing", icon: TestTube, level: 90 },
        { name: "API Testing", icon: Activity, level: 85 },
        { name: "Automation Testing", icon: Rocket, level: 80 },
        { name: "Performance Testing", icon: TrendingUp, level: 55 },
        { name: "Load Testing", icon: BarChart3, level: 55 },
      ],
    },
    {
      category: "Frontend Development",
      color: "from-teal-500 to-green-500",
      bgColor: "bg-teal-500/10",
      borderColor: "border-teal-500/30",
      skills: [
        { name: "React", icon: Code, level: 85 },
        { name: "Angular", icon: Code, level: 80 },
        { name: "Redux", icon: Layers, level: 75 },
        { name: "JavaScript", icon: FileCode, level: 90 },
        { name: "HTML/CSS", icon: Monitor, level: 85 },
        { name: "Tailwind CSS", icon: Palette, level: 45 },
        { name: "Bootstrap", icon: Smartphone, level: 85 },
      ],
    },
    {
      category: "Real-time & Communication",
      color: "from-pink-500 to-purple-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/30",
      skills: [
        { name: "Socket.io", icon: MessageSquare, level: 85 },
        { name: "WebSockets", icon: Globe, level: 80 },
      ],
    },
    {
      category: "Tools & Version Control",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
      skills: [
        { name: "Git", icon: GitBranch, level: 90 },
        { name: "GitHub", icon: GitBranch, level: 90 },
        { name: "Postman/Insomnia", icon: TestTube, level: 85 },
        { name: "VS Code", icon: Code, level: 90 },
      ],
    },
  ]

  const servicesData = [
    {
      title: "Backend Development",
      description: "Scalable server-side applications with Node.js, Express, and modern frameworks",
      icon: Server,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      features: ["RESTful APIs", "Database Design", "Authentication", "Performance Optimization"],
    },
    {
      title: "Database Architecture",
      description: "Efficient database design and optimization for high-performance applications",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      features: ["Schema Design", "Query Optimization", "Data Migration", "Backup Strategies"],
    },
    {
      title: "QA & Testing",
      description: "Comprehensive testing strategies to ensure reliable and bug-free applications",
      icon: TestTube,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
      features: ["Manual Testing", "API Testing", "Automation", "Performance Testing"],
    },
    {
      title: "DevOps & Deployment",
      description: "CI/CD pipelines and cloud deployment for seamless application delivery",
      icon: Rocket,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      features: ["Docker Containers", "CI/CD Pipelines", "Cloud Deployment", "Monitoring"],
    },
    {
      title: "System Integration",
      description: "Connecting different systems and third-party services for unified solutions",
      icon: Wrench,
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/30",
      features: ["API Integration", "Microservices", "Data Synchronization", "Legacy Systems"],
    },
    {
      title: "Performance Optimization",
      description: "Enhancing application speed and efficiency for better user experience",
      icon: TrendingUp,
      color: "from-teal-500 to-green-500",
      bgColor: "bg-teal-500/10",
      borderColor: "border-teal-500/30",
      features: ["Code Optimization", "Database Tuning", "Caching Strategies", "Load Balancing"],
    },
  ]

  const projects = [
    {
      title: "Freelancer Hub",
      description:
        "A comprehensive MEAN Stack platform enabling 50+ freelancers to showcase services and connect with clients. Built with clean architecture principles for scalability.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2WV56hbJfv4bEDcBsooVCRpl06sBbp.png",
      technologies: ["MongoDB", "Express.js", "Angular", "Node.js", "JWT"],
      github: "https://github.com/zizoelshimy/freelancerProject",
      demo: "#",
    },
    {
      title: "GOHA Restaurant System",
      description:
        "Custom desktop and web application for restaurant operations with cashier module, inventory management, and reporting. Handles 500+ daily transactions.",
      image: "/restaurant-management-system-interface.png",
      technologies: ["Node.js", "MongoDB", "Express", "Bootstrap", "Electron"],
      github: "#",
      demo: "https://goha.ethereals.dev/",
    },
    {
      title: "E-commerce Backend System",
      description:
        "Robust backend solution supporting 5,000+ daily API requests with comprehensive validation, security middleware, and scalable architecture.",
      image: "/ecommerce-backend-api-dashboard.png",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "REST APIs"],
      github: "https://github.com/zizoelshimy/nodjs-ecommerece",
      demo: "#",
    },
  ]

  const experiences = [
    {
      type: "experience",
      title: "Backend & QA Engineer",
      company: "Team Ethereal",
      period: "05/2025 – Present",
      location: "Alexandria",
      achievements: [
        "Engineered and maintained scalable SaaS applications and enterprise systems, improving uptime to 99.9%",
        "Enhanced database management and backend architecture, reducing query response times by 40%",
        "Designed and tested APIs and automation scripts, increasing API test coverage by 30% and reducing manual testing time by 15%",
        "Conducted manual and automated QA testing, reducing production bugs by 20% and regression testing effort by 25%",
        "Collaborated in Agile teams, completing an average of 10 user stories per sprint, accelerating feature delivery",
        "Implemented CI/CD pipelines (GitHub Actions, Docker, Vercel), cutting deployment errors by 25% and improving release frequency",
        "Collaborated in over 20 code reviews, raising code quality standards and ensuring consistent best practices",
        "Improved user experience by integrating client feedback loops, boosting customer satisfaction ratings by 18%",
      ],
    },
    {
      type: "experience",
      title: "MEAN Stack Trainee",
      company: "NTI",
      period: "07/2025 – 08/2025",
      location: "Alexandria",
      achievements: [
        "Completed hands-on training in JavaScript, Angular, Node.js, and Express, successfully delivering 4 full-stack projects",
        'Built "Freelancer Hub" full-stack platform enabling 50+ freelancers to showcase services, improving client acquisition efficiency by 30%',
        "Collaborated in team projects, participating in 20+ code reviews to enhance coding standards and maintainability",
        "Engaged in problem-solving sessions to troubleshoot and optimize app performance, improving load times by 25%",
        "Designed REST APIs and integrated authentication (JWT), enabling secure data exchange across modules",
      ],
    },
    {
      type: "experience",
      title: "Linux Administration Trainee",
      company: "ITI",
      period: "07/2025",
      location: "Alexandria",
      achievements: [
        "Mastered Linux fundamentals and system architecture using Rocky Linux virtual machines, successfully configuring 3 production-like virtual environments",
        "Implemented command-line operations and file management, automating daily tasks with shell scripts that saved 5 hours per week",
        "Assisted in troubleshooting system issues, resolving 95% of reported operational errors within a 24-hour window",
      ],
    },
    {
      type: "education",
      title: "Faculty of Computer and Data Science",
      company: "Alexandria University",
      period: "09/2022 – Present",
      location: "Alexandria",
      achievements: [
        "CGPA: 3.766",
        "Specializing in software engineering, database systems, and backend development with focus on scalable web applications",
      ],
    },
  ]

  const FloatingElements = () => {
    const elements = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      icon: [Code, Database, Server, Cloud, Zap, Globe, Settings, Rocket, Star, Heart][i % 10],
      delay: i * 0.5,
      duration: 10 + (i % 5),
      x: Math.random() * 100,
      y: Math.random() * 100,
    }))

    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {elements.map((element) => {
          const IconComponent = element.icon
          return (
            <motion.div
              key={element.id}
              className="absolute opacity-5"
              style={{
                left: `${element.x}%`,
                top: `${element.y}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                rotate: [0, 360],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: element.duration,
                repeat: Number.POSITIVE_INFINITY,
                delay: element.delay,
                ease: "easeInOut",
              }}
            >
              <IconComponent className="w-8 h-8 text-blue-400" />
            </motion.div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <FloatingElements />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-xl font-bold text-blue-400 flex items-center gap-2"
            >
              <Sparkles className="w-6 h-6" />
              ME
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["hero", "about", "skills", "services", "projects", "experience", "contact"].map((section, index) => (
                <motion.button
                  key={section}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-200 hover:text-blue-400 relative ${
                    activeSection === section ? "text-blue-400" : "text-gray-300"
                  }`}
                >
                  {section === "hero" ? "Home" : section}
                  {activeSection === section && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400"
                    />
                  )}
                </motion.button>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md border-b border-gray-700"
          >
            <div className="px-4 py-4 space-y-2">
              {["hero", "about", "skills", "services", "projects", "experience", "contact"].map((section) => (
                <motion.button
                  key={section}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    scrollToSection(section)
                    setMobileMenuOpen(false)
                  }}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-200 ${
                    activeSection === section 
                      ? "text-blue-400 bg-blue-400/10" 
                      : "text-gray-300 hover:text-blue-400 hover:bg-gray-800"
                  }`}
                >
                  {section === "hero" ? "Home" : section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="mb-6 md:mb-8"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Code className="w-12 h-12 md:w-16 md:h-16 text-blue-400" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 px-4">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white block sm:inline"
              >
                Moataz
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-blue-400 block sm:inline"
              >
                El-shimy
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center gap-2 mb-4 flex-wrap px-4"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Rocket className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
              </motion.div>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300">Full Stack Developer</p>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Star className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto px-4"
            >
              Full Stack Developer with 2 years of experience building scalable web applications. Specialized in Node.js
              backend development, modern frontend frameworks, and delivering end-to-end solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center px-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-200 flex items-center gap-2 group"
                >
                  <Play className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  View My Work
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-3 rounded-lg transition-all duration-200 flex items-center gap-2 group"
                >
                  <MessageSquare className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div whileHover={{ scale: 1.2 }} className="p-2 rounded-full bg-blue-500/20 backdrop-blur-sm">
            <ChevronDown className="w-6 h-6 text-blue-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 bg-gray-800/50 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 mb-4 flex-wrap"
            >
              <Users className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
              <h2 className="text-2xl md:text-4xl font-bold">About Me</h2>
              <Heart className="w-6 h-6 md:w-8 md:h-8 text-red-400" />
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto rounded-full overflow-hidden shadow-2xl relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DxlJZt8t3cfMNRkYE5yOgijnpnIrGX.png"
                  alt="Moataz Mohamed El-shimy"
                  className="w-full h-full object-cover relative z-10"
                />
              </motion.div>

              <motion.div
                animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-blue-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1"
              >
                <Award className="w-4 h-4" />
                2+ Years
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5], rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1"
              >
                <Target className="w-4 h-4" />
                Full Stack
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4 md:space-y-6 order-1 lg:order-2"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed"
              >
                I'm a Full Stack Developer with 2 years of experience building and maintaining scalable web applications
                and enterprise systems. Currently working at Team Ethereal, I've improved system uptime to 99.9% and
                enhanced database performance by 40%.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed"
              >
                My expertise spans the entire development stack - from Node.js backend development and RESTful APIs to
                modern frontend frameworks like React and Angular. I'm passionate about delivering complete, secure, and
                efficient solutions through collaborative development.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 md:pt-6"
              >
                {[
                  { icon: Coffee, label: "Projects", value: "10+" },
                  { icon: Users, label: "Clients", value: "50+" },
                  { icon: Award, label: "Experience", value: "2 Years" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="text-center p-2 sm:p-4 bg-gray-800/50 rounded-lg border border-gray-700"
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                    >
                      <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-blue-400 mx-auto mb-1 md:mb-2" />
                    </motion.div>
                    <div className="text-lg md:text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 md:py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 mb-4 flex-wrap"
            >
              <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
              <h2 className="text-2xl md:text-4xl font-bold">Technical Skills</h2>
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"
            />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base px-4">
              Expertise across the full backend development stack with focus on scalable, secure solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`${category.bgColor} ${category.borderColor} border rounded-xl p-6 transition-all duration-300 hover:shadow-2xl relative overflow-hidden group`}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  animate={{
                    background: [
                      `linear-gradient(45deg, ${category.color})`,
                      `linear-gradient(135deg, ${category.color})`,
                      `linear-gradient(225deg, ${category.color})`,
                      `linear-gradient(315deg, ${category.color})`,
                      `linear-gradient(45deg, ${category.color})`,
                    ],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                />

                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}
                  >
                    <Code className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>

                <div className="space-y-4 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 group/skill"
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.3 }}
                        transition={{ duration: 0.5 }}
                        className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center group-hover/skill:shadow-lg transition-all duration-200`}
                      >
                        <skill.icon className="w-4 h-4 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-white font-medium group-hover/skill:text-blue-300 transition-colors duration-200">
                            {skill.name}
                          </span>
                          <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.5 }}
                            viewport={{ once: true }}
                            className="text-gray-400 text-sm font-semibold"
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1.5,
                              delay: categoryIndex * 0.1 + skillIndex * 0.1,
                              ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            className={`h-2 rounded-full bg-gradient-to-r ${category.color} shadow-sm relative`}
                          >
                            <motion.div
                              animate={{ x: [-10, 10, -10] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                              className="absolute inset-0 bg-white/20 rounded-full"
                            />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-20 bg-gray-800/50 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 mb-4 flex-wrap"
            >
              <Settings className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
              <h2 className="text-2xl md:text-4xl font-bold">Services I Offer</h2>
              <Rocket className="w-6 h-6 md:w-8 md:h-8 text-orange-400" />
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"
            />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base px-4">
              Comprehensive backend development and QA services to bring your ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative"
              >
                <Card
                  className={`${service.bgColor} ${service.borderColor} border bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 hover:shadow-2xl relative overflow-hidden`}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    animate={{
                      backgroundImage: [
                        "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                        "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                        "radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                        "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                      ],
                    }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  />

                  <CardHeader className="text-center relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.8, type: "spring" }}
                      className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-white text-xl mb-2 group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-2 text-gray-300 group-hover:text-white transition-colors cursor-pointer"
                        >
                          <motion.div whileHover={{ scale: 1.2, rotate: 90 }} transition={{ duration: 0.2 }}>
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          </motion.div>
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 mb-4 flex-wrap"
            >
              <FileCode className="w-6 h-6 md:w-8 md:h-8 text-green-400" />
              <h2 className="text-2xl md:text-4xl font-bold">My Projects</h2>
              <Star className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-blue-400 transition-all duration-300 group overflow-hidden">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent flex items-center justify-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white/20 backdrop-blur-sm rounded-full p-3"
                      >
                        <Play className="w-8 h-8 text-white" />
                      </motion.div>
                    </motion.div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white group-hover:text-blue-300 transition-colors flex items-center gap-2">
                      <Code className="w-5 h-5" />
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1 }}
                          className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-sm border border-blue-500/30 hover:bg-blue-600/30 transition-colors cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent flex items-center gap-2 group/btn"
                          onClick={() => window.open(project.github, "_blank")}
                          disabled={project.github === "#"}
                        >
                          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                            <Github className="w-4 h-4" />
                          </motion.div>
                          Code
                          <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2 group/btn"
                          onClick={() => window.open(project.demo, "_blank")}
                          disabled={project.demo === "#"}
                        >
                          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                            <ExternalLink className="w-4 h-4" />
                          </motion.div>
                          Demo
                          <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-12 md:py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 mb-4 flex-wrap"
            >
              <Briefcase className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
              <h2 className="text-2xl md:text-4xl font-bold text-center">Experience & Education</h2>
              <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-green-400" />
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"
            />
          </motion.div>

          {/* Mobile Timeline */}
          <div className="block md:hidden space-y-6">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-blue-400 transition-all duration-300 group overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      background: [
                        "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
                        "linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
                        "linear-gradient(225deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
                        "linear-gradient(315deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
                      ],
                    }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  />

                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.5 }}>
                          {item.type === "experience" ? (
                            <Briefcase className="w-5 h-5 text-blue-400" />
                          ) : (
                            <GraduationCap className="w-5 h-5 text-green-400" />
                          )}
                        </motion.div>
                        <span className="text-blue-400 text-sm font-medium">{item.period}</span>
                      </div>
                      {item.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-gray-400" />
                          <span className="text-gray-400 text-sm">{item.location}</span>
                        </div>
                      )}
                    </div>
                    <CardTitle className="text-white text-lg md:text-xl mb-2 group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-blue-400 font-medium text-sm md:text-base flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <Award className="w-4 h-4" />
                      </motion.div>
                      {item.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 relative z-10">
                    <div className="space-y-3">
                      {item.achievements.map((achievement, achievementIndex) => (
                        <motion.div
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 + achievementIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-3 group/achievement cursor-pointer"
                        >
                          <motion.div whileHover={{ scale: 1.2, rotate: 90 }} transition={{ duration: 0.2 }}>
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5 group-hover/achievement:text-green-300" />
                          </motion.div>
                          <p className="text-gray-300 text-sm leading-relaxed group-hover/achievement:text-white transition-colors">
                            {achievement}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Desktop Timeline */}
          <div className="relative hidden md:block">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-green-400"
            />

            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-16 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}
                >
                  <Card className="bg-gray-800 border-gray-700 hover:border-blue-400 transition-all duration-300 group overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        background: [
                          "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
                          "linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
                          "linear-gradient(225deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
                          "linear-gradient(315deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
                        ],
                      }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                    />

                    <CardHeader className="pb-4 relative z-10">
                      <div className="flex items-center gap-2 mb-3">
                        <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.5 }}>
                          {item.type === "experience" ? (
                            <Briefcase className="w-5 h-5 text-blue-400" />
                          ) : (
                            <GraduationCap className="w-5 h-5 text-green-400" />
                          )}
                        </motion.div>
                        <span className="text-blue-400 text-sm font-medium">{item.period}</span>
                        {item.location && (
                          <>
                            <span className="text-gray-500">•</span>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-gray-400" />
                              <span className="text-gray-400 text-sm">{item.location}</span>
                            </div>
                          </>
                        )}
                      </div>
                      <CardTitle className="text-white text-xl mb-2 group-hover:text-blue-300 transition-colors">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-blue-400 font-medium text-base flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <Award className="w-4 h-4" />
                        </motion.div>
                        {item.company}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0 relative z-10">
                      <div className="space-y-3">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <motion.div
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 + achievementIndex * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ x: 5 }}
                            className="flex items-start gap-3 group/achievement cursor-pointer"
                          >
                            <motion.div whileHover={{ scale: 1.2, rotate: 90 }} transition={{ duration: 0.2 }}>
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5 group-hover/achievement:text-green-300" />
                            </motion.div>
                            <p className="text-gray-300 text-sm leading-relaxed group-hover/achievement:text-white transition-colors">
                              {achievement}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.5 }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-gray-900 shadow-lg"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="w-full h-full rounded-full bg-white/20"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 mb-4 flex-wrap"
            >
              <MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
              <h2 className="text-2xl md:text-4xl font-bold">Get In Touch</h2>
              <Heart className="w-6 h-6 md:w-8 md:h-8 text-red-400" />
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"
            />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base px-4">
              I'm always open to discussing new opportunities and interesting backend development projects. Let's
              connect and build something scalable together!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { icon: Mail, label: "Email", value: "moatazelshimy136@gmail.com", color: "from-blue-500 to-cyan-500" },
                { icon: Phone, label: "Phone", value: "+20 106 934 4741", color: "from-green-500 to-emerald-500" },
                { icon: MapPin, label: "Location", value: "Alexandria, Egypt", color: "from-purple-500 to-pink-500" },
              ].map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300 group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center shadow-lg`}
                  >
                    <contact.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {contact.label}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{contact.value}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex gap-4 pt-6"
              >
                {[
                  { icon: Github, url: "https://github.com/zizoelshimy", color: "hover:bg-gray-700" },
                  {
                    icon: Linkedin,
                    url: "https://www.linkedin.com/in/moataz-el-shimy-07b381281/",
                    color: "hover:bg-blue-600",
                  },
                ].map((social, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      size="icon"
                      className={`border-gray-600 text-gray-300 ${social.color} hover:border-blue-600 hover:text-white transition-all duration-200 bg-transparent relative overflow-hidden group`}
                      onClick={() => window.open(social.url, "_blank")}
                    >
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                        <social.icon className="w-5 h-5 relative z-10" />
                      </motion.div>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        className="absolute inset-0 bg-blue-500/20 rounded-md"
                      />
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-gray-700 hover:border-blue-400 transition-colors duration-300 relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
                      "linear-gradient(225deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
                      "linear-gradient(315deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                />

                <CardHeader className="relative z-10">
                  <CardTitle className="text-white flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Mail className="w-5 h-5 text-blue-400" />
                    </motion.div>
                    Send Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 relative z-10">
                  <form action="https://formspree.io/f/mblajzzo" method="POST" className="space-y-4">
                    <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                      <Input
                        name="email"
                        placeholder="Your Email"
                        type="email"
                        required
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 transition-all duration-200"
                      />
                    </motion.div>
                    <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        required
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 transition-all duration-200"
                      />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2 group"
                      >
                        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                          <Mail className="w-4 h-4" />
                        </motion.div>
                        Send
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400 flex items-center justify-center gap-2"
          >
            © 2025 Moataz Mohamed El-shimy. All rights reserved.
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Heart className="w-4 h-4 text-red-400" />
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
