import { Project } from "@/models/Project";

export const projects: Project[] = [
  {
    id: "dj-laud",
    title: "DJ Laud",
    images: ["/images/laud01.mp4"],
    altText: "Site do DJ Laud de Hardtechno, Hardstyle e Trance, mostrando informações sobre próximos shows.",
    slideImage: "/images/slide02.png",
    category: "web",
    tools: ["Wix", "HTML", "CSS", "Javascript"],
    description: "Site para o DJ Laud, apresentando informações sobre próximos eventos, vídeos de shows e redes sociais.",
    externalLink: "https://laud.live",
    ariaLabel: "Visitar o site da Laud Live",
    featured: true,
  },
  {
    id: "terapeuta-bele",
    title: "Terapeuta Bele",
    images: ["/images/terapeuta01.png"],
    altText: "Site da Terapeuta Bele, mostrando informações sobre terapias e agendamentos",
    slideImage: "/images/slide01.png",
    category: "web",
    tools: ["Wix", "HTML", "CSS", "Javascript"],
    description: "Site profissional para a terapeuta Bele, com informações sobre serviços, blog e agendamento de consultas.",
    externalLink: "https://terapeutabele.com.br",
    ariaLabel: "Visitar o site da Terapeuta Bele",
    featured: true,
  },
  {
    id:"rca",
    title: "RCA Contabilidade",
    images: ["/images/rca01.png"],
    altText: "Site da RCA Contabilidade, mostrando informações sobre serviços contábeis",
    category: "web",
    tools: ["Wix", "HTML", "CSS", "Javascript"],
    description: "Site para a empresa de contabilidade RCA Contabilidade, apresentando serviços, blog e informações de contato.",
    externalLink: "https://rcacontabilidade.com",
    ariaLabel: "Visitar o site da RCA",
    featured: false,
  },
  {
    id: "miraggio-villa-branca",
    title: "Miraggio Villa Branca",
    images: ["/images/miraggio.mp4"],
    altText: "Landing page do Miraggio Villa Branca, mostrando informações sobre o local.",
    category: "web",
    tools: ["Wordpress", "Elementor", "HTML", "CSS", "Javascript"],
    description: "Landing page para o empreendimento Miraggio Villa Branca da construtora Marcondes Cesar na cidade de Jacareí, apresentando formulário de contato, informações relevantes sobre a localização e infraestrutura.",
    externalLink: "https://miraggio.marcondescesar.com.br",
    ariaLabel: "Visitar o landing do Miraggio",
    featured: false,
  },
  {
    id: "hostelzim",
    title: "HostelZim",
    images: ["/images/portfolio01.png"],
    altText: "Interface do sistema HostelZim mostrando uma lista de quartos e clientes",
    category: "web",
    tools: ["React", "Chakra UI", "Chart.js", "Axios"],
    description: "HostelZim é um sistema web desenvolvido em React para gerenciamento de um hostel. Ele permite criar, editar, excluir e listar quartos e clientes.",
    externalLink: null,
    repoLink: "https://github.com/ramou1/hostel-system",
    ariaLabel: "Ver detalhes do sistema Fatura Online",
    featured: true,
  },
  {
    id: "music-chords",
    title: "Music Chords",
    images: ["/images/portfolio02.png"],
    altText: "Interface do aplicativo Music Chords mostrando uma lista de acordes e formulário de criação de acorde",
    category: "mobile",
    tools: ["Ionic", "Typescript"],
    description: "Aplicativo para salvar acordes de músicas.",
    externalLink: null,
    repoLink: "https://github.com/ramou1/music-chords-app",
    ariaLabel: "Ver detalhes do Music Chords",
    featured: false,
  },
  {
    id: "gimme-pizza",
    title: "Gimme Pizza",
    images: ["/images/portfolio03.png"],
    altText: "Interface do sistema de Chamados mostrando uma lista de chamados e formulário de criação de chamado",
    category: "web",
    tools: ["Angular", "Firebase"],
    description: "Sistema para gerenciar pedidos de pizza.",
    repoLink: "https://github.com/ramou1/gimme-pizza",
    ariaLabel: "Ver detalhes do sistema",
    featured: false,
  }
];

