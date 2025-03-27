"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-8 md:py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1 - Email */}
          <div className="flex flex-col text-[var(--first-color)">
            <h3 className="text-2xl font-semibold mb-3 text-[var(--first-color)]">Email</h3>
            <Link
              href="mailto:ramonsoliveira1@hotmail.com"
              className="text-xl text-gray-300 hover:text-white transition-colors"
            >
              ramonsoliveira1@hotmail.com
            </Link>
          </div>

          {/* Coluna 2 - LinkedIn */}
          <div className="flex flex-col text-[var(--second-color)">
            <h3 className="text-2xl font-semibold mb-3 text-[var(--second-color)]">LinkedIn</h3>
            <Link
              href="https://www.linkedin.com/in/ramou1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-300 hover:text-white transition-colors"
            >
              linkedin.com/in/ramou1
            </Link>
          </div>

          {/* Coluna 3 - GitHub */}
          <div className="flex flex-col text-[var(--third-color)">
            <h3 className="text-2xl font-semibold mb-3 text-[var(--third-color)]">GitHub</h3>
            <Link
              href="https://github.com/ramou1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-300 hover:text-white transition-colors"
            >
              github.com/ramou1
            </Link>
          </div>

          {/* Coluna 4 - Behance */}
          <div className="flex flex-col text-[var(--fourth-color)">
            <h3 className="text-2xl font-semibold mb-3 text-[var(--fourth-color)]">Behance</h3>
            <Link
              href="https://www.be.net/ramou"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-300 hover:text-white transition-colors"
            >
              be.net/ramou
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-gray-700 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Ramon Oliveira. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
