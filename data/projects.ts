export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problemSolved?: string;
  technologies: string[];
  features: string[];
  architectureOverview: string;
  challenges: string[];
  solutions: string[];
  image: string;
  screenshots: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  status: "Completed" | "In Development" | "Prototype";
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "charity-web",
    slug: "charity-web",
    title: "Charity-Web Platform",
    shortDescription:
      "A responsive donation and fundraising web platform featuring campaign showcases, multi-step contribution workflows, and Firebase backend synchronization.",
    fullDescription:
      "Charity-Web is a modern web application designed to facilitate charitable initiatives and community fundraising. Developed with Next.js App Router, TypeScript, and Tailwind CSS, it connects donors with meaningful causes through structured contribution workflows, real-time Firebase backend synchronization, and Formik form validation.",
    problemSolved:
      "Charitable organizations and local community initiatives often lack modern, transparent digital platforms with seamless donation workflows. Charity-Web solves this by providing a clean, multi-step contribution flow with robust Formik client-side validation and real-time Firebase synchronization to track donation goals accurately across all devices.",
    technologies: ["Next.js", "TypeScript", "Firebase", "Formik", "Tailwind CSS", "Lucide React"],
    features: [
      "Responsive campaign showcases and donation goal progress tracking",
      "Multi-step donation workflow with robust Formik client-side validation",
      "Firebase cloud backend integration for campaign data and donor submissions",
      "Modern, accessible UI built with Tailwind CSS and Lucide React iconography",
      "Mobile-first responsive design optimized across mobile, tablet, and desktop",
    ],
    architectureOverview:
      "Built using Next.js App Router architecture and TypeScript. Components are organized into modular, reusable UI sections with stateful forms connected to Firebase Firestore/Database for persisting campaign contributions.",
    challenges: [
      "Ensuring form validation handled edge cases smoothly during multi-step donations.",
      "Maintaining layout integrity and fast image rendering across different screen dimensions.",
    ],
    solutions: [
      "Integrated Formik with structured schema rules to provide real-time field validation before submission.",
      "Employed Next.js Image optimization and Tailwind CSS responsive utility grids.",
    ],
    image: "/images/projects/charity-web.png",
    screenshots: ["/images/projects/charity-web.png"],
    githubUrl: "https://github.com/jaykaklotar786/Charity-Web",
    liveUrl: "https://donation-app-2026.vercel.app/",
    status: "Completed",
    featured: true,
  },
  {
    id: "news-portal",
    slug: "news-portal",
    title: "MERN News Portal",
    shortDescription:
      "A full-stack news aggregation and publishing platform built with the MERN stack, featuring JWT authentication, category filtering, and administrative management.",
    fullDescription:
      "The MERN News Portal is a dynamic web application built using MongoDB, Express.js, React, and Node.js. It features a curated newsfeed with category filtering, user authentication using JSON Web Tokens (JWT) and bcrypt, and an administrative interface for publishing and managing articles.",
    problemSolved:
      "Digital publishing workflows require secure separation between public readers and administrative content managers, alongside fast retrieval of categorized news articles. MERN News Portal solves this with role-based JWT authentication, encrypted credentials via bcrypt, and indexed MongoDB querying for rapid category-specific news browsing.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt", "Tailwind CSS"],
    features: [
      "Secure user authentication with JWT and bcrypt password encryption",
      "Dynamic news article categorization (Technology, Politics, Business, and more)",
      "Administrative article management: create, read, update, and delete (CRUD)",
      "Responsive reader interface with optimized article browsing",
      "RESTful API backend with Express.js and Mongoose ODM for MongoDB",
    ],
    architectureOverview:
      "Client-server architecture featuring a decoupled React single-page frontend that communicates via Axios with a RESTful Express/Node.js API, persisting news articles and user credentials in MongoDB.",
    challenges: [
      "Safeguarding admin routes and securing sensitive user credentials.",
      "Efficiently filtering and retrieving categorized articles with fast response times.",
    ],
    solutions: [
      "Implemented JWT verification middleware on protected Express routes and hashed passwords with bcrypt.",
      "Structured MongoDB Mongoose queries with category indexing for performant retrieval.",
    ],
    image: "/images/projects/news-portal.png",
    screenshots: ["/images/projects/news-portal.png"],
    githubUrl: "https://github.com/jaykaklotar786/NewsPortal",
    liveUrl: null,
    status: "Completed",
    featured: true,
  },
  {
    id: "angular-news-portal",
    slug: "angular-news-portal",
    title: "Angular News Portal",
    shortDescription:
      "A component-driven news web application built with Angular and TypeScript, demonstrating reactive data management with RxJS and modular frontend structure.",
    fullDescription:
      "Angular News Portal showcases client-side architecture using Angular's component-based model, strict TypeScript typing, and reactive data streams via RxJS. The application presents categorized news headlines, responsive cards, and clean service-based API communication.",
    problemSolved:
      "Frontend applications consuming external news feeds often experience state desynchronization and memory leaks if asynchronous subscriptions are not handled carefully. Angular News Portal solves this by utilizing RxJS observable pipelines, Angular service-based dependency injection, and strong TypeScript models to maintain high reliability and seamless updates.",
    technologies: ["Angular", "TypeScript", "RxJS", "REST APIs", "Tailwind CSS", "HTML5"],
    features: [
      "Modular Angular component and service architecture",
      "Reactive stream management and asynchronous data handling with RxJS",
      "Categorized news browsing with dynamic routing",
      "Clean separation of concerns between UI components and HTTP services",
      "Responsive mobile-friendly styling",
    ],
    architectureOverview:
      "Structured using Angular services to encapsulate HTTP requests, injecting them into UI components that subscribe to reactive data streams to render news content cleanly.",
    challenges: [
      "Managing reactive observable subscriptions efficiently across component lifecycles.",
      "Structuring consistent type definitions for external API news responses.",
    ],
    solutions: [
      "Leveraged Angular async pipes and lifecycle cleanup patterns to prevent memory leaks.",
      "Defined comprehensive TypeScript interfaces matching API payloads.",
    ],
    image: "/images/projects/angular-news-portal.png",
    screenshots: ["/images/projects/angular-news-portal.png"],
    githubUrl: "https://github.com/jaykaklotar786/Angular-News-Portal",
    liveUrl: null,
    status: "Completed",
    featured: true,
  },
  {
    id: "todo-app",
    slug: "todo-app",
    title: "React Task Manager",
    shortDescription:
      "A responsive, state-driven task management application built in React, featuring interactive task filtering, status toggling, and clean UX.",
    fullDescription:
      "An interactive task tracking application developed using React. It allows users to organize day-to-day tasks, mark items as complete, filter between active and completed states, and maintain an organized workflow with an intuitive, responsive interface.",
    problemSolved:
      "Managing daily task priorities often feels overwhelming with cluttered tools that require heavy setup. React Task Manager solves this by delivering an instant, distraction-free interface where users can add, toggle, and filter tasks with immediate UI updates powered by React state management.",
    technologies: ["React", "JavaScript", "CSS3", "HTML5"],
    features: [
      "Dynamic task addition, editing, and deletion",
      "Real-time status toggling between active and completed tasks",
      "Filter controls to view All, Active, or Completed items",
      "Lightweight, responsive UI designed for quick interactions",
    ],
    architectureOverview:
      "Built with functional React components, utilizing hooks (useState, useEffect) for predictable state transitions and modular component composition.",
    challenges: [
      "Handling state updates cleanly across parent-child components without unnecessary re-renders.",
    ],
    solutions: [
      "Structured centralized state management and immutable state update functions in React.",
    ],
    image: "/images/projects/task-manager.png",
    screenshots: ["/images/projects/task-manager.png"],
    githubUrl: "https://github.com/jaykaklotar786/To-doapp",
    liveUrl: null,
    status: "Completed",
    featured: true,
  },
];
