import project1Image from "./assets/images/portfolio01.png";
import project1Slide from "./assets/images/slide01.png";
import project2Image from "./assets/images/portfolio02.png";
import project2Slide from "./assets/images/slide02.png";
import project3Image from "./assets/images/portfolio03.png";
import project3Slide from "./assets/images/slide03.png";
import project4Image from "./assets/images/portfolio04.png";
import project5Image from "./assets/images/portfolio05.png";
import project6Image from "./assets/images/portfolio06.png";

export const projects = [
  {
    id: 1,
    title: "Agenda de Contatos",
    projectImage: project1Image,
    altText: "Interface do aplicativo Agenda de Contatos mostrando uma lista de contatos e formulário de adição",
    slideImage: project1Slide,
    category: "Mobile",
    description: "Aplicativo para salvar contatos e informações de contato.",
    externalLink: "behance.net/seu-usuario",
    link: "/projeto1",
    ariaLabel: "Ver detalhes da Agenda de Contatos"
  },
  {
    id: 2,
    title: "Fatura Online",
    projectImage: project2Image,
    altText: "Dashboard do sistema Fatura Online exibindo gráficos de faturamento e lista de faturas pendentes",
    slideImage: project2Slide,
    category: "Web",
    description: "Sistema de gestão de faturas com assinatura digital.",
    externalLink: "https://github.com/seu-usuario/fatura-online",
    link: null,
    ariaLabel: "Ver detalhes do sistema Fatura Online"
  },
  {
    id: 3,
    title: "Registro de Vacinação",
    projectImage: project3Image,
    altText: "Tela do aplicativo de Registro de Vacinação mostrando um certificado de vacinação e histórico de vacinas",
    slideImage: project3Slide,
    category: "Mobile",
    description: "Aplicativo para gerenciar certificados de vacinação.",
    externalLink: "https://github.com/seu-usuario/registro-vacinacao",
    link: "/projeto3",
    ariaLabel: "Ver detalhes do Registro de Vacinação"
  },
  {
    id: 4,
    title: "Sistema de Chamados",
    projectImage: project4Image,
    altText: "Interface do Sistema de Chamados mostrando uma lista de tickets de suporte e seus status",
    slideImage: null,
    category: "Web",
    description: "Sistema para abertura e acompanhamento de chamados.",
    externalLink: "adobe.com/seu-usuario",
    link: null,
    ariaLabel: "Ver detalhes do Sistema de Chamados"
  },
  {
    id: 5,
    title: "Gestão de Projetos",
    projectImage: project5Image,
    altText: "Dashboard do aplicativo de Gestão de Projetos exibindo quadro Kanban com tarefas",
    slideImage: null,
    category: "Design",
    description: "Aplicativo para gerenciar projetos e tarefas.",
    externalLink: "https://github.com",
    link: null,
    ariaLabel: "Ver detalhes da Gestão de Projetos"
  },
  {
    id: 6,
    title: "Sistema de Orçamentos",
    projectImage: project6Image,
    altText: "Tela do Sistema de Orçamentos mostrando um formulário de criação de orçamento e lista de orçamentos recentes",
    slideImage: null,
    category: "Web",
    description: "Sistema para criação e envio de orçamentos.",
    externalLink: "https://github.com",
    link: null,
    ariaLabel: "Ver detalhes do Sistema de Orçamentos"
  },
];