import { motion } from "framer-motion";

const skills = [
  {
    name: "TypeScript",
    icon: "🔷",
    color: "text-blue-400",
    category: "Language",
  },
  {
    name: "JavaScript",
    icon: "🟨",
    color: "text-yellow-400",
    category: "Language",
  },
  { name: "Python", icon: "🐍", color: "text-green-400", category: "Language" },
  { name: "PHP", icon: "🐘", color: "text-purple-400", category: "Language" },
  { name: "React", icon: "⚛️", color: "text-cyan-400", category: "Frontend" },
  { name: "Node.js", icon: "🟢", color: "text-green-500", category: "Backend" },
  { name: "Next.js", icon: "▲", color: "text-white", category: "Frontend" },
  { name: "Git", icon: "📦", color: "text-orange-400", category: "Tools" },
  { name: "Docker", icon: "🐳", color: "text-blue-500", category: "DevOps" },
  { name: "AWS", icon: "☁️", color: "text-orange-300", category: "Cloud" },
  {
    name: "PostgreSQL",
    icon: "🐘",
    color: "text-blue-600",
    category: "Database",
  },
  {
    name: "MongoDB",
    icon: "🍃",
    color: "text-green-600",
    category: "Database",
  },
  { name: "GraphQL", icon: "🔗", color: "text-pink-400", category: "API" },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    color: "text-teal-400",
    category: "Styling",
  },
  { name: "Figma", icon: "🎯", color: "text-red-400", category: "Design" },
  { name: "VS Code", icon: "💙", color: "text-blue-500", category: "Tools" },
];

const categories = [
  "Language",
  "Frontend",
  "Backend",
  "Database",
  "API",
  "Styling",
  "Design",
  "Tools",
  "DevOps",
  "Cloud",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-16 md:py-20 bg-gradient-to-b from-secondary/10 to-background relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-secondary/20 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-4 md:mb-6">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mb-12"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ rotate: 5 }}
                  className="w-16 h-16 md:w-20 md:h-20 bg-card border border-border rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:border-primary/50 cursor-pointer backdrop-blur-sm"
                >
                  <span className="text-2xl md:text-3xl">{skill.icon}</span>
                </motion.div>

                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  whileHover={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 pointer-events-none z-10"
                >
                  <div className="bg-foreground text-background text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
                    <div className="font-semibold">{skill.name}</div>
                    <div className="text-xs opacity-80">{skill.category}</div>
                  </div>
                  {/* Arrow */}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-foreground rotate-45"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-card/50 border border-border rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I work with modern technologies to build scalable and maintainable
              applications. Always learning and adapting to new tools and
              frameworks to deliver the best solutions.
            </p>

            {/* Skill categories */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {categories.map((category, index) => (
                <motion.span
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                  className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full font-medium border border-primary/20"
                >
                  {category}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
