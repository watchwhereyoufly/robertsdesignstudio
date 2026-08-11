export type CaseStudyCard = {
  slug: string;
  no: string;
  title: string;
  /** The case study's own headline, matching the hero line inside the study. */
  headline: string;
  /** Disciplines, shown as pills on the card. Industry rides along via `tag`. */
  services: string[];
  date: string;
  tag: string;
  preview: string;
  previewFit: "cover" | "contain";
  previewBg?: string;
  previewPos?: string;
  caption: string;
  /** Signed work with no published study yet: card renders inert, not a dead link. */
  comingSoon?: boolean;
  /** Client mark drawn over the cover. Kept out of the JPEG so it stays sharp
   *  regardless of the photo's resolution; width is a % of the card. */
  logo?: string;
  logoWidth?: string;
};

// Order here is the order on the page, and `no` is numbered to match it so the
// column reads 001, 002, 003 straight down rather than jumping around.
const CARDS: CaseStudyCard[] = [
  {
    slug: "northernharvest",
    no: "No. 001",
    title: "Northern Harvest",
    headline:
      "Humboldt's Best-Kept Cannabis Secret Needed To Stop Being A Secret.",
    date: "2025 – 2026",
    tag: "Cannabis",
    services: ["Brand System", "Logo", "Package", "Digital", "Field Assets", "Web Design", "Social Assets"],
    preview: "/casestudies/northernharvest/assets/cs-preview.jpg",
    previewFit: "cover",
    caption:
      "Brand, Package, Digital, and Web Design For a Premium Humboldt County Cannabis Company. Built From Zero in Four Months.",
  },
  {
    slug: "cienfuegos",
    no: "No. 002",
    title: "Cienfuegos",
    headline:
      "A Rare Members-Only Tequila Collective Needed To Look Like One.",
    date: "2026",
    tag: "Alcohol",
    services: ["Identity", "Brand System", "Logo", "Package", "Web Design", "Social Assets"],
    preview: "/casestudies/cienfuegos/assets/cs-preview.jpg?v=5",
    previewFit: "cover",
    logo: "/casestudies/cienfuegos/assets/logo.png",
    logoWidth: "30%",
    caption:
      "Identity and Bottle Platform For a Members-Only Tequila Club. Killing The Gold and Rebuilding The Brand From What Fire Leaves Behind.",
  },
  {
    slug: "mollypowers",
    no: "No. 003",
    title: "Molly Powers",
    headline:
      "A Writer Needed A Site That Looks Like The Way She Lives.",
    date: "2026",
    tag: "Personal",
    services: ["Art Direction", "Web Design", "Social Assets"],
    preview: "/casestudies/mollypowers/assets/cs-preview.jpg",
    previewFit: "cover",
    caption:
      "A Personal Site For a Writer in Brooklyn, Built To Read The Way She Writes. Typography As The Entire Design.",
  },
  {
    slug: "sps",
    no: "No. 004",
    title: "Society for Perception Studies",
    headline:
      "A Harvard Speaker Series Needed A Place To Gather.",
    date: "2026",
    tag: "Educational",
    services: ["Art Direction", "Web Design"],
    preview: "/casestudies/sps/assets/cs-preview.jpg?v=2",
    previewFit: "cover",
    caption:
      "A Home For a Speaker Series and The Community That Had Already Formed Around It.",
    comingSoon: true,
  },
  {
    slug: "gardenchurch",
    no: "No. 005",
    title: "Garden Church",
    headline:
      "A Church Full Of Non-Designers Needed A Brand That Designs Itself.",
    date: "2026",
    tag: "Church",
    services: ["Brand System", "Logo", "Templates", "Web Design", "Social Assets"],
    preview: "/casestudies/gardenchurch/assets/cs-preview.jpg?v=4",
    previewFit: "cover",
    logo: "/casestudies/gardenchurch/assets/logo.png",
    logoWidth: "30%",
    caption:
      "A Rename, a Brand System, and The Templates and Training That Let a Staff Of Non-Designers Run It Without a Designer.",
  },
  {
    slug: "somalongevity",
    no: "No. 006",
    title: "Soma Longevity",
    headline:
      "A Longevity Clinic Needed To Look Like The Data It Reads.",
    date: "2026",
    tag: "Healthcare",
    services: ["Brand System", "Logo", "Field Assets", "Web Design", "Social Assets"],
    // Portrait source in a landscape frame, so the crop is pulled up off centre
    // to keep the face in view rather than only the hair.
    preview: "/casestudies/somalongevity/assets/cs-preview.jpg?v=4",
    previewFit: "cover",
    logo: "/casestudies/somalongevity/assets/logo.png",
    logoWidth: "24%",
    previewPos: "center 6%",
    caption:
      "Identity and Collateral For a Boutique Longevity Clinic Built On Labs, Genetics, and Wearable Data.",
    comingSoon: true,
  },
];

// One canonical order for the discipline pills. Every card sorts against this,
// so a service shared by two projects always appears in the same position.
// Northern Harvest was authored with Social Assets ahead of Web Design; the
// other four put Web Design first, so the majority reading wins here.
const SERVICE_ORDER = [
  "Identity",
  "Art Direction",
  "Brand System",
  "Logo",
  "Package",
  "Templates",
  "Digital",
  "Field Assets",
  "Web Design",
  "Social Assets",
];
const rank = (s: string) => {
  const i = SERVICE_ORDER.indexOf(s);
  return i === -1 ? SERVICE_ORDER.length : i; // unknown disciplines sort last
};

export const caseStudies: CaseStudyCard[] = CARDS.map((c) => ({
  ...c,
  services: [...c.services].sort((a, b) => rank(a) - rank(b)),
}));
