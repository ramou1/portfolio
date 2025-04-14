"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [actionPending, setActionPending] = useState<string | null>(null);

  // Determinar qual logo usar com base no modo atual
  const currentLogo = darkMode
    ? "/images/logo-dark.png"
    : "/images/logo-light.png";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const requestThemeChange = () => {
    setActionPending("theme");
    setConfirmationOpen(true);
  };

  const confirmAction = () => {
    if (actionPending === "theme") {
      const newDarkMode = !darkMode;
      setDarkMode(newDarkMode);

      // Atualizar o tema no corpo do documento
      if (newDarkMode) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
    }

    // Resetar estado
    setConfirmationOpen(false);
    setActionPending(null);
  };

  const cancelAction = () => {
    setConfirmationOpen(false);
    setActionPending(null);
  };

  // Função para rolar suavemente até o footer
  const scrollToFooter = () => {
    const footer = document.querySelector("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  // Fechar o menu ao clicar fora dele
  useEffect(() => {
    // Função genérica para lidar com cliques fora
    const handleClickOutside = (event: Event) => {
      const target = event.target as HTMLElement;
      const nav = document.querySelector("nav");
      const hamburger = document.querySelector(".hamburger-menu");

      if (
        menuOpen &&
        nav &&
        !nav.contains(target) &&
        hamburger &&
        !hamburger.contains(target)
      ) {
        setMenuOpen(false);
      }
    };

    // Adicionar os event listeners
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    // Limpar os event listeners
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header
      className={`w-full bg-[var(--background-color)] sticky top-0 z-50 transition-colors duration-300 ${
        darkMode ? "dark-mode" : ""
      }`}
    >
      <div className="flex justify-between items-center px-4 md:px-8 max-w-7xl mx-auto h-[70px] relative">
        <div className="flex items-center">
          <Link href="/" className="logo-link">
            <Image
              src={currentLogo}
              alt="Logotipo do site escrito Ramon"
              height={35}
              width={91}
              className="h-[35px] w-auto"
            />
          </Link>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#cbd6ae] text-gray-700 px-3 py-1 rounded-xl text-xs font-medium">
          dev frontend
        </div>

        <div
          className="block md:hidden cursor-pointer hamburger-menu"
          onClick={toggleMenu}
        >
          <div className="relative w-6 h-[18px]">
            <span
              className={`block absolute h-[2px] w-full bg-gray-800 rounded-sm opacity-100 left-0 transform transition-all duration-250 ${
                menuOpen ? "top-[8px] rotate-[135deg]" : "top-0"
              }`}
              style={{ backgroundColor: darkMode ? "#fff" : "#333" }}
            ></span>
            <span
              className={`block absolute h-[2px] w-full bg-gray-800 rounded-sm opacity-100 left-0 transform transition-all duration-250 ${
                menuOpen ? "opacity-0 -left-[60px]" : "top-[8px]"
              }`}
              style={{ backgroundColor: darkMode ? "#fff" : "#333" }}
            ></span>
            <span
              className={`block absolute h-[2px] w-full bg-gray-800 rounded-sm opacity-100 left-0 transform transition-all duration-250 ${
                menuOpen ? "top-[8px] -rotate-[135deg]" : "top-[16px]"
              }`}
              style={{ backgroundColor: darkMode ? "#fff" : "#333" }}
            ></span>
          </div>
        </div>

        <nav
          className={`md:flex ${
            menuOpen
              ? "fixed top-0 right-0 w-[70%] max-w-[300px] h-screen bg-[var(--background-color)] flex flex-col justify-center z-50 shadow-3xl"
              : "hidden md:flex"
          } ${menuOpen ? "transition-all duration-300" : ""}`}
        >
          <ul
            className={`flex ${menuOpen ? "flex-col" : "flex-row"} ${
              menuOpen ? "w-full" : ""
            } m-0 p-0 items-center`}
          >
            <li className={`${menuOpen ? "my-6 text-center" : "ml-8"}`}>
              <Link
                href="/projects"
                className="text-[var(--text-color)] hover:text-[var(--accent-color)] font-medium text-xl md:text-base transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                projetos
              </Link>
            </li>
            <li className={`${menuOpen ? "my-6 text-center" : "ml-8"}`}>
              <Link
                href="/about"
                className="text-[var(--text-color)] hover:text-[var(--accent-color)] font-medium text-xl md:text-base transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                sobre
              </Link>
            </li>
            <li className={`${menuOpen ? "my-6 text-center" : "ml-8"}`}>
              <button
                onClick={scrollToFooter}
                className="text-[var(--text-color)] hover:text-[var(--accent-color)] font-medium text-xl md:text-base transition-colors duration-300"
              >
                contato
              </button>
            </li>
            <li className={`${menuOpen ? "my-6 text-center" : "ml-8"}`}>
              <button
                onClick={requestThemeChange}
                className="border border-[var(--border-color)] px-4 py-2 rounded-full text-[var(--border-color)] text-lg md:text-xs hover:bg-[var(--border-color)] hover:text-[var(--hover-color)] transition-all duration-300"
              >
                {darkMode ? "☀️ light mode" : "🌙 dark mode"}
              </button>
            </li>
          </ul>
        </nav>

        {confirmationOpen && (
          <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-[2000]">
            <div className="bg-stone-700 p-8 rounded-lg w-[90%] max-w-[400px] text-center shadow-lg border-1 border-stone-600">
              <p className="text-lg md:text-base text-white">
                deseja alterar para o {darkMode ? "modo claro" : "modo escuro"}?
              </p>
              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={confirmAction}
                  className="bg-[var(--accent-color)] text-lg md:text-base text-white py-2 px-6 rounded-full font-medium transition-colors duration-300"
                >
                  confirmar
                </button>
                <button
                  onClick={cancelAction}
                  className="bg-stone-700 hover:bg-stone-600 text-lg md:text-base text-stone-100 py-2 px-6 rounded-full font-medium border border-stone-600 transition-colors duration-300"
                >
                  cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
