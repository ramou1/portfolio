import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "Meu Portfolio",
  description: "Portfolio de projetos e trabalhos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main className="min-h-screen px-4 py-8 md:px-8 lg:px-16"> {/* max-w-[1200px] */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
