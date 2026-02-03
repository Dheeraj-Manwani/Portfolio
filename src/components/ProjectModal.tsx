import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Wrench, Sparkles, Layers } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProjectImageCarousel } from "./ProjectImageCarousel";
import { RotatingTag } from "./RotatingTag";
import { Highlighter } from "./Highlighter";

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    poster: string;
    images?: string[];
    tags: string[];
    githubUrl: string;
    liveUrl: string;
    color: "primary" | "secondary" | "accent" | string;
    status: "completed" | "development" | string;
    workInProgress?: string;
    rotatingText?: Array<{ text: string; icon?: React.ReactNode }>;
    highlights?: string[];
    complexity?: string;
  };
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectModal({
  project,
  open,
  onOpenChange,
}: ProjectModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] flex flex-col p-0">
        {/* Header - Fixed */}
        <DialogHeader className="px-6 pt-6 pb-4 flex-shrink-0 border-b border-border">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2 flex-wrap">
            <span>{project.title}</span>
            {project.status === "development" && (
              <span className="text-base md:text-lg font-normal text-muted-foreground">
                (in Dev)
              </span>
            )}
            {project.status === "completed" && (
              <span className="text-base md:text-lg font-normal text-muted-foreground flex items-center gap-1.5">
                (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: "spring" }}
                  className="flex items-center space-x-1.5 text-success"
                >
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span>Live</span>
                </motion.span>
                )
              </span>
            )}
          </DialogTitle>
          {/* Rotating Text below title */}
          {/* {project.rotatingText && project.rotatingText.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mt-3"
            >
              <RotatingTag
                items={project.rotatingText}
                color={project.color as "primary" | "secondary" | "accent"}
              />
            </motion.div>
          )} */}
        </DialogHeader>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5 min-h-0 custom-scrollbar">
          {/* Carousel - Fixed Height */}
          <div className="w-full rounded-lg overflow-hidden flex-shrink-0">
            <ProjectImageCarousel
              title={project.title}
              poster={project.poster}
              images={project.images}
              size="large"
            />
          </div>

          {/* Description */}
          <div className="flex-shrink-0">
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              About
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="flex-shrink-0"
            >
              <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Key Highlights
              </h3>
              <ul className="space-y-2">
                {project.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                    <span className="leading-relaxed">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Complexity */}
          {project.complexity && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="flex-shrink-0"
            >
              <h3 className="text-lg font-semibold mb-2 text-foreground flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary" />
                Technical Complexity
              </h3>
              <div className="p-4 rounded-lg bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 border border-primary/20">
                {/* <Highlighter
                  color={
                    project.color === "primary"
                      ? "#3b82f6"
                      : project.color === "secondary"
                      ? "#8b5cf6"
                      : "#f59e0b"
                  }
                  action="highlight"
                  strokeWidth={2}
                  animationDuration={800}
                  isView={true}
                > */}
                <p className="text-sm md:text-base text-foreground leading-relaxed">
                  {project.complexity}
                </p>
                {/* </Highlighter> */}
              </div>
            </motion.div>
          )}

          {/* Work In Progress */}
          {project.status === "development" && project.workInProgress && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="p-4 rounded-lg bg-slate-100/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex-shrink-0"
            >
              <div className="flex items-start gap-2">
                <Wrench className="w-4 h-4 text-slate-600 dark:text-slate-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Currently Working On:
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.workInProgress}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Tags */}
          <div className="flex-shrink-0">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * tagIndex, duration: 0.3 }}
                  className={`px-3 py-1.5 text-sm rounded-md font-medium ${project.color === "primary"
                    ? "bg-primary/10 text-primary"
                    : project.color === "secondary"
                      ? "bg-secondary/20 text-secondary-700"
                      : "bg-accent/40 text-accent-700"
                    }`}
                >
                  {tag}
                </motion.span>
              ))}
              {/* {project.rotatingText && project.rotatingText.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * project.tags.length, duration: 0.3 }}
                >
                  <RotatingTag
                    items={project.rotatingText}
                    color={project.color as "primary" | "secondary" | "accent"}
                  />
                </motion.div>
              )} */}
            </div>
          </div>
        </div>

        {/* Action Buttons - Fixed at Bottom */}
        <div className="flex flex-col sm:flex-row gap-3 px-6 py-4 border-t border-border flex-shrink-0 bg-background">
          <a
            href={project.githubUrl}
            onClick={(e) => e.stopPropagation()}
            className="flex-1 text-center border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg transition-all duration-200 text-sm font-medium flex items-center justify-center space-x-2 hover:shadow-md active:scale-95"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-4 h-4" />
            <span>View Code</span>
          </a>

          {project.status === "completed" ? (
            <a
              href={project.liveUrl}
              onClick={(e) => e.stopPropagation()}
              className="flex-1 text-center bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg transition-all duration-200 text-sm font-medium flex items-center justify-center space-x-2 hover:shadow-md active:scale-95"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          ) : (
            <button
              disabled
              onClick={(e) => e.stopPropagation()}
              className="flex-1 text-center bg-muted text-muted-foreground px-6 py-3 rounded-lg text-sm font-medium flex items-center justify-center space-x-2 cursor-not-allowed"
            >
              <Code className="w-4 h-4" />
              <span>Coming Soon</span>
            </button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
