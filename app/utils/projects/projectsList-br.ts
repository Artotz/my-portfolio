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
      "Site de nossa empresa de Soluções Digitais, onde oferecemos serviços de desenvolvimento e manutenção de aplicações, sites, páginas de redes sociais, etc.",
    problem:
      "A empresa precisava de uma presença digital clara e confiável para explicar os serviços e captar novos clientes.",
    solution:
      "Site institucional com estrutura de serviços, portfólio e formulário validado, com foco em performance.",
    role: "Frontend e integração do fluxo de contato.",
    highlights: [
      "Apresentação clara de serviços",
      "Formulário com validação e envio",
      "Carregamento rápido e consistente",
    ],
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
      "Aplicativo focado em cálculos de produção, eficiência e custos em operações com máquinas e transporte de materiais.",
    problem:
      "Equipes de operação precisavam calcular produção, eficiência e custos sem depender de planilhas no campo.",
    solution:
      "App mobile que centraliza os cálculos com entradas guiadas e resultados imediatos.",
    role: "Desenvolvimento do app em React Native e definição de fluxos.",
    highlights: [
      "Cálculos padronizados",
      "Uso simples no celular",
      "Compatibilidade Android/iOS via Expo",
    ],
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
      "Aplicativo de criação de tarefas, podendo essas serem filtradas ou ordenadas por setor, prioridade, status e data limite.",
    problem:
      "Times precisavam organizar tarefas por setor, prioridade e prazo sem fricção.",
    solution:
      "Aplicativo de tarefas com filtros, ordenação e status para o dia a dia.",
    role: "Implementação do app e formulários.",
    highlights: [
      "Filtros por setor e prioridade",
      "Fluxo simples de criação e edição",
      "Interface direta para rotina diária",
    ],
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
      "Aplicativo em React Native (Expo) para escaneamento e gerenciamento de amostras, com acesso nativo à câmera e ao armazenamento local.",
    problem:
      "A coleta de amostras exigia registro rápido e confiável com leitura por câmera.",
    solution:
      "App para escanear, registrar e gerenciar amostras com armazenamento local.",
    role: "Integração com câmera, armazenamento e UI.",
    highlights: [
      "Funciona offline em campo",
      "Registro rápido com câmera nativa",
      "Organização simples das amostras",
    ],
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
    title: "Plano de Manutenção",
    image: pmpPWASS.src,
    description:
      "Aplicação PWA para criação de propostas comerciais de Plano de Manutenção, com autenticação via Firebase, cache offline e geração de PDFs profissionais.",
    problem:
      "A criação de propostas comerciais era lenta e dependia de processos manuais.",
    solution:
      "PWA para montar propostas, autenticar usuários e gerar PDFs profissionais.",
    role: "Front-end, integrações com Firebase e geração de PDF.",
    highlights: [
      "Geração automática de PDFs",
      "Cache offline para uso em campo",
      "Autenticação com Firebase",
    ],
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
      "Portfólio criado para melhor apresentar os projetos que fiz, com minhas informações, currículo, dados de contato, etc.",
    problem:
      "Eu precisava apresentar projetos e contatos de forma objetiva e profissional.",
    solution:
      "Portfólio com seções claras, CTAs diretos e estudos de caso.",
    role: "Design e implementação do site.",
    highlights: [
      "Narrativa centrada em resultados",
      "Layout responsivo",
      "Performance com Next.js",
    ],
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
