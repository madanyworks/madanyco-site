/**
 * Video manifest. All files live in /public/videos/.
 * Posters live in /public/videos/posters/.
 *
 * Compressed from original .mov screen recordings, H.264, CRF 26, faststart.
 */

export type VideoOrientation = "landscape" | "portrait" | "square";

export type Video = {
  src: string;
  poster: string;
  orientation: VideoOrientation;
  width: number;
  height: number;
  durationSec: number;
};

const v = (
  file: string,
  width: number,
  height: number,
  durationSec: number
): Video => {
  const orientation: VideoOrientation =
    width > height
      ? "landscape"
      : height > width
      ? "portrait"
      : "square";
  return {
    src: `/videos/${file}.mp4`,
    poster: `/videos/posters/${file}.jpg`,
    orientation,
    width,
    height,
    durationSec,
  };
};

export const HERO_VIDEOS = {
  reel: v("hero-1", 1280, 704, 37),
  loop: v("hero-2", 1044, 868, 9),
};

// All work-example videos.
export const WORK_VIDEOS: Video[] = [
  v("work-01", 1280, 708, 36),
  v("work-02", 1280, 714, 61),
  v("work-03", 722, 1280, 43),
  v("work-04", 718, 1280, 43),
  v("work-05", 750, 1280, 22),
  v("work-06", 1280, 706, 86),
  v("work-07", 1280, 708, 56),
  v("work-08", 724, 1086, 29),
  v("work-09", 758, 1058, 13),
  v("work-10", 754, 1088, 27),
  v("work-11", 760, 1048, 9),
  v("work-12", 760, 1058, 22),
  v("work-13", 748, 1058, 21),
  v("work-14", 762, 1094, 10),
  v("work-15", 754, 1042, 55),
];

export const BRAND_FILMS = WORK_VIDEOS.filter(
  (x) => x.orientation === "landscape"
);

export const REELS = WORK_VIDEOS.filter(
  (x) => x.orientation === "portrait" || x.orientation === "square"
);
