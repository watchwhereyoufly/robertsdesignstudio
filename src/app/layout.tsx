import type { Metadata } from "next";
import "./globals.css";
import ResearchReader from "@/components/ResearchReader";

export const metadata: Metadata = {
  metadataBase: new URL("https://robertsdesignstudio.com"),
  title: "Roberts Design Studio",
  description:
    "Roberts Design Studio is an American design company specializing in brand, package, digital, and web design for products that demand craft.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Roberts Design Studio",
    description:
      "Brand, package, digital, and web design for products that demand craft.",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-root">{children}</div>
        <ResearchReader />
        <div className="film-grain" aria-hidden="true" />
      </body>
    </html>
  );
}
