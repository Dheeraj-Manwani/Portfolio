import { useState, useEffect, useRef } from 'react';

const skills = [
  { name: 'TypeScript', icon: '🔷', color: 'text-blue-400' },
  { name: 'JavaScript', icon: '🟨', color: 'text-yellow-400' },
  { name: 'Python', icon: '🐍', color: 'text-green-400' },
  { name: 'PHP', icon: '🐘', color: 'text-purple-400' },
  { name: 'React', icon: '⚛️', color: 'text-cyan-400' },
  { name: 'Node.js', icon: '🟢', color: 'text-green-500' },
  { name: 'Next.js', icon: '▲', color: 'text-white' },
  { name: 'Git', icon: '📦', color: 'text-orange-400' },
  { name: 'Docker', icon: '🐳', color: 'text-blue-500' },
  { name: 'AWS', icon: '☁️', color: 'text-orange-300' },
  { name: 'PostgreSQL', icon: '🐘', color: 'text-blue-600' },
  { name: 'MongoDB', icon: '🍃', color: 'text-green-600' },
  { name: 'GraphQL', icon: '🔗', color: 'text-pink-400' },
  { name: 'Tailwind CSS', icon: '🎨', color: 'text-teal-400' },
  { name: 'Figma', icon: '🎯', color: 'text-red-400' },
  { name: 'VS Code', icon: '💙', color: 'text-blue-500' }
];

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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
    <section id="skills" ref={sectionRef} className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Stack
          </h2>
        </div>

        <div className={`transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* First Row */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-6 md:mb-8">
            {skills.slice(0, 8).map((skill, index) => (
              <div
                key={skill.name}
                className={`group transition-all duration-500 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-card border border-border rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:shadow-lg cursor-pointer">
                    <span className="text-2xl md:text-3xl">{skill.icon}</span>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-foreground text-background text-xs px-2 py-1 rounded-md whitespace-nowrap">
                      {skill.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {skills.slice(8).map((skill, index) => (
              <div
                key={skill.name}
                className={`group transition-all duration-500 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ transitionDelay: `${(index + 8) * 100}ms` }}
              >
                <div className="relative">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-card border border-border rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:shadow-lg cursor-pointer">
                    <span className="text-2xl md:text-3xl">{skill.icon}</span>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-foreground text-background text-xs px-2 py-1 rounded-md whitespace-nowrap">
                      {skill.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className={`mt-16 text-center transition-all duration-800 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I work with modern technologies to build scalable and maintainable applications. 
            Always learning and adapting to new tools and frameworks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;