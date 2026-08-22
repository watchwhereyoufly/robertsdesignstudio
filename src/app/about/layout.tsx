import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Info | Roberts Design Studio",
  description:
    "Roberts Design Studio is an American design company specializing in digital, industrial, and web design.",
  openGraph: { images: ["/og-image.jpg"] },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
