import { useState } from "react";
import { Link } from "@tanstack/react-router";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] px-4 backdrop-blur-lg">
      <nav className="page-wrap flex flex-wrap items-center gap-x-3 gap-y-2 py-3 sm:py-4">
        <h2 className="m-0 flex-shrink-0 text-base font-semibold tracking-tight">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3 py-1.5 text-sm text-[var(--sea-ink)] no-underline shadow-[0_8px_24px_rgba(22,77,130,0.3)] sm:px-4 sm:py-2"
          >
            <img
              src="/logo/Logo-V3.png"
              alt="Phillips Music and Tech logo"
              className="h-5 w-5 rounded"
            />
            Phillips Music and Tech
          </Link>
        </h2>

        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--chip-line)] bg-[var(--chip-bg)] text-[var(--sea-ink)] transition hover:bg-[var(--link-bg-hover)] sm:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {isMobileMenuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        <div
          id="mobile-nav"
          className={`order-3 w-full text-sm font-semibold ${
            isMobileMenuOpen ? "block" : "hidden"
          } sm:order-none sm:block sm:w-auto`}
        >
          <div className="mt-1 flex flex-col gap-y-2 rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-4 sm:mt-0 sm:flex-row sm:items-center sm:gap-x-4 sm:gap-y-1 sm:border-0 sm:bg-transparent sm:p-0 sm:pb-0">
            <Link
              to="/"
              className="nav-link"
              activeProps={{ className: "nav-link is-active" }}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="nav-link"
              activeProps={{ className: "nav-link is-active" }}
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
            <Link
              to="/solutions"
              className="nav-link"
              activeProps={{ className: "nav-link is-active" }}
              onClick={closeMobileMenu}
            >
              Solutions
            </Link>
            <Link
              to="/projects"
              className="nav-link"
              activeProps={{ className: "nav-link is-active" }}
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
            <Link
              to="/music"
              className="nav-link"
              activeProps={{ className: "nav-link is-active" }}
              onClick={closeMobileMenu}
            >
              Music
            </Link>
            <Link
              to="/contact-us"
              className="nav-link"
              activeProps={{ className: "nav-link is-active" }}
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
