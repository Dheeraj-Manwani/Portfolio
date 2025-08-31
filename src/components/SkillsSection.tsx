import ts from "@/assets/typescript.svg";
import js from "@/assets/js.svg";
import java from "@/assets/java.svg";
import tailwind from "@/assets/tailwindcss.svg";
import mysql from "@/assets/mysql.svg";
import mongo from "@/assets/mongodb.svg";
import motionicon from "@/assets/motion.svg";
import docker from "@/assets/docker.svg";
import next from "@/assets/nextjs2-dark.svg";
import node from "@/assets/nodejs.svg";
import radix from "@/assets/radixui-dark.svg";
import reactnav from "@/assets/react-navigation.svg";
import reactrouter from "@/assets/react-router-dark.svg";
import react from "@/assets/react.svg";
import redis from "@/assets/redis.svg";
import redux from "@/assets/redux.svg";
import shadcn from "@/assets/shadcn-ui-dark.svg";
import prisma from "@/assets/prisma.svg";
import postgres from "@/assets/postgre.svg";
import aws from "@/assets/aws.svg";
import graphql from "@/assets/graphql.svg";
import zustand from "@/assets/zustand.svg";
import vscode from "@/assets/vscode.svg";
import git from "@/assets/git.svg";
import github from "@/assets/github_new.svg";

const skills = [
  {
    name: "TypeScript",
    icon: ts,
    category: "Language",
  },
  {
    name: "JavaScript",
    icon: js,
    category: "Language",
  },
  {
    name: "Java",
    icon: java,
    category: "Language",
  },
  {
    name: "React",
    icon: react,
    category: "Frontend",
  },
  {
    name: "Node.js",
    icon: node,
    category: "Backend",
  },
  {
    name: "Next.js",
    icon: next,
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    category: "Styling",
  },
  {
    name: "MySQL",
    icon: mysql,
    category: "Database",
  },
  {
    name: "MongoDB",
    icon: mongo,
    category: "Database",
  },
  {
    name: "PostgreSQL",
    icon: postgres,
    category: "Database",
  },
  {
    name: "Redis",
    icon: redis,
    category: "Database",
  },
  {
    name: "GraphQL",
    icon: graphql,
    category: "API",
  },
  {
    name: "Redux",
    icon: redux,
    category: "State Management",
  },
  {
    name: "Zustand",
    icon: zustand,
    category: "State Management",
  },
  {
    name: "Prisma",
    icon: prisma,
    category: "ORM",
  },
  {
    name: "Docker",
    icon: docker,
    category: "DevOps",
  },
  {
    name: "AWS",
    icon: aws,
    category: "Cloud",
  },
  {
    name: "Framer Motion",
    icon: motionicon,
    category: "Animation",
  },
  {
    name: "React Router",
    icon: reactrouter,
    category: "Routing",
  },
  // {
  //   name: "React Navigation",
  //   icon: reactnav,
  //   category: "Mobile",
  // },
  {
    name: "Radix UI",
    icon: radix,
    category: "UI Components",
  },
  {
    name: "Shadcn/ui",
    icon: shadcn,
    category: "UI Components",
  },
  {
    name: "VS Code",
    icon: vscode,
    category: "Tools",
  },
  {
    name: "Git",
    icon: git,
    category: "Tools",
  },
  {
    name: "GitHub",
    icon: github,
    category: "Tools",
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-16 md:py-20 bg-gradient-to-b from-secondary/10 to-background relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-4 md:mb-6">
            Tools & Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I work with modern technologies to build scalable and maintainable
            applications. Always learning and adapting to new tools and
            frameworks to deliver the best solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 mb-12">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative flex justify-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-border rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:border-primary/30 cursor-pointer backdrop-blur-sm shadow-sm relative overflow-hidden group-hover:scale-105">
                {/* Subtle inner highlight */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent dark:via-gray-700/20 pointer-events-none"></div>
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain relative z-10"
                />
              </div>

              {/* Tooltip */}
              <div className="absolute -bottom-12 left-1/2  transform -translate-x-1/2 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-foreground text-background text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
                  <div className="font-semibold">{skill.name}</div>
                  <div className="text-xs opacity-80">{skill.category}</div>
                </div>
                {/* Arrow */}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-foreground rotate-45"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
