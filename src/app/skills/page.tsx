'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';

interface Skill {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'design' | 'tools' | 'soft';
  description: string;
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  const skills: Skill[] = [
    // Frontend skills
    { name: 'React', level: 5, category: 'frontend', description: 'Advanced expertise in building complex applications with React and its ecosystem' },
    { name: 'TypeScript', level: 4, category: 'frontend', description: 'Strong knowledge of TypeScript for building type-safe applications' },
    { name: 'JavaScript', level: 5, category: 'frontend', description: 'Expert understanding of JavaScript fundamentals and modern features' },
    { name: 'HTML/CSS', level: 5, category: 'frontend', description: 'Strong expertise in creating semantic markup and advanced styling' },
    { name: 'Next.js', level: 4, category: 'frontend', description: 'Experience with server-side rendering and static site generation' },
    { name: 'Redux', level: 4, category: 'frontend', description: 'Proficient in state management with Redux and middleware' },
    { name: 'CSS-in-JS', level: 3, category: 'frontend', description: 'Experience with styled-components and other CSS-in-JS libraries' },
    
    // Backend skills
    { name: 'Node.js', level: 4, category: 'backend', description: 'Strong experience building backend services with Node.js' },
    { name: 'Express', level: 4, category: 'backend', description: 'Proficient in creating RESTful APIs with Express' },
    { name: 'GraphQL', level: 3, category: 'backend', description: 'Experience with designing and implementing GraphQL APIs' },
    { name: 'PostgreSQL', level: 3, category: 'backend', description: 'Knowledge of database design and optimization' },
    { name: 'MongoDB', level: 3, category: 'backend', description: 'Experience with NoSQL databases and data modeling' },
    
    // Design skills
    { name: 'UI Design', level: 3, category: 'design', description: 'Understanding of design principles and UI patterns' },
    { name: 'Figma', level: 3, category: 'design', description: 'Proficient in working with design files and prototypes' },
    { name: 'Responsive Design', level: 4, category: 'design', description: 'Strong expertise in creating mobile-first, responsive layouts' },
    { name: 'Animation', level: 3, category: 'design', description: 'Experience creating engaging animations for web interfaces' },
    
    // Tools & methodologies
    { name: 'Git', level: 4, category: 'tools', description: 'Proficient in version control and collaborative development' },
    { name: 'CI/CD', level: 3, category: 'tools', description: 'Experience setting up automated pipelines for testing and deployment' },
    { name: 'Webpack', level: 3, category: 'tools', description: 'Knowledge of module bundling and optimization' },
    { name: 'Jest', level: 4, category: 'tools', description: 'Strong experience with testing frameworks and methodologies' },
    
    // Soft skills
    { name: 'Problem Solving', level: 5, category: 'soft', description: 'Strong analytical thinking and creative problem-solving abilities' },
    { name: 'Communication', level: 4, category: 'soft', description: 'Clear and effective communication with team members and stakeholders' },
    { name: 'Team Collaboration', level: 5, category: 'soft', description: 'Excellent team player with leadership capabilities' },
    { name: 'Time Management', level: 4, category: 'soft', description: 'Efficient task prioritization and deadline management' }
  ];

  const categories = [
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'design', name: 'Design' },
    { id: 'tools', name: 'Tools' },
    { id: 'soft', name: 'Soft Skills' }
  ];

  const filteredSkills = activeCategory 
    ? skills.filter(skill => skill.category === activeCategory) 
    : skills;

  return (
    <>
      <Navigation />
      
      <section className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Skills & Expertise</h1>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and professional strengths.
          </p>
        </motion.div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeCategory === null 
                ? 'bg-primary text-white' 
                : 'bg-card hover:bg-card/80'
            }`}
          >
            All Skills
          </button>
          
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === category.id 
                  ? 'bg-primary text-white' 
                  : 'bg-card hover:bg-card/80'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Skill visualization */}
        <div className="relative">
          {/* Skill info popup */}
          {hoveredSkill && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute z-10 bg-card border border-[var(--border)] rounded-lg p-4 shadow-lg max-w-xs"
              style={{ 
                left: '50%', 
                transform: 'translateX(-50%)',
                top: '-80px' 
              }}
            >
              <h3 className="font-bold mb-1">{hoveredSkill.name}</h3>
              <p className="text-sm text-foreground/70">{hoveredSkill.description}</p>
            </motion.div>
          )}
          
          {/* Skill bubbles */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-8"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05
                }
              }
            }}
            initial="hidden"
            animate="visible"
          >
            {filteredSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`aspect-square flex items-center justify-center rounded-lg p-4 text-center transition-transform cursor-pointer border border-[var(--border)] ${getCategoryColor(skill.category)}`}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: i * 0.05
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div>
                  <h3 className="font-bold text-lg mb-2">{skill.name}</h3>
                  <div className="flex justify-center gap-1 mt-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <div
                        key={index}
                        className={`h-1.5 w-4 rounded-full ${
                          index < skill.level ? 'bg-primary' : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

function getCategoryColor(category: string): string {
  switch (category) {
    case 'frontend':
      return 'bg-gradient-to-br from-blue-50 to-card dark:from-blue-900/20 dark:to-card';
    case 'backend':
      return 'bg-gradient-to-br from-green-50 to-card dark:from-green-900/20 dark:to-card';
    case 'design':
      return 'bg-gradient-to-br from-purple-50 to-card dark:from-purple-900/20 dark:to-card';
    case 'tools':
      return 'bg-gradient-to-br from-amber-50 to-card dark:from-amber-900/20 dark:to-card';
    case 'soft':
      return 'bg-gradient-to-br from-pink-50 to-card dark:from-pink-900/20 dark:to-card';
    default:
      return 'bg-card';
  }
} 