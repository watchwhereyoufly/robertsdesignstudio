import type { Metadata } from "next";
import CaseStudyShell from "@/components/CaseStudyShell";
import { body } from "./body";

export const metadata: Metadata = {
  title: "Molly Powers Case Study | Roberts Design Studio",
  description:
    "A personal site for a writer, built to read the way she writes. Typography as the entire design.",
  openGraph: { images: ["/og-image.jpg"] },
};

export default function MollyPowers() {
  return <CaseStudyShell body={body} />;
}
