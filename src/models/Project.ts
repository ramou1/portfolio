export interface Project {
    id: string;
    title: string;
    images: string[];
    altText: string;
    slideImage?: string;
    category: string;
    tools: string[];
    description: string;
    externalLink?: string | null;
    repoLink?: string | null; 
    ariaLabel: string;
    featured: boolean;
  }