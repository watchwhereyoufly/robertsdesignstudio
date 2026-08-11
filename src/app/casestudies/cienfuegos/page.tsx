import type { Metadata } from "next";
import CaseStudyShell from "@/components/CaseStudyShell";
import { body } from "./body";

export const metadata: Metadata = {
  title: "Cienfuegos Case Study | Roberts Design Studio",
  description:
    "Identity and bottle platform for a members-only tequila club. Killing the gold and rebuilding the brand around what fire leaves behind.",
  openGraph: { images: ["/og-image.jpg"] },
};

export default function Cienfuegos() {
  return <CaseStudyShell body={body} />;
}
