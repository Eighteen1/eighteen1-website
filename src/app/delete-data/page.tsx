import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete User Data",
  description: "Request deletion of your user data from Eighteen1 Studios.",
};

export default function DeleteDataPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Delete User Data
        </h1>
        <div className="prose-invert mt-10 space-y-6 text-sm leading-relaxed text-muted">
          {/* Replace the content below with your actual data deletion instructions */}
          <p>
            If you would like to request the deletion of your personal data,
            please contact us at{" "}
            <a
              href="mailto:info@eighteen1.com"
              className="text-accent hover:underline"
            >
              info@eighteen1.com
            </a>{" "}
            with the subject line &quot;Data Deletion Request&quot;.
          </p>
          <p className="rounded-lg border border-border bg-surface p-4 text-xs text-muted">
            Placeholder — paste your full data deletion policy text here.
          </p>
        </div>
      </div>
    </section>
  );
}
