import { Link, createFileRoute } from "@tanstack/react-router";

const servicePillars = [
  {
    title: "Frontend Development",
    points: [
      "Responsive interfaces built with React, TypeScript, Vue.js, HTML, and CSS.",
      "Portfolio and client-facing websites with accessible, mobile-friendly layouts.",
      "Practical UI architecture for maintainable long-term projects.",
    ],
  },
  {
    title: "Backend and Data Engineering",
    points: [
      "Java and Spring Boot service development for robust API workflows.",
      "Database experience across PostgreSQL, MySQL, GraphQL, and NoSQL patterns.",
      "Python and Django scripting for automation and supporting services.",
    ],
  },
  {
    title: "Delivery and Dev Tools",
    points: [
      "Git/GitHub workflows, Docker-based packaging, and Vercel deployment.",
      "Tooling workflows across VS Code and IntelliJ.",
      "Cloud-hosted environments including AWS EC2 where needed.",
    ],
  },
];

const servicesICanProvide = [
  {
    title: "Website and App Development",
    items: [
      "Business websites and portfolio sites.",
      "Custom web applications with responsive UX.",
      "Frontend refactors for speed, clarity, and maintainability.",
    ],
  },
  {
    title: "Backend and Integration Services",
    items: [
      "API development with Java Spring Boot and Node.js.",
      "Database design and integration with PostgreSQL and MySQL.",
      "Business workflow integrations and automation endpoints.",
    ],
  },
  {
    title: "Automation and Technical Support",
    items: [
      "Python scripting for repetitive workflow automation.",
      "Containerization and deployment support with Docker.",
      "Ongoing project maintenance and technical troubleshooting.",
    ],
  },
];

const engagementOptions = [
  "New project builds from planning through delivery.",
  "Feature additions to existing systems.",
  "Short technical fixes and targeted improvements.",
  "Ongoing support and software management.",
];

const idealClientFit = [
  "Small to medium businesses needing practical, maintainable software outcomes.",
  "Teams that want a developer who can work across frontend, backend, and deployment.",
  "Organizations modernizing older workflows with automation and API integrations.",
  "Founders or operators who value clear communication and iterative delivery.",
];

const bestFitProjects = [
  "New web products or internal business tools.",
  "Feature expansions for existing platforms.",
  "Automation to remove manual or repetitive processes.",
  "Platform stabilization, maintenance, and technical clean-up.",
];

