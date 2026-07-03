import type { Metadata } from "next";
import CaseStudyShell from "@/components/CaseStudyShell";
import { body } from "./body";

export const metadata: Metadata = {
  title: "Northern Harvest Case Study | Roberts Design Studio",
  description:
    "How one designer built a complete brand system for a premium Humboldt County cannabis company in four months.",
  openGraph: { images: ["/casestudies/northernharvest/assets/og-image.jpg"] },
};

export default function NorthernHarvest() {
  return <CaseStudyShell body={body} />;
}
