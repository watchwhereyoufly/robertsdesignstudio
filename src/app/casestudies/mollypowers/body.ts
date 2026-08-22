export const body = `
<!-- ====== HERO ====== -->
<div class="hero" id="heroSection">
  <div class="hero-body">
    <div class="hero-title" style="letter-spacing:-0.03em;">A Writer Needed A Site That Looks Like The Way She Lives.</div>
    <div class="hero-facts">
      <div class="hero-meta" style="flex-direction:column;gap:0;max-width:none;margin-top:0;">
        <span>Client: Molly Powers</span>
        <span>Scope: Art Direction, Web Design, Build</span>
        <span>Industry: Writer, Personal Site</span>      </div>
      <div class="hero-credit">
        <img src="assets/evan-headshot.jpg?v=4" alt="Evan Roberts">
        <div>
          <div class="hero-credit-name">Evan Roberts</div>
          <div class="hero-credit-role">Lead Designer, Roberts Design Studio</div>
        </div>
      </div>
    </div>
  </div>
    <div class="hero-tag"><img class="hero-tag-mark" src="/rds-lockup-blue.svg" alt=""><span>make it real.</span></div>
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

<!-- ====== 1. THE BET ====== -->
<div class="ed-section no-top-line" style="max-width:900px;margin-left:auto;margin-right:auto;padding-top:100px;padding-bottom:0;">
  <div class="ed-label">Title: The Bet</div>
  <div class="ed-header">The Bet</div>
  <p class="ed-body">Molly Powers is a writer in Brooklyn. She runs a Substack called K, "a coming-of-age publication for the stickers on my laptop," and has spent two years publishing on music, fashion, identity, and a dated series she calls Field Notes.</p>
  <p class="ed-body">The default move for a writer is a Linktree with a serif font. Competent, dead, scrolled past in four seconds. The second-easiest move is a portfolio that lists her essays and ships every click straight back to Substack.</p>
  <p class="ed-body">So the brief was a bet, set before the first screen: <strong>build a site that does not list her writing but reads like it.</strong> Her voice in the type. Her rhythm in the scroll.</p>

  <div class="ed-pullquote">
    <div class="ed-pullquote-text">"The only thing that gets me out of bed in the morning is the opportunity to get dressed."</div>
    <div style="font-family:var(--font-mono);font-size:13px;font-weight:500;color:rgba(0,0,0,0.5);letter-spacing:1px;text-transform:uppercase;margin-top:16px;">Molly Powers, I'm Dressed In This Uniform</div>
    <div class="ed-pullquote-meta">
      <span>PQ #001</span>
      <span>88 Characters</span>
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
    <span class="dissolve-word" style="top:30%;left:30%;font-size:15px;transform:rotate(-3deg);--float-dur:5s;--float-delay:0s;--float-x:4px;--float-y:-6px">LINKTREE</span>
    <span class="dissolve-word" style="top:30%;left:55%;font-size:14px;transform:rotate(2deg);--float-dur:4.2s;--float-delay:0.8s;--float-x:-3px;--float-y:-4px">SERIF DEFAULT</span>
    <span class="dissolve-word" style="top:36%;left:22%;font-size:14px;transform:rotate(-1deg);--float-dur:3.8s;--float-delay:1.2s;--float-x:5px;--float-y:-3px">PORTFOLIO LIST</span>
    <span class="dissolve-word" style="top:36%;left:48%;font-size:16px;transform:rotate(1.5deg);--float-dur:4.6s;--float-delay:0.3s;--float-x:-4px;--float-y:-7px">ARROWS TO SUBSTACK</span>
    <span class="dissolve-word" style="top:42%;left:35%;font-size:14px;transform:rotate(-2deg);--float-dur:5.2s;--float-delay:1.5s;--float-x:3px;--float-y:-5px">STOCK PHOTOGRAPHY</span>
    <span class="dissolve-word" style="top:42%;left:58%;font-size:15px;transform:rotate(3deg);--float-dur:4s;--float-delay:0.6s;--float-x:-5px;--float-y:-4px">THEME TEMPLATE</span>
    <span class="dissolve-word" style="top:48%;left:20%;font-size:13px;transform:rotate(-1.5deg);--float-dur:4.8s;--float-delay:2s;--float-x:4px;--float-y:-6px">PAGE BUILDER</span>
    <span class="dissolve-word" style="top:48%;left:52%;font-size:15px;transform:rotate(2.5deg);--float-dur:5.5s;--float-delay:0.4s;--float-x:-3px;--float-y:-5px">GENERIC WRITING PAGE</span>
    <span class="dissolve-word" style="top:54%;left:32%;font-size:14px;transform:rotate(-3deg);--float-dur:3.6s;--float-delay:1s;--float-x:5px;--float-y:-3px">NO VOICE</span>
    <span class="dissolve-word" style="top:54%;left:55%;font-size:14px;transform:rotate(1deg);--float-dur:4.4s;--float-delay:1.8s;--float-x:-4px;--float-y:-6px">SCROLLED PAST</span>
  </div>
  <div style="max-width:900px;margin-left:calc(50% - 420px);margin-right:auto;position:relative;z-index:1;">
    <div class="gap-stats" style="position:absolute;right:calc(100% + 220px);top:0;width:180px;text-align:left;">
      <div class="ed-stat">12</div>
      <div class="ed-stat-label">Essays read in full before a single screen was designed</div>
      <div class="ed-stat">2 yrs</div>
      <div class="ed-stat-label">Of K to design around. One voice, studied first</div>
      <div class="ed-stat">0</div>
      <div class="ed-stat-label">Templates. Custom build, no themes, no page-builder</div>
    </div>
    <p class="ed-body">The work started in her archive, not a moodboard. I read every essay and marked the sentences that only she would write. Twelve posts, September 2025 to May 2026.</p>
    <p class="ed-body">A pattern came up fast. <strong>Concrete cold open, every time.</strong> A dropped case-less iPhone outside a wine bar. Headphones in, Funkadelic playing. Then fragments against long, breathless runs that keep qualifying themselves.</p>
    <p class="ed-body">That is not decoration to add at the end. That is the brief. The rhythm of her sentences is the rhythm the site had to move in.</p>
  </div>
  </div>
  <figure style="margin:80px 0 0;position:relative;z-index:1;width:100vw;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);">
    <img src="assets/site-home.png" alt="Molly Powers site, home" style="width:100%;height:100vh;object-fit:cover;display:block;">
    <figcaption style="font-family:var(--font-mono);font-size:9px;color:rgba(0,0,0,0.25);letter-spacing:1px;margin-top:6px;padding-left:var(--page-pad);">site-home.png</figcaption>
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
      <p class="ed-body">She writes high against low on purpose. "Man-repelling outfit ingenuity" slammed against "copped it." Salomon, Brandy Melville, Supreme dropped in as coordinates that locate a person in space. <strong>The type had to hold both registers without flinching.</strong></p>
      <p class="ed-body">She lives in the margin. Half the personality is in the aside, the self-interruption, the wink at her own pretension. So the margin became the interface: her asides sit where footnotes would, alongside the text rather than buried.</p>
      <p class="ed-body">Field Notes is her dated, almanac-like series. Instead of a generic Writing list with arrows that ship readers off to Substack, the dated-entry structure drives the architecture. You read her here.</p>
      <p class="ed-body">And "un beso" closes her essays, a Spanish kiss-off after English introspection. So the site ends the way her writing ends.</p>
    </div>
    <div style="margin-top:-100px;width:calc(100% + 80px);margin-left:-80px;">
      <figure style="margin:0;">
        <video src="assets/001.mp4" autoplay loop muted playsinline preload="metadata" aria-label="Molly Powers, motion" style="height:clamp(340px,52vh,620px);width:auto;max-width:100%;object-fit:contain;display:block;margin:0 auto;"></video>
        <figcaption style="font-family:var(--font-mono);font-size:9px;color:rgba(0,0,0,0.25);letter-spacing:1px;margin-top:6px;">001.mp4</figcaption>
      </figure>
    </div>
  </div>

  <div style="font-family:var(--font-display);font-size:clamp(28px,3.5vw,42px);font-weight:700;line-height:1.08;color:#1a1a1a;letter-spacing:-0.02em;margin:40px 0 16px 0;max-width:66%;text-align:left;">"The concept is not applied to her voice. It is extracted from it."</div>
  <div style="font-family:var(--font-mono);font-size:13px;font-weight:500;color:rgba(0,0,0,0.5);letter-spacing:1px;text-transform:uppercase;margin-top:16px;">Evan Roberts, Lead Designer</div>
  <div class="ed-pullquote-meta" style="margin-bottom:32px;justify-content:flex-start;gap:24px;">
    <span>PQ #002</span>
    <span>The Read</span>
    <span>65 Characters</span>
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
            <td>Read the archive before designing a screen</td>
            <td>The concept came out of her prose instead of a moodboard, so nothing had to be justified backwards.</td>
          </tr>
          <tr>
            <td>Marginalia as the interface</td>
            <td>Her asides sit alongside the text, where the personality actually lives.</td>
          </tr>
          <tr>
            <td>Dated Field Notes as the architecture</td>
            <td>The structure of her own series drives the site instead of a generic writing list.</td>
          </tr>
          <tr>
            <td>Keep the reading on the page</td>
            <td>Every click stays with her rather than shipping the reader off to Substack.</td>
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
            <span style="font-family:var(--font-body);font-size:12px;color:#1a1a1a;font-weight:500;">Archive Read</span>
            <span style="font-family:var(--font-mono);font-size:9px;letter-spacing:1px;background:#1a1a1a;color:#fff;padding:3px 8px;">3 wk</span>
          </div>
          <div style="width:52%;margin-left:8%;background:rgba(0,0,0,0.04);padding:10px 12px;display:flex;justify-content:space-between;align-items:center;">
            <span style="font-family:var(--font-body);font-size:12px;color:#1a1a1a;font-weight:500;">Concept & Direction</span>
            <span style="font-family:var(--font-mono);font-size:9px;letter-spacing:1px;background:#1a1a1a;color:#fff;padding:3px 8px;">3 wk</span>
          </div>
          <div style="width:56%;margin-left:18%;background:rgba(0,0,0,0.04);padding:10px 12px;display:flex;justify-content:space-between;align-items:center;">
            <span style="font-family:var(--font-body);font-size:12px;color:#1a1a1a;font-weight:500;">Type System</span>
            <span style="font-family:var(--font-mono);font-size:9px;letter-spacing:1px;background:#1a1a1a;color:#fff;padding:3px 8px;">5 wk</span>
          </div>
          <div style="width:48%;margin-left:30%;background:rgba(0,0,0,0.04);padding:10px 12px;display:flex;justify-content:space-between;align-items:center;">
            <span style="font-family:var(--font-body);font-size:12px;color:#1a1a1a;font-weight:500;">Build</span>
            <span style="font-family:var(--font-mono);font-size:9px;letter-spacing:1px;background:#1a1a1a;color:#fff;padding:3px 8px;">6 wk</span>
          </div>
          <div style="width:40%;margin-left:44%;background:rgba(0,0,0,0.04);padding:10px 12px;display:flex;justify-content:space-between;align-items:center;">
            <span style="font-family:var(--font-body);font-size:12px;color:#1a1a1a;font-weight:500;">Field Notes</span>
            <span style="font-family:var(--font-mono);font-size:9px;letter-spacing:1px;background:#1a1a1a;color:#fff;padding:3px 8px;">3 wk</span>
          </div>
          <div style="width:44%;margin-left:56%;background:rgba(0,0,0,0.04);padding:10px 12px;display:flex;justify-content:space-between;align-items:center;">
            <span style="font-family:var(--font-body);font-size:12px;color:#1a1a1a;font-weight:500;">Launch & Refinement</span>
            <span style="font-family:var(--font-mono);font-size:9px;letter-spacing:1px;background:#1a1a1a;color:#fff;padding:3px 8px;">cont.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ====== 5. THE SYSTEM ====== -->
<div class="ed-section">
  <div class="ed-label">Title: The Type</div>
  <div class="ed-header">The Type</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;">
    <p class="ed-body">With no logo and no photography to hide behind, <strong>the typeface is the identity</strong>. The face had to carry long-form reading without fatigue and hold her voice at the same time, which means a true italic with real character.</p>
    <p class="ed-body">The wordmark is not a logo. It is her name built from a drifting field of her own initials that resolve into the words and dissolve back into texture as you move through the page. The mark is made of the reading.</p>
  </div>

  <!-- Brand Guidelines Deck -->
  <div class="ed-deck">
    <div class="deck-spacer"></div>
    <img src="assets/site-home.png" alt="System 01">
    <img src="assets/site-about.png" alt="System 02">
    <img src="assets/molly-portrait.jpg" alt="System 03">
    <img src="assets/molly-was-here.jpg" alt="System 04">
  </div>
</div>

<!-- ====== 6. BUILT IN CODE ====== -->
<div class="ed-section">
  <div class="ed-label">Title: The Build</div>
  <div class="ed-header">The Build</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;">
    <p class="ed-body">The whole site is built directly in code, in Next.js. No mockups, no handoff, no translation loss. The wordmark letter-field, the marginalia, the pacing of the scroll, all of it made in the medium it ships in.</p>
    <p class="ed-body">This is what I call <strong>Direct Design</strong>. Build directly in the medium. The browser is the canvas. The feedback loop collapses from weeks to minutes. Every decision is tested against real constraints, real content, real devices. Not a simulation of a website. The website.</p>
  </div>

  <!-- Website Screenshots Deck -->
  <div class="ed-deck">
    <div class="deck-spacer"></div>
    
    <video src="assets/001.mp4" autoplay loop muted playsinline preload="auto" aria-label="Molly Powers, motion 1"></video>
    <video src="assets/005.mp4" autoplay loop muted playsinline preload="auto" aria-label="Molly Powers, motion 2"></video>
    <img src="assets/002.jpg" alt="Build 03">
    <img src="assets/003.jpg" alt="Build 04">
    <img src="assets/004.jpg" alt="Build 05">
    <video src="assets/006.mp4" autoplay loop muted playsinline preload="auto" aria-label="Molly Powers, motion 6"></video>
    <video src="assets/007.mp4" autoplay loop muted playsinline preload="auto" aria-label="Molly Powers, motion 7"></video>
    <img src="assets/008.jpg" alt="Build 08">
  
  </div>

  <p class="ed-body" style="margin-top:24px;">View live site: <a href="https://mollykpowers.com" target="_blank" style="color:var(--text);font-weight:600;">mollykpowers.com</a></p>
</div>

<!-- ====== 8. THE RESULTS ====== -->
<div class="ed-section">
  <div class="ed-label">Title: Results</div>
  <div style="font-family:var(--font-display);font-size:clamp(80px,12vw,180px);font-weight:800;color:#1a1a1a;line-height:0.9;letter-spacing:-0.04em;text-transform:uppercase;margin:16px 0 16px;">The Results</div>
  <div style="font-family:var(--font-display);font-size:clamp(24px,3vw,36px);font-weight:800;color:#1a1a1a;letter-spacing:-0.02em;margin-bottom:32px;text-transform:uppercase;">One Voice. One Type System.</div>

  <!-- Row 1: Stats full width -->
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:40px;margin-bottom:48px;">
    <div>
      <div class="ed-stat">1</div>
      <div class="ed-stat-label">Custom type system, built around her true italic and her register</div>
    </div>
    <div>
      <div class="ed-stat">0</div>
      <div class="ed-stat-label">Templates, stock images, or off-the-shelf faces</div>
    </div>
    <div>
      <div class="ed-stat">100%</div>
      <div class="ed-stat-label">Of her writing read on the page, not shipped off to Substack</div>
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
          <td>A Linktree and a serif default</td>
          <td>A custom type system built around her italic and her register</td>
        </tr>
        <tr>
          <td>A list of essays with arrows out</td>
          <td>Dated Field Notes architecture that keeps the reading here</td>
        </tr>
        <tr>
          <td>Asides buried in a modal</td>
          <td>Marginalia sitting alongside the text, where the voice lives</td>
        </tr>
        <tr>
          <td>A portfolio that describes her writing</td>
          <td>A site that moves in the rhythm of her sentences</td>
        </tr>
        <tr>
          <td>Every click shipped to Substack</td>
          <td>Her work read in full on her own page</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div style="font-family:var(--font-display);font-size:clamp(36px,5vw,64px);font-weight:700;line-height:1.05;color:#1a1a1a;letter-spacing:-0.03em;margin-top:48px;text-align:center;">"The site does not list her writing. It reads like it."</div>
  <div style="font-family:var(--font-mono);font-size:13px;font-weight:500;color:rgba(0,0,0,0.5);letter-spacing:1px;text-transform:uppercase;margin-top:16px;text-align:center;">Molly Powers, Launch</div>
  <div class="ed-pullquote-meta" style="justify-content:center;gap:24px;margin-top:8px;">
    <span>PQ #003</span>
    <span>53 Characters</span>
  </div>
</div>

<!-- ====== 9. PHOTOGRAPHY ====== -->
<div class="ed-section" style="padding-left:0;padding-right:0;">
  <div class="ed-label" style="padding-left:var(--page-pad);">Photography</div>
  <div class="ed-img-grid" style="grid-template-columns:1fr;gap:4px;margin:24px 0 0;">
    <figure><img src="assets/site-unbeso.jpg" alt=""><figcaption style="font-family:var(--font-mono);font-size:9px;color:rgba(0,0,0,0.25);padding:6px 8px;">site-unbeso.jpg</figcaption></figure>
  </div>
</div>

<!-- ====== 10. REFLECTION ====== -->
<div class="ed-section" style="text-align:center;padding:60px var(--page-pad);min-height:100vh;display:flex;flex-direction:column;justify-content:center;">
  <div class="ed-label">Title: Reflection</div>
  <div class="ed-header" style="font-size:clamp(32px,5vw,56px);">What I Would Do Differently</div>
  <div style="max-width:800px;margin:0 auto;">
    <p class="ed-body">The hardest part was restraint. A writer's site tempts you toward gimmicks: cursor trails, noise shaders, five components at forty percent. The read on her work said the opposite. One or two real things, fully made.</p>
    <p class="ed-body">With more time I would build Field Notes into a living, dated index that grows every time she publishes, so the architecture keeps writing itself. But the bet held. Un beso.</p>
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
