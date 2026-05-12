import type { Metadata } from "next";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Car Cult",
  description:
    "Car Cult — a brand for car enthusiasts. Apps, YouTube, and community.",
};

const apps = [
  {
    title: "Car Sounds",
    icon: "/images/apps/car-sounds.png",
    description:
      "In times of engine downsizing and electric cars, this app keeps our ears supplied with a big and diverse collection of the world's best sounding cars.",
    storeLinks: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=cashmakerz.supercarsoundboard",
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/de/app/car-sounds/id1529805612?l=en-GB",
      },
    ],
  },
  {
    title: "Car Quiz",
    icon: "/images/apps/car-quiz.png",
    description:
      "Car Quiz offers six fun and challenging single-player quiz modes, alongside a state-of-the-art Multiplayer mode all centered around the automobile industry.",
    storeLinks: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.cmrg.cmrg.carquiz",
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/de/app/car-quiz/id1554956847?l=en-GB",
      },
    ],
  },
  {
    title: "Motorcycle Sounds",
    icon: "/images/apps/motorcycle-sounds.png",
    description:
      "After the success of our Car Sounds app, we decided to publish Motorcycle Sounds — our first app targeted at motorcycle enthusiasts.",
    storeLinks: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.eighteen1.motorcyclesounds",
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/de/app/motorcycle-sounds/id6443509741?l=en-GB",
      },
    ],
  },
];

export default function CarCultPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <Image
            src="/images/car-cult-logo.png"
            alt="Car Cult"
            width={120}
            height={120}
            className="mx-auto mb-8 rounded-3xl"
          />
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
            A Brand for Car Enthusiasts
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Car Cult
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            At Car Cult, we built a brand tailored for car enthusiasts. While app
            development is our primary focus, Car Cult extends beyond apps. Our
            brand features a YouTube channel designed to foster a vibrant community of car lovers.
          </p>
        </div>
      </section>

      {/* Apps */}
      <section className="border-t border-border bg-surface px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-3xl font-bold">Apps</h2>
          <div className="grid gap-8">
            {apps.map((app) => (
              <ProjectCard key={app.title} {...app} />
            ))}
          </div>
        </div>
      </section>

      {/* YouTube & Instagram */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-8">
            <h3 className="text-xl font-bold">Car Cult on YouTube</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              We launched a YouTube channel to connect with our community through
              both long and short-form videos. Though the channel is still young,
              we are optimistic about delivering more entertaining content for
              car enthusiasts in the future.
            </p>
            <a
              href="https://www.youtube.com/@CarCult"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm font-medium text-accent hover:underline"
            >
              Visit Channel &rarr;
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
