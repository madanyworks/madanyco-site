/**
 * Image URLs pulled from the existing madanyco.com Squarespace CDN.
 * Centralised here so we can swap or re-host later without hunting files.
 */

const CDN = "https://images.squarespace-cdn.com/content/v1/661a7738fccca74e60de4f1a";

// add ?format=<width>w on read sites, Squarespace accepts any width up to ~2500
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

  // Social Media Advertising, 6 campaign examples from /work-examples/social-media-advertising
  smaCampaign1: img("3d721a4c-7693-4ccc-896a-fcf147896d88/IMG_1737.jpeg"),
  smaCampaign2: img("e093a50b-0cfd-4ae3-8b99-e7f39502e212/IMG_1735.jpeg"),
  smaCampaign3: img("b412b46d-fd43-4c57-81e2-9641d8153d1c/IMG_1730.jpeg"),
  smaCampaign4: img("ce145104-0ab1-4516-acb2-d4bccca379f5/IMG_1736.jpeg"),
  smaCampaign5: img("a9236b39-03b8-4366-bf44-927c100173ee/IMG_1734.jpeg"),
  smaCampaign6: img("264e9338-c340-4c1d-99b2-db9bdcea4164/IMG_1733.jpeg"),

  // Website Development case studies (real projects, live URLs)
  webAvensksa: img("c5ac67d1-6aad-4f2a-b56f-d76109a28bda/IMG_1926.jpeg"),
  webTinyOM: img("f401acc5-4557-40cc-9642-dff8fc3ac672/IMG_1928.jpeg"),
  webEdamah: img("713304e9-9c26-4ada-aa73-d71eda798172/IMG_1927.jpeg"),
  webFoundry: img("c0bf7f85-da34-4077-ad57-9c8b92006b9a/IMG_1929.jpeg"),

  // Corporate Experience, 10 client logos from /corporateexperience
  ceSeissense: img("65e05314-f3e1-4fec-87ed-020304b292b3/IMG_2406.jpeg"),
  ceSnap: img("1713527565923-GXRNRM5YJQTWH3O3HB31/IMG_0443.png"),
  ceGenpact: img("1713688993189-K6Y6K8HLDK1HDIPN8NO3/IMG_6919.png"),
  ceHype: img("1713180867694-6FRC0NIBZZUOD4A9QBS4/IMG_0447.png"),
  ceBuffalo: img("1713704564666-4DTE83MHBKATIXM7HM4M/IMG_0444.png"),
  ceLongeBlack: img("1713705094837-JHQPFROBYIZS3ILMDUNT/IMG_0463.png"),
  ceRomaPizza: img("1713880112007-VD87BJR3M46FU62MEYHW/IMG_0446.jpeg"),
  ceWillnWilly: img("1713709994674-TNK2WPQEL90K6ULROLFS/willnwilly+logo.png"),
  ceUGO: img("1713701043357-XFIOU1AEG11Z2ZMQV1WH/IMG_0486.jpeg"),
  ceHAC: img("1713181099835-ZZU8B1IQG3IGMIXB2G7Z/JPG-03.jpg"),
};