const projectEvidence = [
  {
    name: "Address Verifier",
    detail:
      "Java Spring Boot API integrating LINZ data for practical address verification workflows.",
    tags: ["Java Spring Boot", "Docker", "Kubernetes"],
  },
  {
    name: "Review Engine",
    detail:
      "Full-stack feedback platform with private low-star handling and production deployment.",
    tags: ["React + Vite", "Node.js", "Tailwind CSS"],
  },
  {
    name: "Southern Paediatrics Website",
    detail:
      "Client website delivery with clean responsive styling and maintainable structure.",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    name: "Email Verifier",
    detail:
      "Python automation utility for checking link health in .eml workflows.",
    tags: ["Python"],
  },
  {
    name: "Uniform Tracker",
    detail:
      "In-development inventory and issuing system for healthcare operations.",
    tags: ["React", "Java Spring Boot", "PostgreSQL"],
  },
  {
    name: "Nichols Website Management",
    detail:
      "Long-term software management and upkeep for a New Zealand business website.",
    tags: ["DNM Framework", "HTML", "CSS"],
  },
];

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions | Phillips Music and Tech" },
      {
        name: "description",
        content:
          "Software services across frontend, backend, integration, automation, and ongoing support for practical business outcomes.",
      },
      { property: "og:title", content: "Solutions | Phillips Music and Tech" },
      {
        property: "og:description",
        content:
          "Explore service offerings, project fit, and delivery capabilities beyond a single framework.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://phillipsmusictech.co.nz/solutions",
      },
      { property: "og:image", content: "/logo/Logo-V3.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Solutions | Phillips Music and Tech" },
      {
        name: "twitter:description",
        content:
          "Service brochure for software development, automation, and delivery support.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://phillipsmusictech.co.nz/solutions" },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rise-in rounded-[1.6rem] p-6 sm:p-8">
        <p className="island-kicker mb-2">Solutions</p>
        <h1 className="display-title mb-4 text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
          Software services for real-world business and product needs.
        </h1>
        <p className="max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
          I provide practical software solutions across frontend, backend, and
          integration services, with a focus on maintainable, efficient, and
          user-friendly outcomes. Whether you're looking to build a new
          application, enhance an existing platform, or automate repetitive
          workflows, I can help deliver results that align with your business
          goals.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/contact-us"
            className="rounded-full border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.14)] px-5 py-2.5 text-sm font-semibold text-[var(--lagoon-deep)] no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.24)]"
          >
            Discuss Your Project
          </Link>
          <Link
            to="/contact-us"
            className="rounded-full border border-[rgba(67,149,232,0.35)] bg-[rgba(67,149,232,0.18)] px-5 py-2.5 text-sm font-semibold text-[var(--sea-ink)] no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(67,149,232,0.24)]"
          >
            Request a Callback
          </Link>
        </div>
      </section>

      <section className="mt-8 space-y-4">
        {servicePillars.map((pillar) => (
          <article
            key={pillar.title}
            className="island-shell rounded-2xl p-6 transition hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--lagoon-deep)_35%,var(--line))]"
          >
            <h2 className="mb-3 text-xl font-semibold text-[var(--sea-ink)]">
              {pillar.title}
            </h2>
            <ul className="m-0 list-disc space-y-2 pl-5 text-sm text-[var(--sea-ink-soft)]">
              {pillar.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mt-8">
        <h2 className="mb-4 text-2xl font-semibold text-[var(--sea-ink)]">
          Services I Can Provide
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {servicesICanProvide.map((service) => (
            <article
              key={service.title}
              className="island-shell rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--lagoon-deep)_35%,var(--line))]"
            >
              <h3 className="mb-3 text-lg font-semibold text-[var(--sea-ink)]">
                {service.title}
              </h3>
              <ul className="m-0 list-disc space-y-2 pl-5 text-sm text-[var(--sea-ink-soft)]">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 text-2xl font-semibold text-[var(--sea-ink)]">
          Project Evidence
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {projectEvidence.map((project) => (
            <article
              key={project.name}
              className="island-shell rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--lagoon-deep)_35%,var(--line))]"
            >
              <h3 className="mb-2 text-lg font-semibold text-[var(--sea-ink)]">
                {project.name}
              </h3>
              <p className="mb-3 text-sm text-[var(--sea-ink-soft)]">
                {project.detail}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--line)] bg-[var(--chip-bg)] px-2.5 py-1 text-xs font-semibold text-[var(--sea-ink-soft)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-2">
        <article className="island-shell rounded-2xl p-6 transition hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--lagoon-deep)_35%,var(--line))]">
          <p className="island-kicker mb-2">Ideal Clients</p>
          <h2 className="mb-3 text-2xl font-semibold text-[var(--sea-ink)]">
            Who this service is best for
          </h2>
          <ul className="m-0 list-disc space-y-2 pl-5 text-sm text-[var(--sea-ink-soft)]">
            {idealClientFit.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="island-shell rounded-2xl p-6 transition hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--lagoon-deep)_35%,var(--line))]">
          <p className="island-kicker mb-2">Project Fit</p>
          <h2 className="mb-3 text-2xl font-semibold text-[var(--sea-ink)]">
            Common engagements I can help with
          </h2>
          <ul className="m-0 list-disc space-y-2 pl-5 text-sm text-[var(--sea-ink-soft)]">
            {bestFitProjects.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mt-4">
            <Link
              to="/contact-us"
              className="rounded-full border border-[rgba(67,149,232,0.35)] bg-[rgba(67,149,232,0.18)] px-5 py-2.5 text-sm font-semibold text-[var(--sea-ink)] no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(67,149,232,0.24)]"
            >
              Check Project Fit
            </Link>
          </div>
        </article>
      </section>

      <section className="island-shell mt-8 rounded-2xl p-6">
        <p className="island-kicker mb-2">Engagement Options</p>
        <h2 className="mb-3 text-2xl font-semibold text-[var(--sea-ink)]">
          Flexible support for different project types.
        </h2>
        <ul className="m-0 list-disc space-y-2 pl-5 text-sm text-[var(--sea-ink-soft)]">
          {engagementOptions.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-[var(--sea-ink-soft)]">
          If these services fit what you need, get in touch and we can plan the
          next step.
        </p>
        <div className="mt-4">
          <Link
            to="/contact-us"
            className="rounded-full border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.14)] px-5 py-2.5 text-sm font-semibold text-[var(--lagoon-deep)] no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.24)]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
