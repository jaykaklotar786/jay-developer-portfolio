export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools";
  iconKey: string;
  description?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    badge: "User Interface & Experience",
    description:
      "Crafting responsive, accessible, and high-performance client applications.",
    skills: [
      { name: "HTML5", category: "Frontend", iconKey: "html5", description: "Semantic markup & structure" },
      { name: "CSS3", category: "Frontend", iconKey: "css3", description: "Modern styling & layouts" },
      { name: "JavaScript", category: "Frontend", iconKey: "javascript", description: "ES6+ core language" },
      { name: "TypeScript", category: "Frontend", iconKey: "typescript", description: "Type-safe scalability" },
      { name: "React", category: "Frontend", iconKey: "react", description: "Component-driven UIs" },
      { name: "Next.js", category: "Frontend", iconKey: "nextjs", description: "App Router & SSR/SSG" },
      { name: "Angular", category: "Frontend", iconKey: "angular", description: "Structured enterprise apps" },
      { name: "Tailwind CSS", category: "Frontend", iconKey: "tailwind", description: "Utility-first CSS" },
      { name: "shadcn/ui", category: "Frontend", iconKey: "shadcn", description: "Accessible UI components" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    badge: "Server & API Architecture",
    description:
      "Designing robust application logic, scalable web services, and secure communication.",
    skills: [
      { name: "Node.js", category: "Backend", iconKey: "nodejs", description: "Asynchronous runtime" },
      { name: "Express.js", category: "Backend", iconKey: "express", description: "Minimalist web framework" },
      { name: "REST APIs", category: "Backend", iconKey: "restapi", description: "Resource endpoints & design" },
      { name: "JWT Authentication", category: "Backend", iconKey: "jwt", description: "Stateless security tokens" },
    ],
  },
  {
    id: "database",
    title: "Database",
    badge: "Data Modeling & Storage",
    description:
      "Managing persistence, document schemas, and efficient query operations.",
    skills: [
      { name: "MongoDB", category: "Database", iconKey: "mongodb", description: "Document-oriented NoSQL" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    badge: "Productivity & Tooling",
    description:
      "Modern tooling and version control enabling clean and reliable workflows.",
    skills: [
      { name: "Git", category: "Tools", iconKey: "git", description: "Distributed version control" },
      { name: "GitHub", category: "Tools", iconKey: "github", description: "Collaboration & hosting" },
      { name: "Postman", category: "Tools", iconKey: "postman", description: "API testing & documentation" },
      { name: "VS Code", category: "Tools", iconKey: "vscode", description: "Primary IDE & ecosystem" },
    ],
  },
];
