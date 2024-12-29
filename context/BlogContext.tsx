'use client';
import { createContext, useContext } from 'react';

// Define the shape of your context data
interface BlogContextType {
  topic: string;
  sections: { id: string; title: string; slug: string }[];
}

// Create the context
const BlogContext = createContext<BlogContextType | null>(null);

// Export a hook to access the context
export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlogContext must be used within BlogProvider');
  }
  return context;
};

// Export the BlogContext to use in a provider
export default BlogContext;
