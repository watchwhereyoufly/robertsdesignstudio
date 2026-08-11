export type ResearchEntry = {
  title: string;
  excerpt: string;
  category: string; // must be one of RESEARCH_CATEGORIES
  href: string; // links to the specific piece, never a publication homepage
  byline?: string; // author, publication, date
  featured?: boolean;
  body?: string; // HTML rendered in the on-site reader overlay
};

// Filter pills shown on /research (ALL is added automatically).
export const RESEARCH_CATEGORIES = ["Making", "Taste"] as const;

/* Reading list. Outside work, summarized here and linked to the original.
   One row per piece, not per publication. Never reproduced in full. */
export const research: ResearchEntry[] = [
  {
    title: "Software Bonkers",
    excerpt: "A writer builds the software he needed in five days, and stops renting it.",
    category: "Making",
    href: "https://craigmod.com/essays/software_bonkers/",
    byline: "Craig Mod · March 2026",
    body: `
      <p class="reader-dek">On building your own tools when you are not an engineer, and what that does to the software you accept.</p>
      <p>Mod is a writer and photographer in Japan. He makes books, walks long distances and publishes about it, and has built his own publishing tools for years. He calls himself an OK-but-not-great coder. In this essay he builds his own accounting software with Claude Code in five days and finds it better than the commercial product he had used for a decade.</p>
      <h3>Why it is here</h3>
      <p>The line that matters: <em>"There is no subscription. If I turn off Claude Code, it will keep working just fine."</em> The output is a real artifact, not a rented seat. That is the same argument this studio makes about design, applied to software by someone who came to it from craft rather than engineering.</p>
      <p class="reader-source">Craig Mod, March 2026. <a href="https://craigmod.com/essays/software_bonkers/" target="_blank" rel="noopener noreferrer">Read the original</a></p>
    `,
  },
  {
    title: "NM Content Today: Taste",
    excerpt: "An episode on taste, and what the word is carrying now.",
    category: "Taste",
    href: "https://newmodels.substack.com/p/nm-content-today-taste-2026",
    byline: "Caroline Busta & Lil Internet · New Models · Jul 2026",
    body: `
      <p class="reader-dek">New Models on taste as it stands in 2026.</p>
      <p>New Models has run out of Berlin since 2018, as a podcast, a member network, a book called NMCodex, and a running glossary. Busta edited Texte zur Kunst before this. The Content Today series takes one word at a time and works out what it is doing now.</p>
      <h3>Why it is here</h3>
      <p>Taste became the last defensible position in creative work at roughly the moment it became a product category. Worth hearing that examined by people who are not selling a course on it.</p>
      <p class="reader-source">New Models, July 2026. <a href="https://newmodels.substack.com/p/nm-content-today-taste-2026" target="_blank" rel="noopener noreferrer">Read the original</a></p>
    `,
  },
  {
    title: "Die Grotesk Design Information",
    excerpt: "A type designer on drawing a grotesk in Helvetica's shadow, and on who owns the type industry now.",
    category: "Making",
    href: "https://klim.co.nz/blog/die-grotesk-design-information/",
    byline: "Kris Sowersby · Klim Type Foundry · Jan 2025",
    body: `
      <p class="reader-dek">The full design account of a typeface, written by the person who drew it.</p>
      <p>Sowersby runs Klim out of Wellington. He publishes a long first-person essay for every release, and this one covers his shift from disdain to admiration for Helvetica, the tension between drawing what he wants and drawing what sells, the variable-font construction, and Monotype's consolidation of the industry he works in.</p>
      <h3>Why it is here</h3>
      <p>His line on Helvetica: <em>"Something so fucking good it becomes the air that surrounds us."</em> Almost nobody publishes their reasoning at this length while the commercial stakes are still live. The essay names what he was afraid of and who owns the market he sells into.</p>
      <p class="reader-source">Kris Sowersby, Klim Type Foundry, January 2025. <a href="https://klim.co.nz/blog/die-grotesk-design-information/" target="_blank" rel="noopener noreferrer">Read the original</a></p>
    `,
  },
  {
    title: "De-datafication",
    excerpt: "What could be rebuilt without producing or storing any data.",
    category: "Making",
    href: "https://www.robinsloan.com/lab/de-datafication/",
    byline: "Robin Sloan · Jun 2026",
    body: `
      <p class="reader-dek">A provocation about building things that do not run on collected data.</p>
      <p>Sloan is a novelist who writes software and makes zines, and has been working with these systems since 2016. He puts the question plainly: <em>"What's something good that currently requires the production and storage of digital data, that could be rebuilt without it?"</em> He connects it to what he is already making rather than to a trend.</p>
      <h3>Why it is here</h3>
      <p>Every brief now arrives assuming analytics, accounts, and a pipeline. This asks what survives if you remove all of it, which is a design constraint before it is a politics.</p>
      <p class="reader-source">Robin Sloan, June 2026. <a href="https://www.robinsloan.com/lab/de-datafication/" target="_blank" rel="noopener noreferrer">Read the original</a></p>
    `,
  },
  {
    title: "GenAI is Our Polyester",
    excerpt: "The case that AI output is heading exactly where synthetic fabric went.",
    category: "Taste",
    href: "https://culture.ghost.io/genai-is-our-polyester/",
    byline: "W. David Marx · Culture: An Owner's Manual · Jun 2025",
    body: `
      <p class="reader-dek">Status, not quality, decides what a material is worth.</p>
      <p>Marx wrote <em>Status and Culture</em> and lives in Tokyo. The argument: polyester arrived as an efficiency miracle, got mass-produced by low-status makers, and became a mark of cheapness regardless of how it performed. He traces the same arc for generative output. <em>"Despite all the techno-utopian promises, our brains see it as ersatz."</em></p>
      <h3>Why it is here</h3>
      <p>This is the mechanism behind the human-made premium, explained by someone who studies status rather than someone selling craft. If he is right, taste appreciates as the supply of generated work goes up.</p>
      <p class="reader-source">W. David Marx, Culture: An Owner's Manual, June 2025. <a href="https://culture.ghost.io/genai-is-our-polyester/" target="_blank" rel="noopener noreferrer">Read the original</a></p>
    `,
  },
];