export const participations: Project[] = [
  {
    id: "meelnutri",
    title: "MeelNutri",
    images: ["/images/meelnutri01.jpg"],
    altText: "Interface do aplicativo MeelNutri mostrando planos alimentares e acompanhamento nutricional",
    category: "mobile",
    tools: ["Ionic", "Typescript", "SASS", "Firebase"],
    description: "Aplicativo para acompanhamento nutricional, criação de planos alimentares e monitoramento de refeições.",
    externalLink: "https://play.google.com/store/apps/details?id=br.com.meelnutri",
    ariaLabel: "Ver detalhes do MeelNutri",
    featured: false,
  },
  {
    id: "funcorsan",
    title: "Funcorsan",
    images: ["/images/portfolio05.png"],
    altText: "Interface do aplicativo Funcorsan exibindo serviços e informações para associados",
    category: "mobile",
    tools: ["Ionic", "Angular", "Typescript", "SASS", "Firebase"],
    description: "Aplicativo para associados da Funcorsan, oferecendo acesso a serviços, documentos e informações.",
    externalLink: "https://play.google.com/store/apps/details?id=br.com.funcorsan",
    ariaLabel: "Ver detalhes do Funcorsan",
    featured: false,
  },
  {
    id: "laudelina2",
    title: "Laudelina",
    images: ["/images/portfolio06.png"],
    altText: "Interface do aplicativo Laudelina exibindo informações e suporte para trabalhadoras domésticas",
    category: "mobile",
    tools: ["Ionic", "Typescript", "SASS", "Firebase"],
    description: "Aplicativo voltado para trabalhadoras domésticas, oferecendo informações sobre direitos, cálculos de salários e rescisões, benefícios, pesquisa de órgãos e sindicatos da cidade e conexão com outras empregadas domésticas nas proximidades.",
    externalLink: "https://play.google.com/store/apps/details?id=br.org.laudelina",
    ariaLabel: "Ver detalhes do Laudelina",
    featured: false,
  },
  {
    id: "purificatta2",
    title: "Purificatta",
    images: ["/images/portfolio07.png"],
    altText: "Interface do aplicativo Purificatta exibindo gerenciamento de assinaturas de purificadores de água",
    category: "mobile",
    tools: ["Ionic", "Typescript", "SASS", "Firebase"],
    description: "Aplicativo para clientes da Purificatta, permitindo gerenciamento de planos e acompanhamento de serviços.",
    externalLink: "https://play.google.com/store/apps/details?id=br.com.purificatta.app",
    ariaLabel: "Ver detalhes do Purificatta",
    featured: false,
  },
  {
    id: "purificatta-adesao2",
    title: "Purificatta Adesão",
    images: ["/images/portfolio08.png"],
    altText: "Interface do aplicativo Purificatta Adesão exibindo opções de assinatura para purificadores de água",
    category: "mobile",
    tools: ["Ionic", "Typescript", "SASS", "Firebase"],
    description: "Aplicativo para adesão e gerenciamento de planos da Purificatta, facilitando a assinatura e suporte.",
    externalLink: "https://play.google.com/store/apps/details?id=br.com.purificatta.adesao",
    ariaLabel: "Ver detalhes do Purificatta Adesão",
    featured: false,
  }
];

