"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { projects, participations, arts } from "@/app/data";
import Card from "../../components/Card/Card";
import "@/app/globals.css";

// Importando o Slider dinamicamente para evitar problemas de SSR
const Slider = dynamic(() => import("react-slick"), { ssr: false });

// Importante: Estes estilos devem ser importados em um arquivo que seja renderizado no cliente
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
  const router = useRouter();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Função para navegar para a página de detalhes do projeto
  const navigateToProject = (id: any) => {
    router.push(`/projects/${id}`);
  };

  // Variantes de animação
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

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="w-full">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-bold mt-12"
      >
        meus projetos
      </motion.h1>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="relative mt-4 mb-10"
      >
        <Slider {...settings}>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="px-2"
              variants={itemVariants}
            >
              <Card
                image={project.projectImage}
                title={project.title}
                category={project.category}
                onClick={() => navigateToProject(project.id)}
              />
            </motion.div>
          ))}
        </Slider>
      </motion.div>

      <motion.hr
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 mb-12 border-gray-300"
      />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-bold mb-4"
      >
        projetos que participei
      </motion.h1>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="relative mb-10"
      >
        <Slider {...settings}>
          {participations.map((project) => (
            <motion.div
              key={project.id}
              className="px-2"
              variants={itemVariants}
            >
              <Card
                image={project.projectImage}
                title={project.title}
                category={project.category}
                onClick={() => navigateToProject(project.id + 100)}
              />
            </motion.div>
          ))}
        </Slider>
      </motion.div>

      <motion.hr
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 mb-12 border-gray-300"
      />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-bold mb-4"
      >
        artes
      </motion.h1>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="relative mb-10"
      >
        <Slider {...settings}>
          {arts.map((project) => (
            <motion.div
              key={project.id}
              className="px-2"
              variants={itemVariants}
            >
              <Card
                image={project.projectImage}
                title={project.title}
                category={project.category}
                onClick={() => navigateToProject(project.id + 200)}
              />
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
}
