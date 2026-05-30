import { cn } from "@/lib/cn";

type MarqueeProps = {
  items: string[];
  className?: string;
  textClass?: string;
  separator?: string;
  reverse?: boolean;
  speed?: "slow" | "default" | "fast";
};

const speedMap = {
  slow: "animate-marquee-slow",
  default: "animate-marquee",
  fast: "animate-marquee-fast",
} as const;

export default function Marquee({
  items,
  className,
  textClass = "font-display text-4xl sm:text-6xl tracking-tightest",
  separator = "·",
  reverse = false,
  speed = "default",
}: MarqueeProps) {
  // Render the list twice for a seamless infinite loop.
  const loop = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden w-full select-none",
        className
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          "marquee-track gap-12 sm:gap-16",
          speedMap[speed],
          reverse && "[animation-direction:reverse]"
        )}
      >
        {loop.map((item, i) => (
          <span
            key={i}
            className={cn(
              "shrink-0 inline-flex items-center gap-12 sm:gap-16 whitespace-nowrap text-bone",
              textClass
            )}
          >
            {item}
            <span className="text-blush opacity-70">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
