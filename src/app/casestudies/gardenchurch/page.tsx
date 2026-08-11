import type { Metadata } from "next";
import CaseStudyShell from "@/components/CaseStudyShell";
import { body } from "./body";

export const metadata: Metadata = {
  title: "Garden Church Case Study | Roberts Design Studio",
  description:
    "A rename, a brand system, and the templates and training that let a staff of non-designers run it without a designer in the loop.",
  openGraph: { images: ["/og-image.jpg"] },
};

export default function GardenChurch() {
  return <CaseStudyShell body={body} />;
}
