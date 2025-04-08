"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaAngular,
  FaWordpress,
  FaBootstrap,
  FaWix,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiIonic,
  SiFirebase,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
} from "react-icons/si";

export default function About() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const techIcons = [
    { Icon: FaHtml5, name: "HTML" },
    { Icon: FaCss3Alt, name: "CSS" },
    { Icon: FaSass, name: "SASS" },
    { Icon: SiTailwindcss, name: "Tailwind" },
    { Icon: FaBootstrap, name: "Bootstrap" },
    { Icon: FaAngular, name: "AngularJS" },
    { Icon: SiTypescript, name: "TypeScript" },
    { Icon: SiIonic, name: "Ionic" },
    { Icon: SiFirebase, name: "Firebase" },
    { Icon: FaReact, name: "React" },
    { Icon: SiAdobephotoshop, name: "Photoshop" },
    { Icon: SiAdobeillustrator, name: "Illustrator" },
    { Icon: SiAdobexd, name: "Adobe XD" },
    { Icon: FaWix, name: "Wix" },
    { Icon: FaWordpress, name: "Wordpress" },
  ];

  return (
    // w-full
    <div className="w-full md:w-5xl max-w-7xl mx-auto mt-12 px-4 space-y-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
        className="grid md:grid-cols-3 gap-8 items-center"
      >
        <div className="flex flex-col items-center">
          <div className="w-64 h-64 rounded-3xl overflow-hidden">
            <Image
              src="/images/profile.jpeg"
              alt="Ramon Oliveira"
              width={192}
              height={192}
              className="object-cover w-full h-full"
            />
          </div>

          <h2 className="mt-4 text-2xl font-bold">Ramon Oliveira</h2>
        </div>
        <div className="md:col-span-2 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-2">sobre mim</h1>
          <p className="text-lg">
            Sou um Analista e Desenvolvedor de Sistemas com mais de sete anos de
            experiência em projetos de desenvolvimento de software, abrangendo
            web e mobile. Tenho ampla expertise na criação e manutenção de
            websites, aplicativos e landing pages, com destaque para o uso de
            tecnologias como <span className="hover:bg-[var(--web-color)]">HTML</span>, 
            <span className="hover:bg-[var(--accent-color)]"> CSS/SASS</span>, 
            <span className="hover:bg-[var(--web-color)]"> Tailwind</span>, 
            <span className="hover:bg-[var(--accent-color)]"> WordPress</span>, 
            <span className="hover:bg-[var(--web-color)]"> Bootstrap</span>, 
            <span className="hover:bg-[var(--accent-color)]"> Angular</span>, 
            <span className="hover:bg-[var(--web-color)]"> TypeScript</span>, 
            <span className="hover:bg-[var(--accent-color)]"> Ionic</span>, 
            <span className="hover:bg-[var(--web-color)]"> Firebase</span> e
            <span className="hover:bg-[var(--accent-color)]"> React</span>.
          </p>
        </div>
      </motion.div>

      <hr className="border-t-2 border-[var(--first-color)]" />

      <div className="text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <h2 className="text-4xl font-bold mb-2 text-center">minha jornada</h2>
          <p className="text-lg mb-8 whitespace-pre-line">
            Em minha trajetória, desempenhei papéis que vão desde o
            desenvolvimento de interfaces responsivas até a administração de
            servidores e configuração de contas de e-mail para clientes. No
            desenvolvimento mobile, atuo principalmente com Ionic, Angular e
            Firebase, focando na experiência do usuário e na integração de APIs
            e serviços externos.
          </p>
          <div className="my-8 bg-gray-800 h-[480px] w-full flex items-center justify-center text-gray-500 rounded-3xl">
            1280x480
          </div>
          <p className="text-lg mb-8 whitespace-pre-line">
            Já desenvolvi projetos para diversas áreas, incluindo construção
            civil, nutrição e previdência, adaptando soluções tecnológicas às
            necessidades específicas de cada setor. Ao longo da minha carreira,
            trabalhei com equipes multidisciplinares, colaborando em todas as
            etapas, desde o design até a implementação de funcionalidades
            avançadas.
          </p>
        </motion.div>
      </div>

      <hr className="border-t-2  border-[var(--second-color)]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <h2 className="text-4xl font-bold mb-4 text-center">conhecimentos</h2>
        <div className="w-full md:w-md flex flex-wrap justify-center gap-6 mx-auto mb-12">
          {techIcons.map(({ Icon, name }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileInView={{ opacity: 1 }}
              className="flex flex-col items-center"
            >
              {/* text-gray-700 */}
              <Icon className="text-6xl text-[var(--accent-color)] mb-2" />
              <span className="text-xs text-[var(--accent-color)] font-bold">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
