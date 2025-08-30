import { motion } from "framer-motion";
import {
  CheckCircle,
  Heart,
  Target,
  Users,
  Star,
  Award,
  Code,
  Rocket,
} from "lucide-react";

const timeline = [
  {
    year: "2020",
    title: "Started Coding Journey",
    description:
      "Discovered my passion for programming and began learning JavaScript and web development fundamentals.",
    icon: Code,
  },
  {
    year: "2021",
    title: "First Full-Stack Project",
    description:
      "Built my first complete web application using React and Node.js, sparking my love for full-stack development.",
    icon: Rocket,
  },
  {
    year: "2022",
    title: "Professional Experience",
    description:
      "Joined a startup as a junior developer, working on real-world projects and learning industry best practices.",
    icon: Users,
  },
  {
    year: "2023",
    title: "Freelance Success",
    description:
      "Started freelancing and helped multiple clients build their digital presence with custom web solutions.",
    icon: Star,
  },
  {
    year: "2024",
    title: "Continuous Growth",
    description:
      "Focusing on modern technologies and building trust-based relationships with clients and collaborators.",
    icon: Award,
  },
];

const values = [
  {
    icon: Heart,
    title: "Honesty",
    description:
      "I believe in transparent communication and delivering exactly what I promise, no more, no less.",
    color: "text-red-500",
  },
  {
    icon: CheckCircle,
    title: "Reliability",
    description:
      "You can count on me to meet deadlines and maintain high-quality standards in every project.",
    color: "text-green-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "I work best in teams and love contributing to shared goals with positive energy.",
    color: "text-blue-500",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "I'm committed to continuous learning and improving my craft with every project.",
    color: "text-purple-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
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

const timelineVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-20 bg-gradient-to-b from-background to-accent/5 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <div className="absolute top-20 left-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
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
            About Me
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm passionate about creating digital solutions that make a real
            difference. Here's my journey and what drives me forward.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* Personal Story */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                My Story
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
                <p>
                  Hi! I'm Dheeraj, a passionate full-stack developer who
                  believes technology should solve real problems and create
                  meaningful experiences. My journey into programming started
                  with curiosity and has evolved into a deep commitment to
                  building honest, reliable digital solutions.
                </p>
                <p>
                  What sets me apart is my focus on trust and transparency. I
                  believe in clear communication, realistic timelines, and
                  delivering exactly what I promise. Whether working with
                  clients or collaborating with teams, I bring reliability and
                  positive energy to every project.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community. I'm always excited to
                  take on new challenges and learn from every project.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Core Values
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => {
                  const Icon = value.icon;

                  return (
                    <motion.div
                      key={value.title}
                      variants={itemVariants}
                      whileHover={{
                        y: -4,
                        scale: 1.02,
                        transition: { duration: 0.2, ease: "easeOut" },
                      }}
                      className="bg-card border border-border rounded-xl p-4 md:p-5 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-3">
                        <motion.div
                          whileHover={{ rotate: 5, scale: 1.1 }}
                          className={`bg-primary/10 p-2.5 rounded-lg flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300`}
                        >
                          <Icon className={`h-5 w-5 ${value.color}`} />
                        </motion.div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 text-base">
                            {value.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
              My Journey
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"
              />

              <div className="space-y-6 md:space-y-8">
                {timeline.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.year}
                      variants={timelineVariants}
                      whileHover={{ x: 8 }}
                      className="relative flex items-start gap-6"
                    >
                      {/* Timeline Node */}
                      <div className="relative">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                          className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold shadow-lg"
                        >
                          <Icon className="h-4 w-4" />
                        </motion.div>
                        {index < timeline.length - 1 && (
                          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-border"></div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-6 md:pb-8">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="bg-card border border-border rounded-xl p-4 md:p-5 hover:shadow-lg transition-all duration-300"
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-md">
                              {item.year}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              •
                            </span>
                            <h4 className="font-semibold text-foreground text-base md:text-lg">
                              {item.title}
                            </h4>
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16 md:mt-20"
        >
          <div className="bg-card/50 border border-border rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Let's discuss your project and see how I can help bring your
              vision to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="btn-hero"
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
