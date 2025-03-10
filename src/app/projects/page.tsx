'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github?: string;
}

export default function Projects() {
  // Sample projects data - replace with your actual projects
  const projects: Project[] = [
    {
      id: 'project-1',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe for payments. Features include product management, cart functionality, user authentication, and order processing.',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2574&auto=format&fit=crop',
      link: '#',
      github: 'https://github.com/username/ecommerce-platform',
    },
    {
      id: 'project-2',
      title: 'Task Management App',
      description: 'A productivity tool for managing tasks and projects with real-time collaboration features. Built with React, Firebase, and styled-components.',
      tags: ['React', 'Firebase', 'styled-components'],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2672&auto=format&fit=crop',
      link: '#',
      github: 'https://github.com/username/task-management',
    },
    {
      id: 'project-3',
      title: 'AI Image Generator',
      description: 'An application that uses machine learning to generate unique images based on text prompts. Built with Python, TensorFlow, and a React frontend.',
      tags: ['Python', 'TensorFlow', 'React', 'Flask'],
      image: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=2670&auto=format&fit=crop',
      link: '#',
      github: 'https://github.com/username/ai-image-generator',
    },
    {
      id: 'project-4',
      title: 'Financial Dashboard',
      description: 'A comprehensive dashboard for tracking personal finances, investments, and financial goals. Features data visualization and predictive analytics.',
      tags: ['Vue.js', 'D3.js', 'Node.js', 'Express'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
      link: '#',
      github: 'https://github.com/username/financial-dashboard',
    },
  ];

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  // Get all unique tags
  const allTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  );
  
  // Filter projects based on selected tags
  const filteredProjects = selectedTags.length > 0
    ? projects.filter(project => 
        selectedTags.some(tag => project.tags.includes(tag))
      )
    : projects;
    
  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <>
      <Navigation />
      
      <section className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A showcase of my recent work, personal projects, and experiments.
            Each project represents a unique challenge and solution.
          </p>
        </motion.div>
        
        {/* Tags filter */}
        <div className="mb-12">
          <h2 className="text-lg font-medium mb-4 text-center">Filter by technology</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedTags.includes(tag)
                    ? 'bg-primary text-white'
                    : 'bg-card hover:bg-card/80'
                }`}
              >
                {tag}
              </button>
            ))}
            {selectedTags.length > 0 && (
              <button
                onClick={() => setSelectedTags([])}
                className="px-3 py-1 rounded-full text-sm bg-muted text-foreground/70 hover:bg-muted/80"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              layoutId={`project-card-${project.id}`}
              key={project.id}
              className="bg-card rounded-lg overflow-hidden border border-[var(--border)] hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedId(project.id)}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/70 line-clamp-2 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map(tag => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 rounded-md text-xs bg-muted text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs text-foreground/50">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Project detail modal */}
        <AnimatePresence>
          {selectedId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedId(null)}
            >
              <motion.div
                layoutId={`project-card-${selectedId}`}
                className="w-full max-w-3xl bg-card rounded-lg overflow-hidden max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedId);
                  if (!project) return null;
                  
                  return (
                    <>
                      <div className="aspect-video w-full overflow-hidden bg-muted">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8">
                        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                        <p className="text-foreground/70 mb-6">
                          {project.description}
                        </p>
                        
                        <h3 className="text-lg font-medium mb-2">Technologies</h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map(tag => (
                            <span 
                              key={tag} 
                              className="px-2 py-1 rounded-md text-xs bg-muted text-foreground/70"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
                          >
                            View Live
                          </a>
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 border border-[var(--border)] rounded-md font-medium hover:bg-card/80 transition-colors"
                            >
                              View Code
                            </a>
                          )}
                        </div>
                      </div>
                      
                      <button
                        onClick={() => setSelectedId(null)}
                        className="absolute top-4 right-4 p-2 rounded-full bg-card/80 hover:bg-card text-foreground/60 hover:text-foreground transition-colors"
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="24" 
                          height="24" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
} 