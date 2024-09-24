import { ProjectType } from "../types";

import prismaWebSS from "../../../assets/prismaweb.png";
import taskAppSS from "../../../assets/taskapp.jpg";
import myPortfolioSS from "../../../assets/myportfolio.png";

export const projects: ProjectType[] = [
  {
    title: "Prisma Web",
    image: prismaWebSS.src,
    description:
      "Site de nossa empresa de Soluções Digitais, onde oferecemos serviços de desenvolvimento e manutenção de aplicações, sites, páginas de redes sociais, etc.",
    demo: "https://prismaweb.com.br/",
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
