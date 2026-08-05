import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Phillips Music and Tech" },
      {
        name: "description",
        content: "This page has moved to the About Us page.",
      },
      { name: "robots", content: "noindex,follow" },
    ],
    links: [
      { rel: "canonical", href: "https://phillipsmusictech.co.nz/about-us" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rounded-2xl p-6 sm:p-8">
        <p className="island-kicker mb-2">Moved</p>
        <h1 className="display-title mb-3 text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
          This page has moved.
        </h1>
        <p className="m-0 max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
          Visit <Link to="/about-us">About Us</Link> for the full V2 profile.
        </p>
      </section>
    </main>
  );
}
