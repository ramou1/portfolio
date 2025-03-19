"use client";

import React from "react";
import dynamic from "next/dynamic";
import { projects, participations } from "@/app/data";
import Card from "@/app/components/Card/Card";

// Importando o Slider dinamicamente para evitar problemas de SSR
const Slider = dynamic(() => import("react-slick"), { ssr: false });

// Importante: Estes estilos devem ser importados em um arquivo que seja renderizado no cliente
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
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

  return (
    <div className="w-full">
      <h1 className="text-center text-4xl font-bold mt-12">meus projetos</h1>
      <div className="relative mt-4 mb-10">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div className="px-2" key={index}>
              <Card
                image={project.projectImage}
                title={project.title}
                category={project.category}
                onClick={() => console.log(`Projeto ${project.title} clicado!`)}
              />
            </div>
          ))}
        </Slider>
      </div>

      <hr className="mt-12 mb-12 border-gray-300" />

      <h1 className="text-center text-4xl font-bold mb-4">projetos que participei</h1>
      <div className="relative mb-10">
        <Slider {...settings}>
          {participations.map((project, index) => (
            <div className="px-2" key={index}>
              <Card
                image={project.projectImage}
                title={project.title}
                category={project.category}
                onClick={() => console.log(`Projeto ${project.title} clicado!`)}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
