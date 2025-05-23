import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { LoadingProvider } from "../components/Loader";
import Marquee from "../components/Marquee/Marquee";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Portfólio - Ramon Oliveira - Desenvolvedor Frontend",
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
        <LoadingProvider>
          <Suspense fallback={<div>Carregando...</div>}>
            <Marquee />
            <Header />
            <main className="min-h-screen max-w-7xl mx-auto px-4 py-8 md:px-8">
              {children}
            </main>
            <Footer />
          </Suspense>
        </LoadingProvider>
      </body>
    </html>
  );
}
