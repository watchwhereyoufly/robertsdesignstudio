import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research | Roberts Design Studio",
  description:
    "Research and design papers from Roberts Design Studio.",
  openGraph: { images: ["/og-image.jpg"] },
};

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
