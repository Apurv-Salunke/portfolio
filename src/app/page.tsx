'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '@/components/Navigation';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const projects = [
    {
      title: "Project Nexus",
      description: "AI-powered analytics platform with real-time data processing",
      tags: ["React", "Node.js", "TensorFlow"],
      image: "/project1.jpg",
      link: "#"
    },
    {
      title: "CyberVault",
      description: "Secure blockchain wallet with biometric authentication",
      tags: ["Web3", "Solidity", "TypeScript"],
      image: "/project2.jpg",
      link: "#"
    },
    {
      title: "EcoTracker",
      description: "IoT-based environmental monitoring system",
      tags: ["Python", "AWS", "IoT"],
      image: "/project3.jpg",
      link: "#"
    }
  ];

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp",
      period: "2022 - Present",
      description: "Leading the development of next-gen web applications using React and TypeScript.",
      skills: ["React", "TypeScript", "Next.js"],
      icon: "🚀"
    },
    {
      title: "Full Stack Developer",
      company: "InnovateLabs",
      period: "2020 - 2022",
      description: "Built scalable microservices and modern web interfaces for enterprise clients.",
      skills: ["Node.js", "React", "AWS"],
      icon: "⚡"
    },
    {
      title: "Software Engineer",
      company: "StartupX",
      period: "2018 - 2020",
      description: "Developed innovative solutions for AI-powered analytics platforms.",
      skills: ["Python", "TensorFlow", "Vue.js"],
      icon: "🤖"
    }
  ];

  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "TypeScript", level: 90, icon: "📘" },
        { name: "Next.js", level: 85, icon: "▲" },
        { name: "Tailwind", level: 90, icon: "🎨" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 88, icon: "🟢" },
        { name: "Python", level: 85, icon: "🐍" },
        { name: "GraphQL", level: 80, icon: "◈" },
        { name: "PostgreSQL", level: 85, icon: "🐘" }
      ]
    },
    {
      category: "DevOps",
      items: [
        { name: "Docker", level: 85, icon: "🐳" },
        { name: "AWS", level: 80, icon: "☁️" },
        { name: "CI/CD", level: 85, icon: "⚙️" },
        { name: "Linux", level: 88, icon: "🐧" }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", level: 90, icon: "📦" },
        { name: "VS Code", level: 95, icon: "💻" },
        { name: "Figma", level: 75, icon: "🎯" },
        { name: "Jest", level: 85, icon: "🃏" }
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div 
          className="container mx-auto px-6 py-24 relative z-10"
          style={{ opacity, scale }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full cyber-card flex items-center justify-center">
                <span className="text-4xl">⚡</span>
              </div>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="glitch-text" data-text="Creative Developer">Creative Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Crafting digital experiences with code and creativity
            </p>
            <div className="flex gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cyber-card px-8 py-3 rounded-xl hover-glitch"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-morphism px-8 py-3 rounded-xl hover-lift"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
        <div className="absolute inset-0 -z-10 matrix-bg opacity-30" />
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-24 relative">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 holo-text"
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="cyber-card p-6 rounded-xl group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-background/50">
                  <div className="w-full h-full flex items-center justify-center text-4xl">
                    {/* Placeholder for project image */}
                    🎮
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-24 relative">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 neon-text text-center"
          >
            Experience
          </motion.h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="cyber-card p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full cyber-card flex items-center justify-center flex-shrink-0 text-2xl">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <div>
                          <h3 className="text-xl font-bold text-primary mb-1">{exp.title}</h3>
                          <p className="text-foreground/70">{exp.company}</p>
                        </div>
                        <span className="text-sm text-foreground/60 bg-foreground/5 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <p className="mt-4 text-foreground/80">{exp.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.skills.map(skill => (
                          <span 
                            key={skill}
                            className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-[5.5rem] bottom-0 w-px bg-primary/20 -z-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-24 relative">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-gradient text-center"
          >
            Skills & Technologies
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="cyber-card p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-6 neon-text">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-foreground/60 ml-auto">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 -z-10 matrix-bg opacity-10" />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-24 relative">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 holo-text"
          >
            Get in Touch
          </motion.h2>
          <div className="max-w-2xl mx-auto">
            {/* Contact form will go here */}
          </div>
        </div>
      </section>
    </main>
  );
}
