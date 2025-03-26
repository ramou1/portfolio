import { use } from "react";
import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, participations, arts } from "@/app/data";

type Params = Promise<{ id: string }>;

export default async function ProjectDetail(props: { params: Params }) {
  const params = await props.params;
  const projectId = params.id;

  // Função para encontrar o projeto com base no ID
  const findProject = () => {
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
      <Link
        href="/projects"
        className="text-blue-500 hover:underline mb-8 inline-block"
      >
        ← Voltar para projetos
      </Link>

      <div className="flex flex-col lg:flex-row gap-12 mt-6">

        <div className="lg:w-1/2">
          <h1 className="text-5xl">{data.title}</h1>
          <div className="mb-4">
            <span className="inline-block text-white bg-[var(--accent-color)] rounded-full px-4 py-1 text-xs font-semibold uppercase transition-all duration-300 hover:scale-105">
              {data.category}
            </span>
            {type !== "project" && (
              <span className="inline-block bg-blue-200 rounded-full px-4 py-1 text-sm font-semibold text-gray-700 mr-2">
                {type === "participation" ? "Participação" : "Arte"}
              </span>
            )}
          </div>
          <p className="text-gray-700 mb-6">{data.description}</p>

          <div className="mt-12">
            {data.externalLink && (
              <a
                href={data.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 px-6 py-2 bg-transparent text-[var(--border-color)] border-2 border-[var(--border-color)] rounded-full text-base font-semibold transition-all duration-300 hover:bg-[var(--border-color)] hover:text-[var(--hover-color)]"
                aria-label={data.ariaLabel}
              >
                visitar projeto
              </a>
            )}
          </div>
        </div>


        <div className="lg:w-1/2">
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
