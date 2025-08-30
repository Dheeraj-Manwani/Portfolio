import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Clock, Zap } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, product management, and secure payment processing.",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    poster:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "#",
    liveUrl: "#",
    color: "primary",
    status: "completed",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative project management tool with real-time updates, team collaboration, and advanced filtering.",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    poster:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    githubUrl: "#",
    liveUrl: "#",
    color: "secondary",
    status: "development",
    progress: 75,
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather application with location-based forecasts, interactive charts, and personalized weather alerts.",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    poster:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450",
    tags: ["React", "Chart.js", "OpenWeather API", "PWA"],
    githubUrl: "#",
    liveUrl: "#",
    color: "accent",
    status: "completed",
  },
  {
    title: "Analytics Dashboard",
    description:
      "A comprehensive business analytics platform with real-time data visualization and customizable reporting features.",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    poster:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450",
    tags: ["Vue.js", "D3.js", "Express", "Redis"],
    githubUrl: "#",
    liveUrl: "#",
    color: "primary",
    status: "completed",
  },
  {
    title: "Social Media Platform",
    description:
      "A modern social networking platform with user profiles, real-time messaging, and content sharing capabilities.",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    poster:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450",
    tags: ["React Native", "Firebase", "GraphQL", "AWS"],
    githubUrl: "#",
    liveUrl: "#",
    color: "secondary",
    status: "development",
    progress: 60,
  },
  {
    title: "Learning Management System",
    description:
      "An educational platform with course management, progress tracking, and interactive learning modules for students and instructors.",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    poster:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450",
    tags: ["Next.js", "Prisma", "MySQL", "Stripe"],
    githubUrl: "#",
    liveUrl: "#",
    color: "accent",
    status: "completed",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export function NewProjectsSection() {
  return (
    <section
      id="projects"
      className="py-16 md:py-20 bg-gradient-to-b from-background to-accent/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-4 md:mb-6"
            data-testid="projects-title"
          >
            Featured Projects
          </h2>
          <p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            data-testid="projects-description"
          >
            Here are some of my recent projects that showcase my skills and
            expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-card border border-border rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative group"
              data-testid={`project-${index}`}
            >
              {/* Status Badge */}
              {project.status === "development" && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="absolute top-3 right-3 z-20"
                >
                  <div className="bg-warning/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1.5 shadow-lg">
                    <Clock className="w-3 h-3" />
                    <span>In Dev</span>
                  </div>
                </motion.div>
              )}

              {/* Video Preview */}
              <div className="relative overflow-hidden">
                <video
                  src={project.video}
                  poster={project.poster}
                  className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  muted
                  loop
                  autoPlay
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                />

                {/* Video Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-white/20 backdrop-blur-sm rounded-full p-3"
                  >
                    <Zap className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                {/* Development Progress Bar */}
                {project.status === "development" && project.progress && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-3">
                    <div className="flex items-center justify-between text-white text-xs mb-2">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          delay: 0.8,
                          ease: "easeOut",
                        }}
                        className="bg-warning h-2 rounded-full"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 md:p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground line-clamp-2">
                    {project.title}
                  </h3>
                  {project.status === "completed" && (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="flex items-center space-x-1.5 text-success text-sm flex-shrink-0 ml-2"
                    >
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium">Live</span>
                    </motion.div>
                  )}
                </div>

                <p className="text-muted-foreground mb-4 text-sm md:text-base leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * tagIndex, duration: 0.3 }}
                      className={`px-2.5 py-1 text-xs rounded-md font-medium ${
                        project.color === "primary"
                          ? "bg-primary/10 text-primary"
                          : project.color === "secondary"
                          ? "bg-secondary/20 text-secondary-700"
                          : "bg-accent/40 text-accent-700"
                      }`}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={project.githubUrl}
                    className="flex-1 text-center border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-4 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium flex items-center justify-center space-x-2 hover:shadow-md active:scale-95"
                    data-testid={`project-${index}-github`}
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </a>

                  {project.status === "completed" ? (
                    <a
                      href={project.liveUrl}
                      className="flex-1 text-center bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium flex items-center justify-center space-x-2 hover:shadow-md active:scale-95"
                      data-testid={`project-${index}-live`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 text-center bg-muted text-muted-foreground px-4 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center space-x-2 cursor-not-allowed"
                      data-testid={`project-${index}-coming-soon`}
                    >
                      <Code className="w-4 h-4" />
                      <span>Coming Soon</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
