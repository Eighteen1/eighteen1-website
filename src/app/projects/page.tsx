import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "iOS and Android apps by Eighteen1 Studios — Car Sounds, Car Quiz, and Motorcycle Sounds.",
};

const projects = [
  {
    title: "Car Sounds",
    highlight: "3 M+ Downloads",
    description:
      "With over 3 million downloads, Car Sounds is not only our most successful app but also one of our very first to ever be published. This app is part of our Car Cult brand and is a must-have for every car lover who enjoys the sound of powerful and special car engines.",
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
    highlight: "Multiplayer",
    description:
      "This quiz app is a must-have for car enthusiasts of all ages! It features six engaging and challenging single-player quiz modes plus an exciting multiplayer mode, allowing you to compete with friends or players from around the globe.",
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
    description:
      "Following the success of our Car Sounds App and numerous user requests, we created the Motorcycle Sounds App. Now, users can enjoy the best motorcycle sounds right from their pockets.",
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

export default function ProjectsPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          Portfolio
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Our Projects
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          All our iOS and Android apps currently available for download. Apps
          developed for clients are not included.
        </p>

        <div className="mt-14 grid gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