export const arts: Project[] = [
  {
    id: "lands",
    title: "Tipos de Terrenos",
    images: ["/images/terrenos01.png", "/images/terrenos02.png", "/images/terrenos03.png", "/images/terrenos04.png", "/images/terrenos05.png"],
    altText: "Tipos de Terrenos",
    category: "design",
    tools: ["Animate", "Photoshop"],
    description: "Estudo sobre diferentes terrenos para jogos criados no Adobe Animate e Adobe Photoshop, para o curso de Programação de Jogos Digitais.",
    externalLink: "https://www.behance.net/gallery/61701671/TerrenosLands",
    ariaLabel: "Ver detalhes",
    featured: false,
  },
  {
    id: "design-personagens",
    title: "Design de Personagens",
    images: ["/images/design-personagens.png", "/images/personagens02.png", "/images/personagens03.png", "/images/personagens04.png", "/images/personagens05.png", "/images/personagens06.png", "/images/personagens07.png", "/images/personagens08.png"],
    altText: "Design de Personagens",
    category: "design",
    tools: ["Illustrator", "Photoshop"],
    description: "Desenhos vetorizados de monstrinhos infantis utilizados no meu trabalho de graduação do curso de Programação de Jogos Digitais.",
    externalLink: "https://www.behance.net/gallery/47743513/Design-de-Personagens",
    ariaLabel: "Ver detalhes",
    featured: false,
  },
  {
    id: "jogo-da-memoria",
    title: "Jogo da Memória - Frutas",
    images: ["/images/jogo-memoria.png"],
    altText: "Jogo da Memória - Frutas",
    category: "design",
    tools: ["Illustrator", "Photoshop"],
    description: "Ícones de frutas criados no Photoshop e Illustrator para um jogo da memória infantil desenvolvido no curso de Programação de Jogos Digitais, em 2013.",
    externalLink: "https://www.behance.net/gallery/50276623/Jogo-da-Memoria-Frutas",
    ariaLabel: "Ver detalhes",
    featured: false,
  },
  {
    id: "vetorizacao",
    title: "Vetorização de Desenhos",
    images: ["/images/portfolio01.png"],
    altText: "Artes",
    category: "design",
    tools: ["Illustrator", "Photoshop"],
    description: "Desenhos vetorizados de personagens feitos a partir de desenhos à mão de alguns amigos e também alguns desenhos meus.",
    externalLink: "https://www.behance.net/gallery/98439717/Vetorizacao-de-Desenhos",
    ariaLabel: "Ver detalhes",
    featured: false,
  },
  {
    id: "catalogo",
    title: "Catálogo de Animais",
    images: ["/images/portfolio02.png"],
    altText: "Artes",
    category: "design",
    tools: ["Illustrator", "Photoshop"],
    description: "Coleção de ilustrações de animais acompanhadas por lettering artístico.",
    externalLink: "https://www.behance.net/gallery/98439717/Vetorizacao-de-Desenhos",
    ariaLabel: "Ver detalhes",
    featured: false,
  },
  {
    id: "desenvolveu-tech",
    title: "Redes Sociais - desenvolveuTECH",
    images: ["/images/desenvolveu01.png", "/images/desenvolveu02.png", "/images/desenvolveu03.png"],
    altText: "Artes",
    category: "design",
    tools: ["Illustrator", "Photoshop"],
    description: "Artes desenvolvidas para as redes sociais da empresa desenvolveuTECH.",
    externalLink: "https://www.behance.net/gallery/101824099/Artes-Redes-Sociais-desenvolveu-TECH",
    ariaLabel: "Ver detalhes",
    featured: false,
  },
  {
    id: "m-de-moveis",
    title: "Redes Sociais - M de Móveis",
    images: ["/images/m-de-moveis01.png", "/images/m-de-moveis02.png", "/images/m-de-moveis03.png"],
    altText: "Artes",
    category: "design",
    tools: ["Illustrator", "Photoshop"],
    description: "Artes desenvolvidas para as redes sociais da empresa M de Móveis.",
    externalLink: "https://www.behance.net/gallery/101826925/Artes-Redes-Sociais-M-de-Moveis",
    ariaLabel: "Ver detalhes",
    featured: false,
  }
];  