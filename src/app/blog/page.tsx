'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
}

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const blogPosts: BlogPost[] = [
    {
      id: 'post-1',
      title: 'Building Accessible React Applications',
      excerpt: 'A comprehensive guide to making your React applications more accessible to users of all abilities.',
      date: 'May 15, 2023',
      category: 'Development',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop',
      slug: 'building-accessible-react-applications'
    },
    {
      id: 'post-2',
      title: 'The Future of Web Development: What to Expect in 2024',
      excerpt: 'Exploring upcoming trends in web development including AI integration, new frameworks, and evolving standards.',
      date: 'Apr 28, 2023',
      category: 'Web Trends',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=2670&auto=format&fit=crop',
      slug: 'web-development-trends-2024'
    },
    {
      id: 'post-3',
      title: 'Optimizing Performance in Next.js Applications',
      excerpt: 'Practical techniques to improve loading speeds and runtime performance in your Next.js projects.',
      date: 'Mar 12, 2023',
      category: 'Performance',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
      slug: 'optimizing-nextjs-performance'
    },
    {
      id: 'post-4',
      title: 'Building a Design System from Scratch',
      excerpt: 'A step-by-step guide to creating a cohesive design system for your applications and websites.',
      date: 'Feb 5, 2023',
      category: 'Design',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2564&auto=format&fit=crop',
      slug: 'design-system-from-scratch'
    },
  ];
  
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
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
          <h1 className="text-4xl font-bold mb-4">Blog & Insights</h1>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on software development, design, and technology.
          </p>
        </motion.div>
        
        {/* Search bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-card border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/40"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>
        
        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg overflow-hidden border border-[var(--border)] hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-primary">{post.category}</span>
                    <span className="text-xs text-foreground/60">{post.date} • {post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                    <a href={`/blog/${post.slug}`}>{post.title}</a>
                  </h2>
                  <p className="text-foreground/70 mb-4">
                    {post.excerpt}
                  </p>
                  <a 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center font-medium text-primary hover:underline"
                  >
                    Read more
                    <svg 
                      className="ml-1 w-4 h-4" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </motion.article>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-foreground/60">
                Try adjusting your search query or check back later for new content.
              </p>
            </div>
          )}
        </div>
        
        {/* Newsletter signup - lower priority */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 p-8 bg-card border border-[var(--border)] rounded-lg text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-4">Subscribe to my newsletter</h2>
          <p className="text-foreground/70 mb-6">
            Get notified when I publish new articles and insights on development, design, and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-md bg-background border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
            <button className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </section>
    </>
  );
} 