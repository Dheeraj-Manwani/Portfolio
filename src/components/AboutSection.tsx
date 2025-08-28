import { useState, useEffect, useRef } from 'react';
import { CheckCircle, Heart, Target, Users } from 'lucide-react';

const timeline = [
  {
    year: '2020',
    title: 'Started Coding Journey',
    description: 'Discovered my passion for programming and began learning JavaScript and web development fundamentals.'
  },
  {
    year: '2021',
    title: 'First Full-Stack Project',
    description: 'Built my first complete web application using React and Node.js, sparking my love for full-stack development.'
  },
  {
    year: '2022',
    title: 'Professional Experience',
    description: 'Joined a startup as a junior developer, working on real-world projects and learning industry best practices.'
  },
  {
    year: '2023',
    title: 'Freelance Success',
    description: 'Started freelancing and helped multiple clients build their digital presence with custom web solutions.'
  },
  {
    year: '2024',
    title: 'Continuous Growth',
    description: 'Focusing on modern technologies and building trust-based relationships with clients and collaborators.'
  }
];

const values = [
  {
    icon: Heart,
    title: 'Honesty',
    description: 'I believe in transparent communication and delivering exactly what I promise, no more, no less.'
  },
  {
    icon: CheckCircle,
    title: 'Reliability',
    description: 'You can count on me to meet deadlines and maintain high-quality standards in every project.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'I work best in teams and love contributing to shared goals with positive energy.'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'I\'m committed to continuous learning and improving my craft with every project.'
  }
];

const AboutSection = () => {
  const [visibleTimeline, setVisibleTimeline] = useState<number[]>([]);
  const [visibleValues, setVisibleValues] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate timeline items
            timeline.forEach((_, index) => {
              setTimeout(() => {
                setVisibleTimeline(prev => [...prev, index]);
              }, index * 200);
            });

            // Animate values with slight delay
            setTimeout(() => {
              values.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleValues(prev => [...prev, index]);
                }, index * 150);
              });
            }, 500);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm passionate about creating digital solutions that make a real difference. 
            Here's my journey and what drives me.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Story */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                My Story
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hi! I'm Alex, a passionate full-stack developer who believes technology 
                  should solve real problems and create meaningful experiences. My journey 
                  into programming started with curiosity and has evolved into a deep 
                  commitment to building honest, reliable digital solutions.
                </p>
                <p>
                  What sets me apart is my focus on trust and transparency. I believe in 
                  clear communication, realistic timelines, and delivering exactly what 
                  I promise. Whether working with clients or collaborating with teams, 
                  I bring reliability and positive energy to every project.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with the 
                  developer community. I'm always excited to take on new challenges 
                  and learn from every project.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Core Values
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  const isVisible = visibleValues.includes(index);
                  
                  return (
                    <div
                      key={value.title}
                      className={`bg-card border border-border rounded-lg p-4 transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">
                            {value.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              My Journey
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => {
                  const isVisible = visibleTimeline.includes(index);
                  
                  return (
                    <div
                      key={item.year}
                      className={`relative flex items-start gap-6 transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      {/* Timeline Node */}
                      <div className="relative">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                          {item.year.slice(-2)}
                        </div>
                        {index < timeline.length - 1 && (
                          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-border"></div>
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 pb-8">
                        <div className="bg-card border border-border rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-medium text-primary">
                              {item.year}
                            </span>
                            <span className="text-sm text-muted-foreground">•</span>
                            <h4 className="font-semibold text-foreground">
                              {item.title}
                            </h4>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;