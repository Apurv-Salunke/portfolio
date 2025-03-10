'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';

export default function Home() {
  const clientWork = [
    {
      title: "Healthcare Analytics Platform",
      context: "For a leading healthcare provider",
      impact: "65% faster patient data retrieval",
      description: "Engineered a real-time analytics dashboard that transformed how physicians access and interpret patient data during consultations.",
      tech: ["React", "TypeScript", "D3.js"],
      metrics: [
        { label: "Data retrieval speed", value: "65%", suffix: "faster" },
        { label: "Daily active users", value: "200+", suffix: "physicians" },
        { label: "Patient records", value: "1M+", suffix: "processed" }
      ],
      color: "from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "E-commerce Optimization",
      context: "For a direct-to-consumer brand",
      impact: "28% increase in conversion rate",
      description: "Redesigned the checkout experience with real-time validation and progress indication, significantly reducing cart abandonment.",
      tech: ["Next.js", "Stripe", "TailwindCSS"],
      metrics: [
        { label: "Conversion rate", value: "28%", suffix: "increase" },
        { label: "Cart abandonment", value: "45%", suffix: "reduction" },
        { label: "Page load time", value: "65%", suffix: "faster" }
      ],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "IoT Monitoring System",
      context: "For an industrial manufacturer",
      impact: "40% reduction in downtime",
      description: "Developed an intelligent monitoring system with predictive maintenance alerts, optimizing equipment performance across multiple facilities.",
      tech: ["Node.js", "AWS IoT", "TimescaleDB"],
      metrics: [
        { label: "Downtime reduction", value: "40%", suffix: "improvement" },
        { label: "Facilities covered", value: "12", suffix: "locations" },
        { label: "Sensors monitored", value: "500+", suffix: "real-time" }
      ],
      color: "from-emerald-500/20 to-teal-500/20"
    }
  ];

  const process = [
    {
      phase: "Discovery",
      description: "Understanding the core problem and business context",
      icon: "🔍",
      details: [
        "Stakeholder interviews",
        "Problem space mapping",
        "Technical feasibility analysis"
      ],
      color: "from-primary/20 to-primary/5"
    },
    {
      phase: "Design",
      description: "Crafting solutions that balance form and function",
      icon: "✨",
      details: [
        "System architecture",
        "User experience flows",
        "Technical specifications"
      ],
      color: "from-secondary/20 to-secondary/5"
    },
    {
      phase: "Development",
      description: "Building with precision and maintainability in mind",
      icon: "⚙️",
      details: [
        "Iterative development",
        "Code quality focus",
        "Performance optimization"
      ],
      color: "from-accent/20 to-accent/5"
    },
    {
      phase: "Refinement",
      description: "Iterating based on real-world usage and feedback",
      icon: "📈",
      details: [
        "User feedback loops",
        "Performance monitoring",
        "Continuous improvement"
      ],
      color: "from-primary/20 to-primary/5"
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-[90vh] flex items-center justify-center relative">
        <div className="text-center max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full cyber-card flex items-center justify-center">
                <motion.span 
                  className="text-4xl"
                  animate={{ 
                    opacity: [1, 0.5, 0.8, 1],
                    textShadow: [
                      "0 0 8px rgba(255,255,255,0.8)",
                      "0 0 4px rgba(255,255,255,0.4)",
                      "0 0 6px rgba(255,255,255,0.6)",
                      "0 0 8px rgba(255,255,255,0.8)"
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  ⚡
                </motion.span>
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="glitch-text" data-text="Digital Craftsman">Digital Craftsman</span>
            </h1>
            <p className="text-xl text-foreground/80">
              Building thoughtful digital solutions for businesses and individuals
            </p>
            <div className="flex gap-4 justify-center mt-8">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cyber-card px-8 py-3 rounded-xl hover-glitch"
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Work
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-morphism px-8 py-3 rounded-xl hover-lift"
                onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See Process
              </motion.button>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 -z-10 matrix-bg opacity-30" />
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 border-t border-foreground/10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">Selected Work</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Crafting impactful solutions that drive real business outcomes
            </p>
          </div>

          <div className="space-y-24">
            {clientWork.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`p-6 rounded-2xl bg-gradient-to-br ${project.color} 
                  backdrop-blur-sm border border-foreground/5 hover:border-primary/20 
                  transition-all duration-300`}
                >
                  <div className="flex flex-col gap-6">
                    {/* Header */}
                    <div>
                      <div className="text-xs text-foreground/50 tracking-wider mb-2">{project.context}</div>
                      <h3 className="text-2xl font-medium group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {project.metrics.map((metric) => (
                        <motion.div
                          key={metric.label}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col items-center p-3 rounded-xl bg-background/30"
                        >
                          <div className="text-2xl font-medium text-primary mb-1">
                            {metric.value}
                          </div>
                          <div className="text-xs text-foreground/50 text-center">
                            {metric.label}
                          </div>
                          <div className="text-sm text-primary/70">
                            {metric.suffix}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          className="text-xs px-3 py-1.5 rounded-full bg-primary/10 
                            text-primary/80 hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-background-alt/20 border-t border-foreground/10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">How I Work</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              A systematic approach to delivering high-quality solutions, 
              ensuring transparency and collaboration throughout the journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map((stage, index) => (
              <motion.div
                key={stage.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`p-6 rounded-2xl bg-gradient-to-br ${stage.color} backdrop-blur-sm 
                  border border-foreground/5 hover:border-primary/20 transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 flex items-center justify-center rounded-xl 
                        bg-background/30 backdrop-blur-sm text-2xl"
                    >
                      {stage.icon}
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-primary/60 text-sm font-mono">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-lg font-medium">{stage.phase}</h3>
                      </div>
                      <p className="text-sm text-foreground/60 mb-4">{stage.description}</p>
                      
                      <ul className="space-y-2">
                        {stage.details.map((detail, i) => (
                          <motion.li
                            key={detail}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                            className="text-sm flex items-center gap-2"
                          >
                            <span className="w-1 h-1 rounded-full bg-primary/40" />
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t border-foreground/10">
        <div className="max-w-xl mx-auto px-4 text-center">
          <p className="text-foreground/60 mb-8">
            Currently available for select projects
          </p>
          <a 
            href="mailto:hello@example.com"
            className="text-lg hover:text-primary transition-colors"
          >
            hello@example.com
          </a>
          
          <div className="mt-8 pt-8 border-t border-foreground/10">
            <div className="flex justify-center gap-8 text-sm text-foreground/60">
              <a href="#" className="hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="hover:text-primary transition-colors">GitHub</a>
              <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-foreground/40 text-sm border-t border-foreground/10">
        © 2024 • Crafted with purpose
      </footer>
    </main>
  );
}
