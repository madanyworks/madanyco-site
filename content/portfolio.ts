/**
 * Corporate Experience case studies — 10 brands the founder has shipped for.
 * Source: madanyco.com/corporateexperience/[slug] (scraped 2026-05).
 */
import { IMAGES, img } from "@/lib/images";

export type Contribution = {
  title: string;
  body: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  role?: string;
  legalName?: string;
  summary: string;
  contributions: Contribution[];
  logo: string;
  gallery: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  // ───────────────────────────── 01. Seissense
  {
    slug: "seissense",
    name: "Seissense",
    role: "Group Marketing Manager (acting Head of Marketing)",
    summary:
      "UK-based lounge and active-wear brand built with intent. Sustainably-sourced materials manufactured in a B Corp-certified factory. Marketing run across EMEA + AMER.",
    logo: IMAGES.ceSeissense,
    contributions: [
      {
        title: "Marketing Strategy & Plan",
        body: "Crafted and implemented a marketing strategy aligned with teams across EMEA & AMER. Directed quarterly campaigns communicating brand USPs through paid media, UGC, email (Klaviyo), social (Sprout Social), influencers, affiliate (Awin), Shopify Plus e-commerce, SEO/GEO (Semrush), retail (Go-sport Dubai), and gym partnerships (Viya Fit, ROAR London).",
      },
      {
        title: "Media Planning & Performance",
        body: "Built a full-funnel paid media architecture across Meta, TikTok, and Google. Scaled campaigns using profit work-back frameworks, reducing acquisition volatility. Integrated paid media with e-commerce CRO (bundling, AOV optimisation, PDP refinement) across UK, US, and GCC.",
      },
      {
        title: "PR & Communications",
        body: "Secured Tier 1 & Tier 2 media placements contributing to an estimated 30–50% uplift in branded search volume during campaign peaks. Developed founder-led storytelling and product education around sustainability.",
      },
      {
        title: "Email & Lifecycle (Klaviyo)",
        body: "Built welcome, abandoned-cart, post-purchase, sunset, browse-abandoned, and retention flows contributing 20–35% of DTC revenue. Open rates 35–45%, CTR 6–10%. Grew Klaviyo-attributed revenue from 6–8% to 18–22%. Strengthened LTV:CAC from 1.6× to 4×.",
      },
      {
        title: "Social Media Management",
        body: "Established content pillars across Instagram, Facebook, TikTok, Snapchat, Pinterest, and LinkedIn. Achieved 5% engagement rates and millions in reach across 40% of posted content.",
      },
      {
        title: "Creative, UGC & Brand Architecture",
        body: "Built a UGC-driven content engine producing 60–90 monthly performance-ready assets. Scaled influencer outreach to 15–20 recurring creators per month — increasing social content velocity 3×. Lifted paid creative CTR from 1% to 5%+.",
      },
      {
        title: "Brand Partnerships",
        body: "Led consignment partnership between ROAR Gyms (London & Dubai) and Seissense. Co-branded email/SMS campaigns and equipped coaches with branded shirts and yoga mats.",
      },
      {
        title: "Event Marketing & Sponsorship",
        body: "Won 1st place at GoSports Battle of The Brands (Dubai Active 2025). Secured fashion events and AR sponsorships — 30% brand exposure increase, 15% post-event sales conversion uplift. Platinum sponsor at Storm Games (Al Fujairah).",
      },
      {
        title: "E-commerce Marketing",
        body: "Delivered 60% increase in e-commerce sales across BFCM & Xmas season. Bundle optimisation drove a 60% AOV uplift in a single quarter (£90 → £150).",
      },
      {
        title: "Influencer & Affiliate (Awin)",
        body: "Campaigns reached 20M+ viewers — 60% engagement increase, 40% follower growth, 30% increase in code usage at checkout. Affiliate programme contributed 20% of total online sales.",
      },
    ],
    gallery: [
      img("937c29e7-8a21-437a-9db7-bd9caeb2a473/SEISSENSE_DUBAI_ACTIVE-42.jpg"),
      img("989fb04a-54f2-4ace-b1ad-ce8ed17f09a9/Image+4.jpg"),
      img("338c886c-44e5-4f82-854b-ebab9aaab7b0/Benuit+Sports+Cap.jpg"),
      img("7d40633e-41c6-4bc2-8a59-e64dad91268a/FAD03163.jpeg"),
      img("2fd0e43b-677f-48d6-a732-bb929bf75ea2/IMG_0721.jpg"),
      img("04f38158-15bd-464d-886f-3aeaf31dda20/SEISSENSExSTORMGAMES-145.jpg"),
      img("55fdf5fe-6639-4450-b66d-e53c5d34ad9d/SEISSENSEXROAR-50.jpg"),
      img("43749820-04be-42cb-8aca-c20dccaded7a/CELEBRATE+YOUR+SHAPE_128.jpg"),
      img("eedf42b1-9c8a-478f-8685-5176d0ecc959/5eccb71c-f135-4b48-952e-265b9eda7903.jpeg"),
    ],
  },

  // ───────────────────────────── 02. Snap Inc.
  {
    slug: "snap-inc",
    name: "Snap Inc. (Snapchat)",
    role: "SMB Account-Based Marketing — EMEA & North Africa",
    summary:
      "Boosted SMB account-based marketing across Europe, Middle East, and North Africa — a portfolio of 37,500+ small and medium businesses spanning MENA and North America.",
    logo: IMAGES.ceSnap,
    contributions: [
      {
        title: "Strategic Marketing",
        body: "Crafted and implemented digital marketing strategies that enhanced market penetration for 7,500+ MENA businesses, increasing market share by 25% on average and growing Snapchat for Business MENA revenue from $22M to $90M in three quarters.",
      },
      {
        title: "Media Planning",
        body: "Led campaigns that increased digital engagement by 40% and doubled online customer engagement — boosting web traffic by 35% within six months.",
      },
      {
        title: "CRM & Automation (Salesforce)",
        body: "Implemented Salesforce strategies achieving 45% email open rates, 10% CTRs, and a 25% lead conversion increase.",
      },
      {
        title: "Mobile Marketing",
        body: "Drove 50%+ mobile engagement increases and 100,000 app downloads in the first quarter.",
      },
      {
        title: "Creative & Content",
        body: "Produced content resulting in 50% social engagement increases and 20% brand loyalty improvements.",
      },
      {
        title: "Analytics",
        body: "Market segmentation work reduced customer acquisition costs by 60%.",
      },
      {
        title: "Events",
        body: "Managed corporate events attracting 5,000+ attendees; secured sponsorships yielding 30% brand exposure increases.",
      },
      {
        title: "E-commerce",
        body: "Reduced cart abandonment by 18%, increased checkout conversions by 22%, and generated 30% sales increases.",
      },
      {
        title: "Influencer Marketing",
        body: "Orchestrated campaigns reaching 10M viewers — 25% engagement and 20% follower growth.",
      },
    ],
    gallery: [
      img("500c1091-7d08-42fd-bae3-8d790491b1b3/IMG_0569.jpeg"),
      img("3a6ec208-30e3-4cd0-99b7-b790a5e6e651/FullSizeRender.jpeg"),
      img("81717585-3992-4877-918e-92675688752d/IMG_3023.jpeg"),
      img("f8e4aff3-9fa2-4c30-a4a2-0eb8f5a6ca7e/IMG_2313.jpeg"),
      img("867c3417-6360-4161-bcd3-e210db8c2ae6/1cc82845-27c3-497c-97d2-0a410576bec7.jpeg"),
      img("d98cc158-f72e-4636-9ab8-de420fd8dc5d/IMG_0844.jpeg"),
      img("c04e9bde-7ba7-47ec-b98f-605c7091f0a5/c419d276-0887-4f96-908d-38ab3734cefe.jpeg"),
      img("e8aa0d10-cb68-4059-ae69-fceab8ba0f59/IMG_0114.jpeg"),
      img("5c074d46-cf03-48ef-8505-3401fc63f6e5/IMG_0938.jpeg"),
      img("ff1c8652-419c-4796-8a29-d3142f186348/IMG_3029.jpeg"),
      img("8a143344-a4b3-4ee9-848f-065bde7a0345/ccc97907-8a7e-4d4c-a398-075a57e6219e.jpeg"),
    ],
  },

  // ───────────────────────────── 03. Genpact EMEA
  {
    slug: "genpact-emea",
    name: "Genpact EMEA",
    summary:
      "Marketing leadership for Genpact's EMEA digital transformation services portfolio — strategy, content, demand gen, and high-profile B2B partnerships.",
    logo: IMAGES.ceGenpact,
    contributions: [
      {
        title: "Digital Strategic Marketing",
        body: "Cooperated strategies for Genpact digital-transformation services, resulting in a 20% YoY increase in client acquisition and a 30% improvement in employee retention. Executed go-to-market strategies 150% above projected engagement targets in the first round.",
      },
      {
        title: "Creative, UGC & Branding",
        body: "Managed rebranding for the Digital Marketing section and produced media content that doubled internal content engagement.",
      },
      {
        title: "Market Research & Analytics",
        body: "Conducted Egypt market analysis identifying digital-transformation trends and optimised marketing strategies — improving resonance accuracy and B2B campaign performance by 25%.",
      },
      {
        title: "Event Marketing & Sponsorship",
        body: "Coordinated flagship digital marketing programme with record attendance of 5,000+ industry professionals — a 50% increase from previous years.",
      },
      {
        title: "E-commerce",
        body: "Led strategy for online branded products and reduced churn by 15%.",
      },
      {
        title: "Influencer & Affiliate",
        body: "Influencer partnerships yielded a 60% increase in content reach. Affiliate programmes contributed to 70% of total service contracts signed.",
      },
      {
        title: "Media Planning & Buying",
        body: "SEO/SEM drove a 40% increase in organic search traffic globally and a 35% increase in lead generation.",
      },
      {
        title: "Digital PR",
        body: "Positioned Genpact as a thought leader — acquired Snapchat, GoDaddy, and Unilever accounts.",
      },
      {
        title: "Mobile Marketing",
        body: "70% increase in app downloads and a 40% increase in active mobile learners.",
      },
      {
        title: "Email Marketing",
        body: "55% open rate and 20% CTR.",
      },
      {
        title: "CRM",
        body: "Enhanced systems improving customer service efficiency by 35%.",
      },
    ],
    gallery: [
      img("1c425e25-8f3a-433a-abac-a008779e8c82/58ffccf4-c894-4f06-b8e1-917ad5a1f0ca.jpeg"),
      img("be53093a-8f22-48b0-8a65-6970fd18d79a/4207558a-b364-4222-a189-8629c3bcc26d.jpeg"),
      img("390ad58e-6ebf-4be9-911c-9ae65a911bab/f2407f62-187f-494c-b740-5005fff083ca.jpeg"),
      img("18bf872d-a4ae-4e0d-a885-de4d5db7c57b/IMG_1990.jpeg"),
      img("11208736-60a6-4d64-8477-c9f31c924112/IMG_2986.png"),
      img("7bffd9b4-75e8-4391-8469-a8b281e0e45f/0c2f0cbf-c2cc-44d1-ac3f-141862eb275a.jpeg"),
      img("be8307c0-36d3-4ea6-be0b-c8e00ed6b196/IMG_6327.jpeg"),
      img("e996f985-80e9-41c8-a215-dce13fe8de28/IMG_0042.jpeg"),
      img("2500f219-ee94-4881-98b0-1a1866a9d6ed/IMG_1059.jpeg"),
      img("2ecae87f-8204-49c1-a0db-fd72cc6f0fde/a2ed57e9-dc10-4fc3-b2cd-2fdbe8a3ed75.jpeg"),
    ],
  },

  // ───────────────────────────── 04. Hype Energy Drinks
  {
    slug: "hype-energy",
    name: "Hype Energy Drinks",
    summary:
      "Global energy beverage brand (founded 1994 by Formula One driver Bertrand Gachot). Marketing leadership across Tunisia, Morocco, and Egypt — strategy, GTM, and product launches.",
    logo: IMAGES.ceHype,
    contributions: [
      {
        title: "Digital Strategic Marketing",
        body: "Engineered market entry strategy for new products in Tunisia, Morocco, Egypt — 25% market-share increase in year one. Executed turnaround strategy improving brand perception with a 40% sales increase in the fiscal year.",
      },
      {
        title: "Media Planning & Buying",
        body: "Led digital strategy with social and influencer partnerships — 50% engagement increase, 40% follower growth. Product SEO and content marketing drove 45% organic traffic increase.",
      },
      {
        title: "Creative, UGC & Branding",
        body: "Oversaw launch of two new products in Egypt: Protein Bars and Hype Mojito — 35% shelf-impact increase. Directed production of marketing collateral and digital content.",
      },
      {
        title: "PR & Communications",
        body: "Managed PR campaigns delivering 60% media coverage improvement. Coordinated crisis communication during product recalls.",
      },
      {
        title: "Market Research & Analytics",
        body: "Consumer behaviour analysis and segmentation drove a 30% campaign ROI increase. Data analytics and student brand ambassadors improved marketing efficiency by 25%.",
      },
      {
        title: "Email Marketing & Automation",
        body: "Segmented email strategy delivered 20% engagement increase and 25% conversion boost. Automated drip campaigns improved retention by 15%.",
      },
      {
        title: "Event Marketing & Sponsorship",
        body: "Promotional events and sampling campaigns drove 40% brand-awareness increase and 30% trial-rate increase. Managed sponsorships with sports and music partners.",
      },
      {
        title: "CRM",
        body: "Enhanced CRM initiatives lifting customer lifetime value by 20%. Loyalty programmes added 25% to repeat purchase rate.",
      },
      {
        title: "E-commerce",
        body: "Led online distribution — 50% direct online sales increase. Dynamic pricing and promotions drove 30% promotional-period uplift.",
      },
      {
        title: "Mobile Marketing",
        body: "Launched SMS marketing — 30% retail purchase increase. Mobile-exclusive promotions drove 20% aggregator transaction volume increase.",
      },
      {
        title: "Influencer & Affiliate",
        body: "Influencer programme reached 5M with 45% engagement-rate increase. Collaborations with Egyptian celebrities including rapper Abo El Anwar and Amir Eid (Cairokee).",
      },
    ],
    gallery: [
      img("26e1629d-20fc-452d-90ee-a69ea82b3886/IMG_0483.jpeg"),
      img("bb36cbbf-fdc5-49f2-adc1-48a99f7f4f66/IMG_0481.jpeg"),
      img("58961675-6265-4976-9e02-877f80ec3c8f/IMG_1422.jpeg"),
      img("61e4a84d-5b40-4f96-870c-07d987280981/IMG_3957.jpeg"),
      img("833b40ff-d501-4ee9-a8d4-8e536394e8f5/IMG_3958.jpeg"),
      img("b89459e4-581f-4665-9b81-1c8d01f80e04/IMG_3960.jpeg"),
      img("56e4751c-7640-4391-a4f8-b7b1b725f463/IMG_5840.jpeg"),
      img("4b7420f7-8309-47bc-9a4c-fe402bfae3b2/IMG_3963.jpeg"),
      img("a12089ae-8e0a-41c7-bee2-c0586c6832ca/IMG_3961.jpeg"),
      img("55816120-954e-437c-87d4-13a8560a7f48/6a2f3cfe-b83a-4512-8949-ad7ea679a99c.jpeg"),
      img("359728c1-fa96-445c-88cf-007a8d23a6ab/IMG_3959.jpeg"),
    ],
  },

  // ───────────────────────────── 05. Buffalo Burger
  {
    slug: "buffalo-burger",
    name: "Buffalo Burger",
    summary:
      "Prominent Egyptian fast-food chain established by Saal Invest in 2006. Comprehensive marketing across strategy, paid, PR, CRM, mobile, and brand.",
    logo: IMAGES.ceBuffalo,
    contributions: [
      {
        title: "Digital Strategic Marketing",
        body: "20% YoY sales increase and 15% customer-base growth. Launched 10 new franchise locations in a single fiscal year.",
      },
      {
        title: "Media Planning & Buying",
        body: "PPC and SEO drove 30% increase in online orders, 25% increase in website traffic, and 20% increase in aggregator sales.",
      },
      {
        title: "Public Relations",
        body: "50% increase in positive media coverage during crisis periods.",
      },
      {
        title: "Email Marketing",
        body: "40% open rate and 10% CTR.",
      },
      {
        title: "CRM",
        body: "20% increase in campaign conversion rates; 18% increase in customer retention.",
      },
      {
        title: "Mobile Marketing",
        body: "50,000+ app downloads and a 20% increase in mobile orders.",
      },
      {
        title: "Branding",
        body: "35% improvement in brand recognition.",
      },
      {
        title: "E-Commerce",
        body: "25% increase in online sales.",
      },
      {
        title: "Influencer Marketing",
        body: "30% increase in social media engagement.",
      },
    ],
    gallery: [
      img("fe99da12-2fc3-45d0-9460-36febaa0b5fe/DSC01849.jpg"),
      img("e400ee3b-f709-4174-a026-9cfda9622d9a/IMG_3406.jpeg"),
      img("691b0963-8e78-45ba-b78e-ff879ccf6433/IMG_3034.jpeg"),
      img("515778f6-3cb7-432f-af6e-e4c18f746890/IMG_3942.jpeg"),
      img("60271f78-a3e6-421b-a78d-fed01f554eec/IMG_3941.jpeg"),
      img("1abdb97c-a572-468c-9152-d0c7bcb9e7f2/IMG_0593.jpeg"),
      img("a82a7d5b-fc0a-414b-ae59-fd6df19474e7/IMG_4233.jpeg"),
      img("0ccd324f-5045-40fc-b240-70e1a820fbae/IMG_0532.jpeg"),
      img("d9feda3e-b13f-4d08-a0a9-8350721f4524/IMG_0533.jpeg"),
      img("6036cb0e-9690-4e48-aa5c-cffd42258a91/IMG_0596.jpeg"),
    ],
  },

  // ───────────────────────────── 06. LongeBlack
  {
    slug: "longeblack",
    name: "LongeBlack",
    summary:
      "Luxury business branding firm based in Cairo. Specialists in legacy-building and brand architecture for sophisticated B2B and high-net-worth clients.",
    logo: IMAGES.ceLongeBlack,
    contributions: [
      {
        title: "Digital Strategic Marketing",
        body: "20% increase in brand recognition and 15% increase in annual revenue. Introduced the firm to three new high-value industries — achieving 25% above expected sales targets within the first six months.",
      },
      {
        title: "Creative, UGC & Branding",
        body: "Directed rebranding yielding 50% improvement in brand advocacy. Enhanced premium positioning and increased consumer engagement.",
      },
      {
        title: "Market Research & Analytics",
        body: "Segmentation analysis and predictive analytics for trend forecasting — increased client retention by 15%.",
      },
      {
        title: "Event Marketing",
        body: "Organised exclusive events producing 30% increase in client acquisition and partnerships.",
      },
      {
        title: "E-commerce",
        body: "Improved conversion rates by 20% and attracted 25% increase in first-time luxury clients.",
      },
      {
        title: "Influencer & Affiliate",
        body: "50% increase in engagement on sponsored content; 30% increase in referred clients.",
      },
      {
        title: "Media Planning",
        body: "Lifted online engagement by 40% and organic search traffic by 35%.",
      },
      {
        title: "PR",
        body: "Secured 20+ high-profile media placements; 60% increase in brand mentions.",
      },
      {
        title: "Email Marketing",
        body: "45% open rate and 20% CTR; 25% conversion increase.",
      },
      {
        title: "CRM",
        body: "20% improvement in customer retention; 30% lift in upsell opportunities.",
      },
      {
        title: "Mobile Marketing",
        body: "70% increase in engagement and 40% increase in app-driven sales.",
      },
    ],
    gallery: [
      img("1715977327926-RC9SH5IEFAXWADI93LII/image-asset.jpeg"),
      img("ae9df2b0-325f-478c-b2cc-f744691da6c0/IMG_0576.jpeg"),
      img("cab067bc-551e-4757-9f29-a4bbea833981/IMG_0575.jpeg"),
      img("7e45e55b-026f-4ee9-924a-d0519accbfac/IMG_0600.jpeg"),
      img("ba3c3742-0ef9-4786-b2ab-1f38ea546b58/IMG_0574.jpeg"),
      img("f735118f-cd7f-483b-8e54-825d60f1f8af/IMG_0601.jpeg"),
      img("27a667d3-5f7f-4895-83dc-69718451bad7/IMG_0577.jpeg"),
      img("82f9d59e-82ef-43b6-93b7-0813c8b2611a/IMG_0569.jpeg"),
      img("01e8d3ba-6bda-49a5-8ff0-75d62dd4473a/IMG_0571.jpeg"),
      img("ede6d3c0-b568-4f52-a96b-4f69e9a456bc/IMG_0570.jpeg"),
      img("79ebeac1-7d7d-4541-bc30-191b45a59569/IMG_0603.jpeg"),
    ],
  },

  // ───────────────────────────── 07. Roma Pizza
  {
    slug: "roma-pizza-to-go",
    name: "Roma Pizza To Go",
    summary:
      "Egyptian quick-service pizza chain (est. 2006) committed to fresh ingredients and environmental care. Managed Cairo market launch, expansion, and brand identity.",
    logo: IMAGES.ceRomaPizza,
    contributions: [
      {
        title: "Launch & Expansion",
        body: "Managed launch and expansion into the Cairo market — established 4 new physical branches and 6 cloud kitchens within a year. Achieved daily sales exceeding 10,000 EGP from a single location.",
      },
      {
        title: "Brand Identity",
        body: "Created a distinct brand identity contributing to a 30% increase in social media engagement.",
      },
      {
        title: "Market Research",
        body: "Consumer research yielded a 25% increase in customer satisfaction.",
      },
      {
        title: "Event Marketing",
        body: "Coordinated launch events attracting 1,000+ attendees per branch.",
      },
      {
        title: "E-commerce",
        body: "Streamlined online ordering — 35% increase in online orders.",
      },
      {
        title: "Influencer",
        body: "Partnerships drove 30% social engagement increase and 25% sales boost.",
      },
      {
        title: "Geo-targeted Media",
        body: "40% increase in online orders within 6 months.",
      },
      {
        title: "Email",
        body: "38% open rate; 22% increase in repeat customers.",
      },
      {
        title: "Mobile",
        body: "Mobile platform development drove a 50% increase in mobile orders.",
      },
    ],
    gallery: [],
  },

  // ───────────────────────────── 08. WILLNWILLY
  {
    slug: "willnwilly",
    name: "WILLNWILLY",
    summary:
      "Middle-East-based online service for FUT/FC coins on EA Sports' FC Ultimate Team — safe transactions, no-ban guarantee, taxes covered. Operating since 2020.",
    logo: IMAGES.ceWillnWilly,
    contributions: [
      {
        title: "Digital Marketing",
        body: "Boosted online visibility by 50% through SEO and PPC; increased social media engagement by 45%.",
      },
      {
        title: "Public Relations",
        body: "40% increase in positive media coverage; enhanced brand image around promotional events.",
      },
      {
        title: "Email Marketing",
        body: "38% open rate and 10% conversion rate; improved lead-to-customer conversion by 20%.",
      },
      {
        title: "CRM",
        body: "Enhanced campaign effectiveness by 30%; 25% increase in repeat customers.",
      },
      {
        title: "Strategic Planning",
        body: "25% increase in customer engagement and 20% sales lift in the first year.",
      },
      {
        title: "Branding & UGC",
        body: "30% brand recognition improvement; 35% increase in campaign responsiveness.",
      },
      {
        title: "Market Research",
        body: "Identified trends; improved strategy effectiveness by 25% through data analysis.",
      },
      {
        title: "Event Marketing",
        body: "50% increase in event-driven sales.",
      },
      {
        title: "Influencer & Affiliate",
        body: "50% visibility boost; 35% sales increase. Affiliate programme generated 20% of online sales.",
      },
    ],
    gallery: [
      img("10c6b5f5-bce3-41b4-8c83-e6d50c28c681/2.+Breaking+News.jpeg"),
      img("213d446b-a8d8-40a7-be31-06e9603aa3c5/8.+Too+Busy.jpeg"),
      img("eaf58ee4-ae32-424d-b319-1979260a9ef0/next+boost.png"),
      img("aaa65f60-b936-4358-bc64-0de0cc95e592/FIFA+COINS24PL.PL+TRSUTED+Mining.png"),
      img("87a5ba0f-63fb-4c16-a006-b26f5d77ecce/IMG_8975.jpeg"),
      img("a9106f66-3361-4420-a000-687c5b9bea2f/1.+bicycle+kick.jpeg"),
      img("13c4491c-9fb8-4ca4-9147-d94a9041670e/pup+cake.png"),
      img("70bb3ebe-a7a8-46f1-9a24-fb3546282e0d/9E0939FA-A03F-442A-91F8-28B08AF9DDB3.jpeg"),
      img("de37d092-22c4-443b-87e1-dc4cffc1e86f/7.+The+Champ+%282%29.jpeg"),
      img("2a647e69-30d1-4d6c-ab57-bec40dc72a50/Envelope.png"),
    ],
  },

  // ───────────────────────────── 09. UGO Beverages
  {
    slug: "ugo-beverages",
    name: "UGO Beverages",
    summary:
      "Beverage brand under Management Gate. Led market expansion across Libya, Oman, Jordan, and Egypt — strategy, brand, distribution, and digital.",
    logo: IMAGES.ceUGO,
    contributions: [
      {
        title: "Digital Strategic Marketing",
        body: "Comprehensive market-penetration strategy expanding UGO's presence in Libya, Oman, Jordan, and Egypt — 30% market-share increase in year one.",
      },
      {
        title: "Creative, UGC & Branding",
        body: "Oversaw rebranding — 45% engagement increase among targeted age groups and 25% sales uplift during campaign periods.",
      },
      {
        title: "Market Research & Analytics",
        body: "Consumer studies identified emerging trends, yielding a 15% increase in market demand. Pricing optimisation drove a 10% profitability lift.",
      },
      {
        title: "Event Marketing & Sponsorship",
        body: "35% increase in B2B leads, 20% increase in sales contracts, and 25% local market penetration gains.",
      },
      {
        title: "E-commerce",
        body: "30% bounce-rate reduction; 25% conversion increase.",
      },
      {
        title: "Influencer & Affiliate",
        body: "40% engagement increase and 30% increase in influencer-driven sales.",
      },
      {
        title: "Media Planning & Buying",
        body: "50% increase in website traffic and 40% increase in online sales.",
      },
      {
        title: "Email Marketing",
        body: "40% open rates and 12% conversion rate.",
      },
      {
        title: "CRM",
        body: "18% increase in customer lifetime value; 22% retention improvement.",
      },
      {
        title: "Mobile Marketing",
        body: "50% traffic increase and 35% conversion uplift.",
      },
    ],
    gallery: [
      img("739dd883-fba7-4c52-965a-77027a8bcf9d/IMG_0489.jpeg"),
      img("966fb55d-a9af-4814-a742-eacdd61337f9/IMG_0559.jpeg"),
      img("f16b97f2-14c1-4132-805c-cde27be90203/IMG_0549.jpeg"),
      img("940b5c1a-8303-4b68-85ab-80c51a15cb73/IMG_0547.jpeg"),
      img("36e40dc9-a79e-4797-ae10-22c8bf7325d4/IMG_0558.jpeg"),
      img("3c2f152a-cf54-4c4f-bb65-e6a2c4b008c0/IMG_0605.jpeg"),
      img("48994fb4-9abd-4830-a3e9-b8d8b09e6e74/IMG_0552.jpeg"),
      img("64489b79-e67c-4318-a1a8-7024d3b54c6f/IMG_0548.jpeg"),
      img("7b8f494c-4a29-4a08-b41f-2df5e8da0550/IMG_0554.jpeg"),
      img("40b4c8e0-f861-4fe7-af7c-a130f1364133/IMG_0604.jpeg"),
    ],
  },

  // ───────────────────────────── 10. HAC
  {
    slug: "hac",
    name: "HAC — Hesham Abbas for Consulting",
    legalName: "Hesham Abbas For Consulting W.L.L (HAFCS)",
    summary:
      "Bahrain-headquartered consultancy serving Bahrain, KSA, UAE, Kuwait, and Egypt. Marketing leadership across positioning, content, and lead generation.",
    logo: IMAGES.ceHAC,
    contributions: [
      {
        title: "Media Planning",
        body: "40% increase in online visibility via SEO and PPC; content marketing doubled web traffic and positioned the client as a thought leader.",
      },
      {
        title: "Public Relations",
        body: "50% increase in media coverage; 25% increase in brand mentions via influencer coordination.",
      },
      {
        title: "Email Marketing",
        body: "40% open rate and 12% conversion rate; 25% increase in conversions via automated sequences.",
      },
      {
        title: "CRM",
        body: "20% improvement in operational efficiency and response times; 15% improvement in client retention.",
      },
      {
        title: "Mobile Marketing",
        body: "50% mobile engagement boost.",
      },
      {
        title: "Strategic Planning",
        body: "20% client acquisition increase in new markets; 25% growth in service uptake.",
      },
      {
        title: "Branding & Creative",
        body: "35% engagement increase; 20% lead generation increase.",
      },
      {
        title: "Market Research",
        body: "Captured 15% market share; 30% improvement in targeting accuracy.",
      },
      {
        title: "Event Marketing",
        body: "Attracted 300+ professionals per event; 20% sponsorship revenue increase.",
      },
      {
        title: "E-Commerce",
        body: "35% increase in online sales.",
      },
      {
        title: "Influencer Marketing",
        body: "30% engagement increase, 20% inquiry increase, and affiliate programme contributing 10% of annual sales.",
      },
    ],
    gallery: [
      img("4f5ed5f3-4d3d-4396-b10b-2d34714522ed/IMG_0585.jpeg"),
      img("59e0bf22-0652-4c44-84d0-2e259c4b6d54/IMG_0583.jpeg"),
      img("b2a54cca-e086-44ca-b5a8-b1b02aa27eed/IMG_0582.jpeg"),
      img("f0f5590c-7d6f-493d-8f21-7bb7e5f8c65f/IMG_0608.jpeg"),
      img("337fdee3-d560-4a5f-848e-81ba252da6da/IMG_0584.jpeg"),
      img("64c2d90f-cce0-4f4b-9005-ad5f5e938ec9/IMG_0586.jpeg"),
      img("19b1aa1a-31f6-43ec-b135-31d63d2b5921/WhatsApp+Image+2024-08-10+at+1.17.34+PM.jpeg"),
      img("ef14329f-ffdd-4d64-86bf-a84f7a4a897d/IMG_0626.jpeg"),
      img("eb6446dc-be81-4dea-9b6f-5f65f198d6bc/WhatsApp+Image+2024-07-31+at+12.27.01+PM.jpeg"),
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return CASE_STUDIES.map((c) => c.slug);
}
