import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="flex min-h-[85vh] flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          App Development Studio
        </p>
        <h1 className="max-w-3xl text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Welcome to{" "}
          <span className="text-accent">Eighteen1&nbsp;Studios</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          We build high-quality mobile applications for Android and iOS. From
          concept to launch, we craft experiences people love.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/projects"
            className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Our Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-border px-6 py-3 text-sm font-semibold text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* What We Do */}
      <section className="border-t border-border bg-surface px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold sm:text-4xl">What We Do</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Our journey started in 2016 in Germany when we published our first
            Android app under our former company name C.Mrg Studios. Since then
            our company evolved and eventually became what it is today:
            Eighteen1&nbsp;Studios.
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background p-8">
              <h3 className="text-xl font-bold">App Development</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                We focus on high-quality app development for Android and iOS
                phones. Although our main focus lays in creating our own
                products, we are also open to help you with the development of
                your app.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-8">
              <h3 className="text-xl font-bold">Car Cult Brand</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Our Car Cult brand caters to car enthusiasts with popular apps
                like Car Sounds, Car Quiz, and Motorcycle Sounds, alongside a
                growing YouTube and Instagram presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Interested in working with us?
          </h2>
          <p className="mt-4 text-lg text-muted">
            Whether you have a project idea or just want to say hello, we&apos;d
            love to hear from you.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Imprint */}
      <section className="border-t border-border bg-surface px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold">Imprint</h2>
          <div className="mt-6 space-y-1 text-sm text-muted">
            <p>Eighteen1 Studios</p>
            <p>Tiefenthaler Stra&szlig;e 32A</p>
            <p>26810 Westoverledingen, Germany</p>
            <p className="pt-3">Phone: +49 173 5822770</p>
            <p>
              Email:{" "}
              <a
                href="mailto:info@eighteen1.com"
                className="text-accent hover:underline"
              >
                info@eighteen1.com
              </a>
            </p>
            <p>
              Website:{" "}
              <a
                href="https://eighteen1.com"
                className="text-accent hover:underline"
              >
                eighteen1.com
              </a>
            </p>
            <p className="pt-3">Authorized Representative: Raphael Pappalardo</p>
          </div>
        </div>
      </section>
    </>
  );
}
