import { ProjectType } from "../types";

import prismaWebSS from "../../../assets/prismaweb.png";
import taskAppSS from "../../../assets/taskapp.jpg";
import myPortfolioSS from "../../../assets/myportfolio.png";
import operaxSS from "../../../assets/operax.png";
import sampleManagerSS from "../../../assets/sample-manager.png";
import pmpPWASS from "../../../assets/pmp-pwa.png";

export const projects: ProjectType[] = [
  {
    title: "Prisma Web",
    image: prismaWebSS.src,
    description:
      "Site de nossa empresa de Solu\u00e7\u00f5es Digitais, onde oferecemos servi\u00e7os de desenvolvimento e manuten\u00e7\u00e3o de aplica\u00e7\u00f5es, sites, p\u00e1ginas de redes sociais, etc.",
    context: "Site institucional e gera\u00e7\u00e3o de leads para servi\u00e7os digitais.",
    problem:
      "A empresa precisava de uma presen\u00e7a digital clara e confi\u00e1vel para explicar os servi\u00e7os e captar novos clientes.",
    solution:
      "Site institucional com estrutura de servi\u00e7os, portf\u00f3lio e formul\u00e1rio validado, com foco em performance.",
    role: "Frontend e integra\u00e7\u00e3o do fluxo de contato.",
    highlights: [
      "Apresenta\u00e7\u00e3o clara de servi\u00e7os",
      "Formul\u00e1rio com valida\u00e7\u00e3o e envio",
      "Carregamento r\u00e1pido e consistente",
    ],
    year: "2023",
    // demo: "https://prismaweb.com.br/",
    demo: "",
    source: "https://github.com/WixeI/prisma-web",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "React Query",
      "React Hook Form",
      "Zod",
      "Framer Motion",
      "Phosphor Icons",
      "Nodemailer",
      "Axios",
      "Jest",
    ],
  },
  {
    title: "OperaX",
    image: operaxSS.src,
    description:
      "Aplicativo focado em c\u00e1lculos de produ\u00e7\u00e3o, efici\u00eancia e custos em opera\u00e7\u00f5es com m\u00e1quinas e transporte de materiais.",
    context: "App mobile para equipes de opera\u00e7\u00e3o e log\u00edstica.",
    problem:
      "Equipes de opera\u00e7\u00e3o precisavam calcular produ\u00e7\u00e3o, efici\u00eancia e custos sem depender de planilhas no campo.",
    solution:
      "App mobile que centraliza os c\u00e1lculos com entradas guiadas e resultados imediatos.",
    role: "Desenvolvimento do app em React Native e defini\u00e7\u00e3o de fluxos.",
    highlights: [
      "C\u00e1lculos padronizados",
      "Uso simples no celular",
      "Compatibilidade Android/iOS via Expo",
    ],
    year: "2022",
    demo: "",
    source: "https://github.com/Artotz/daniel-calculos-app",
    technologies: [
      "React Native",
      "Typescript",
      "Expo",
      "Expo Application Services",
      "TailwindCSS",
      "i18n",
    ],
  },
  {
    title: "Task App",
    image: taskAppSS.src,
    description:
      "Aplicativo de cria\u00e7\u00e3o de tarefas, podendo essas serem filtradas ou ordenadas por setor, prioridade, status e data limite.",
    context: "Organiza\u00e7\u00e3o de tarefas para times operacionais.",
    problem:
      "Times precisavam organizar tarefas por setor, prioridade e prazo sem fric\u00e7\u00e3o.",
    solution:
      "Aplicativo de tarefas com filtros, ordena\u00e7\u00e3o e status para o dia a dia.",
    role: "Implementa\u00e7\u00e3o do app e formul\u00e1rios.",
    highlights: [
      "Filtros por setor e prioridade",
      "Fluxo simples de cria\u00e7\u00e3o e edi\u00e7\u00e3o",
      "Interface direta para rotina di\u00e1ria",
    ],
    year: "2022",
    demo: "",
    source: "https://github.com/Artotz/task-app",
    technologies: [
      "React Native",
      "Typescript",
      "Expo",
      "ContextAPI",
      "styled-components",
      "React Hook Form",
    ],
  },
  {
    title: "Sample Manager",
    image: sampleManagerSS.src,
    description:
      "Aplicativo em React Native (Expo) para escaneamento e gerenciamento de amostras, com acesso nativo \u00e0 c\u00e2mera e ao armazenamento local.",
    context: "Gest\u00e3o de amostras em campo com foco em agilidade.",
    problem:
      "A coleta de amostras exigia registro r\u00e1pido e confi\u00e1vel com leitura por c\u00e2mera.",
    solution:
      "App para escanear, registrar e gerenciar amostras com armazenamento local.",
    role: "Integra\u00e7\u00e3o com c\u00e2mera, armazenamento e UI.",
    highlights: [
      "Funciona offline em campo",
      "Registro r\u00e1pido com c\u00e2mera nativa",
      "Organiza\u00e7\u00e3o simples das amostras",
    ],
    year: "2021",
    demo: "",
    source: "https://github.com/Artotz/sample-manager-expo",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "Async Storage",
      "TailwindCSS",
    ],
  },
  {
    title: "Plano de Manuten\u00e7\u00e3o",
    image: pmpPWASS.src,
    description:
      "Aplica\u00e7\u00e3o PWA para cria\u00e7\u00e3o de propostas comerciais de Plano de Manuten\u00e7\u00e3o, com autentica\u00e7\u00e3o via Firebase, cache offline e gera\u00e7\u00e3o de PDFs profissionais.",
    context: "PWA comercial para equipes de manuten\u00e7\u00e3o.",
    problem:
      "A cria\u00e7\u00e3o de propostas comerciais era lenta e dependia de processos manuais.",
    solution:
      "PWA para montar propostas, autenticar usu\u00e1rios e gerar PDFs profissionais.",
    role: "Front-end, integra\u00e7\u00f5es com Firebase e gera\u00e7\u00e3o de PDF.",
    highlights: [
      "Gera\u00e7\u00e3o autom\u00e1tica de PDFs",
      "Cache offline para uso em campo",
      "Autentica\u00e7\u00e3o com Firebase",
    ],
    year: "2023",
    demo: "",
    source: "https://github.com/Artotz/pmp-pwa",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "Firebase Auth",
      "i18next",
      "jsPDF",
      "Workbox",
      "PWA",
    ],
  },
  {
    title: "My Portfolio",
    image: myPortfolioSS.src,
    description:
      "Portf\u00f3lio criado para melhor apresentar os projetos que fiz, com minhas informa\u00e7\u00f5es, curr\u00edculo, dados de contato, etc.",
    context: "Portf\u00f3lio pessoal com foco em narrativa e resultados.",
    problem:
      "Eu precisava apresentar projetos e contatos de forma objetiva e profissional.",
    solution:
      "Portf\u00f3lio com se\u00e7\u00f5es claras, CTAs diretos e estudos de caso.",
    role: "Design e implementa\u00e7\u00e3o do site.",
    highlights: [
      "Narrativa centrada em resultados",
      "Layout responsivo",
      "Performance com Next.js",
    ],
    year: "2024",
    demo: "/",
    source: "https://github.com/Artotz/my-portfolio",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
    ],
  },
];
