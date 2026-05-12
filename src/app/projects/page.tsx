import type { Metadata } from "next";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "iOS and Android apps by Eighteen1 Studios — Byde, Car Sounds, Car Quiz, Motorcycle Sounds, and PuzzleWord.",
};

const projects = [
  {
    title: "Car Sounds",
    icon: "/images/apps/car-sounds.png",
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
    icon: "/images/apps/car-quiz.png",
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
    icon: "/images/apps/motorcycle-sounds.png",
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
  {
    title: "PuzzleWord",
    icon: "/images/apps/puzzleword.webp",
    description:
      "PuzzleWord is an addictive word association game where you connect four clues to uncover a common word. With nine diverse categories, competitive leaderboards, achievements, and cross-device progress syncing, it's the perfect brain-training challenge for quiz lovers of all ages.",
    storeLinks: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.eighteen1.puzzleword",
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/gr/app/puzzleword-word-quiz/id6740641366",
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
          <FeaturedProjectCard
            title="Byde"
            tagline="Smart closet for men"
            description="Byde is a wardrobe intelligence app built for men. It learns your clothes, reads the weather, understands your plans, and builds you a complete outfit from pieces you actually own — ready in seconds. Plan your week, pack for trips with a day-by-day outfit schedule, discover closet analytics, and gradually refine your personal style."
            icon="/images/apps/byde-icon.webp"
            screenshot="/images/apps/byde-screenshot.png"
            appStoreUrl="https://apps.apple.com/app/id6761620791"
            websiteUrl="bydeapp.de"
          />

          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
