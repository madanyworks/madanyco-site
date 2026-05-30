"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Video } from "@/lib/videos";

type VideoPlayerProps = {
  video: Video;
  className?: string;
  /** When true, video autoplays muted on hover (without loading until then). */
  hoverPreview?: boolean;
};

/**
 * Click-to-play video card. Nothing loads (no video bytes downloaded) until the
 * user hits play, the poster is just a static JPEG, so page weight stays light
 * even with many videos in a gallery.
 */
export default function VideoPlayer({
  video,
  className,
  hoverPreview = false,
}: VideoPlayerProps) {
  const [activated, setActivated] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  const aspectClass =
    video.orientation === "portrait"
      ? "aspect-[9/16]"
      : video.orientation === "square"
      ? "aspect-square"
      : "aspect-video";

  function handleActivate() {
    setActivated(true);
    // Slight delay so the <video> mounts before we hit play
    requestAnimationFrame(() => {
      ref.current?.play().catch(() => {
        /* user-gesture errors handled by native controls */
      });
    });
  }

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-ink-700 border hairline border-bone/10",
        aspectClass,
        className
      )}
    >
      {!activated ? (
        <button
          type="button"
          onClick={handleActivate}
          aria-label="Play video"
          className="absolute inset-0 block w-full h-full"
        >
          <Image
            src={video.poster}
            alt=""
            fill
            sizes={
              video.orientation === "portrait"
                ? "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 22vw"
                : "(max-width: 1024px) 100vw, 50vw"
            }
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-hot text-ink transition group-hover:scale-110 group-hover:bg-blush shadow-2xl">
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="currentColor"
                aria-hidden="true"
                className="translate-x-[2px]"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </div>
          {video.durationSec > 0 && (
            <div className="absolute bottom-3 right-3 text-[10px] uppercase tracking-[0.2em] text-bone bg-ink/70 backdrop-blur px-2 py-1 rounded">
              {formatDuration(video.durationSec)}
            </div>
          )}
        </button>
      ) : (
        <video
          ref={ref}
          src={video.src}
          poster={video.poster}
          controls
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover bg-ink"
        />
      )}
    </div>
  );
}

function formatDuration(s: number) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${sec}`;
}
