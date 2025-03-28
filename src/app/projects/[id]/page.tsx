"use client";
import React from "react";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import { projects, participations, arts } from "@/app/data";
import { FiArrowLeft } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import { Project } from "@/models/Project";

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { id } = params;
  const projectId = id;

  const findProject = () => {
    const allProjects = [...projects, ...participations, ...arts];
    return allProjects.find((p) => p.id === projectId);
  };

  const project = findProject();

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <button
        onClick={() => router.back()}
        className="flex items-center text-[var(--accent-color)] hover:underline mb-8 cursor-pointer"
      >
        <FiArrowLeft size={24} className="mr-2" />
        <h1 className="text-2xl">voltar</h1>
      </button>

      <div className="flex flex-col lg:flex-row gap-12 mt-6">
        <div className="lg:w-2/5">
          <h1 className="text-5xl">{project.title}</h1>
          <div className="mt-2 mb-4">
            <span className="inline-block text-white bg-[var(--accent-color)] rounded-full px-4 py-1 text-xs font-semibold uppercase transition-all duration-300 hover:scale-105">
              {project.category}
            </span>
            {project.tools && (
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="inline-block text-gray-700 bg-[#cbd6ae] rounded-full px-4 py-1 text-xs font-semibold text-gray-700 uppercase"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            )}
          </div>
          <p className="mb-6 text-lg">{project.description}</p>

          <div className="mt-12">
            {project.repoLink && (
              <button
                onClick={() =>
                  project.repoLink &&
                  window.open(project.repoLink, "_blank", "noopener,noreferrer")
                }
                className="cursor-pointer flex items-center mt-12 px-6 py-2 bg-transparent text-[var(--teal-color)] border-2 border-[var(--teal-color)] rounded-full text-xl md:text-base font-semibold transition-all duration-300 hover:bg-[var(--teal-color)] hover:text-[var(--hover-color)]"
                aria-label={project.ariaLabel}
              >
                acessar repositório
                <FaGithub className="ml-2" size={20} />
              </button>
            )}

            {project.externalLink && (
              <button
                onClick={() =>
                  project.externalLink &&
                  window.open(
                    project.externalLink,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="cursor-pointer flex items-center mt-12 px-6 py-2 bg-transparent text-[var(--border-color)] border-2 border-[var(--border-color)] rounded-full text-xl md:text-base font-semibold transition-all duration-300 hover:bg-[var(--border-color)] hover:text-[var(--hover-color)]"
                aria-label={project.ariaLabel}
              >
                visitar projeto
                <LuExternalLink className="ml-2" size={20} />
              </button>
            )}
          </div>
        </div>

        <div className="lg:w-3/5">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={project.projectImage}
              alt={project.altText || `Imagem do projeto ${project.title}`}
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>

          {project.slideImage && (
            <div className="mt-6 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={project.slideImage}
                alt={`Slide do projeto ${project.title}`}
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
