import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Phillips Music and Tech | Software and Sound" },
      {
        name: "description",
        content:
          "Phillips Music and Tech provides software development, live sound, and audio production services from Wellington, New Zealand.",
      },
      {
        property: "og:title",
        content: "Phillips Music and Tech | Software and Sound",
      },
      {
        property: "og:description",
        content:
          "Software development, live sound, and music production services tailored to practical business and creative outcomes.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://phillipsmusictech.co.nz/" },
      { property: "og:image", content: "/logo/Logo-V3.png" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Phillips Music and Tech | Software and Sound",
      },
      {
        name: "twitter:description",
        content:
          "Software, live sound, and production services by Phillips Music and Tech.",
      },
      { name: "twitter:image", content: "/logo/Logo-V3.png" },
    ],
    links: [{ rel: "canonical", href: "https://phillipsmusictech.co.nz/" }],
  }),
  component: App,
});

function App() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <section className="island-shell three-d-hero rise-in relative overflow-hidden rounded-4xl px-6 py-10 sm:px-10 sm:py-14">
        <div className="hero-orb hero-orb-a pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.22),transparent_66%)]" />
        <div className="hero-orb hero-orb-b pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.12),transparent_66%)]" />
        <div className="hero-orb hero-orb-c pointer-events-none absolute right-[12%] top-[12%] h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(67,149,232,0.18),transparent_70%)]" />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)] lg:items-end">
          <div>
            <p className="island-kicker mb-3">Software x Sound</p>
            <h1 className="display-title mb-5 max-w-3xl text-4xl leading-[1.02] font-bold tracking-tight text-(--sea-ink) sm:text-6xl">
              Phillips Music and Tech.
            </h1>
            <p className="mb-8 max-w-2xl text-base leading-8 text-(--sea-ink-soft) sm:text-lg">
              A trading brand focused on software engineering, live sound, and
              audio production. I build practical systems and polished digital
              experiences for real work.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/solutions"
                className="rounded-full border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.14)] px-5 py-2.5 text-sm font-semibold text-(--lagoon-deep) no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.24)]"
              >
                View Software Solutions
              </Link>
              <Link
                to="/projects"
                className="rounded-full border border-[rgba(67,149,232,0.35)] bg-[rgba(67,149,232,0.18)] px-5 py-2.5 text-sm font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(67,149,232,0.24)]"
              >
                View My Work
              </Link>
              <Link
                to="/contact-us"
                className="rounded-full border border-[rgba(85,198,255,0.5)] bg-[rgba(29,63,98,0.88)] px-5 py-2.5 text-sm font-semibold text-[#f3fbff] no-underline shadow-[0_8px_22px_rgba(12,30,58,0.4)] transition hover:-translate-y-0.5 hover:bg-[rgba(35,75,115,0.95)]"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <aside className="rounded-[1.4rem] border border-[rgba(80,129,170,0.16)] bg-[rgba(255,255,255,0.9)] p-5 shadow-[0_18px_34px_rgba(27,58,92,0.08)]">
            <p className="island-kicker mb-3">Focus Areas</p>
            <ul className="m-0 space-y-3 pl-5 text-sm leading-7 text-(--sea-ink-soft)">
              <li>Web apps, business sites, and practical interfaces.</li>
              <li>Backend services, APIs, and automation.</li>
              <li>Live sound, audio production, and creative delivery.</li>
            </ul>
            <div className="mt-5 rounded-2xl border border-[rgba(80,129,170,0.14)] bg-white/70 p-4">
              <p className="m-0 text-xs font-semibold uppercase tracking-[0.18em] text-(--kicker)">
                Available for
              </p>
              <p className="mt-2 m-0 text-sm leading-7 text-(--sea-ink)">
                New builds, targeted improvements, and ongoing project support.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {[
          [
            "About Us",
            "Learn about my background in software engineering and creative work.",
            "/about-us",
          ],
          [
            "Solutions",
            "A software services page focused on modern web engineering and delivery.",
            "/solutions",
          ],
          [
            "Recent Projects",
            "Browse original portfolio projects including Address Verifier, Review Engine, and more.",
            "/projects",
          ],
          [
            "Music",
            "Live sound, music production, and performance work with embedded tracks.",
            "/music",
          ],
          [
            "Contact Us",
            "Get in touch for software, production, and collaboration enquiries.",
            "/contact-us",
          ],
        ].map(([title, desc, to], index) => (
          <Link
            key={title}
            to={
              to as
                | "/about-us"
                | "/solutions"
                | "/projects"
                | "/music"
                | "/contact-us"
            }
            className="island-shell feature-card rise-in rounded-2xl p-5 no-underline"
            style={{ animationDelay: `${index * 90 + 80}ms` }}
          >
            <h2 className="mb-2 text-base font-semibold text-(--sea-ink)">
              {title}
            </h2>
            <p className="m-0 text-sm text-(--sea-ink-soft)">{desc}</p>
          </Link>
        ))}
      </section>

      <section className="island-shell mt-8 rounded-2xl p-6">
        <p className="island-kicker mb-2">What I Do</p>
        <ul className="m-0 list-disc space-y-2 pl-5 text-sm text-(--sea-ink-soft)">
          <li>
            Build clean, reliable software with TanStack, React, and modern
            deployment workflows.
          </li>
          <li>
            Produce and deliver high-quality live and studio audio experiences.
          </li>
          <li>Collaborate effectively across technical and creative teams.</li>
        </ul>
      </section>
    </main>
  );
}
