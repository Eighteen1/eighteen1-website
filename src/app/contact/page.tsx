import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Eighteen1 Studios.",
};

export default function ContactPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-14 lg:grid-cols-2">
          {/* Info */}
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Get in Touch
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              You are interested in doing business with us or have open
              questions? Do not hesitate to reach out.
            </p>

            <div className="mt-10 space-y-4 text-sm text-muted">
              <div>
                <p className="font-medium text-foreground">Address</p>
                <p>Tiefenthaler Stra&szlig;e 32A</p>
                <p>26810 Westoverledingen, Germany</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Email</p>
                <a
                  href="mailto:info@eighteen1.com"
                  className="text-accent hover:underline"
                >
                  info@eighteen1.com
                </a>
                <br />
                <a
                  href="mailto:eighteen1.studios@gmail.com"
                  className="text-accent hover:underline"
                >
                  eighteen1.studios@gmail.com
                </a>
              </div>
              <div>
                <p className="font-medium text-foreground">Phone</p>
                <p>+49 173 5822770</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border bg-surface p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
