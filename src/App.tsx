import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Star,
  Zap,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Code2,
  Globe,
  Palette,
  Server,
  FileCode,
  GitBranch,
  BookOpen,
  TestTube,
  Layers,
  Triangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ParticleCanvas from "@/components/ParticleCanvas";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "React", icon: Code2, color: "text-blue-400" },
    { name: "Next.js", icon: Triangle, color: "text-white" },
    { name: "TypeScript", icon: FileCode, color: "text-blue-500" },
    { name: "JavaScript", icon: FileCode, color: "text-yellow-400" },
    { name: "HTML5", icon: Globe, color: "text-orange-500" },
    { name: "CSS3", icon: Palette, color: "text-blue-400" },
    { name: "Node.js", icon: Server, color: "text-green-500" },
    { name: "Nest.js", icon: Layers, color: "text-red-500" },
    { name: "Storybook", icon: BookOpen, color: "text-pink-500" },
    { name: "Cypress", icon: TestTube, color: "text-gray-400" },
    { name: "Git", icon: GitBranch, color: "text-orange-600" },
  ];

  const socials = [
    {
      name: "Github",
      icon: Github,
      color: "text-white",
      link: "https://github.com/vasanth2929",
    },
    {
      name: "Linkedin",
      icon: Linkedin,
      color: "text-white",
      link: "https://www.linkedin.com/in/vasanth-t-8b9188140/",
    },
  ];

  const projects = [
    {
      title: "Tribyl GTM Intelligence Platform",
      company: "Tribyl Inc",
      period: "2022 - 2025",
      description:
        "AI-powered B2B revenue intelligence platform with advanced analytics and buyer insights.",
      achievements: [
        "Built responsive dashboards with dynamic data visualizations",
        "Developed Chrome Extension for CRM integration",
        "Created Slack App for real-time notifications",
        "Integrated AI-driven analytics features",
      ],
      tech: ["React", "TypeScript", "Highcharts", "Chrome APIs", "Slack SDK"],
      color: "from-violet-500 to-purple-600",
    },
    {
      title: "Repolens Analytics Dashboard",
      company: "Kodepi Lab",
      period: "2021 - 2022",
      description:
        "Data-driven analytics platform for project managers with interactive visualizations.",
      achievements: [
        "Developed comprehensive analytics dashboard",
        "Created interactive charts and data tables",
        "Implemented responsive design for multiple devices",
        "Collaborated with cross-functional teams",
      ],
      tech: ["React", "JavaScript", "Apache Echarts", "CSS3"],
      color: "from-emerald-500 to-teal-600",
    },
  ];

  const experience = [
    {
      role: "Frontend Developer",
      company: "Tribyl Inc",
      period: "Mar 2022 - Jun 2025",
      location: "Remote",
      type: "Full-time",
      highlights: [
        "Led frontend development for GTM intelligence platform",
        "Built Chrome extension with 500+ active users",
        "Developed Slack App for 500+ teams",
        "Improved dashboard performance by 50%",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Kodepi Lab",
      period: "Jan 2021 - Feb 2022",
      location: "Coimbatore, India",
      type: "Full-time",
      highlights: [
        "Developed Repolens analytics platform",
        "Created responsive web applications",
        "Collaborated with design and backend teams",
        "Delivered 15+ client projects successfully",
      ],
    },
  ];

  // Embla Carousel Setup with proper autoplay control
  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 768px)": { slidesToScroll: 2 },
        "(min-width: 1024px)": { slidesToScroll: 4 },
      },
    },
    [autoplay.current]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Handle carousel hover state
  const handleCarouselMouseEnter = useCallback(() => {
    if (autoplay.current) {
      autoplay.current.stop();
    }
  }, []);

  const handleCarouselMouseLeave = useCallback(() => {
    if (autoplay.current) {
      autoplay.current.play();
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Canvas Particle System */}
      <ParticleCanvas particleCount={80} starCount={40} orbCount={4} />

      {/* Cursor follower */}
      <div
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`,
        }}
      />

      {/* Grid background */}
      <div className="fixed inset-0 opacity-10 z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-white"
            >
              VASANTH
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Experience", "Contact"].map(
                (item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`transition-colors hover:text-white relative group ${
                      activeSection === item.toLowerCase()
                        ? "text-white"
                        : "text-white/60"
                    }`}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                  </motion.button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden z-20"
      >
        <div className="container mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 className="text-7xl md:text-9xl font-bold mb-6 text-white relative">
              VASANTH
              <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">
                VASANTH
              </span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-2xl md:text-4xl mb-8 text-white/80 font-light tracking-wide"
            >
              Frontend Developer
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl mb-12 text-white/60 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Transforming complex data into intuitive user experiences with
              cutting-edge frontend technologies
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 px-8 py-3 text-lg font-medium group"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
                <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-black px-8 py-3 text-lg bg-transparent font-medium"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative z-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              About Me
            </h2>
            <div className="w-24 h-px bg-white mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <p className="text-xl text-white/80 leading-relaxed font-light">
                  Experienced software developer with{" "}
                  <span className="text-white font-medium">
                    5 years of professional experience
                  </span>{" "}
                  specializing in creating user-centric web applications. I've
                  successfully delivered{" "}
                  <span className="text-white font-medium">
                    major enterprise projects
                  </span>{" "}
                  including GTM intelligence platforms and analytics dashboards.
                </p>
                <p className="text-xl text-white/80 leading-relaxed font-light">
                  My expertise lies in{" "}
                  <span className="text-white font-medium">
                    frontend technologies and frameworks
                  </span>
                  , with a strong focus on React, TypeScript, and modern web
                  development practices. I excel at transforming complex data
                  into intuitive, interactive visualizations.
                </p>
                <div className="flex items-center gap-4 text-white/60 pt-4">
                  <MapPin className="w-5 h-5" />
                  <span className="font-light">Coimbatore, India</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                {
                  number: "5+",
                  label: "Years Experience",
                  color: "from-violet-500 to-purple-600",
                },
                {
                  number: "5+",
                  label: "Major Projects",
                  color: "from-blue-500 to-cyan-600",
                },
                {
                  number: "10k+",
                  label: "Users Impacted",
                  color: "from-emerald-500 to-teal-600",
                },
                {
                  number: "2",
                  label: "Companies",
                  color: "from-orange-500 to-red-600",
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 text-center hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                    <div
                      className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                    >
                      {stat.number}
                    </div>
                    <div className="text-white/80 font-light">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section - Embla Carousel */}
      <section id="skills" className="py-32 relative z-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Skills & Expertise
            </h2>
            <div className="w-24 h-px bg-white mx-auto" />
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            {/* Embla Carousel */}
            <div
              className="overflow-hidden"
              ref={emblaRef}
              onMouseEnter={handleCarouselMouseEnter}
              onMouseLeave={handleCarouselMouseLeave}
            >
              <div className="flex">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] px-4"
                  >
                    <motion.div
                      className="group h-full"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: (index % 4) * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl h-full">
                        <div className="text-center">
                          <div className="mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                            <skill.icon
                              className={`w-12 h-12 ${skill.color}`}
                            />
                          </div>
                          <h3 className="text-xl font-medium text-white">
                            {skill.name}
                          </h3>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative z-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Featured Projects
            </h2>
            <div className="w-24 h-px bg-white mx-auto" />
          </motion.div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                  <div className="p-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.color}`}
                          />
                          <Badge
                            variant="outline"
                            className="border-white/30 text-white/70 bg-transparent font-light"
                          >
                            {project.period}
                          </Badge>
                        </div>
                        <h3 className="text-3xl font-bold mb-3 text-white">
                          {project.title}
                        </h3>
                        <p className="text-white/60 font-medium mb-6">
                          {project.company}
                        </p>
                        <p className="text-white/80 mb-8 leading-relaxed font-light text-lg">
                          {project.description}
                        </p>

                        <div className="mb-8">
                          <h4 className="text-lg font-medium mb-4 text-white">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-3">
                            {project.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-white/70 font-light"
                              >
                                <Star className="w-4 h-4 text-white mt-1 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-3 mb-8">
                          {project.tech.map((tech) => (
                            <Badge
                              key={tech}
                              className="bg-white/10 text-white/80 hover:bg-white/20 border-0 font-light"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        {/* 
                        <div className="flex items-center gap-3 text-white">
                          <Target className="w-5 h-5" />
                          <span className="font-medium">{project.impact}</span>
                        </div> */}
                      </div>

                      <div className="relative">
                        <div className="w-full h-80 rounded-lg overflow-hidden bg-gradient-to-br from-white/5 to-white/10 border border-white/10 transform group-hover:scale-105 transition-transform duration-500">
                          {index === 0 ? (
                            // Tribyl Dashboard Mockup - Linear Style
                            <div className="p-6 h-full flex flex-col">
                              <div className="flex items-center gap-3 mb-6">
                                <div className="flex gap-2">
                                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="flex-1 bg-white/10 rounded-full px-4 py-2 text-sm text-white/60 font-light">
                                  tribyl.ai/dashboard
                                </div>
                              </div>
                              <div className="flex-1 space-y-4">
                                <div className="grid grid-cols-3 gap-4">
                                  {[1, 2, 3].map((i) => (
                                    <div
                                      key={i}
                                      className="bg-white/10 rounded-lg p-4 border border-white/10"
                                    >
                                      <div className="w-full h-2 bg-white/20 rounded-full mb-2"></div>
                                      <div className="w-3/4 h-2 bg-white/10 rounded-full"></div>
                                    </div>
                                  ))}
                                </div>
                                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                  <div className="flex justify-between items-center mb-4">
                                    <div className="w-24 h-3 bg-white/20 rounded-full"></div>
                                    <div className="w-16 h-3 bg-white/10 rounded-full"></div>
                                  </div>
                                  <div className="space-y-2">
                                    {[1, 2, 3, 4].map((i) => (
                                      <div
                                        key={i}
                                        className="flex items-center gap-3"
                                      >
                                        <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                                        <div className="flex-1 h-2 bg-white/10 rounded-full"></div>
                                        <div className="w-8 h-2 bg-white/20 rounded-full"></div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            // Repolens Analytics Mockup - Linear Style
                            <div className="p-6 h-full flex flex-col">
                              <div className="flex items-center gap-3 mb-6">
                                <div className="flex gap-2">
                                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="flex-1 bg-white/10 rounded-full px-4 py-2 text-sm text-white/60 font-light">
                                  repolens.com/analytics
                                </div>
                              </div>
                              <div className="flex-1 space-y-4">
                                <div className="flex justify-between items-center">
                                  <div className="text-sm text-white/80 font-medium">
                                    Project Analytics
                                  </div>
                                  <div className="bg-white/10 rounded-full px-3 py-1 text-xs text-white/60 border border-white/10">
                                    Q4 2021
                                  </div>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                  <svg
                                    className="w-full h-20"
                                    viewBox="0 0 300 80"
                                  >
                                    <defs>
                                      <linearGradient
                                        id="gradient1"
                                        x1="0%"
                                        y1="0%"
                                        x2="100%"
                                        y2="0%"
                                      >
                                        <stop
                                          offset="0%"
                                          stopColor="rgb(16, 185, 129)"
                                        />
                                        <stop
                                          offset="100%"
                                          stopColor="rgb(20, 184, 166)"
                                        />
                                      </linearGradient>
                                    </defs>
                                    <polyline
                                      fill="none"
                                      stroke="url(#gradient1)"
                                      strokeWidth="2"
                                      points="0,60 50,45 100,35 150,40 200,25 250,30 300,15"
                                    />
                                    {[0, 50, 100, 150, 200, 250, 300].map(
                                      (x, i) => (
                                        <circle
                                          key={i}
                                          cx={x}
                                          cy={[60, 45, 35, 40, 25, 30, 15][i]}
                                          r="3"
                                          fill="rgb(16, 185, 129)"
                                        />
                                      )
                                    )}
                                  </svg>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                    <div className="text-xs text-white/60 mb-1">
                                      Completion Rate
                                    </div>
                                    <div className="text-lg font-bold text-emerald-400">
                                      87%
                                    </div>
                                  </div>
                                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                    <div className="text-xs text-white/60 mb-1">
                                      Active Projects
                                    </div>
                                    <div className="text-lg font-bold text-teal-400">
                                      24
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative z-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Experience
            </h2>
            <div className="w-24 h-px bg-white mx-auto" />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-white/20" />

              {experience.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative pl-20 pb-16 group"
                >
                  <motion.div
                    className="absolute left-6 w-4 h-4 bg-white rounded-full border-4 border-black"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  />

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {exp.role}
                        </h3>
                        <p className="text-white/60 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-white/10 text-white/80 mb-2 border-0 font-light">
                          {exp.period}
                        </Badge>
                        <p className="text-white/60 text-sm font-light">
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3 text-white/70 font-light"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Zap className="w-4 h-4 text-white mt-1 flex-shrink-0" />
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative z-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Let's Connect
            </h2>
            <div className="w-24 h-px bg-white mx-auto mb-6" />
            <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
              Ready to bring your next project to life? Let's discuss how we can
              work together.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10">
                  <h3 className="text-3xl font-bold mb-8 text-white">
                    Get In Touch
                  </h3>
                  <div className="space-y-8">
                    {[
                      {
                        icon: Mail,
                        label: "Email",
                        value: "jobsearch.vasanth@gmail.com",
                        color: "from-violet-500 to-purple-600",
                      },
                      {
                        icon: Phone,
                        label: "Phone",
                        value: "+91 8838840719",
                        color: "from-emerald-500 to-teal-600",
                      },
                      {
                        icon: MapPin,
                        label: "Location",
                        value: "Coimbatore, India",
                        color: "from-orange-500 to-red-600",
                      },
                    ].map((contact) => (
                      <div
                        key={contact.label}
                        className="flex items-center gap-6"
                      >
                        <div
                          className={`w-14 h-14 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center`}
                        >
                          <contact.icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <p className="text-white/60 text-sm font-light">
                            {contact.label}
                          </p>
                          <p className="text-white font-medium text-lg">
                            {contact.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center"
              >
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-bold mb-6 text-white">
                    Let's Build Something Amazing
                  </h3>
                  <p className="text-white/70 mb-10 font-light text-lg">
                    I'm always excited to work on new projects and collaborate
                    with talented teams.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button
                    size="lg"
                    asChild
                    className="bg-white text-black hover:bg-white/90 px-10 py-4 text-lg font-medium group"
                  >
                    <a href="mailto:jobsearch.vasanth@gmail.com">
                      <Mail className="w-5 h-5 mr-3" />
                      Send Email
                      <ArrowUpRight className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white hover:text-black px-10 py-4 text-lg bg-transparent font-medium"
                    onClick={() => window.open("tel:+918838840719")}
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    Call Now
                  </Button>
                </div>

                <div className="flex justify-center gap-8 mt-10">
                  {socials.map((social, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="icon"
                      asChild
                      className="w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 group"
                    >
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <social.icon className="w-7 h-7 group-hover:scale-110 transition-transform" />
                      </a>
                    </Button>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 relative z-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60 font-light">
            © 2025 Vasanth. Crafted with passion and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
}
