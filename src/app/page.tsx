"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { projects, featuredProjects } from "./data";
import Card from "../components/Card/Card";
import { useLoading } from "../components/Loader/LoadingProvider";

function HomeContent() {
  const router = useRouter();
  const { setLoading } = useLoading();

  const featuredSlides = projects.filter(
    (project) => project.showSlide && project.slideImage
  );

  const [currentSlide, setCurrentSlide] = useState(0);
  const featured = featuredProjects;

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
    setLoading(true); // Ativa o loader antes da navegação
    router.push(`/projects/${id}`);
  };

  // Helper function to determine media type
  const getMediaType = (url: string) => {
    return url.endsWith(".mp4") || url.endsWith(".mov") ? "video" : "image";
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      {/* Slider de imagens */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-[300px] md:h-[600px] mx-auto mb-8 overflow-hidden rounded-3xl shadow-lg cursor-pointer"
        aria-label="Carrossel de projetos em destaque"
      >
        {featuredSlides.map((project: any, index: any) => {
          const isVideo = project.slideImage.endsWith(".mp4");

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentSlide ? 1 : 0,
                transition: { duration: 1 },
              }}
              className={`absolute w-full h-full transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => navigateToProject(project.id)}
              style={{ cursor: "pointer" }}
            >
              {isVideo ? (
                <video
                  src={project.slideImage}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={project.slideImage}
                  alt={project.altText || project.title}
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>
          );
        })}

        {/* Slider navigation dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {featuredSlides.map((_: any, index: any) => (
            <motion.button
              key={index}
              initial={{ scale: 1 }}
              animate={{
                scale: index === currentSlide ? 1.2 : 1,
                backgroundColor: index === currentSlide ? "#FFFFFF" : "#9CA3AF",
              }}
              className={`w-12 h-2 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl text-center font-bold mt-12"
      >
        meus projetos
      </motion.h1>

      {/* Seção de projetos em destaque */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="w-full flex flex-col items-center"
      >
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 mt-6 w-full">
          {featured.map((project: any) => {
            const firstMedia = project.images[0];
            const mediaType = getMediaType(firstMedia);

            return (
              <motion.div key={project.id} variants={itemVariants}>
                <Card
                  media={firstMedia}
                  mediaType={mediaType}
                  title={project.title}
                  category={project.category}
                  onClick={() => navigateToProject(project.id)}
                />
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/projects"
              className="mt-8 px-6 py-2 bg-transparent text-[var(--button-text-color)] border-2 border-[var(--button-text-color)] rounded-full text-xl md:text-base font-semibold transition-all duration-300 hover:bg-[var(--button-text-color)] hover:text-[var(--hover-color)]"
              onClick={() => setLoading(true)}
            >
              ver todos os projetos
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

export default function RootPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <HomeContent />
    </Suspense>
  );
}