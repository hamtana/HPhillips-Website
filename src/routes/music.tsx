import { createFileRoute } from "@tanstack/react-router";

const musicProjects = [
  {
    title: "Floating",
    description:
      "Song for my band, DownsideUp, to be released in 2025. Progress mix available below.",
    tags: ["Logic Pro", "Pro Tools"],
    audioSrc: "/audio/Floating.mp3",
  },
  {
    title: "What Goes Around",
    description: "Song recorded in 2024 as part of a university project.",
    tags: ["Logic Pro", "Pro Tools"],
    audioSrc: "/audio/WhatGoesAround.mp3",
  },
  {
    title: "Runaway",
    description:
      "Song produced for my band DownsideUp, to be released in 2025.",
    tags: ["Logic Pro", "Pro Tools"],
    audioSrc: "/audio/Runaway.mp3",
  },
];

export const Route = createFileRoute("/music")({
  head: () => ({
    meta: [
      { title: "Music | Phillips Music and Tech" },
      {
        name: "description",
        content:
          "Live sound, audio production, and performance experience from Phillips Music and Tech, including featured music projects.",
      },
      { property: "og:title", content: "Music | Phillips Music and Tech" },
      {
        property: "og:description",
        content:
          "Explore live sound and production services plus featured tracks and project work.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://phillipsmusictech.co.nz/music",
      },
      { property: "og:image", content: "/logo/Logo-V3.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Music | Phillips Music and Tech" },
      {
        name: "twitter:description",
        content:
          "Live sound and production capability with featured music projects.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://phillipsmusictech.co.nz/music" },
    ],
  }),
  component: MusicPage,
});

function MusicPage() {
  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rise-in rounded-[1.6rem] p-6 sm:p-8">
        <p className="island-kicker mb-2">Music</p>
        <h1 className="display-title mb-4 text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
          Live sound, audio production, and performance.
        </h1>
        <p className="max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
          I have hands-on experience in live sound engineering, studio
          production, and performance. My focus is creating polished,
          audience-ready sound while preserving musical intent and feel.
        </p>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          [
            "Live Sound",
            "Front-of-house and monitor support for dependable outcomes in dynamic venues.",
          ],
          [
            "Audio Production",
            "Recording, editing, and mix development with strong attention to tone and dynamics.",
          ],
          [
            "Performance",
            "Performer and collaborator experience that helps bridge technical quality with musical expression.",
          ],
        ].map(([title, body], idx) => (
          <article
            key={title}
            className="island-shell tilt-card rise-in rounded-2xl p-5"
            style={{ animationDelay: `${idx * 100 + 100}ms` }}
          >
            <h2 className="mb-2 text-lg font-semibold text-[var(--sea-ink)]">
              {title}
            </h2>
            <p className="m-0 text-sm text-[var(--sea-ink-soft)]">{body}</p>
          </article>
        ))}
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-semibold text-[var(--sea-ink)]">
          Featured Music Projects
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {musicProjects.map((project) => (
            <article
              key={project.title}
              className="island-shell tilt-card rounded-2xl p-5"
            >
              <h3 className="mb-2 text-xl font-semibold text-[var(--sea-ink)]">
                {project.title}
              </h3>
              <p className="mb-4 text-sm text-[var(--sea-ink-soft)]">
                {project.description}
              </p>
              <audio controls className="w-full">
                <source src={project.audioSrc} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <div className="mt-4 flex flex-wrap gap-2">
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
    </main>
  );
}
