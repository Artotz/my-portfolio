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
      "Website for our Digital Solutions company, where we offer development and maintenance services for apps, websites, social media pages, and more.",
    context: "Corporate site and lead generation for digital services.",
    problem:
      "The company needed a clear, trustworthy digital presence to explain services and attract new clients.",
    solution:
      "Institutional website with services, portfolio, and a validated contact form, focused on performance.",
    role: "Frontend development and contact flow integration.",
    highlights: [
      "Clear service presentation",
      "Form with validation and submission",
      "Fast, consistent loading",
    ],
    year: "2024",
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
      "App focused on production, efficiency, and cost calculations for operations with machines and material transport.",
    context: "Mobile app for operations and logistics teams.",
    problem:
      "Operations teams needed to calculate production, efficiency, and costs without relying on spreadsheets in the field.",
    solution:
      "Mobile app that centralizes calculations with guided inputs and immediate results.",
    role: "React Native app development and flow definition.",
    highlights: [
      "Standardized calculations",
      "Simple mobile usage",
      "Android/iOS compatibility via Expo",
    ],
    year: "2025",
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
      "Task creation app with filters and sorting by department, priority, status, and due date.",
    context: "Task organization for operations teams.",
    problem:
      "Teams needed to organize tasks by department, priority, and deadline without friction.",
    solution:
      "Task app with filters, ordering, and status for daily operations.",
    role: "App implementation and form flows.",
    highlights: [
      "Filters by department and priority",
      "Simple create/edit flow",
      "Straightforward UI for daily routines",
    ],
    year: "2024",
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
      "React Native (Expo) app for scanning and managing samples, with native camera access and local storage.",
    context: "Field sample management focused on speed.",
    problem:
      "Sample collection required fast, reliable capture with camera scanning.",
    solution:
      "App to scan, register, and manage samples with local storage.",
    role: "Camera, storage, and UI integration.",
    highlights: [
      "Works offline in the field",
      "Fast registration with native camera",
      "Simple sample organization",
    ],
    year: "2025",
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
    title: "Maintenance Plan",
    image: pmpPWASS.src,
    description:
      "PWA for creating commercial maintenance plan proposals, with Firebase auth, offline cache, and professional PDF generation.",
    context: "Commercial PWA for maintenance teams.",
    problem:
      "Creating commercial proposals was slow and depended on manual processes.",
    solution:
      "PWA to build proposals, authenticate users, and generate professional PDFs.",
    role: "Frontend, Firebase integrations, and PDF generation.",
    highlights: [
      "Automatic PDF generation",
      "Offline cache for field use",
      "Firebase authentication",
    ],
    year: "2025",
    demo: "",
    source: "https://github.com/Artotz/pmp-pwa",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "Firebase Auth",
      "i18n",
      "jsPDF",
      "Workbox",
      "PWA",
    ],
  },
  {
    title: "My Portfolio",
    image: myPortfolioSS.src,
    description:
      "Portfolio built to showcase the projects I've delivered, with my information, resume, and contact details.",
    context: "Personal portfolio focused on narrative and outcomes.",
    problem:
      "I needed to present projects and contacts in a concise, professional way.",
    solution:
      "Portfolio with clear sections, direct CTAs, and case studies.",
    role: "Site design and implementation.",
    highlights: ["Modern design", "Responsive layout", "Next.js performance"],
    year: "2024",
    demo: "/",
    source: "https://github.com/Artotz/my-portfolio",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "i18n",
    ],
  },
];
