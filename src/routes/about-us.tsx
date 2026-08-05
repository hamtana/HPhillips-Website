import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us | Phillips Music and Tech" },
      {
        name: "description",
        content:
          "Learn about Phillips Music and Tech, combining software engineering, creative audio production, and practical project delivery.",
      },
      { property: "og:title", content: "About Us | Phillips Music and Tech" },
      {
        property: "og:description",
        content:
          "Background, values, and working style across software and music-focused services.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://phillipsmusictech.co.nz/about-us",
      },
      { property: "og:image", content: "/logo/Logo-V3.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Us | Phillips Music and Tech" },
      {
        name: "twitter:description",
        content:
          "Who we are and how we blend software engineering with creative production.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://phillipsmusictech.co.nz/about-us" },
    ],
  }),
  component: AboutUsPage,
});

function AboutUsPage() {
  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rise-in rounded-[1.6rem] p-6 sm:p-8">
        <p className="island-kicker mb-2">About Us</p>
        <h1 className="display-title mb-4 text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
          Passionate software engineer and musician.
        </h1>
        <p className="max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
          I&apos;m a recent graduate from the University of Otago with a passion
          for both software engineering and music production. I take pride in
          writing clean, efficient code and producing high-quality audio.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
          Whether I&apos;m developing an app or composing a track, I approach
          every project with creativity, precision, and a strong work ethic. I
          enjoy solving problems, learning new tools and technologies, and
          collaborating with others to bring ideas to life.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
          I&apos;m excited to contribute to projects that blend tech and
          creativity, and to keep growing as both an engineer and a musician.
        </p>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          [
            "Time Management",
            "I thrive in busy environments and balance software work, client delivery, and music commitments effectively.",
          ],
          [
            "Problem Solver",
            "Creative, critical, and computational thinking helps me solve complex problems in both new builds and system maintenance.",
          ],
          [
            "Communicator and Collaborator",
            "I communicate clearly and work effectively with diverse teams to deliver outcomes that users value.",
          ],
        ].map(([title, body], idx) => (
          <article
            key={title}
            className="island-shell tilt-card rise-in rounded-2xl p-5"
            style={{ animationDelay: `${idx * 100 + 90}ms` }}
          >
            <h2 className="mb-2 text-base font-semibold text-[var(--sea-ink)]">
              {title}
            </h2>
            <p className="m-0 text-sm text-[var(--sea-ink-soft)]">{body}</p>
          </article>
        ))}
      </section>

      <section className="island-shell mt-8 rounded-2xl p-6">
        <p className="island-kicker mb-2">Links</p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://hamtana.github.io/HPhillips-CV/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[rgba(67,149,232,0.35)] bg-[rgba(67,149,232,0.18)] px-5 py-2.5 text-sm font-semibold text-[var(--sea-ink)] no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(67,149,232,0.24)]"
          >
            Download CV
          </a>
        </div>
      </section>
    </main>
  );
}
