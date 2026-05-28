/**
 * Image URLs pulled from the existing madanyco.com Squarespace CDN.
 * Centralised here so we can swap or re-host later without hunting files.
 */

const CDN = "https://images.squarespace-cdn.com/content/v1/661a7738fccca74e60de4f1a";

// add ?format=<width>w on read sites — Squarespace accepts any width up to ~2500
export const img = (path: string, width = 1500) =>
  `${CDN}/${path}?format=${width}w`;

export const IMAGES = {
  // Brand
  logoDark: img("c44c566c-85ba-4be8-8a88-152941185993/Madanyco+logo..png"),
  logoLight: img("ee510c12-bce6-405a-be78-d9985225993b/Madanyco+logo..png"),
  funnel: img(
    "2a5562ae-ba59-4d01-b4d9-020ceeb83a78/madanyco_funnel_redesign_transparent.png"
  ),

  // Hero / mood
  aboutHero: img(
    "1777641411878-TYNJC483RKBPC3KWXAFW/unsplash-image-QckxruozjRg.jpg"
  ),
  coachingHero: img(
    "1748680412745-HFF6BSYSNFDPOQD7MAEE/unsplash-image-FwF_fKj5tBo.jpg"
  ),

  // Homepage social cards
  social1: img("1751987629444-MDS40G3WPPKH739N1641/image-asset.jpeg"),
  social2: img("1743425717320-33AZLBTCZ1LYTNNMGZT7/image-asset.jpeg"),
  social3: img("1743345640031-3JV675DT8RNGUX9R9I5K/image-asset.jpeg"),

  // Work / portfolio category visuals
  workSocialMgmt: img("e7e4739b-605f-4807-8453-2fe0338ada0f/IMG_1721.jpeg"),
  workVideo: img("e2d92206-1be9-479f-8629-a44b1af9d0c5/IMG_9319.jpeg"),
  workSMA: img("e093a50b-0cfd-4ae3-8b99-e7f39502e212/IMG_1735.jpeg"),
  workWebDev: img("164b00d4-11fc-4d83-b8df-ce80fb7c4200/IMG_1889.jpeg"),

  // Service hero / supporting
  smmHero: img("2c76d13a-dd7c-4421-a10d-1c176529f20a/IMG_8932.jpeg"),
  tiktok1: img("b412b46d-fd43-4c57-81e2-9641d8153d1c/IMG_1730.jpeg"),
  tiktok2: img("b8b854be-19fd-42cf-8dee-1a7a5319ca40/IMG_1731.jpeg"),
  googleAds1: img("2c36e509-2495-4dc2-9bf6-0217a41d6c2d/IMG_1739.jpeg"),
  googleAds2: img("3c1fd20b-2bac-4498-b739-82cd0fe91054/IMG_1757.jpeg"),
};
