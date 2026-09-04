export const body = `
<!-- ====== HERO ====== -->
<div class="hero" id="heroSection">
  <div class="hero-body">
    <div class="hero-title" style="letter-spacing:-0.03em;">A Rare Members-Only Tequila Collective Needed To Look Like One.</div>
    <div class="hero-facts">
      <div class="hero-meta" style="flex-direction:column;gap:0;max-width:none;margin-top:0;">
        <span>Client: Cienfuegos</span>
        <span class="hero-scope">Scope:<span class="hero-pill">Identity</span><span class="hero-pill">Packaging</span><span class="hero-pill">Bottle Platform</span><span class="hero-pill">Web</span></span>
        <span>Industry: Members-Only Tequila</span>      </div>
      <div class="hero-credit">
        <img src="assets/evan-headshot.jpg?v=4" alt="Evan Roberts">
        <div>
          <div class="hero-credit-name">Evan Roberts</div>
          <div class="hero-credit-role">Lead Designer, Roberts Design Studio</div>
        </div>
      </div>
    </div>
  </div>
    <div class="hero-tag"><img class="hero-tag-mark" src="/rds-lockup-black.svg" alt=""><span>make it real.</span></div>
</div>

<!-- MOUNTAIN DIVIDER -->
<div style="width:100%;overflow:hidden;padding:0;position:absolute;bottom:-70px;left:0;right:0;z-index:2;pointer-events:none;">
  <svg id="mountainSvg" viewBox="0 0 1200 120" preserveAspectRatio="none" style="width:100%;height:100px;display:block;">
    <polyline class="mountain-line" fill="none" stroke="rgba(0,0,0,0.2)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
      points="0,100 60,95 120,85 180,70 240,90 300,60 360,75 420,45 480,65 540,35 580,50 620,25 660,40 700,15 730,30 760,10 790,25 820,18 860,35 900,50 940,65 980,55 1020,70 1060,80 1100,75 1140,85 1200,90"
      style="stroke-dasharray: 2000; stroke-dashoffset: 2000; transition: stroke-dashoffset 6s ease;"
    />
  </svg>
</div>

<!-- ====== 1. THE BLUR ====== -->
<div class="ed-section no-top-line" style="max-width:900px;margin-left:auto;margin-right:auto;padding-top:100px;padding-bottom:0;">
  <div class="ed-label">Title: The Blur</div>
  <div class="ed-header">The Blur</div>
  <p class="ed-body">Cienfuegos is a members-only tequila club. Around six hundred members, one release at a time, bottled in custom ceramic from Hidalgo and numbered by hand. Members do not walk into a store and find it. They wait for a release, and the bottle arrives as an object before it is ever a drink.</p>
  <p class="ed-body">The brief that arrived was gold-accent heritage tequila. Gold foil, green glass, a hacienda, a script wordmark. It is <strong>what the entire category already looks like</strong>, and it is the reason a shelf of premium tequila reads as one continuous blur.</p>
  <p class="ed-body">Release No. 2 was the first release designed as a platform rather than a one-off: one bottle that had to survive being made ten different ways.</p>

  <div class="ed-pullquote">
    <div class="ed-pullquote-text">"The ceramic is earth after the burn. Nothing on the bottle pretends to be gold."</div>
    <div style="font-family:var(--font-mono);font-size:13px;font-weight:500;color:rgba(0,0,0,0.5);letter-spacing:1px;text-transform:uppercase;margin-top:16px;">Creative Direction, Release No. 2</div>
    <div class="ed-pullquote-meta">
      <span>PQ #001</span>
      <span>79 Characters</span>
    </div>
  </div>
</div>

<div class="ed-section no-top-line" style="padding-top:0;position:relative;overflow:hidden;">
  <div style="position:relative;">
  <!-- Dissolving word cloud -->
  <div class="dissolve-cloud" id="dissolveCloud">
    <svg class="orbit-trail" viewBox="0 0 300 300">
      <ellipse class="orbit-ellipse" cx="150" cy="150" rx="140" ry="90" opacity="0.04" style="stroke-dasharray:2 8 2 8 2 8 2 8 2 8 2 8 2 8 2 8 2 8 2 8 2 8 2 8 2 8 2 8 2 8 2 8 2 8 2 8 0 570" />
      <ellipse class="orbit-ellipse" cx="150" cy="150" rx="140" ry="90" opacity="0.08" style="stroke-dasharray:2 8 2 8 2 8 2 8 2 8 2 8 2 8 2 8 2 8 2 8 2 8 2 8 0 630" />
      <ellipse class="orbit-ellipse" cx="150" cy="150" rx="140" ry="90" opacity="0.14" style="stroke-dasharray:2 8 2 8 2 8 2 8 2 8 2 8 2 8 0 680" />
      <ellipse class="orbit-ellipse" cx="150" cy="150" rx="140" ry="90" opacity="0.22" style="stroke-dasharray:2 8 2 8 2 8 0 720" />
    </svg>
    <span class="dissolve-word" style="top:30%;left:30%;font-size:15px;transform:rotate(-3deg);--float-dur:5s;--float-delay:0s;--float-x:4px;--float-y:-6px">GOLD FOIL</span>
    <span class="dissolve-word" style="top:30%;left:55%;font-size:14px;transform:rotate(2deg);--float-dur:4.2s;--float-delay:0.8s;--float-x:-3px;--float-y:-4px">GREEN GLASS</span>
    <span class="dissolve-word" style="top:36%;left:22%;font-size:14px;transform:rotate(-1deg);--float-dur:3.8s;--float-delay:1.2s;--float-x:5px;--float-y:-3px">SCRIPT WORDMARK</span>
    <span class="dissolve-word" style="top:36%;left:48%;font-size:16px;transform:rotate(1.5deg);--float-dur:4.6s;--float-delay:0.3s;--float-x:-4px;--float-y:-7px">HACIENDA</span>
    <span class="dissolve-word" style="top:42%;left:35%;font-size:14px;transform:rotate(-2deg);--float-dur:5.2s;--float-delay:1.5s;--float-x:3px;--float-y:-5px">EMBOSSED CREST</span>
    <span class="dissolve-word" style="top:42%;left:58%;font-size:15px;transform:rotate(3deg);--float-dur:4s;--float-delay:0.6s;--float-x:-5px;--float-y:-4px">METALLIC INK</span>
    <span class="dissolve-word" style="top:48%;left:20%;font-size:13px;transform:rotate(-1.5deg);--float-dur:4.8s;--float-delay:2s;--float-x:4px;--float-y:-6px">ONE-OFF PACKAGING</span>
    <span class="dissolve-word" style="top:48%;left:52%;font-size:15px;transform:rotate(2.5deg);--float-dur:5.5s;--float-delay:0.4s;--float-x:-3px;--float-y:-5px">NO VARIANT SYSTEM</span>
    <span class="dissolve-word" style="top:54%;left:32%;font-size:14px;transform:rotate(-3deg);--float-dur:3.6s;--float-delay:1s;--float-x:5px;--float-y:-3px">NO PLATFORM</span>
    <span class="dissolve-word" style="top:54%;left:55%;font-size:14px;transform:rotate(1deg);--float-dur:4.4s;--float-delay:1.8s;--float-x:-4px;--float-y:-6px">NO RULES</span>
  </div>
  <div style="max-width:900px;margin-left:calc(50% - 420px);margin-right:auto;position:relative;z-index:1;">
    <div class="gap-stats" style="position:absolute;right:calc(100% + 220px);top:0;width:180px;text-align:left;">
      <div class="ed-stat">600</div>
      <div class="ed-stat-label">Members waiting on each release</div>
      <div class="ed-stat">1000</div>
      <div class="ed-stat-label">Bottles numbered by hand per release</div>
      <div class="ed-stat">10</div>
      <div class="ed-stat-label">Variants the identity had to survive</div>
    </div>
    <p class="ed-body">A members-only club releases variants constantly. The identity had to hold across all of them without a new mold, a new system, or a new argument every time.</p>
    <p class="ed-body">The real problem underneath the brief was structural. <strong>The brand had to be a set of rules that survive ten releases.</strong></p>
    <p class="ed-body">Gold was never a taste question, it was a scale question. An accent that has to be re-decided every release is a recurring cost.</p>
  </div>
  </div>
  <figure style="margin:80px 0 0;position:relative;z-index:1;width:100vw;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);">
    <img src="assets/world.jpg" alt="Cienfuegos Release No. 2 in landscape" style="width:100%;height:100vh;object-fit:cover;display:block;">
    <figcaption style="font-family:var(--font-mono);font-size:9px;color:rgba(0,0,0,0.25);letter-spacing:1px;margin-top:6px;padding-left:var(--page-pad);">world.jpg</figcaption>
  </figure>
</div>

<!-- ====== 4. POSITIONING (AND) SPEED ====== -->
<div class="ed-section" style="position:relative;overflow:hidden;">
  <!-- Ascending dotted trail -->
  <svg class="approach-trail" viewBox="0 0 2000 2000" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;">
    <path d="M -100,1400 C 300,1200 500,900 800,700 C 1100,500 1400,350 1700,200 C 1900,100 2100,0 2200,-50" fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="3 10" opacity="0.1" />
    <path d="M -100,1500 C 300,1300 550,1000 850,800 C 1150,600 1450,420 1750,280 C 1950,180 2100,80 2200,20" fill="none" stroke="black" stroke-width="1" stroke-linecap="round" stroke-dasharray="2 12" opacity="0.07" />
    <path d="M -50,1600 C 350,1400 600,1100 900,900 C 1200,700 1500,500 1800,350 C 2000,250 2100,150 2250,80" fill="none" stroke="black" stroke-width="1" stroke-linecap="round" stroke-dasharray="2 14" opacity="0.04" />
  </svg>

  <div class="ed-label" style="position:relative;z-index:1;">Title: The Approach</div>
  <div class="ed-header" style="position:relative;z-index:1;">The Approach</div>
  <div class="ed-two-col" style="position:relative;z-index:1;">
    <div class="ed-text-col">
      <p class="ed-body">The reframe was one sentence. <strong>Cienfuegos is the beautiful thing fire leaves behind.</strong> The aftermath, not the flame itself. That single move decided every material question that followed, and it took gold off the table permanently.</p>
      <p class="ed-body">I specified matte black ceramic as the primary surface, textured rather than glazed, so the bottle reads as earth after a burn. The palette narrowed to ash, sand, moss, clay, and char, with <strong>no metallic anywhere in the build</strong>.</p>
      <p class="ed-body">I moved every variable onto a leather colorway band wrapping the lower third. That band is the only element that changes between variants. One mold, one ceramic body, one wordmark, ten releases. The band carries the release information so the ceramic never has to.</p>
      <p class="ed-body">I rebuilt the wordmark as a restrained condensed serif with a single agave flame above it, then left it alone. The closure is a blonde bartop cork under a numbered seal, so scarcity is legible on the object itself.</p>
    </div>
    <div style="margin-top:-100px;width:calc(100% + 80px);margin-left:-80px;">
      <figure style="margin:0;">
        <img src="assets/approach.jpg" alt="Cienfuegos Release No. 2 bottles on volcanic rock" style="width:100%;aspect-ratio:1.587;object-fit:cover;display:block;">
        <figcaption style="font-family:var(--font-mono);font-size:9px;color:rgba(0,0,0,0.25);letter-spacing:1px;margin-top:6px;">approach.jpg</figcaption>
      </figure>
    </div>
  </div>

  <div style="font-family:var(--font-display);font-size:clamp(28px,3.5vw,42px);font-weight:700;line-height:1.08;color:#1a1a1a;letter-spacing:-0.02em;margin:40px 0 16px 0;max-width:66%;text-align:left;">"Kill the gold. Build it from the ash."</div>
  <div style="font-family:var(--font-mono);font-size:13px;font-weight:500;color:rgba(0,0,0,0.5);letter-spacing:1px;text-transform:uppercase;margin-top:16px;">Evan Roberts, Lead Designer</div>
  <div class="ed-pullquote-meta" style="margin-bottom:32px;justify-content:flex-start;gap:24px;">
    <span>PQ #002</span>
    <span>The Reframe</span>
    <span>36 Characters</span>
  </div>

  <!-- Two-column: Key Decisions + Scope of Work -->
  <div style="display:grid;grid-template-columns:2fr 3fr;gap:48px;margin-top:16px;align-items:start;">

    <!-- Left: Key Decisions -->
    <div>
      <div style="font-family:var(--font-display);font-size:clamp(24px,3vw,36px);font-weight:800;color:#1a1a1a;text-transform:uppercase;letter-spacing:-0.02em;margin-bottom:24px;">Key Decisions</div>
      <table class="ed-table">
        <thead>
          <tr>
            <th style="width:40%;">Decision</th>
            <th style="width:60%;">Outcome</th>
          </tr>
        </thead>
        <tbody>
                    <tr>
            <td>Matte black ceramic over gold-accent heritage</td>
            <td>Every later material decision followed from it.</td>
          </tr>
          <tr>
            <td>Leather band as the only variable element</td>
            <td>Ten colorways come off one mold and one ceramic body. No retooling per variant.</td>
          </tr>
          <tr>
            <td>Release data carried on the band and seal</td>
            <td>The ceramic body never has to be remade when a release changes.</td>
          </tr>
          <tr>
            <td>Glass tier built on the same silhouette</td>
            <td>A member complaint became a product line the system already had room for.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Right: Scope of Work -->
    <div>
      <div style="font-family:var(--font-display);font-size:clamp(24px,3vw,36px);font-weight:800;color:#1a1a1a;text-transform:uppercase;letter-spacing:-0.02em;margin-bottom:24px;">Scope of Work</div>

      <!-- Timeline header -->
      <div style="display:grid;grid-template-columns:repeat(5,1fr);font-family:var(--font-mono);font-size:9px;letter-spacing:1.5px;color:rgba(0,0,0,0.25);text-transform:uppercase;margin-bottom:8px;padding:0 4px;">
        <span>Feb 26</span>
        <span>Mar 26</span>
        <span>Apr 26</span>
        <span>May 26</span>
        <span>Jun 26</span>
      </div>

      <!-- Timeline grid lines -->
      <div style="position:relative;">
        <div style="position:absolute;top:0;bottom:0;left:0;right:0;display:grid;grid-template-columns:repeat(5,1fr);pointer-events:none;">
          <div style="border-left:1px solid rgba(0,0,0,0.06);"></div>
          <div style="border-left:1px solid rgba(0,0,0,0.06);"></div>
          <div style="border-left:1px solid rgba(0,0,0,0.06);"></div>
          <div style="border-left:1px solid rgba(0,0,0,0.06);"></div>
          <div style="border-left:1px solid rgba(0,0,0,0.06);"></div>
        </div>

        <div style="display:flex;flex-direction:column;gap:8px;padding:8px 0;">
          <div style="width:48%;margin-left:2%;background:rgba(0,0,0,0.04);padding:10px 12px;display:flex;justify-content:space-between;align-items:center;">
            <span style="font-family:var(--font-body);font-size:12px;color:#1a1a1a;font-weight:500;">Identity & Direction</span>
            <span style="font-family:var(--font-mono);font-size:9px;letter-spacing:1px;background:#1a1a1a;color:#fff;padding:3px 8px;">4 wk</span>
          </div>
          <div style="width:52%;margin-left:8%;background:rgba(0,0,0,0.04);padding:10px 12px;display:flex;justify-content:space-between;align-items:center;">
            <span style="font-family:var(--font-body);font-size:12px;color:#1a1a1a;font-weight:500;">Bottle Platform</span>
            <span style="font-family:var(--font-mono);font-size:9px;letter-spacing:1px;background:#1a1a1a;color:#fff;padding:3px 8px;">6 wk</span>
          </div>
          <div style="width:56%;margin-left:18%;background:rgba(0,0,0,0.04);padding:10px 12px;display:flex;justify-content:space-between;align-items:center;">
            <span style="font-family:var(--font-body);font-size:12px;color:#1a1a1a;font-weight:500;">Colorway System</span>
            <span style="font-family:var(--font-mono);font-size:9px;letter-spacing:1px;background:#1a1a1a;color:#fff;padding:3px 8px;">4 wk</span>
          </div>
          <div style="width:48%;margin-left:30%;background:rgba(0,0,0,0.04);padding:10px 12px;display:flex;justify-content:space-between;align-items:center;">
            <span style="font-family:var(--font-body);font-size:12px;color:#1a1a1a;font-weight:500;">Packaging & Seal</span>
            <span style="font-family:var(--font-mono);font-size:9px;letter-spacing:1px;background:#1a1a1a;color:#fff;padding:3px 8px;">5 wk</span>
          </div>
          <div style="width:40%;margin-left:44%;background:rgba(0,0,0,0.04);padding:10px 12px;display:flex;justify-content:space-between;align-items:center;">
            <span style="font-family:var(--font-body);font-size:12px;color:#1a1a1a;font-weight:500;">Glass Variant Tier</span>
            <span style="font-family:var(--font-mono);font-size:9px;letter-spacing:1px;background:#1a1a1a;color:#fff;padding:3px 8px;">3 wk</span>
          </div>
          <div style="width:44%;margin-left:56%;background:rgba(0,0,0,0.04);padding:10px 12px;display:flex;justify-content:space-between;align-items:center;">
            <span style="font-family:var(--font-body);font-size:12px;color:#1a1a1a;font-weight:500;">Membership Site</span>
            <span style="font-family:var(--font-mono);font-size:9px;letter-spacing:1px;background:#1a1a1a;color:#fff;padding:3px 8px;">cont.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ====== 5. THE SYSTEM ====== -->
<div class="ed-section">
  <div class="ed-label">Title: Brand System</div>
  <div class="ed-header">The System</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;">
    <p class="ed-body">A bottle platform. Silhouette, ceramic body, band placement, seal, neck strip, and the rules that decide which of them may change. One system carries every release.</p>
    <p class="ed-body">The system is written so a ceramicist in Hidalgo, a leather supplier, and a fulfilment team all read the same answer. It specifies proportion and sequence, so a new colorway is a decision already made.</p>
  </div>

  <!-- Brand Guidelines Deck -->
  <div class="ed-deck">
    <div class="deck-spacer"></div>
    <img src="assets/lineup.jpg" alt="Bottle platform 01">
    <img src="assets/seal.jpg" alt="Bottle platform 02">
    <img src="assets/unboxing.jpg" alt="Bottle platform 03">
    <img src="assets/editorial.jpg" alt="Bottle platform 04">
    <img src="assets/world.jpg" alt="Bottle platform 05">
    <img src="assets/hero.jpg" alt="Bottle platform 06">
  </div>
</div>

<!-- ====== 6. BUILT IN CODE ====== -->
<div class="ed-section">
  <div class="ed-label">Title: The Member Site</div>
  <div class="ed-header">The Member Site</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;">
    <p class="ed-body">A members-only site built directly in code: waitlist, access flow, member dashboard, and the bottle-rights logic that governs what a membership actually holds.</p>
    <p class="ed-body">Building in the browser is the only way I would have caught what the access flow does to a stranger. A member and a non-member see different sites here. That is something you have to click through, not something you can draw.</p>
  </div>

  <!-- Website Screenshots Deck -->
  <div class="ed-deck">
    <div class="deck-spacer"></div>
    <img src="assets/site-access.jpg" alt="Member access screen">
    <img src="assets/site-membership.jpg" alt="Membership and bottle rights screen">
  </div>

  <p class="ed-body" style="margin-top:24px;">The member site is private, behind the club's access flow.</p>
</div>

<!-- ====== 8. THE RESULTS ====== -->
<div class="ed-section">
  <div class="ed-label">Title: Results</div>
  <div style="font-family:var(--font-display);font-size:clamp(80px,12vw,180px);font-weight:800;color:#1a1a1a;line-height:0.9;letter-spacing:-0.04em;text-transform:uppercase;margin:16px 0 16px;">The Results</div>
  <div style="font-family:var(--font-display);font-size:clamp(24px,3vw,36px);font-weight:800;color:#1a1a1a;letter-spacing:-0.02em;margin-bottom:32px;text-transform:uppercase;">One Mold. Ten Variants.</div>

  <!-- Row 1: Stats full width -->
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:40px;margin-bottom:48px;">
    <div>
      <div class="ed-stat">10</div>
      <div class="ed-stat-label">Colorway variants off a single ceramic mold</div>
    </div>
    <div>
      <div class="ed-stat">3</div>
      <div class="ed-stat-label">Glass finishes added without changing the silhouette</div>
    </div>
    <div>
      <div class="ed-stat">1000</div>
      <div class="ed-stat-label">Bottles per release, numbered by hand against the run</div>
    </div>
  </div>

  <!-- Row 2: Before/After Table (full width) -->
  <div>
    <table class="ed-table" style="margin:0;font-size:15px;">
      <thead>
        <tr>
          <th style="width:30%;">Before</th>
          <th style="width:70%;">After</th>
        </tr>
      </thead>
      <tbody>
                <tr>
          <td>Gold-accent heritage direction</td>
          <td>Matte black ceramic, textured, from a single Hidalgo mold</td>
        </tr>
        <tr>
          <td>One-off packaging per release</td>
          <td>One mold and one band system carrying ten colorway variants</td>
        </tr>
        <tr>
          <td>Opaque bottle hiding its own fill</td>
          <td>Clear flint, smoked, and amber, all on the original silhouette</td>
        </tr>
        <tr>
          <td>Release information printed on the body</td>
          <td>Release number and year legible without reprinting the ceramic</td>
        </tr>
        <tr>
          <td>No membership infrastructure</td>
          <td>Member site with waitlist, access flow, and bottle rights</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div style="font-family:var(--font-display);font-size:clamp(36px,5vw,64px);font-weight:700;line-height:1.05;color:#1a1a1a;letter-spacing:-0.03em;margin-top:48px;text-align:center;">"The complaint became a product line."</div>
  <div style="font-family:var(--font-mono);font-size:13px;font-weight:500;color:rgba(0,0,0,0.5);letter-spacing:1px;text-transform:uppercase;margin-top:16px;text-align:center;">Release No. 2, Glass Tier</div>
  <div class="ed-pullquote-meta" style="justify-content:center;gap:24px;margin-top:8px;">
    <span>PQ #003</span>
    <span>36 Characters</span>
  </div>
</div>

<!-- ====== 9. PHOTOGRAPHY ====== -->
<div class="ed-section" style="padding-left:0;padding-right:0;">
  <div class="ed-label" style="padding-left:var(--page-pad);">Photography</div>
  <div class="ed-img-grid" style="grid-template-columns:1fr 1fr 1fr;gap:4px;margin:24px 0 0;">
    <figure><img src="assets/photo-01.jpg" alt=""><figcaption style="font-family:var(--font-mono);font-size:9px;color:rgba(0,0,0,0.25);padding:6px 8px;">photo-01.jpg</figcaption></figure>
    <figure><img src="assets/photo-02.jpg" alt=""><figcaption style="font-family:var(--font-mono);font-size:9px;color:rgba(0,0,0,0.25);padding:6px 8px;">photo-02.jpg</figcaption></figure>
    <figure><img src="assets/photo-03.jpg" alt=""><figcaption style="font-family:var(--font-mono);font-size:9px;color:rgba(0,0,0,0.25);padding:6px 8px;">photo-03.jpg</figcaption></figure>
    <figure><img src="assets/photo-04.jpg" alt=""><figcaption style="font-family:var(--font-mono);font-size:9px;color:rgba(0,0,0,0.25);padding:6px 8px;">photo-04.jpg</figcaption></figure>
    <figure><img src="assets/photo-05.jpg" alt=""><figcaption style="font-family:var(--font-mono);font-size:9px;color:rgba(0,0,0,0.25);padding:6px 8px;">photo-05.jpg</figcaption></figure>
    <figure><img src="assets/photo-06.jpg" alt=""><figcaption style="font-family:var(--font-mono);font-size:9px;color:rgba(0,0,0,0.25);padding:6px 8px;">photo-06.jpg</figcaption></figure>
  </div>
</div>

<!-- ====== 10. REFLECTION ====== -->
<div class="ed-section" style="text-align:center;padding:60px var(--page-pad);min-height:100vh;display:flex;flex-direction:column;justify-content:center;">
  <div class="ed-label">Title: Reflection</div>
  <div class="ed-header" style="font-size:clamp(32px,5vw,56px);">What I Would Do Differently</div>
  <div style="max-width:800px;margin:0 auto;">
    <p class="ed-body">With more time I would have built the glass tier into the first platform document instead of adding it after the members found the flaw. The complaint was correct and it was predictable. One sentence did most of the work on this project. Once the brand was the thing fire leaves behind, the material questions stopped being opinions and started having answers.</p>
    <p class="ed-body">The platform is ongoing and releases keep coming. The rules are set so a new variant costs a band.</p>
    <div style="display:flex;align-items:center;justify-content:center;gap:16px;margin-top:48px;">
      <img src="assets/evan-headshot.jpg?v=4" alt="Evan Roberts" style="width:44px;height:44px;border-radius:50%;object-fit:cover;">
      <div style="text-align:left;">
        <div style="font-family:var(--font-mono);font-size:13px;font-weight:600;color:#1A1A1A;">Evan Roberts</div>
        <div style="font-family:var(--font-mono);font-size:10px;color:rgba(0,0,0,0.35);letter-spacing:1px;">Lead Designer, Roberts Design Studio</div>
      </div>
    </div>
  </div>
</div>
`;
