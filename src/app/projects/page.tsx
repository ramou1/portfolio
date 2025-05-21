"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { projects, participations, arts } from "@/app/data";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import "@/app/globals.css";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
  loading: () => <h2 className="text-center">carregando...</h2>,
});

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Project } from "@/models/Project";

export default function Projects() {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState<Project[] | null>(null);
  const allProjects = [...projects, ...participations, ...arts];

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
    customPaging: function() {
      return (
        <div className="w-3 h-3 mt-4 mx-2 bg-gray-400 rounded-full hover:bg-gray-600 transition-colors cursor-pointer" />
      );
    },
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  // Helper function to determine if a file is a video
  const getMediaType = (url: string) => {
    return url.endsWith('.mp4') || url.endsWith('.mov') ? "video" : "image";
  };

  const navigateToProject = (id: any) => {
    router.push(`/projects/${id}`);
  };

  const handleSearch = (results: Project[] | null) => {
    setSearchResults(results);
  };

  return (
    <div className="w-full">
      <h1 className="text-center text-5xl font-bold mt-12">meus projetos</h1>
      
      {/* Componente de pesquisa */}
      <div className="mt-8">
        <Search 
          allProjects={allProjects} 
          onSearch={handleSearch} 
          className="mb-8" 
        />
      </div>

      {searchResults ? (
        // Exibir resultados da pesquisa
        <div className="container mx-auto px-4">
          <div className="mb-6 text-center">
            <p className="text-gray-600">
              {searchResults.length === 0 
                ? "Nenhum projeto encontrado." 
                : `${searchResults.length} projeto${searchResults.length !== 1 ? 's' : ''} encontrado${searchResults.length !== 1 ? 's' : ''}.`}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 project-result">
            {searchResults.map((project) => {
              const firstMedia = project.images[0];
              const mediaType = getMediaType(firstMedia);
              
              return (
                <div key={project.id}>
                  <Card
                    media={firstMedia}
                    title={project.title}
                    category={project.category}
                    mediaType={mediaType}
                    onClick={() => navigateToProject(project.id)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        // Exibir visualização normal com sliders
        <>
          <div className="relative mt-4 mb-10">
            <Slider {...settings}>
              {projects.map((project) => {
                const firstMedia = project.images[0];
                const mediaType = getMediaType(firstMedia);
                
                return (
                  <div key={project.id} className="px-2">
                    <Card
                      media={firstMedia}
                      title={project.title}
                      category={project.category}
                      mediaType={mediaType}
                      onClick={() => navigateToProject(project.id)}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>

          <hr className="mt-12 mb-12 border-gray-300" />

          <h1 className="text-4xl text-center font-bold mb-4">
            projetos que participei
          </h1>

          <div className="relative mb-10">
            <Slider {...settings} speed={600}>
              {participations.map((project) => {
                const firstMedia = project.images[0];
                const mediaType = getMediaType(firstMedia);
                
                return (
                  <div key={project.id} className="px-2">
                    <Card
                      media={firstMedia}
                      title={project.title}
                      category={project.category}
                      mediaType={mediaType}
                      onClick={() => navigateToProject(project.id)}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>

          <hr className="mt-12 mb-12 border-gray-300" />

          <h1 className="text-4xl text-center font-bold mb-4">minhas artes</h1>

          <div className="relative mb-10">
            <Slider {...settings}>
              {arts.map((project) => {
                const firstMedia = project.images[0];
                const mediaType = getMediaType(firstMedia);
                
                return (
                  <div key={project.id} className="px-2">
                    <Card
                      media={firstMedia}
                      title={project.title}
                      category={project.category}
                      mediaType={mediaType}
                      onClick={() => navigateToProject(project.id)}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </>
      )}
    </div>
  );
}