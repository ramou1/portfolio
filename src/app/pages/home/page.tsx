"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Card from "../../components/Card/Card";
import { projects } from "../../data";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const featuredSlides = projects.filter(
    (project) => project.featured && project.slideImage
  );

  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProjects = projects.slice(0, 6);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === featuredSlides.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [featuredSlides.length]);

  // Função para navegar para a página de detalhes do projeto
  const navigateToProject = (id: any) => {
    router.push(`/pages/projects/${id}`);
  };

  return (
    <>
      {/* Slider de imagens */}
      <div
        className="relative w-full h-[300px] md:h-[500px] mx-auto mb-8 overflow-hidden rounded-3xl shadow-lg"
        aria-label="Carrossel de projetos em destaque"
      >
        {featuredSlides.map((project, index) => (
          <div
            key={project.id}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => navigateToProject(project.id)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={project.slideImage}
              alt={project.altText}
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute bottom-0 left-0 right-0 p-6 bg-black bg-opacity-60 text-white">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <p>{project.description}</p>
            </div> */}
          </div>
        ))}

        {/* Slider navigation dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {featuredSlides.map((_, index) => (
            <button
              key={index}
              className={`w-24 h-2 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
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
              onClick={() => navigateToProject(project.id)}
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
    </>
  );
}
