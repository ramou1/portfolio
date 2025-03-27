// src/models/Project.ts
export interface Project {
    id: string;
    title: string;
    projectImage: string;
    altText: string;
    slideImage: string;
    category: string;
    tools: string[];
    description: string;
    externalLink?: string | null;
    repoLink?: string | null; 
    ariaLabel: string;
    featured: boolean;
  }