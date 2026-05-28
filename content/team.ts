export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  /** Path under /public/. Save the photo at this exact path. */
  photo: string;
  /** Optional links shown under the bio. */
  links?: { label: string; href: string }[];
};

export const TEAM: TeamMember[] = [
  {
    slug: "abdalrahman-madany",
    name: "Abdalrahman Madany",
    role: "Founder & Principal",
    bio: "Built MadanyCo to install operating systems for profitable growth. Twenty years across DTC, hospitality, education, and B2B — previously at Snap Inc. (Snapchat MENA SMB ABM), Genpact EMEA, and Seissense. Runs the financial plan, the marketing plan, and the daily workflow that holds them together.",
    photo: "/team/abdalrahman.jpg",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
      { label: "Portfolio", href: "/portfolio" },
    ],
  },
  {
    slug: "lina-hatem",
    name: "Lina Hatem",
    role: "Head of Content & Brand",
    bio: "Runs the creative pipeline — pillars, angles, hooks, iterations, every week. Built content engines for DTC and hospitality brands across the Gulf. Believes the caption is a craft and the algorithm is a coworker. Will rewrite your headline twice before you finish your coffee.",
    photo: "/team/lina.jpg",
  },
  {
    slug: "karim-saleh",
    name: "Karim Saleh",
    role: "Performance Media Director",
    bio: "Lives inside the ad accounts. Owns the testing framework, the decision rules, and the reporting that turns paid media from a cost line into a margin line. Background in growth analytics at DTC scale-ups. Will out-stubborn a Meta optimizer on any given Wednesday.",
    photo: "/team/karim.jpg",
  },
  {
    slug: "adam-sherif",
    name: "Adam Sherif",
    role: "Strategy Director",
    bio: "Connects the P&L to the marketing plan. Owns the unit-economics conversation — allowable CAC, payback, contribution margin — across every engagement. Background in management consulting and brand strategy. The reason 'reporting leads to action' is enforceable here, not just printable.",
    photo: "/team/adam.jpg",
  },
];
