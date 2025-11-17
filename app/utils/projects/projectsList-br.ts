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
