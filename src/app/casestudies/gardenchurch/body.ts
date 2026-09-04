export const body = `
<!-- ====== HERO ====== -->
<div class="hero" id="heroSection">
  <div class="hero-body">
    <div class="hero-title" style="letter-spacing:-0.03em;">A Church Full Of Non-Designers Needed A Brand That Designs Itself.</div>
    <div class="hero-facts">
      <div class="hero-meta" style="flex-direction:column;gap:0;max-width:none;margin-top:0;">
        <span>Client: Garden Church</span>
        <span class="hero-scope">Scope:<span class="hero-pill">Brand System</span><span class="hero-pill">Guidelines</span><span class="hero-pill">Templates</span><span class="hero-pill">Training</span><span class="hero-pill">Web</span></span>
        <span>Industry: Faith</span>      </div>
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

<!-- ====== 1. THE RENAME ====== -->
<div class="ed-section no-top-line" style="max-width:900px;margin-left:auto;margin-right:auto;padding-top:100px;padding-bottom:0;">
  <div class="ed-label">Title: The Rename</div>
  <div class="ed-header">The Rename</div>
  <p class="ed-body">Garden Church was planted in 2009 as Anthem CDA. In 2026 it changed its name to match what it had actually become, and <strong>a name change is the moment every inconsistency in a brand becomes visible at once</strong>.</p>
  <p class="ed-body">A church puts out more design per week than most startups. Sunday slides, series artwork, event graphics, social posts, bulletins, signage, the site. None of it made by designers. All of it made on a deadline that does not move.</p>
  <p class="ed-body">The staff did not need a designer. They needed to stop needing one.</p>

  <div class="ed-pullquote">
    <div class="ed-pullquote-text">"Green is the garden floor. Cream is the light through the trees. If a page feels loud, it has lost the green."</div>
    <div style="font-family:var(--font-mono);font-size:13px;font-weight:500;color:rgba(0,0,0,0.5);letter-spacing:1px;text-transform:uppercase;margin-top:16px;">Brand Guidelines, Section 4, Color</div>
    <div class="ed-pullquote-meta">
      <span>PQ #001</span>
      <span>103 Characters</span>
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
    <span class="dissolve-word" style="top:30%;left:30%;font-size:15px;transform:rotate(-3deg);--float-dur:5s;--float-delay:0s;--float-x:4px;--float-y:-6px">OLD NAME</span>
    <span class="dissolve-word" style="top:30%;left:55%;font-size:14px;transform:rotate(2deg);--float-dur:4.2s;--float-delay:0.8s;--float-x:-3px;--float-y:-4px">MIXED LOGOS</span>
    <span class="dissolve-word" style="top:36%;left:22%;font-size:14px;transform:rotate(-1deg);--float-dur:3.8s;--float-delay:1.2s;--float-x:5px;--float-y:-3px">NO TEMPLATES</span>
    <span class="dissolve-word" style="top:36%;left:48%;font-size:16px;transform:rotate(1.5deg);--float-dur:4.6s;--float-delay:0.3s;--float-x:-4px;--float-y:-7px">NO GUIDELINES</span>
    <span class="dissolve-word" style="top:42%;left:35%;font-size:14px;transform:rotate(-2deg);--float-dur:5.2s;--float-delay:1.5s;--float-x:3px;--float-y:-5px">DRIFTING COLOR</span>
    <span class="dissolve-word" style="top:42%;left:58%;font-size:15px;transform:rotate(3deg);--float-dur:4s;--float-delay:0.6s;--float-x:-5px;--float-y:-4px">HALLWAY REQUESTS</span>
    <span class="dissolve-word" style="top:48%;left:20%;font-size:13px;transform:rotate(-1.5deg);--float-dur:4.8s;--float-delay:2s;--float-x:4px;--float-y:-6px">NO APPROVAL PATH</span>
    <span class="dissolve-word" style="top:48%;left:52%;font-size:15px;transform:rotate(2.5deg);--float-dur:5.5s;--float-delay:0.4s;--float-x:-3px;--float-y:-5px">NO PHOTO DIRECTION</span>
    <span class="dissolve-word" style="top:54%;left:32%;font-size:14px;transform:rotate(-3deg);--float-dur:3.6s;--float-delay:1s;--float-x:5px;--float-y:-3px">BLANK CANVAS</span>
    <span class="dissolve-word" style="top:54%;left:55%;font-size:14px;transform:rotate(1deg);--float-dur:4.4s;--float-delay:1.8s;--float-x:-4px;--float-y:-6px">VOLUNTEER GUESSWORK</span>
  </div>
  <div style="max-width:900px;margin-left:calc(50% - 420px);margin-right:auto;position:relative;z-index:1;">
    <div class="gap-stats" style="position:absolute;right:calc(100% + 220px);top:0;width:180px;text-align:left;">
      <div class="ed-stat">90</div>
      <div class="ed-stat-label">Day retainer to build and hand over the whole system</div>
      <div class="ed-stat">39</div>
      <div class="ed-stat-label">Pages of brand guidelines across six sections</div>
      <div class="ed-stat">2</div>
      <div class="ed-stat-label">Domains served by one build, current and legacy</div>
    </div>
    <p class="ed-body">Every week a volunteer opened a blank canvas and made a decision a brand system should have already made for them. Every one of those decisions was a small drift away from the last.</p>
    <p class="ed-body">I was brought in for the rename and the brand system, but the actual brief underneath was operational: <strong>build something a team with no design training can run correctly on a Saturday night without asking anyone.</strong></p>
    <p class="ed-body">That reframes the deliverable. A system is a set of decisions already made.</p>
  </div>
  </div>
  <figure style="margin:80px 0 0;position:relative;z-index:1;width:100vw;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);">
    <img src="assets/community.jpg" alt="Garden Church gathering" style="width:100%;height:100vh;object-fit:cover;display:block;">
    <figcaption style="font-family:var(--font-mono);font-size:9px;color:rgba(0,0,0,0.25);letter-spacing:1px;margin-top:6px;padding-left:var(--page-pad);">community.jpg</figcaption>
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
      <p class="ed-body">I drew a nine-point symbol and locked it to a wide grotesque wordmark, <strong>locked as one unit</strong>, supplied white-on-green as primary and green-on-cream as secondary. It is never redrawn and never cramped.</p>
      <p class="ed-body">Forest green is the ground, warm cream is the relief, charcoal carries the reading text, and sage tints but never shouts. I specified the proportions as ratios: green holds roughly sixty percent of a branded surface, cream twenty-five, charcoal ten, sage five.</p>
      <p class="ed-body">That ratio is the single most useful thing in the document, because it answers the question a volunteer actually has, which is <strong>how much green goes on a wall.</strong></p>
      <p class="ed-body">Photography is where church branding usually goes wrong. Stage closeups, flash, crowd shots, production gear in frame. I wrote the direction to run the other way. Lead with the sacred ordinary, people in relationship, natural light and breathing room.</p>
    </div>
    <div style="margin-top:-100px;width:calc(100% + 80px);margin-left:-80px;">
      <figure style="margin:0;">
        <img src="assets/approach.jpg" alt="Garden Church site, home" style="width:100%;aspect-ratio:1.587;object-fit:cover;display:block;">
        <figcaption style="font-family:var(--font-mono);font-size:9px;color:rgba(0,0,0,0.25);letter-spacing:1px;margin-top:6px;">approach.jpg</figcaption>
      </figure>
    </div>
  </div>

  <div style="font-family:var(--font-display);font-size:clamp(28px,3.5vw,42px);font-weight:700;line-height:1.08;color:#1a1a1a;letter-spacing:-0.02em;margin:40px 0 16px 0;max-width:66%;text-align:left;">"Guidelines nobody follows are decoration."</div>
  <div style="font-family:var(--font-mono);font-size:13px;font-weight:500;color:rgba(0,0,0,0.5);letter-spacing:1px;text-transform:uppercase;margin-top:16px;">Evan Roberts, Lead Designer</div>
  <div class="ed-pullquote-meta" style="margin-bottom:32px;justify-content:flex-start;gap:24px;">
    <span>PQ #002</span>
    <span>The Operational Brief</span>
    <span>40 Characters</span>
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
            <td>Rules written as sentences a volunteer can act on</td>
            <td>A volunteer gets a sentence they can follow at 9pm without calling anyone.</td>
          </tr>
          <tr>
            <td>Colour specified as surface proportion</td>
            <td>Sixty, twenty-five, ten, five. The ratio settles a layout in one line.</td>
          </tr>
          <tr>
            <td>Template library over one-off requests</td>
            <td>The recurring weekly assets start from a correct file.</td>
          </tr>
          <tr>
            <td>One intake route, named decision owners</td>
            <td>Approval stopped being a committee, a hallway ask, and a group text.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Right: Scope of Work -->
    <div>
      <div style="font-family:var(--font-display);font-size:clamp(24px,3vw,36px);font-weight:800;color:#1a1a1a;text-transform:uppercase;letter-spacing:-0.02em;margin-bottom:24px;">Scope of Work</div>

      <!-- Timeline header -->
      <div style="display:grid;grid-template-columns:repeat(5,1fr);font-family:var(--font-mono);font-size:9px;letter-spacing:1.5px;color:rgba(0,0,0,0.25);text-transform:uppercase;margin-bottom:8px;padding:0 4px;">
        <span>Jun 26</span>
        <span>Jul 26</span>
        <span>Aug 26</span>
        <span>Sep 26</span>
        <span>Oct 26</span>
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
            <span style="font-family:var(--font-body);font-size:12px;color:#1a1a1a;font-weight:500;">Rename & Direction</span>
            <span style="font-family:var(--font-mono);font-size:9px;letter-spacing:1px;background:#1a1a1a;color:#fff;padding:3px 8px;">3 wk</span>
          </div>
          <div style="width:52%;margin-left:8%;background:rgba(0,0,0,0.04);padding:10px 12px;display:flex;justify-content:space-between;align-items:center;">
            <span style="font-family:var(--font-body);font-size:12px;color:#1a1a1a;font-weight:500;">Identity System</span>
            <span style="font-family:var(--font-mono);font-size:9px;letter-spacing:1px;background:#1a1a1a;color:#fff;padding:3px 8px;">4 wk</span>
          </div>
          <div style="width:56%;margin-left:18%;background:rgba(0,0,0,0.04);padding:10px 12px;display:flex;justify-content:space-between;align-items:center;">
            <span style="font-family:var(--font-body);font-size:12px;color:#1a1a1a;font-weight:500;">Guidelines</span>
            <span style="font-family:var(--font-mono);font-size:9px;letter-spacing:1px;background:#1a1a1a;color:#fff;padding:3px 8px;">6 wk</span>
          </div>
          <div style="width:48%;margin-left:30%;background:rgba(0,0,0,0.04);padding:10px 12px;display:flex;justify-content:space-between;align-items:center;">
            <span style="font-family:var(--font-body);font-size:12px;color:#1a1a1a;font-weight:500;">Template Library</span>
            <span style="font-family:var(--font-mono);font-size:9px;letter-spacing:1px;background:#1a1a1a;color:#fff;padding:3px 8px;">4 wk</span>
          </div>
          <div style="width:40%;margin-left:44%;background:rgba(0,0,0,0.04);padding:10px 12px;display:flex;justify-content:space-between;align-items:center;">
            <span style="font-family:var(--font-body);font-size:12px;color:#1a1a1a;font-weight:500;">Website</span>
            <span style="font-family:var(--font-mono);font-size:9px;letter-spacing:1px;background:#1a1a1a;color:#fff;padding:3px 8px;">5 wk</span>
          </div>
          <div style="width:44%;margin-left:56%;background:rgba(0,0,0,0.04);padding:10px 12px;display:flex;justify-content:space-between;align-items:center;">
            <span style="font-family:var(--font-body);font-size:12px;color:#1a1a1a;font-weight:500;">Training & Handoff</span>
            <span style="font-family:var(--font-mono);font-size:9px;letter-spacing:1px;background:#1a1a1a;color:#fff;padding:3px 8px;">2 wk</span>
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
    <p class="ed-body">Thirty-nine pages across six sections: story, identity, typography, colour, photography, and voice.</p>
    <p class="ed-body">I wrote it to be read by people who have never opened a design file. The photography direction names the high-priority subjects and, more usefully, the low-priority ones. <strong>The low-priority list is the one people actually use.</strong></p>
  </div>

  <!-- Brand Guidelines Deck -->
  <div class="ed-deck">
    <div class="deck-spacer"></div>
    
    <img src="assets/gl-01.jpg" alt="Brand Guidelines 01">
    <img src="assets/gl-02.jpg" alt="Brand Guidelines 02">
    <img src="assets/gl-03.jpg" alt="Brand Guidelines 03">
    <img src="assets/gl-04.jpg" alt="Brand Guidelines 04">
    <img src="assets/gl-05.jpg" alt="Brand Guidelines 05">
    <img src="assets/gl-06.jpg" alt="Brand Guidelines 06">
    <img src="assets/gl-07.jpg" alt="Brand Guidelines 07">
    <img src="assets/gl-08.jpg" alt="Brand Guidelines 08">
    <img src="assets/gl-09.jpg" alt="Brand Guidelines 09">
    <img src="assets/gl-10.jpg" alt="Brand Guidelines 10">
    <img src="assets/gl-11.jpg" alt="Brand Guidelines 11">
    <img src="assets/gl-12.jpg" alt="Brand Guidelines 12">
    <img src="assets/gl-13.jpg" alt="Brand Guidelines 13">
    <img src="assets/gl-14.jpg" alt="Brand Guidelines 14">
    <img src="assets/gl-15.jpg" alt="Brand Guidelines 15">
    <img src="assets/gl-16.jpg" alt="Brand Guidelines 16">
    <img src="assets/gl-17.jpg" alt="Brand Guidelines 17">
    <img src="assets/gl-18.jpg" alt="Brand Guidelines 18">
    <img src="assets/gl-19.jpg" alt="Brand Guidelines 19">
    <img src="assets/gl-20.jpg" alt="Brand Guidelines 20">
    <img src="assets/gl-21.jpg" alt="Brand Guidelines 21">
    <img src="assets/gl-22.jpg" alt="Brand Guidelines 22">
    <img src="assets/gl-23.jpg" alt="Brand Guidelines 23">
    <img src="assets/gl-24.jpg" alt="Brand Guidelines 24">
    <img src="assets/gl-25.jpg" alt="Brand Guidelines 25">
    <img src="assets/gl-26.jpg" alt="Brand Guidelines 26">
    <img src="assets/gl-27.jpg" alt="Brand Guidelines 27">
    <img src="assets/gl-28.jpg" alt="Brand Guidelines 28">
    <img src="assets/gl-29.jpg" alt="Brand Guidelines 29">
    <img src="assets/gl-30.jpg" alt="Brand Guidelines 30">
    <img src="assets/gl-31.jpg" alt="Brand Guidelines 31">
    <img src="assets/gl-32.jpg" alt="Brand Guidelines 32">
    <img src="assets/gl-33.jpg" alt="Brand Guidelines 33">
    <img src="assets/gl-34.jpg" alt="Brand Guidelines 34">
    <img src="assets/gl-35.jpg" alt="Brand Guidelines 35">
    <img src="assets/gl-36.jpg" alt="Brand Guidelines 36">
    <img src="assets/gl-37.jpg" alt="Brand Guidelines 37">
    <img src="assets/gl-38.jpg" alt="Brand Guidelines 38">
    <img src="assets/gl-39.jpg" alt="Brand Guidelines 39">
  
  </div>
</div>

<!-- ====== 6. BUILT IN CODE ====== -->
<div class="ed-section">
  <div class="ed-label">Title: The Website</div>
  <div class="ed-header">The Website</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;">
    <p class="ed-body">Built directly in code, serving both the current and the legacy domain so nobody arrives at a dead link after the rename.</p>
    <p class="ed-body">The site is the one asset the volunteers never have to maintain, so it had to be the reference for everything they do make. Building it in the browser meant the type scale and the green ratio were proven on a real page before they went into the book.</p>
  </div>

  <!-- Website Screenshots Deck -->
  <div class="ed-deck">
    <div class="deck-spacer"></div>
    
    <img src="assets/site-01.jpg" alt="Website 01">
    <img src="assets/site-02.jpg" alt="Website 02">
    <img src="assets/site-03.jpg" alt="Website 03">
    <img src="assets/site-04.jpg" alt="Website 04">
  
  </div>

  <p class="ed-body" style="margin-top:24px;">View live site: <a href="https://gardencda.com" target="_blank" style="color:var(--text);font-weight:600;">gardencda.com</a></p>
</div>

<!-- ====== 8. THE RESULTS ====== -->
<div class="ed-section">
  <div class="ed-label">Title: Results</div>
  <div style="font-family:var(--font-display);font-size:clamp(80px,12vw,180px);font-weight:800;color:#1a1a1a;line-height:0.9;letter-spacing:-0.04em;text-transform:uppercase;margin:16px 0 16px;">The Results</div>
  <div style="font-family:var(--font-display);font-size:clamp(24px,3vw,36px);font-weight:800;color:#1a1a1a;letter-spacing:-0.02em;margin-bottom:32px;text-transform:uppercase;">Ninety Days, One System.</div>

  <!-- Row 1: Stats full width -->
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:40px;margin-bottom:48px;">
    <div>
      <div class="ed-stat">39</div>
      <div class="ed-stat-label">A brand book handed over, not a deck presented</div>
    </div>
    <div>
      <div class="ed-stat">0</div>
      <div class="ed-stat-label">Designers needed to run a normal week</div>
    </div>
    <div>
      <div class="ed-stat">2</div>
      <div class="ed-stat-label">Domains served by a single build</div>
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
          <td>Two names in circulation</td>
          <td>One lockup, handed over as a single file nobody can assemble wrong</td>
        </tr>
        <tr>
          <td>Colour chosen per asset</td>
          <td>A ratio that answers the question before it gets asked</td>
        </tr>
        <tr>
          <td>A blank canvas every Saturday night</td>
          <td>Slides, series art, and bulletins each start from a correct file</td>
        </tr>
        <tr>
          <td>Requests arriving as hallway asks</td>
          <td>One route in, and a named person who owns the yes</td>
        </tr>
        <tr>
          <td>Stage-lit crowd photography</td>
          <td>A shot list volunteers can carry on a phone</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div style="font-family:var(--font-display);font-size:clamp(36px,5vw,64px);font-weight:700;line-height:1.05;color:#1a1a1a;letter-spacing:-0.03em;margin-top:48px;text-align:center;">"The measure is whether it still looks like itself six months later, made by people who were never trained as designers."</div>
  <div style="font-family:var(--font-mono);font-size:13px;font-weight:500;color:rgba(0,0,0,0.5);letter-spacing:1px;text-transform:uppercase;margin-top:16px;text-align:center;">Garden Church, Handover</div>
  <div class="ed-pullquote-meta" style="justify-content:center;gap:24px;margin-top:8px;">
    <span>PQ #003</span>
    <span>119 Characters</span>
  </div>
</div>

<!-- ====== 9. PHOTOGRAPHY ====== -->
<div class="ed-section" style="padding-left:0;padding-right:0;">
  <div class="ed-label" style="padding-left:var(--page-pad);">Photography</div>
  <div class="ed-img-grid" style="grid-template-columns:1fr 1fr 1fr;gap:4px;margin:24px 0 0;">
    <figure><img src="assets/hero.jpg" alt=""><figcaption style="font-family:var(--font-mono);font-size:9px;color:rgba(0,0,0,0.25);padding:6px 8px;">hero.jpg</figcaption></figure>
    <figure><img src="assets/worship.jpg" alt=""><figcaption style="font-family:var(--font-mono);font-size:9px;color:rgba(0,0,0,0.25);padding:6px 8px;">worship.jpg</figcaption></figure>
    <figure><img src="assets/approach.jpg" alt=""><figcaption style="font-family:var(--font-mono);font-size:9px;color:rgba(0,0,0,0.25);padding:6px 8px;">approach.jpg</figcaption></figure>
    <figure><img src="assets/gc-03.jpg" alt=""><figcaption style="font-family:var(--font-mono);font-size:9px;color:rgba(0,0,0,0.25);padding:6px 8px;">gc-03.jpg</figcaption></figure>
    <figure><img src="assets/gc-04.jpg" alt=""><figcaption style="font-family:var(--font-mono);font-size:9px;color:rgba(0,0,0,0.25);padding:6px 8px;">gc-04.jpg</figcaption></figure>
    <figure><img src="assets/gc-05.jpg" alt=""><figcaption style="font-family:var(--font-mono);font-size:9px;color:rgba(0,0,0,0.25);padding:6px 8px;">gc-05.jpg</figcaption></figure>
  </div>
</div>

<!-- ====== 10. REFLECTION ====== -->
<div class="ed-section" style="text-align:center;padding:60px var(--page-pad);min-height:100vh;display:flex;flex-direction:column;justify-content:center;">
  <div class="ed-label">Title: Reflection</div>
  <div class="ed-header" style="font-size:clamp(32px,5vw,56px);">What I Would Do Differently</div>
  <div style="max-width:800px;margin:0 auto;">
    <p class="ed-body">With more time I would have run the training session twice, once before the guidelines were final and once after, because the questions people ask when they are actually making something are different from the questions they ask reading a document.</p>
    <p class="ed-body">The brand book was half the work. The operational half is what decides whether any of it survives.</p>
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
