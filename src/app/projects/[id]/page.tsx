"use client";
import React from "react";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import { projects, participations, arts } from "@/app/data";
import { FiArrowLeft } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import { Project } from "@/models/Project";

type Params = Promise<{ id: string }>;

export default async function ProjectDetail(props: { params: Params }) {
  const router = useRouter();
  const params = await props.params;
  const projectId = params.id;

  // Função para encontrar o projeto com base no ID
  const findProject = (): { data: Project; type: string } | null => {
    // Verifica nos projetos principais
    const projectMatch = projects.find((p) => p.id === projectId);
    if (projectMatch) return { data: projectMatch, type: "project" };

    // Verifica nas participações
    const participationMatch = participations.find((p) => p.id === projectId);
    if (participationMatch)
      return { data: participationMatch, type: "participation" };

    // Verifica nas artes
    const artMatch = arts.find((p) => p.id === projectId);
    if (artMatch) return { data: artMatch, type: "art" };

    return null;
  };

  const project = findProject();

  if (!project) {
    notFound();
  }

  const { data, type } = project;

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
          <h1 className="text-5xl">{data.title}</h1>
          <div className="mt-2 mb-4">
            <span className="inline-block text-white bg-[var(--accent-color)] rounded-full px-4 py-1 text-xs font-semibold uppercase transition-all duration-300 hover:scale-105">
              {data.category}
            </span>
            {data.tools && (
              <div className="flex flex-wrap gap-2 mt-2">
                {data.tools.map((tool, index) => (
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
          <p className="mb-6 text-lg">{data.description}</p>

          <div className="mt-12">
            {data.repoLink && (
              <button
                onClick={() =>
                  data.repoLink &&
                  window.open(data.repoLink, "_blank", "noopener,noreferrer")
                }
                className="cursor-pointer flex items-center mt-12 px-6 py-2 bg-transparent text-[var(--teal-color)] border-2 border-[var(--teal-color)] rounded-full text-xl md:text-base font-semibold transition-all duration-300 hover:bg-[var(--teal-color)] hover:text-[var(--hover-color)]"
                aria-label={data.ariaLabel}
              >
                acessar repositório
                <FaGithub className="ml-2" size={20} />
              </button>
            )}

            {data.externalLink && (
              <button
                onClick={() =>
                  data.externalLink &&
                  window.open(
                    data.externalLink,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="cursor-pointer flex items-center mt-12 px-6 py-2 bg-transparent text-[var(--border-color)] border-2 border-[var(--border-color)] rounded-full text-xl md:text-base font-semibold transition-all duration-300 hover:bg-[var(--border-color)] hover:text-[var(--hover-color)]"
                aria-label={data.ariaLabel}
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
              src={data.projectImage}
              alt={data.altText || `Imagem do projeto ${data.title}`}
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>

          {data.slideImage && (
            <div className="mt-6 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={data.slideImage}
                alt={`Slide do projeto ${data.title}`}
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
