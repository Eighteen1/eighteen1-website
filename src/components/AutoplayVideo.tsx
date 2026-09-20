"use client";

import { useEffect, useRef } from "react";

interface AutoplayVideoProps {
  src: string;
  className?: string;
}

export default function AutoplayVideo({ src, className }: AutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay may be blocked until user interaction; ignore.
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      controls
      muted
      loop
      playsInline
      preload="metadata"
      className={className}
    >
      Your browser does not support the video tag.
    </video>
  );
}
