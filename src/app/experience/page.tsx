'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Navigation from '@/components/Navigation';

interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    period: 'Jan 2022 - Present',
    location: 'San Francisco, CA',
    description: [
      "Lead developer for the company's flagship web application, improving performance by 40%",
      "Architected and implemented a component library used across multiple products",
      "Mentored junior developers and conducted code reviews to ensure code quality",
      "Collaborated with design team to create responsive, accessible user interfaces"
    ],
    skills: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'Jest', 'CI/CD']
  },
  {
    id: 'exp-2',
    role: 'Frontend Developer',
    company: 'Digital Solutions',
    period: 'Mar 2020 - Dec 2021',
    location: 'New York, NY',
    description: [
      "Developed and maintained multiple client-facing web applications",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Built custom animations and interactive elements to enhance user experience",
      "Participated in agile development process with two-week sprint cycles"
    ],
    skills: ['JavaScript', 'React', 'Redux', 'SCSS', 'Webpack', 'Figma']
  },
  {
    id: 'exp-3',
    role: 'Web Developer',
    company: 'Creative Agency',
    period: 'Jun 2018 - Feb 2020',
    location: 'Boston, MA',
    description: [
      "Created responsive websites for clients across various industries",
      "Collaborated with designers to implement pixel-perfect layouts",
      "Optimized websites for maximum speed and scalability",
      "Maintained and updated existing client websites"
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'PHP']
  },
  {
    id: 'exp-4',
    role: 'Junior Developer Intern',
    company: 'StartUp Ventures',
    period: 'Jan 2018 - May 2018',
    location: 'Remote',
    description: [
      "Assisted in developing frontend features for an early-stage startup",
      "Participated in daily stand-up meetings and weekly sprint planning",
      "Gained hands-on experience with modern web development practices",
      "Contributed to bug fixes and performance improvements"
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Git']
  }
];

function ExperienceCard({ experience, index }: { experience: Experience, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });
  
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      ref={cardRef}
      className={`relative grid grid-cols-1 md:grid-cols-5 gap-6 items-start mb-24 last:mb-0 ${
        isEven ? 'md:text-right' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {/* Timeline node */}
      <div className={`hidden md:block md:col-span-2 relative ${
        isEven ? 'md:order-last' : ''
      }`}>
        <div className="h-full w-px bg-border absolute top-0 left-1/2 transform -translate-x-1/2" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-4 w-4 rounded-full bg-primary border-4 border-background" />
        <div className={`pt-8 ${isEven ? 'pr-10' : 'pl-10'}`}>
          <span className="text-sm text-foreground/60">{experience.period}</span>
          <h3 className="text-xl font-bold">{experience.role}</h3>
          <div className="text-lg font-medium text-primary">{experience.company}</div>
          <div className="text-sm text-foreground/60 mt-1">{experience.location}</div>
        </div>
      </div>
      
      {/* Timeline node for mobile */}
      <div className="md:hidden mb-4">
        <span className="text-sm text-foreground/60">{experience.period}</span>
        <h3 className="text-xl font-bold">{experience.role}</h3>
        <div className="text-lg font-medium text-primary">{experience.company}</div>
        <div className="text-sm text-foreground/60 mt-1">{experience.location}</div>
      </div>
      
      {/* Content */}
      <div className={`md:col-span-3 bg-card border border-[var(--border)] rounded-lg p-6 
        ${isEven ? 'md:text-left' : ''}`}
      >
        <ul className="space-y-2 mb-6">
          {experience.description.map((item, i) => (
            <li key={i} className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2">
          {experience.skills.map(skill => (
            <span 
              key={skill} 
              className="px-2 py-1 bg-muted text-foreground/70 rounded text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: targetRef,
    offset: ["start end", "end end"]
  });
  
  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <Navigation />
      
      <section className="container mx-auto px-4 pt-24 pb-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Professional Experience</h1>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            My journey in software development, showcasing the roles and projects that have shaped my career.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Main timeline line - desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border/60 transform -translate-x-1/2" />
          
          {/* Animated timeline progress */}
          <motion.div 
            className="hidden md:block absolute left-1/2 top-0 w-px bg-primary transform -translate-x-1/2 origin-top"
            style={{ height: timelineHeight }}
          />
          
          {/* Experience items */}
          <div ref={targetRef} className="relative">
            {experiences.map((experience, index) => (
              <ExperienceCard 
                key={experience.id} 
                experience={experience} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 