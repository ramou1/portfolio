'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Card from '../../components/Card/Card';
import { projects } from '../../data';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Você precisará importar e otimizar as imagens para Next.js
  const slideImages = [
    '/images/slide01.png',
    '/images/slide02.png',
    '/images/slide03.png'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const featuredProjects = projects.slice(0, 6);

  return (
    <div className="w-full">
      {/* Slider de imagens */}
      <div
        className="relative w-full h-[300px] md:h-[500px] mx-auto mb-8 overflow-hidden rounded-3xl shadow-lg"
        aria-label="Carrossel de projetos em destaque"
      >
        <div className="w-full h-full relative">
          {projects.map((project: any, index: any) => (
            <div
              key={project.id}
              className={`absolute top-0 left-0 w-full h-full bg-cover bg-center flex items-end transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              style={{ backgroundImage: `url(${project.slideImage})` }}
            ></div>
          ))}
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {slideImages.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      <h1 className="text-center text-4xl font-bold mt-12">meus projetos</h1>

      {/* Seção de projetos em destaque */}
      <section className="w-full flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 w-full">
          {featuredProjects.map((project: any) => (
            <Card
              key={project.id}
              image={project.projectImage}
              title={project.title}
              category={project.category}
              // height="356"
              onClick={() => setSelectedProject(project.id)}
            />
          ))}
        </div>

        <Link
          href="/projects"
          className="mt-12 mb-8 px-6 py-3 bg-transparent text-[var(--border-color)] border-2 border-[var(--border-color)] rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-[var(--border-color)] hover:text-[var(--hover-color)]"
        >
          ver todos os projetos
        </Link>
      </section>
    </div>
  );
}