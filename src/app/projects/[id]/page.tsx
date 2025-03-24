import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, participations, arts } from "@/app/data";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function ProjectDetail({ params, searchParams }: Props) {
  const projectId = params.id;
  
  // Função para encontrar o projeto com base no ID
  const findProject = () => {
    // Verifica nos projetos principais
    const projectMatch = projects.find((p) => p.id === projectId);
    if (projectMatch) return { data: projectMatch, type: "project" };

    // Verifica nas participações (com offset)
    const participationId = String(Number(projectId) - 100);
    const participationMatch = participations.find((p) => p.id === participationId);
    if (participationMatch)
      return { data: participationMatch, type: "participation" };

    // Verifica nas artes (com offset)
    const artId = String(Number(projectId) - 200);
    const artMatch = arts.find((p) => p.id === artId);
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
        {/* Informações do projeto (lado esquerdo) */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
          <div className="mb-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {data.category}
            </span>
            {type !== "project" && (
              <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {type === "participation" ? "Participação" : "Arte"}
              </span>
            )}
          </div>
          <p className="text-gray-700 mb-6">{data.description}</p>

          {data.externalLink && (
            <a
              href={data.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              aria-label={data.ariaLabel}
            >
              Visitar projeto
            </a>
          )}
        </div>
        {/* Imagens do projeto (lado direito) */}
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

// Adicionando a função generateMetadata para garantir compatibilidade com Next.js 15
export async function generateMetadata({ params }: { params: { id: string } }) {
  // Encontre o projeto para o metadata
  const projectId = params.id;
  
  let title = "Projeto";
  let description = "Detalhes do projeto";
  
  // Tentar encontrar o projeto
  const projectMatch = projects.find((p) => p.id === projectId);
  if (projectMatch) {
    title = projectMatch.title;
    description = projectMatch.description;
  } else {
    // Verificar participações
    const participationId = String(Number(projectId) - 100);
    const participationMatch = participations.find((p) => p.id === participationId);
    if (participationMatch) {
      title = participationMatch.title;
      description = participationMatch.description;
    } else {
      // Verificar artes
      const artId = String(Number(projectId) - 200);
      const artMatch = arts.find((p) => p.id === artId);
      if (artMatch) {
        title = artMatch.title;
        description = artMatch.description;
      }
    }
  }
  
  return {
    title,
    description
  };
}