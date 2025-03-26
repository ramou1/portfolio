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
          <h1 className="text-4xl font-bold mb-2">sobre mim</h1>
          <p className="text-lg">
            Sou um desenvolvedor frontend apaixonado por criar experiências
            digitais envolventes e responsivas. Com uma combinação de
            criatividade técnica e atenção aos detalhes, transformo conceitos em
            interfaces elegantes e funcionais. Meu objetivo é sempre ir além do
            código, criando soluções que não apenas funcionam, mas que encantam
            os usuários.
          </p>
        </div>
      </motion.div>

      <hr className="border-t-2 border-gray-200" />

      <div className="text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <h2 className="text-3xl font-bold mb-2 text-center">minha jornada</h2>
          <p className="text-lg mb-8 whitespace-pre-line">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sem
            nisi, suscipit quis dui sit amet, vehicula imperdiet orci. Phasellus
            orci nibh, tempor a lorem eget, fringilla sodales libero. Nullam at
            convallis nunc. Sed pellentesque non metus eu efficitur. Nullam
            venenatis dolor tortor, in rutrum sapien semper eget. Mauris pretium
            venenatis felis, ut bibendum erat. Ut non convallis urna. Curabitur
            sit amet maximus quam. Etiam at leo mi. Nam a dapibus orci,
            consequat semper massa. Aenean a euismod mi. Duis auctor urna a
            mauris volutpat molestie. Duis in diam ac nisl accumsan efficitur
            eget eu ligula. Nunc eu finibus ipsum. Praesent erat sem, iaculis
            eget blandit vel, cursus vitae libero. Aliquam erat volutpat. Ut sed
            massa ut libero lobortis tincidunt non quis arcu. Nam a pharetra
            turpis, in semper quam. Nam in metus eu lorem tempor faucibus.
            Quisque vel egestas odio. Vestibulum nec sagittis est. Nulla a
            malesuada ipsum. Fusce congue sem a sapien elementum, id fermentum
            tortor semper. Praesent quis enim purus.
          </p>
          <div className="my-8 bg-gray-800 h-[480px] w-full flex items-center justify-center text-gray-500 rounded-3xl">
            1280x480
          </div>
          <p className="text-lg mb-8 whitespace-pre-line">
            Donec ornare vel magna eget placerat. Nunc vel augue fringilla,
            porta dui et, aliquam turpis. Proin finibus urna consectetur risus
            blandit cursus. Cras eleifend lacus eros, eget blandit lorem mattis
            sit amet. Integer sit amet nisi nec leo accumsan consequat. Quisque
            tincidunt, erat eu dictum dictum, arcu turpis dignissim velit, vitae
            volutpat lacus ante et elit. Nulla bibendum ultricies nisl, in
            tincidunt arcu auctor id. Quisque leo ligula, luctus ac ullamcorper
            non, pellentesque at metus. In hac habitasse platea dictumst. Mauris
            sagittis suscipit leo nec aliquam. Fusce eu ante molestie, hendrerit
            sem ac, tristique tortor. Donec fringilla rhoncus risus ac
            condimentum. Aenean hendrerit, massa sed pretium molestie, tellus
            augue venenatis metus, vitae rhoncus magna est eget nunc.
            Pellentesque egestas consectetur urna, eu rhoncus leo cursus sit
            amet. Fusce quis eros vitae nunc sollicitudin pretium. Donec nulla
            tortor, pharetra at molestie vitae, porttitor suscipit lorem.
          </p>
        </motion.div>
      </div>

      <hr className="border-t-2 border-gray-200" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <h2 className="text-3xl font-bold mb-4 text-center">conhecimentos</h2>
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
