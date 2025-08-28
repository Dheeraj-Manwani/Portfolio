import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Play, Code, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    status: 'completed'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, team chat, and progress tracking.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'TailwindCSS'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
    status: 'development'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.',
    tags: ['React', 'Weather API', 'Chart.js', 'PWA'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4',
    status: 'development'
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for social media metrics with data visualization and automated reporting.',
    tags: ['Vue.js', 'D3.js', 'Python', 'REST API'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    status: 'completed'
  }
];

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            projects.forEach((_, index) => {
              setTimeout(() => {
                setVisibleProjects(prev => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating 
            meaningful digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isVisible = visibleProjects.includes(index);
            const isHovered = hoveredProject === project.id;
            
            return (
              <div
                key={project.id}
                className={`card-hover bg-card rounded-xl border border-border overflow-hidden transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Video Preview */}
                <div className="relative aspect-video bg-muted overflow-hidden">
                  {/* Development Status Badge */}
                  {project.status === 'development' && (
                    <Badge 
                      variant="secondary" 
                      className="absolute top-3 left-3 z-10 bg-orange-500/90 text-white border-0 backdrop-blur-sm"
                    >
                      <Code className="w-3 h-3 mr-1" />
                      In Development
                    </Badge>
                  )}
                  
                  {/* Actual Video */}
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={project.videoUrl} type="video/mp4" />
                    {/* Fallback content */}
                    <div className="absolute inset-0 bg-gradient-primary opacity-20 flex items-center justify-center">
                      <div className="text-primary-foreground text-center">
                        <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center mb-2 mx-auto">
                          <Play className="h-8 w-8 text-primary-foreground ml-1" />
                        </div>
                        <p className="text-sm font-medium">Project Demo</p>
                      </div>
                    </div>
                  </video>
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-primary/20 transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button className="btn-hero">
                        <Play className="mr-2 h-4 w-4" />
                        {project.status === 'development' ? 'View Progress' : 'View Demo'}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                   {/* Action Buttons */}
                   <div className="flex gap-3">
                     <Button 
                       className="btn-hero flex-1"
                       asChild
                     >
                       <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                         <ExternalLink className="mr-2 h-4 w-4" />
                         {project.status === 'development' ? 'View Progress' : 'Live Demo'}
                       </a>
                     </Button>
                     
                     <Button 
                       variant="outline"
                       className="btn-outline"
                       asChild
                     >
                       <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                         <Github className="h-4 w-4" />
                       </a>
                     </Button>
                   </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="btn-outline px-8 py-3"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;