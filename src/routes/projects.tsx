import { createFileRoute } from "@tanstack/react-router";

type ProjectItem = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
};

const softwareProjects: ProjectItem[] = [
  {
    title: "Address Verifier",
    description:
      "Developing an API that integrates with LINZ data to verify addresses across New Zealand and return JSON address data for form prefill.",
    image: "/projects/InDevelopment.png",
    tags: ["Java Spring Boot", "Docker", "Kubernetes"],
    githubUrl: "https://github.com/hamtana/AddressVerifier",
  },
  {
    title: "Southern Paediatrics Website",
    description:
      "Designed and built a website for Southern Paediatrics Ltd, strengthening practical Tailwind and responsive layout skills.",
    image: "/projects/sp-flat-logo.png",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    demoUrl: "https://southernpaediatrics.co.nz",
  },
  {
    title: "Monthly File Copier",
    description:
      "An automation tool that reduced manual spreadsheet copying and renaming by supporting multiple month/year copy workflows.",
    image: "/projects/imageNotAvailable.png",
    tags: ["Java"],
  },
  {
    title: "Review Engine",
    description:
      "A lightweight feedback system that routes low-star feedback to private email workflows instead of public review channels.",
    image: "/projects/reviewEngine.png",
    tags: ["Docker", "React + Vite", "Node.js", "Tailwind CSS"],
    demoUrl: "https://review-engine.phillipsmusictech.co.nz",
    githubUrl: "https://github.com/hamtana/Review-Engine",
  },
  {
    title: "Email Verifier",
    description:
      "A Python utility that parses .eml files, extracts links, and reports response codes to prevent broken links in outreach emails.",
    image: "/projects/imageNotAvailable.png",
    tags: ["Python"],
    githubUrl: "https://github.com/hamtana/EmailVerifier",
  },
  {
    title: "HPhillips-CV",
    description:
      "Customized a LaTeX CV template into a polished professional resume and learned practical LaTeX workflow fundamentals.",
    image: "/projects/CV.png",
    tags: ["LaTeX"],
    demoUrl: "https://hamtana.github.io/HPhillips-CV/",
    githubUrl: "https://github.com/hamtana/HPhillips-CV",
  },
  {
    title: "PantryPal",
    description:
      "A team-built app that uses AI-assisted recipe generation based on pantry inventory items.",
    image: "/projects/project1.png",
    tags: ["React", "Django", "Python"],
    githubUrl: "https://github.com/hamtana/PantryPal/tree/master",
  },
  {
    title: "Phillips Music & Tech Website",
    description:
      "A portfolio and client contact website built to showcase work and support self-employed service inquiries.",
    image: "/projects/project2.png",
    tags: ["Vite", "React", "Vercel", "Tailwind CSS"],
    demoUrl: "https://phillipsmusictech.co.nz",
    githubUrl: "https://github.com/hamtana/HPhillips-Website",
  },
  {
    title: "Uniform Tracker",
    description:
      "In development: an inventory and uniform issue/management system for a healthcare provider.",
    image: "/projects/InDevelopment.png",
    tags: ["React", "Java Spring Boot", "PostgreSQL"],
    githubUrl: "https://github.com/hamtana/Uniform-Tracker",
  },
];

const softwareManagementProjects: ProjectItem[] = [
  {
    title: "Nichols Website Management",
    description:
      "Ongoing website management for a New Zealand business in the lower South Island over the past three years.",
    image: "/projects/nichols.png",
    tags: ["DNM Framework", "HTML", "CSS"],
    demoUrl: "https://nichols.co.nz",
  },
];

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Phillips Music and Tech" },
      {
        name: "description",
        content:
          "Browse software and management projects delivered by Phillips Music and Tech, including API, automation, and web platform work.",
      },
      { property: "og:title", content: "Projects | Phillips Music and Tech" },
      {
        property: "og:description",
        content:
          "Portfolio of recent software projects, integrations, and long-term support engagements.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://phillipsmusictech.co.nz/projects",
      },
      { property: "og:image", content: "/logo/Logo-V3.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Projects | Phillips Music and Tech" },
      {
        name: "twitter:description",
        content:
          "See practical project outcomes across frontend, backend, and automation.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://phillipsmusictech.co.nz/projects" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="island-shell tilt-card rounded-2xl overflow-hidden">
      <div className="h-44 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-lg font-semibold text-[var(--sea-ink)]">
          {project.title}
        </h3>
        <p className="mb-4 text-sm text-[var(--sea-ink-soft)]">
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--line)] bg-[var(--chip-bg)] px-2.5 py-1 text-xs font-semibold text-[var(--sea-ink-soft)]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 text-sm font-semibold">
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="nav-link"
            >
              Live Demo
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="nav-link"
            >
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function ProjectsPage() {
  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rise-in rounded-[1.6rem] p-6 sm:p-8">
        <p className="island-kicker mb-2">Recent Software Projects</p>
        <h1 className="display-title mb-4 text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
          Featured software and delivery projects.
        </h1>
        <p className="max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
          This reflects the original project portfolio across software builds,
          automation tools, and long-term website management work.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 text-2xl font-semibold text-[var(--sea-ink)]">
          Software Projects
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {softwareProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-semibold text-[var(--sea-ink)]">
          Software Management Projects
        </h2>
        <div className="grid gap-4 md:grid-cols-1">
          {softwareManagementProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
