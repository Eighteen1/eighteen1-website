import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Eighteen1 Studios.",
};

export default function PrivacyPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Privacy Policy
        </h1>
        <div className="prose-invert mt-10 space-y-6 text-sm leading-relaxed text-muted">
          {/* Replace the content below with your actual privacy policy */}
          <p>
            This privacy policy explains how Eighteen1 Studios collects, uses,
            and protects your personal data when you use our website and
            applications.
          </p>
          <p className="rounded-lg border border-border bg-surface p-4 text-xs text-muted">
            Placeholder — paste your full privacy policy text here.
          </p>
        </div>
      </div>
    </section>
  );
}
