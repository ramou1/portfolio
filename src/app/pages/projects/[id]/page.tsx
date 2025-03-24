"use client";
import React, { useMemo } from "react";
import { projects, participations, arts } from "@/app/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface ProjectDetailProps {
  params: {
    id: string;
  };
}

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const projectId = params.id;

  // Função para encontrar o projeto com base no ID
  const project = useMemo(() => {
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
  }, [projectId]);

  if (!project) {
    notFound();
  }

  const { data, type } = project;
  console.log(data);
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/pages/projects"
          className="inline-flex items-center mb-8 text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Voltar para projetos
        </Link>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Informações do projeto (lado esquerdo) */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{data.title}</h1>

            <div className="flex gap-2 mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {data.category}
              </span>
              {type !== "project" && (
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
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
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
              >
                Visitar projeto
              </a>
            )}
          </div>

          {/* Imagens do projeto (lado direito) */}
          <div className="md:w-1/2">
            <div className="relative w-full h-64 md:h-96 mb-4">
              <Image
                src={data.projectImage}
                alt={data.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {data.slideImage && (
              <div className="relative w-full h-64 md:h-96">
                <Image
                  src={data.slideImage}
                  alt={`${data.title} - slide`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}