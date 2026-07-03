export type CaseStudyCard = {
  slug: string;
  no: string;
  title: string;
  date: string;
  tag: string;
  preview: string;
  previewFit: "cover" | "contain";
  previewBg?: string;
  previewPos?: string;
  caption: string;
};

export const caseStudies: CaseStudyCard[] = [
  {
    slug: "northernharvest",
    no: "No. 001",
    title: "Northern Harvest",
    date: "2025 – 2026",
    tag: "Cannabis",
    preview: "/casestudies/northernharvest/assets/cs-preview.png",
    previewFit: "contain",
    previewBg: "#FFFFFF",
    caption:
      "Brand, Package, Digital, and Web Design For a Premium Humboldt County Cannabis Company. Built From Zero in Four Months.",
  },
  {
    slug: "mollypowers",
    no: "No. 002",
    title: "Molly Powers",
    date: "2026",
    tag: "Personal Site",
    preview: "/casestudies/mollypowers/assets/cs-preview.png",
    previewFit: "contain",
    previewBg: "#FFFFFF",
    previewPos: "center 40%",
    caption:
      "A Personal Site For a Writer in Brooklyn, Built To Read The Way She Writes. Typography As The Entire Design.",
  },
];
