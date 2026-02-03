import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Clock, Zap } from "lucide-react";
import { TextShimmer } from "./TextShimmer";
import { ProjectImageCarousel } from "./ProjectImageCarousel";
import { ProjectModal } from "./ProjectModal";
import { RotatingTag } from "./RotatingTag";
import { useState } from "react";

const projects = [
  {
    title: "Pulse - Feel the rhythm",
    description:
      "A responsive social media platform with trending section, searches and many more functionalities.",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    poster: import.meta.env.VITE_CLOUDFRONT_URL + "/static_assets/pulse/pulse-full-size-logo.png",
    images: [
      import.meta.env.VITE_CLOUDFRONT_URL + "/static_assets/pulse/pulse-full-size-logo.png",
      import.meta.env.VITE_CLOUDFRONT_URL + "/static_assets/pulse/pulse-1.png",
      import.meta.env.VITE_CLOUDFRONT_URL + "/static_assets/pulse/pulse-2.png",
      import.meta.env.VITE_CLOUDFRONT_URL + "/static_assets/pulse/pulse-3.png",
      import.meta.env.VITE_CLOUDFRONT_URL + "/static_assets/pulse/pulse-4.png",
    ],
    tags: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"],
    githubUrl: "https://github.com/Dheeraj-Manwani/pulse-social-media",
    liveUrl: "https://pulse.bydm.site/",
    color: "primary",
    status: "completed",
  },
  {
    title: "Better Gondia Mitra",
    description:
      "A complaint management web application which provides an end to end solution for complaint management for both users and admins.",
    video: import.meta.env.VITE_CLOUDFRONT_URL + "/static_assets/gms/bgm-logo.png",
    poster: import.meta.env.VITE_CLOUDFRONT_URL + "/static_assets/gms/bgm-logo.png",
    images: [
      import.meta.env.VITE_CLOUDFRONT_URL + "/static_assets/gms/bgm-logo.png",
      import.meta.env.VITE_CLOUDFRONT_URL + "/static_assets/gms/gms-new-4.png",
      import.meta.env.VITE_CLOUDFRONT_URL + "/static_assets/gms/gms-0.5.png",
      import.meta.env.VITE_CLOUDFRONT_URL + "/static_assets/gms/gms-new-1.png",
      import.meta.env.VITE_CLOUDFRONT_URL + "/static_assets/gms/gms-new-2.png",
    ],
    tags: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"],
    githubUrl: "https://github.com/Dheeraj-Manwani/better-gondia-bot",
    liveUrl: "https://better-gondia-bot.vercel.app/",
    color: "primary",
    status: "completed",
    rotatingText: [
      { text: "Deployed to Prod", icon: <Zap className="w-3 h-3" /> },
      { text: "700+ complaints in first month", icon: <Zap className="w-3 h-3" /> },
      { text: "Actively used by users and admins", icon: <Zap className="w-3 h-3" /> },
    ],
  },
  {
    title: "Code Arena - Contest Platform",
    description:
      "A competitive coding platform for students to participate in coding contests and improve their skills.",
    video: import.meta.env.VITE_CLOUDFRONT_URL + "/static_assets/code-arena/code-arena-logo.png",
    poster: import.meta.env.VITE_CLOUDFRONT_URL + "/static_assets/code-arena/code-arena-logo.png",
    images: [
      import.meta.env.VITE_CLOUDFRONT_URL + "/static_assets/code-arena/logo.png",
      import.meta.env.VITE_CLOUDFRONT_URL + "/static_assets/code-arena/code-arena-editor.png",
      import.meta.env.VITE_CLOUDFRONT_URL + "/static_assets/code-arena/code-arena-user-main.png",
      import.meta.env.VITE_CLOUDFRONT_URL + "/static_assets/code-arena/code-arena-admin-main.png",
      import.meta.env.VITE_CLOUDFRONT_URL + "/static_assets/code-arena/code-arena-admin-edit-contest.png",
    ],
    tags: ["React", "Node.js", "Redis", "WebSocket",],
    githubUrl: "https://github.com/Dheeraj-Manwani/code-arena",
    liveUrl: "#",
    color: "secondary",
    status: "development",
    progress: 75,
    workInProgress: "Currently working on judge worker and realtime leaderboard.",
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
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: (typeof projects)[number]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

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
              onClick={() => handleProjectClick(project)}
              className="bg-card border border-border rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative group cursor-pointer"
              data-testid={`project-${index}`}
            >
              {/* Status Badge */}
              {project.status === "development" && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="absolute top-3 right-3 z-20"
                  onClick={handleButtonClick}
                >
                  <div className="bg-slate-900/95 dark:bg-slate-800/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold flex items-center space-x-1.5 shadow-lg border border-slate-700/50">
                    <Clock className="w-3 h-3 text-slate-300" />
                    <TextShimmer
                      as="span"
                      className="[--base-color:#64748b] [--base-gradient-color:#ffffff] dark:[--base-color:#64748b] dark:[--base-gradient-color:#ffffff]"
                      duration={2}
                      spread={2}
                    >
                      In Development
                    </TextShimmer>
                  </div>
                </motion.div>
              )}

              <ProjectImageCarousel
                title={project.title}
                poster={project.poster}
                images={
                  (project as typeof project & { images?: string[] }).images
                }
              />

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

                {/* Rotating Text below title */}
                {(project as typeof project & { rotatingText?: Array<{ text: string; icon?: React.ReactNode }> }).rotatingText && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="mb-4"
                  >
                    <RotatingTag
                      items={(project as typeof project & { rotatingText?: Array<{ text: string; icon?: React.ReactNode }> }).rotatingText || []}
                      color={project.color as "primary" | "secondary" | "accent"}
                    />
                  </motion.div>
                )}

                <p className="text-muted-foreground mb-4 text-sm md:text-base leading-relaxed line-clamp-4">
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
                      className={`px-2.5 py-1 text-xs rounded-md font-medium ${project.color === "primary"
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

                <div className="flex flex-col sm:flex-row gap-3" onClick={handleButtonClick}>
                  <a
                    href={project.githubUrl}
                    className="flex-1 text-center border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-4 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium flex items-center justify-center space-x-2 hover:shadow-md active:scale-95"
                    data-testid={`project-${index}-github`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </a>

                  {project.status === "completed" ? (
                    <a
                      href={project.liveUrl}
                      className="flex-1 text-center bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium flex items-center justify-center space-x-2 hover:shadow-md active:scale-95"
                      data-testid={`project-${index}-live`}
                      target="_blank"
                      rel="noopener noreferrer"
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

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={{
            title: selectedProject.title,
            description: selectedProject.description,
            poster: selectedProject.poster,
            images: (selectedProject as typeof selectedProject & {
              images?: string[];
            }).images,
            tags: selectedProject.tags,
            githubUrl: selectedProject.githubUrl,
            liveUrl: selectedProject.liveUrl,
            color: selectedProject.color as "primary" | "secondary" | "accent",
            status: selectedProject.status as "completed" | "development",
            workInProgress: (selectedProject as typeof selectedProject & {
              workInProgress?: string;
            }).workInProgress,
          }}
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
        />
      )}
    </section>
  );
}
