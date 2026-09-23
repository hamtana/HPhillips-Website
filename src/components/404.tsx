import { Link } from "@tanstack/react-router";

export default function NotFound() {
  return (
    <main className="page-wrap flex min-h-[70vh] items-center justify-center py-20">
      <div className="island-shell tilt-card rise-in relative w-full max-w-lg rounded-2xl px-8 py-12 text-center sm:px-12">
        <p className="island-kicker mb-3">Page not Found</p>

        <h1 className="display-title text-6xl font-800 leading-none sm:text-7xl">
          404
        </h1>

        <h2 className="mt-4 text-xl font-semibold sm:text-2xl">
          This page does not exist
        </h2>

        <p className="mt-3 text-sm text-[var(--sea-ink-soft)] sm:text-base">
          We couldn&apos;t find the page you were looking for. It may have been
          moved, renamed, or never existed.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="nav-link is-active inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-[var(--chip-bg)] px-6 py-2.5 text-sm font-medium no-underline"
          >
            Back to home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="nav-link inline-flex items-center justify-center rounded-full border border-transparent px-6 py-2.5 text-sm font-medium"
          >
            Go back
          </button>
        </div>
      </div>
    </main>
  );
}
