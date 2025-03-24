import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, participations, arts } from "@/app/data";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  projectImage: string;
  altText?: string;
  slideImage?: string;
  externalLink?: string;
  ariaLabel?: string;
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  // Função para encontrar o projeto
  const getProject = () => {
    // Verifica em todos os arrays
    const allProjects = [...projects, ...participations, ...arts];
    const project = allProjects.find((p) => p.id === params.id);
    
    if (!project) notFound();
    
    return {
      data: project,
      type: projects.some(p => p.id === params.id) 
        ? "project" 
        : participations.some(p => p.id === params.id)
          ? "participation"
          : "art"
    };
  };

  const { data, type } = getProject();

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
        
        <div className="lg:w-1/2">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={data.projectImage}
              alt={data.altText || `Imagem do projeto ${data.title}`}
              width={800}
              height={500}
              className="w-full h-auto"
              priority
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