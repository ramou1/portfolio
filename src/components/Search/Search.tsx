"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { FiSearch, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Project } from "@/models/Project";

interface SearchProps {
  className?: string;
  allProjects: Project[];
  onSearch: (results: Project[] | null) => void;
}

export default function Search({ className = "", allProjects, onSearch }: SearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const RESULTS_PER_PAGE = 8;

  // Memoize the onSearch callback
  const memoizedOnSearch = useCallback(onSearch, []);

  // Função para filtrar projetos
  const filterProjects = (term: string): Project[] => {
    if (!term.trim()) return [];
    
    const normalizedTerm = term.toLowerCase().trim();
    
    return allProjects.filter(project => {
      const titleMatch = project.title.toLowerCase().includes(normalizedTerm);
      const descriptionMatch = project.description.toLowerCase().includes(normalizedTerm);
      const toolsMatch = project.tools ? 
        project.tools.some(tool => tool.toLowerCase().includes(normalizedTerm)) : 
        false;
      
      return titleMatch || descriptionMatch || toolsMatch;
    });
  };

  // Atualiza resultados quando o termo de pesquisa ou página mudar
  useEffect(() => {
    if (searchTerm) {
      const allResults = filterProjects(searchTerm);
      const startIndex = (currentPage - 1) * RESULTS_PER_PAGE;
      const paginatedResults = allResults.slice(startIndex, startIndex + RESULTS_PER_PAGE);
      memoizedOnSearch(paginatedResults);
    } else {
      memoizedOnSearch(null);
    }
  }, [searchTerm, currentPage, memoizedOnSearch]);

  // Resetar página quando o termo de pesquisa mudar
  useEffect(() => {
    if (searchTerm) {
      setCurrentPage(1);
    }
  }, [searchTerm]);

  // Manipular clique fora do componente de pesquisa
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node) && 
          event.target instanceof Element && !event.target.closest(".project-result")) {
        if (isOpen && !searchTerm) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, searchTerm]);

  // Focar no input quando abrir a pesquisa
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchTerm("");
      memoizedOnSearch(null);
      setCurrentPage(1);
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
    memoizedOnSearch(null);
    setCurrentPage(1);
    inputRef.current?.focus();
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const totalResults = searchTerm ? filterProjects(searchTerm).length : 0;
  const totalPages = Math.ceil(totalResults / RESULTS_PER_PAGE);

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="flex items-center justify-center mb-4">
        {!isOpen ? (
          <button
            onClick={toggleSearch}
            className="p-2 rounded-full text-[var(--accent-color)] hover:bg-white/80 transition-all duration-300 flex items-center space-x-2"
            aria-label="Pesquisar projetos"
          >
            <FiSearch size={24} />
            <span className="text-sm font-medium">Pesquisar projetos</span>
          </button>
        ) : (
          <div className="w-full max-w-2xl relative">
            <div className="flex items-center border-2 border-[var(--accent-color)] rounded-full px-4 py-2 bg-gray-20">
              <FiSearch size={20} className="text-gray-500 mr-2" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Pesquisar por projetos, ferramentas ou descrição..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow border-none focus:outline-none text-base"
                autoComplete="off"
              />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="ml-2 p-1 text-gray-500 hover:text-gray-800 transition-colors"
                  aria-label="Limpar pesquisa"
                >
                  <FiX size={20} />
                </button>
              )}
            </div>
            {searchTerm && totalResults > 0 && (
              <div className="mt-2 text-center text-sm text-gray-600">
                mostrando {((currentPage - 1) * RESULTS_PER_PAGE) + 1} - {Math.min(currentPage * RESULTS_PER_PAGE, totalResults)} de {totalResults} resultados
              </div>
            )}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-2 space-x-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`p-1 rounded-full ${currentPage === 1 ? 'text-gray-400' : 'text-[var(--accent-color)] hover:bg-white/80'}`}
                  aria-label="Página anterior"
                >
                  <FiChevronLeft size={20} />
                </button>
                <span className="text-sm text-gray-600">
                  Página {currentPage} de {totalPages}
                </span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`p-1 rounded-full ${currentPage === totalPages ? 'text-gray-400' : 'text-[var(--accent-color)] hover:bg-white/80'}`}
                  aria-label="Próxima página"
                >
                  <FiChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}