import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact Us | Phillips Music and Tech" },
      {
        name: "description",
        content:
          "Contact Phillips Music and Tech for software development, automation, live sound, and audio production enquiries.",
      },
      {
        property: "og:title",
        content: "Contact Us | Phillips Music and Tech",
      },
      {
        property: "og:description",
        content:
          "Get in touch to discuss your project requirements and collaboration opportunities.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://phillipsmusictech.co.nz/contact-us",
      },
      { property: "og:image", content: "/logo/Logo-V3.png" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Contact Us | Phillips Music and Tech",
      },
      {
        name: "twitter:description",
        content: "Reach out for software, sound, and production services.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://phillipsmusictech.co.nz/contact-us",
      },
    ],
  }),
  component: ContactUsPage,
});

type SubmitState = "idle" | "submitting" | "success" | "error";

function ContactUsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SubmitState>("idle");
  const [feedback, setFeedback] = useState("");

  const canSubmit = useMemo(() => {
    return (
      name.trim().length > 1 &&
      email.trim().length > 3 &&
      message.trim().length > 8
    );
  }, [email, message, name]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit || status === "submitting") {
      return;
    }

    setStatus("submitting");
    setFeedback("Sending your message...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message || "Message delivery failed");
      }

      setStatus("success");
      setFeedback(payload.message || "Message sent successfully");

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("error");
      const errorMessage =
        error instanceof Error
          ? error.message
          : "I couldn’t send your message right now. Please try again in a moment.";

      setFeedback(errorMessage);
    }
  }

  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rise-in rounded-[1.6rem] p-6 sm:p-8">
        <p className="island-kicker mb-2">Contact Us</p>
        <h1 className="display-title mb-4 text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
          Let&apos;s talk about your next project.
        </h1>
        <p className="max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I&apos;m always open to discussing software, live sound, and
          production opportunities.
        </p>
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-[1.45fr_1fr]">
        <form
          onSubmit={onSubmit}
          className="island-shell tilt-card rounded-2xl p-5 sm:p-6"
        >
          <div className="grid gap-4">
            <label className="grid gap-1 text-sm font-semibold text-[var(--sea-ink)]">
              Name
              <input
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-2 text-sm text-[var(--sea-ink)] outline-none ring-0 focus:border-[var(--lagoon-deep)]"
                placeholder="Your name"
              />
            </label>

            <label className="grid gap-1 text-sm font-semibold text-[var(--sea-ink)]">
              Email
              <input
                required
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-2 text-sm text-[var(--sea-ink)] outline-none ring-0 focus:border-[var(--lagoon-deep)]"
                placeholder="you@domain.com"
              />
            </label>

            <label className="grid gap-1 text-sm font-semibold text-[var(--sea-ink)]">
              Message
              <textarea
                required
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={6}
                className="rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-2 text-sm text-[var(--sea-ink)] outline-none ring-0 focus:border-[var(--lagoon-deep)]"
                placeholder="Tell me about your project, timeline, and goals."
              />
            </label>

            <button
              type="submit"
              disabled={!canSubmit || status === "submitting"}
              className="mt-2 w-fit rounded-full border border-[rgba(50,143,151,0.35)] bg-[rgba(79,184,178,0.16)] px-5 py-2.5 text-sm font-semibold text-[var(--lagoon-deep)] transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.24)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        <aside className="island-shell tilt-card rounded-2xl p-5 sm:p-6">
          <h2 className="mb-2 text-lg font-semibold text-[var(--sea-ink)]">
            Contact Notes
          </h2>
          <p className="mb-4 text-sm text-[var(--sea-ink-soft)]">
            You can also email directly at hamish@phillipsmusictech.co.nz.
          </p>
          <p className="mb-2 text-sm text-[var(--sea-ink-soft)]">
            Location: Wellington, New Zealand
          </p>
          <p className="mb-4 text-sm text-[var(--sea-ink-soft)]">
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/hamish-phillips-330299306/"
              target="_blank"
              rel="noreferrer"
              className="ml-2 nav-link"
            >
              hamish-phillips
            </a>
          </p>
          <p
            role="status"
            className={`m-0 rounded-xl border px-3 py-2 text-sm ${
              status === "success"
                ? "border-[rgba(47,106,74,0.3)] bg-[rgba(47,106,74,0.12)] text-[var(--palm)]"
                : status === "error"
                  ? "border-[rgba(255,196,196,0.34)] bg-[rgba(111,28,28,0.9)] text-[#fff5f5]"
                  : "border-[var(--line)] bg-[var(--surface-strong)] text-[var(--sea-ink-soft)]"
            }`}
          >
            {feedback || "Fill in the form and submit to send a message."}
          </p>
        </aside>
      </section>
    </main>
  );
}
