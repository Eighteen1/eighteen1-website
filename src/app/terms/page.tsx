import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Eighteen1 Studios.",
};

export default function TermsPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Terms of Service
        </h1>
        <div className="prose-invert mt-10 space-y-6 text-sm leading-relaxed text-muted">
          {/* Replace the content below with your actual terms of service */}
          <p>
            These terms govern your use of the Eighteen1 Studios website and
            applications.
          </p>
          <p className="rounded-lg border border-border bg-surface p-4 text-xs text-muted">
            Placeholder — paste your full terms of service text here.
          </p>
        </div>
      </div>
    </section>
  );
}
