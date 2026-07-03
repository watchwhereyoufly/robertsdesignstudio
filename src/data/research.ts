export type ResearchEntry = {
  title: string;
  excerpt: string;
  category: string; // must be one of RESEARCH_CATEGORIES
  href: string;
  featured?: boolean;
  body?: string; // HTML rendered in the on-site reader overlay
};

// Filter pills shown on /research (ALL is added automatically).
export const RESEARCH_CATEGORIES = ["Report", "Essay", "Field Notes"] as const;

export const research: ResearchEntry[] = [
  {
    title: "The State of Direct Design 2026",
    excerpt:
      "A field report on building the shipped artifact directly in code, and what disappears when the mockup does.",
    category: "Report",
    href: "#",
    featured: true,
    body: `
      <p class="reader-dek">A field report on building the shipped artifact directly, and what disappears when the mockup does.</p>
      <p>For a century, design has been drawn and then handed to someone else to build. The designer made a picture of the thing. Somebody in production made the thing. Between the two there was a gap, and the gap was filled with meetings, redlines, revisions, and loss. Direct Design closes the gap. The designer builds the artifact that ships. In brand and web work this means the studio writes the code that becomes the site, not a comp that approximates it.</p>
      <h3>What the mockup was hiding</h3>
      <p>A mockup is a still image of a moving thing. It shows a website that does not scroll, a package that does not fold, a page that does not reflow when the text runs long. Every mockup is a set of promises about behavior it cannot demonstrate. Remove it and the promises become facts, or they become nothing.</p>
      <h3>Four builds</h3>
      <p>Across the studio's 2026 work the pattern held. On Northern Harvest, a Humboldt cannabis brand, the website went from concept to deployed with no comp file. On the Molly Powers site the scroll rhythm was designed by scrolling, not by imagining a scroll. In both cases the number of "rounds" fell toward zero, because a round is a ritual for comparing a picture to a hope. There was no picture. There was the thing.</p>
      <h3>The cost</h3>
      <p>Direct Design is not free. It demands that the designer hold taste and construction in the same hand, which is rare and slow to learn. It punishes vagueness. You cannot gesture at an idea in code, you have to decide it. That is the point. The method does not produce more work. It produces fewer decisions left undecided.</p>
      <p>The finding is simple and unfashionable. The closer the design act sits to the shipping act, the less is lost. In 2026 the loss approached zero.</p>
    `,
  },
  {
    title: "Representation Is a Confession of Doubt",
    excerpt:
      "On the mockup as an admission, and certainty as a construction method.",
    category: "Essay",
    href: "#",
    body: `
      <p class="reader-dek">On the mockup as an admission, and certainty as a material.</p>
      <p>Ask why the mockup exists and the honest answer is fear. You make a picture of the work because you are not yet willing to make the work. The picture is cheaper to abandon. It is an insurance policy against your own idea. This is reasonable, and it is also a confession: I am not sure.</p>
      <h3>The book, not a picture of the book</h3>
      <p>There is a designer who has made three hundred books and never once made a picture of a book to show a client. She makes the book. Full size, real paper, real weight, because a picture of a book lies about the book. It flatters the parts a photograph can flatter and hides the parts only the hand can feel. The lie is comfortable. The truth is a stack of paper on the table that is either right or wrong.</p>
      <h3>Certainty is a material</h3>
      <p>Sol LeWitt wrote that the idea becomes a machine that makes the art. He meant that once the concept is decided, execution is not a second act of doubt, it is arithmetic. Direct Design takes him literally. If the idea is real you can build it, and building it is how you find out whether it was real. The mockup lets you defer that verdict forever. The built thing does not.</p>
      <h3>What we are actually selling</h3>
      <p>A studio that shows mockups is selling reassurance. A studio that ships is selling conviction. These are different products. One says here is what it might look like. The other says here it is. The second is harder to make and impossible to fake, and that is exactly why it is worth more.</p>
      <p>Doubt is allowed in the drawing. It is not allowed on the shelf.</p>
    `,
  },
  {
    title: "Type as Interface",
    excerpt:
      "When a site has no logo and no photography, the typeface is the entire design.",
    category: "Report",
    href: "#",
    body: `
      <p class="reader-dek">When a site has no logo and no photography, the typeface is the entire design.</p>
      <p>Most websites treat type as a layer applied to a structure. The structure is the interface, and the type is decoration on top of it. For a writer this is backwards. The writing is the product. The interface should be made of type, not decorated with it.</p>
      <h3>The face does the work</h3>
      <p>On the Molly Powers site there is no logo and no stock imagery to hide behind. The typeface carries the identity, so it has to hold two jobs at once: long-form reading without fatigue, and voice. Voice means a true italic with real character, because she writes half her thinking in italics. A default system font has no italic worth the name. An elite text face does. That difference is the whole site.</p>
      <h3>The margin is not empty</h3>
      <p>She lives in the aside, the parenthetical, the wink at her own pretension. Almost no personal site uses the margin for anything. Hers does. Notes and second thoughts sit alongside the text where a footnote would, not buried in a modal that interrupts the reading. The margin becomes the interface. It is the part of the page everyone else throws away.</p>
      <h3>Reading as the object</h3>
      <p>The test for a writer's site is whether you read on it or leave it. Most sites are indexes that ship you elsewhere. This one keeps the reading on the page and treats the act of reading as the designed object. The wordmark is built from a drifting field of her own initials, so even the mark is made of the letters she writes with.</p>
      <p>Typography is not the skin of this site. It is the skeleton, the organs, and the voice.</p>
    `,
  },
  {
    title: "Designing for a Writer: The Molly Powers Build",
    excerpt:
      "Notes kept during the build, not reconstructed after. Cold opens, the margin, and the closing kiss-off.",
    category: "Field Notes",
    href: "#",
    body: `
      <p class="reader-dek">Notes kept during the build, not reconstructed after.</p>
      <p>Field notes are kept during the work, not written after. Reconstructed process is a story you tell to look smart. These are the real ones, lightly cleaned.</p>
      <h3>Read the archive first</h3>
      <p>Before a single screen, twelve essays. "I'm Dressed In This Uniform." "How To Kill An Hour." I marked the sentences only she would write. A pattern showed up fast: concrete cold open every time, a dropped case-less iPhone outside a wine bar, then the thought spirals out through asides and lands somewhere quietly true. The site had to move the way the sentences move.</p>
      <h3>The wrong first idea</h3>
      <p>The first concept was a clean editorial grid. It was competent and it was dead. It looked like a cool site she admired, not like her. I killed it. The rule became simple: if a screen could belong to another writer, it is wrong.</p>
      <h3>Un beso</h3>
      <p>Her essays close with "un beso," a Spanish kiss-off after English introspection. So the site ends the way her writing ends. That is not a flourish added at the finish. It is the concept extracted from the prose and put back where it belongs.</p>
      <h3>What I would change</h3>
      <p>Field Notes, her dated series, should be the architecture, not a section. A living index that grows every time she publishes, so the site keeps writing itself. Next build. For now the bet held: the site does not list her writing, it reads like it.</p>
    `,
  },
  {
    title: "The Premium Shelf: A Cannabis Packaging Audit",
    excerpt:
      "What separates a heritage brand from a commodity in the half second before a hand reaches out.",
    category: "Report",
    href: "#",
    body: `
      <p class="reader-dek">What separates a heritage brand from a commodity in the half second before a hand reaches out.</p>
      <p>A dispensary shelf is a fight for a half second of attention, most of it lost to noise. Cannabis packaging defaults to two failures: the medical white box that apologizes for existing, and the loud cartoon that begs. Between them is a narrow lane almost nobody occupies, the lane where premium lives.</p>
      <h3>Restraint reads as confidence</h3>
      <p>On the Northern Harvest audit the finding was consistent. The products that read as premium used fewer elements, not more. A restrained mark, real hierarchy, one confident material choice. The loud packs were trying to convince you. The quiet ones assumed you already knew. Assumption is expensive to fake, which is why it works.</p>
      <h3>Material is an argument</h3>
      <p>A photograph of a product is not the product. On the shelf the customer touches the box, and the box either has weight and finish or it does not. A matte stock, a real fold, a mark that survives being small. These are not details. They are the argument for the price, made in the hand before a word is read.</p>
      <h3>Heritage is a position, not a texture</h3>
      <p>Humboldt is an origin point of American cannabis culture. That is a genuine claim, not a mood. The audit's conclusion: the brand that owns a true story can afford silence, because it has something to be silent about. The commodity has to shout because it has nothing to say.</p>
      <p>Premium is not a finish you add. It is everything you had the nerve to leave out.</p>
    `,
  },
  {
    title: "Notes on Building in the Browser",
    excerpt:
      "The browser is not where you show the work. It is the material the work is made of.",
    category: "Essay",
    href: "#",
    body: `
      <p class="reader-dek">The browser is not where you show the work. It is the material the work is made of.</p>
      <p>Painters know their material. They know how oil dries, how it cracks, how it holds light. Most web designers do not know their material, because they work in a picture of the browser instead of the browser. Then they hand the picture to someone who does know the material, and act surprised when the result is a translation.</p>
      <h3>The feedback loop collapses</h3>
      <p>Working in the browser, the distance between a decision and its consequence is one second. You change a value and the real thing responds, at real size, with real text, on the real device. In a mockup the feedback loop is a meeting three days later. Speed is not the point. Truth is the point. The browser tells you the truth immediately, and a mockup never does.</p>
      <h3>You cannot feel a scroll in a still image</h3>
      <p>A website is a temporal object. It has rhythm, pace, the timing of a reveal, the weight of a scroll. None of this exists in a frame. A comp can show you a moment; it cannot show you the movement between moments, and the movement is where the feeling lives. For a site whose whole purpose is rhythm, designing in a still image is designing blind.</p>
      <h3>Constraint is the author</h3>
      <p>The browser refuses vague ideas. It will not render a gesture. This is not a limitation, it is an editor. Every real constraint the medium imposes is a decision it makes for you, and a decision made is a decision you no longer get wrong.</p>
      <p>Design the system, not the page. Then build it in the thing it will live in.</p>
    `,
  },
];
