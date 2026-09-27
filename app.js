/**
 * JobDork - Precision ATS Job Search & Direct Queries
 * Core Application Logic
 */

// --- 1. ATS Platform Definitions (Ad-Free, Direct ATS Targets) ---
const PLATFORMS = [
  // Top Tier Tech ATS
  {
    id: "greenhouse",
    name: "Greenhouse",
    category: "top-tech",
    badge: "Top Tech ATS",
    dork: "(site:boards.greenhouse.io OR site:job-boards.greenhouse.io)",
    description: "Used by top tech companies, unicorns, and high-growth engineering teams."
  },
  {
    id: "lever",
    name: "Lever",
    category: "top-tech",
    badge: "Top Tech ATS",
    dork: "(site:jobs.lever.co OR site:lever.co) -jobgether",
    description: "Standard ATS for innovative tech organizations and modern startups."
  },
  {
    id: "ashby",
    name: "Ashby",
    category: "top-tech",
    badge: "Top Tech ATS",
    dork: "(site:jobs.ashbyhq.com OR site:ashbyhq.com)",
    description: "Fast-growing high-performance ATS favored by top AI and SaaS companies."
  },
  {
    id: "rippling",
    name: "Rippling",
    category: "top-tech",
    badge: "Top Tech ATS",
    dork: "(site:rippling.com OR site:rippling-ats.com)",
    description: "All-in-one HR & ATS platform for fast-scaling engineering teams."
  },
  {
    id: "dover",
    name: "Dover",
    category: "top-tech",
    badge: "Top Tech ATS",
    dork: "(site:dover.io OR site:dover.com)",
    description: "Modern recruiting engine and career pages for venture-backed startups."
  },

  // Enterprise ATS
  {
    id: "workday",
    name: "Workday Jobs",
    category: "enterprise",
    badge: "Enterprise ATS",
    dork: "site:myworkdayjobs.com",
    description: "The primary ATS used by Fortune 500, global tech giants, and enterprise firms."
  },
  {
    id: "smartrecruiters",
    name: "SmartRecruiters",
    category: "enterprise",
    badge: "Enterprise ATS",
    dork: "site:jobs.smartrecruiters.com",
    description: "Enterprise talent acquisition system for large global enterprises."
  },
  {
    id: "icims",
    name: "iCIMS",
    category: "enterprise",
    badge: "Enterprise ATS",
    dork: "site:icims.com",
    description: "Cloud recruiting platform for high-volume enterprise employers."
  },
  {
    id: "oraclecloud",
    name: "Oracle Cloud HCM",
    category: "enterprise",
    badge: "Enterprise ATS",
    dork: "site:oraclecloud.com",
    description: "Direct enterprise careers hosted on Oracle Cloud Recruiting."
  },
  {
    id: "successfactors",
    name: "SAP SuccessFactors",
    category: "enterprise",
    badge: "Enterprise ATS",
    dork: "site:successfactors.com",
    description: "Enterprise career portal standard across global enterprise companies."
  },
  {
    id: "taleo",
    name: "Oracle Taleo",
    category: "enterprise",
    badge: "Enterprise ATS",
    dork: "site:taleo.net",
    description: "Enterprise ATS legacy system with thousands of active global postings."
  },
  {
    id: "adp",
    name: "ADP Workforce",
    category: "enterprise",
    badge: "Enterprise ATS",
    dork: "(site:workforcenow.adp.com OR site:myjobs.adp.com)",
    description: "Direct career listings hosted on ADP Workforce Now."
  },
  {
    id: "dayforce",
    name: "Dayforce",
    category: "enterprise",
    badge: "Enterprise ATS",
    dork: "site:dayforcehcm.com",
    description: "Human capital management enterprise career portals."
  },
  {
    id: "paylocity",
    name: "Paylocity",
    category: "enterprise",
    badge: "Enterprise ATS",
    dork: "site:recruiting.paylocity.com",
    description: "Popular recruiting portal for mid-market and enterprise businesses."
  },
  {
    id: "avature",
    name: "Avature",
    category: "enterprise",
    badge: "Enterprise ATS",
    dork: "site:avature.net",
    description: "Enterprise talent acquisition used by corporate consulting and tech leaders."
  },
  {
    id: "trinethire",
    name: "TriNet Hire",
    category: "enterprise",
    badge: "Enterprise ATS",
    dork: "site:trinethire.com",
    description: "Recruiting platform for tech startups and medium-sized corporations."
  },

  // Modern & Growth ATS
  {
    id: "pinpoint",
    name: "Pinpoint",
    category: "growth",
    badge: "Modern ATS",
    dork: "site:pinpointhq.com",
    description: "Modern ATS designed to attract top software talent."
  },
  {
    id: "workable",
    name: "Workable",
    category: "growth",
    badge: "Modern ATS",
    dork: "(site:jobs.workable.com OR site:apply.workable.com)",
    description: "Leading hiring platform with thousands of active tech openings."
  },
  {
    id: "breezy",
    name: "BreezyHR",
    category: "growth",
    badge: "Modern ATS",
    dork: "site:breezy.hr",
    description: "Streamlined modern hiring platform for fast-growing businesses."
  },
  {
    id: "recruitee",
    name: "Recruitee / Tellent",
    category: "growth",
    badge: "Modern ATS",
    dork: "(site:recruitee.com OR site:tellent.com)",
    description: "Collaborative hiring platform popular among European & US tech firms."
  },
  {
    id: "teamtailor",
    name: "Teamtailor",
    category: "growth",
    badge: "Modern ATS",
    dork: "site:teamtailor.com",
    description: "Employer branding and candidate career portal for top design & engineering firms."
  },
  {
    id: "personio",
    name: "Personio",
    category: "growth",
    badge: "Modern ATS",
    dork: "(site:personio.com OR site:personio.de)",
    description: "Leading European HR and recruitment portal for high-growth tech companies."
  },
  {
    id: "join",
    name: "Join.com",
    category: "growth",
    badge: "Modern ATS",
    dork: "site:join.com",
    description: "Fast-expanding tech hiring engine across North America and Europe."
  },
  {
    id: "factorial",
    name: "Factorial",
    category: "growth",
    badge: "Modern ATS",
    dork: "site:factorialhr.com",
    description: "HR and recruitment portal popular among modern engineering shops."
  },
  {
    id: "keka",
    name: "Keka HR",
    category: "growth",
    badge: "Modern ATS",
    dork: "site:keka.com",
    description: "Widely used HR & ATS platform for engineering teams across APAC & global."
  },
  {
    id: "zoho",
    name: "Zoho Recruit",
    category: "growth",
    badge: "Modern ATS",
    dork: "site:zohorecruit.com",
    description: "Recruitment portal for product companies and technology startups."
  },
  {
    id: "jazzhr",
    name: "JazzHR",
    category: "growth",
    badge: "Modern ATS",
    dork: "site:applytojob.com",
    description: "Direct job application portal for high-velocity tech hiring."
  },
  {
    id: "jobvite",
    name: "Jobvite",
    category: "growth",
    badge: "Modern ATS",
    dork: "site:jobvite.com",
    description: "Comprehensive talent platform used by mid-market tech enterprises."
  },
  {
    id: "gem",
    name: "Gem",
    category: "growth",
    badge: "Modern ATS",
    dork: "site:gem.com",
    description: "Modern sourcing and recruitment platform used by premier Silicon Valley firms."
  },
  {
    id: "trakstar",
    name: "Trakstar Hire",
    category: "growth",
    badge: "Modern ATS",
    dork: "site:trakstar.com",
    description: "Talent acquisition portal for software engineering and modern startups."
  },
  {
    id: "homerun",
    name: "Homerun",
    category: "growth",
    badge: "Modern ATS",
    dork: "site:homerun.co",
    description: "Creative & tech-friendly job boards for boutique engineering studios."
  },
  {
    id: "cats",
    name: "Catsone",
    category: "growth",
    badge: "Modern ATS",
    dork: "site:catsone.com",
    description: "Applicant tracking system used by specialized tech search agencies."
  },
  {
    id: "gusto",
    name: "Gusto Jobs",
    category: "growth",
    badge: "Modern ATS",
    dork: "site:jobs.gusto.com",
    description: "Direct job listings for companies hosted on Gusto's hiring portal."
  },
  {
    id: "notion",
    name: "Notion Job Pages",
    category: "growth",
    badge: "Modern ATS",
    dork: "site:notion.site",
    description: "Direct startup career boards published on public Notion workspaces."
  },

  // Startup Portals
  {
    id: "wellfound",
    name: "Wellfound (AngelList)",
    category: "startups",
    badge: "Startup Portal",
    dork: "site:wellfound.com",
    description: "Direct engineering opportunities at seed to Series B startups."
  },
  {
    id: "workatastartup",
    name: "Y Combinator (Work at a Startup)",
    category: "startups",
    badge: "Startup Portal",
    dork: "site:workatastartup.com",
    description: "Official job portal for YC portfolio companies across all batches."
  },
  {
    id: "builtin",
    name: "Built In",
    category: "startups",
    badge: "Startup Portal",
    dork: "site:builtin.com/job/",
    description: "Tech hub job directory covering major US tech hubs & remote hubs."
  },
  {
    id: "linkedin_dork",
    name: "LinkedIn (Direct via Search)",
    category: "startups",
    badge: "Direct Dork",
    dork: "site:linkedin.com/jobs -\"No longer accepting applications\" \"apply\"",
    description: "Bypasses sponsored ads to surface fresh, directly active LinkedIn postings."
  },

  // Aggregated & Catch-All Dorks
  {
    id: "careers_subdomains",
    name: "Careers Pages Subdomains",
    category: "catchall",
    badge: "Catch-All Dork",
    dork: "(site:careers.* OR site:*/careers/* OR site:*/career/*)",
    description: "Finds direct company careers portals hosted on proprietary corporate domains."
  },
  {
    id: "jobs_subdomains",
    name: "Jobs Subdomains",
    category: "catchall",
    badge: "Catch-All Dork",
    dork: "site:jobs.*",
    description: "Matches any company running dedicated `jobs.company.com` career subdomains."
  },
  {
    id: "people_talent_subdomains",
    name: "People & Talent Subdomains",
    category: "catchall",
    badge: "Catch-All Dork",
    dork: "(site:people.* OR site:talent.*)",
    description: "Matches internal recruiting portals under people.* or talent.* prefixes."
  },
  {
    id: "tail_ats_dork",
    name: "Other 15+ ATS Dork (BambooHR, Taleo, etc.)",
    category: "catchall",
    badge: "Multi-ATS Dork",
    dork: "(site:bamboohr.com OR site:recruiting.ultipro.com OR site:careerplug.com OR site:paycomonline.net OR site:brassring.com OR site:csod.com OR site:freshteam.com OR site:comeet.com OR site:careers-page.com OR site:jobscore.com OR site:applicantpro.com OR site:applicantstack.com OR site:careers.hireology.com OR site:work.fountain.com OR site:workstream.us)",
    description: "Massive boolean dork catching BambooHR, Paycom, Comeet, UltiPro and 12+ other ATS systems."
  },
  {
    id: "direct_openings_dork",
    name: "Direct Openings & Vacancies",
    category: "catchall",
    badge: "Direct Pages Dork",
    dork: "(site:*/employment/* OR site:*/vacancies/* OR site:*/opportunities/* OR site:*/openings/* OR site:*/join-us/* OR site:*/work-with-us/*)",
    description: "Deep crawl of unindexed career pages matching join-us, vacancies, and opportunities."
  }
];

// --- 2. State Management ---
const state = {
  jobTitle: "Software Engineer",
  titleMode: "unquoted", // "unquoted" (default) or "exact"
  techStack: [],
  stackLogic: "AND", // "AND" or "OR"
  location: "india",
  customLocation: "",
  workplaceType: "all", // "all", "remote_only", or "onsite"
  experience: "",
  timePosted: "24h",
  searchEngine: "google",
  activeCategory: "all",
  platformSearchQuery: "",
  checkedPlatforms: new Set(),
};

// --- 3. URL Construction Helpers for Search Engines ---
function buildGoogleUrl(query, timeFilter) {
  const timeMap = {
    "1h": "qdr:h",
    "4h": "qdr:h4",
    "8h": "qdr:h8",
    "12h": "qdr:h12",
    "24h": "qdr:d",
    "48h": "qdr:d2",
    "72h": "qdr:d3",
    "3d": "qdr:d3",
    "1w": "qdr:w",
    "7d": "qdr:w",
    "1m": "qdr:m",
    "30d": "qdr:m",
    "all": "",
    "any": ""
  };
  const tbs = timeMap[timeFilter];
  let url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  if (tbs) {
    url += `&tbs=${tbs}`;
  }
  return url;
}

function buildDuckDuckGoUrl(query, timeFilter) {
  const timeMap = {
    "1h": "d",
    "4h": "d",
    "8h": "d",
    "12h": "d",
    "24h": "d",
    "48h": "w",
    "72h": "w",
    "3d": "w",
    "1w": "w",
    "7d": "w",
    "1m": "m",
    "30d": "m",
    "all": "",
    "any": ""
  };
  const df = timeMap[timeFilter];
  let url = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
  if (df) {
    url += `&df=${df}`;
  }
  return url;
}

function buildBingUrl(query, timeFilter) {
  const timeMap = {
    "1h": "ex1:\"ez1\"",
    "4h": "ex1:\"ez1\"",
    "8h": "ex1:\"ez1\"",
    "12h": "ex1:\"ez1\"",
    "24h": "ex1:\"ez1\"",
    "48h": "ex1:\"ez2\"",
    "72h": "ex1:\"ez2\"",
    "3d": "ex1:\"ez2\"",
    "1w": "ex1:\"ez2\"",
    "7d": "ex1:\"ez2\"",
    "1m": "ex1:\"ez3\"",
    "30d": "ex1:\"ez3\"",
    "all": "",
    "any": ""
  };
  const filter = timeMap[timeFilter];
  let url = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
  if (filter) {
    url += `&filters=${encodeURIComponent(filter)}`;
  }
  return url;
}

function buildBraveUrl(query, timeFilter) {
  const timeMap = {
    "1h": "pd",
    "4h": "pd",
    "8h": "pd",
    "12h": "pd",
    "24h": "pd",
    "48h": "pw",
    "72h": "pw",
    "3d": "pw",
    "1w": "pw",
    "7d": "pw",
    "1m": "pm",
    "30d": "pm",
    "all": "",
    "any": ""
  };
  const tf = timeMap[timeFilter];
  let url = `https://search.brave.com/search?q=${encodeURIComponent(query)}`;
  if (tf) {
    url += `&tf=${tf}`;
  }
  return url;
}

function buildKagiUrl(query) {
  return `https://kagi.com/search?q=${encodeURIComponent(query)}`;
}

function buildStartpageUrl(query) {
  return `https://www.startpage.com/sp/search?query=${encodeURIComponent(query)}`;
}

function buildSearchUrl(engine, query, timeFilter) {
  switch (engine) {
    case "duckduckgo":
      return buildDuckDuckGoUrl(query, timeFilter);
    case "bing":
      return buildBingUrl(query, timeFilter);
    case "brave":
      return buildBraveUrl(query, timeFilter);
    case "kagi":
      return buildKagiUrl(query);
    case "startpage":
      return buildStartpageUrl(query);
    case "google":
    default:
      return buildGoogleUrl(query, timeFilter);
  }
}

// --- 4. Query Synthesis Engine ---
function getSynthesizedQueryParts() {
  const parts = [];

  // 1. Job Title (without quotes as requested)
  let rawTitle = state.jobTitle.trim();
  if (state.experience) {
    rawTitle = `${state.experience} ${rawTitle}`;
  }

  if (rawTitle) {
    if (state.titleMode === "exact") {
      // If user specifically requested strict quotes
      parts.push(`"${rawTitle}"`);
    } else {
      // Default & Standard: Unquoted role (without "")
      parts.push(rawTitle);
    }
  }

  // 2. Tech Stack: Skills in "" joined with AND
  if (state.techStack.length > 0) {
    const quotedSkills = state.techStack.map(t => {
      const clean = t.trim().replace(/^"|"$/g, ""); // strip any existing accidental quotes
      return `"${clean}"`;
    });

    if (quotedSkills.length === 1) {
      parts.push(quotedSkills[0]);
    } else {
      if (state.stackLogic === "OR") {
        parts.push(`(${quotedSkills.join(" OR ")})`);
      } else {
        // Joined with explicit AND
        parts.push(quotedSkills.join(" AND "));
      }
    }
  }

  // 3. Location & Workplace handling (Strict Geographic Filtering)
  let locExpr = "";
  const loc = state.location;
  const wp = state.workplaceType; // "all", "remote_only", or "onsite"

  let baseRegion = "";
  if (loc === "india") {
    baseRegion = "India";
  } else if (loc === "us") {
    baseRegion = "(USA OR US OR \"United States\")";
  } else if (loc === "canada") {
    baseRegion = "(Canada OR Toronto OR Vancouver)";
  } else if (loc === "uk") {
    baseRegion = "(UK OR London OR \"United Kingdom\")";
  } else if (loc === "europe") {
    baseRegion = "(Europe OR EU OR EMEA)";
  } else if (loc === "germany") {
    baseRegion = "(Germany OR Berlin OR Munich)";
  } else if (loc === "australia") {
    baseRegion = "(Australia OR Sydney OR Melbourne)";
  } else if (loc === "remote_worldwide") {
    baseRegion = "remote";
  } else if (loc === "custom") {
    const customVal = state.customLocation.trim();
    if (customVal) {
      baseRegion = customVal.includes(" ") ? `"${customVal}"` : customVal;
    }
  }

  if (baseRegion) {
    if (loc === "remote_worldwide") {
      locExpr = "remote";
    } else if (wp === "remote_only") {
      // Must be located in this region AND be remote (e.g. "India remote")
      locExpr = `${baseRegion} remote`;
    } else if (wp === "onsite") {
      // Located in this region, excluding remote
      locExpr = `${baseRegion} -remote`;
    } else {
      // All listings in this region (on-site, hybrid, and regional remote)
      locExpr = baseRegion;
    }
  }

  if (locExpr) {
    parts.push(locExpr);
  }

  return parts;
}

function getCoreQuery() {
  const parts = getSynthesizedQueryParts();
  return parts.join(" ");
}

function getPlatformQuery(platform) {
  const core = getCoreQuery();
  if (!platform.dork) return core;
  return `${core} ${platform.dork}`;
}

// --- 5. DOM Elements & Binding ---
const dom = {
  jobTitleInput: document.getElementById("jobTitleInput"),
  clearJobBtn: document.getElementById("clearJobBtn"),
  titleModeUnquotedBtn: document.getElementById("titleModeUnquotedBtn"),
  titleModeExactBtn: document.getElementById("titleModeExactBtn"),
  quickRoles: document.getElementById("quickRoles"),
  logicAndBtn: document.getElementById("logicAndBtn"),
  logicOrBtn: document.getElementById("logicOrBtn"),
  selectedStackList: document.getElementById("selectedStackList"),
  customTechInput: document.getElementById("customTechInput"),
  addTechBtn: document.getElementById("addTechBtn"),
  suggestedTechPills: document.getElementById("suggestedTechPills"),
  locationSelect: document.getElementById("locationSelect"),
  customLocWrapper: document.getElementById("customLocWrapper"),
  customLocationInput: document.getElementById("customLocationInput"),
  workplaceTypeSelect: document.getElementById("workplaceTypeSelect"),
  experienceSelect: document.getElementById("experienceSelect"),
  timePostedSelect: document.getElementById("timePostedSelect"),
  searchEngineSelect: document.getElementById("searchEngineSelect"),
  coreQueryPreview: document.getElementById("coreQueryPreview"),
  copyCoreQueryBtn: document.getElementById("copyCoreQueryBtn"),
  platformsContainer: document.getElementById("platformsContainer"),
  totalPlatformsCount: document.getElementById("totalPlatformsCount"),
  categoryTabs: document.getElementById("categoryTabs"),
  filterPlatformInput: document.getElementById("filterPlatformInput"),
  clearPlatformFilterBtn: document.getElementById("clearPlatformFilterBtn"),
  selectAllBtn: document.getElementById("selectAllBtn"),
  deselectAllBtn: document.getElementById("deselectAllBtn"),
  openSelectedBtn: document.getElementById("openSelectedBtn"),
  copyAllUrlsBtn: document.getElementById("copyAllUrlsBtn"),
  selectionCount: document.getElementById("selectionCount"),
  openCount: document.getElementById("openCount"),
  themeToggleBtn: document.getElementById("themeToggleBtn"),
  moonIcon: document.getElementById("moonIcon"),
  sunIcon: document.getElementById("sunIcon"),
  shareConfigBtn: document.getElementById("shareConfigBtn"),
  toast: document.getElementById("toast"),
};

// --- 6. UI Update Functions ---
function showToast(message) {
  dom.toast.textContent = message;
  dom.toast.classList.add("show");
  setTimeout(() => {
    dom.toast.classList.remove("show");
  }, 2500);
}

function copyToClipboard(text, successMsg = "Copied to clipboard!") {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMsg);
  }).catch(() => {
    // Fallback
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    showToast(successMsg);
  });
}

function renderTechStack() {
  dom.selectedStackList.innerHTML = "";
  if (state.techStack.length === 0) {
    const emptySpan = document.createElement("span");
    emptySpan.className = "label-hint";
    emptySpan.textContent = "No specific tech stack selected. Click suggestions below or add custom frameworks.";
    dom.selectedStackList.appendChild(emptySpan);
  } else {
    state.techStack.forEach(tech => {
      const tag = document.createElement("span");
      tag.className = "stack-tag";
      tag.innerHTML = `
        <span>${tech}</span>
        <span class="stack-tag-remove" data-tech="${tech}" title="Remove ${tech}">&times;</span>
      `;
      dom.selectedStackList.appendChild(tag);
    });
  }

  // Update suggested pills selected state
  const pills = dom.suggestedTechPills.querySelectorAll(".tech-pill");
  pills.forEach(pill => {
    const techName = pill.getAttribute("data-tech");
    if (state.techStack.includes(techName)) {
      pill.classList.add("selected");
    } else {
      pill.classList.remove("selected");
    }
  });

  updateAllViews();
}

function addTech(techName) {
  const clean = techName.trim();
  if (clean && !state.techStack.includes(clean)) {
    state.techStack.push(clean);
    renderTechStack();
  }
}

function removeTech(techName) {
  state.techStack = state.techStack.filter(t => t !== techName);
  renderTechStack();
}

function updateSelectionStats() {
  const count = state.checkedPlatforms.size;
  dom.selectionCount.textContent = `${count} selected`;
  dom.openCount.textContent = count;
  dom.openSelectedBtn.disabled = count === 0;
  dom.openSelectedBtn.style.opacity = count === 0 ? "0.6" : "1";
}

function renderPlatformCards() {
  const filteredPlatforms = PLATFORMS.filter(platform => {
    // Filter by Category tab
    if (state.activeCategory !== "all" && platform.category !== state.activeCategory) {
      return false;
    }
    // Filter by Search input
    if (state.platformSearchQuery) {
      const q = state.platformSearchQuery.toLowerCase();
      const matchName = platform.name.toLowerCase().includes(q);
      const matchDork = (platform.dork || "").toLowerCase().includes(q);
      const matchDesc = platform.description.toLowerCase().includes(q);
      if (!matchName && !matchDork && !matchDesc) return false;
    }
    return true;
  });

  dom.platformsContainer.innerHTML = "";

  if (filteredPlatforms.length === 0) {
    dom.platformsContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <p style="font-size: 1.1rem; font-weight: 600;">No platforms match your search filter.</p>
        <p style="font-size: 0.9rem; margin-top: 0.5rem;">Try clearing the filter or switching categories.</p>
      </div>
    `;
    return;
  }

  filteredPlatforms.forEach(platform => {
    const query = getPlatformQuery(platform);
    const targetUrl = platform.customUrlBuilder 
      ? platform.customUrlBuilder(query, state)
      : buildSearchUrl(state.searchEngine, query, state.timePosted);

    const isChecked = state.checkedPlatforms.has(platform.id);

    const card = document.createElement("div");
    card.className = `platform-card ${isChecked ? "checked-state" : ""}`;
    card.id = `card-${platform.id}`;

    // Initial avatar letters
    const initials = platform.name.slice(0, 2).toUpperCase();

    card.innerHTML = `
      <div class="card-top">
        <div class="platform-info">
          <div class="platform-avatar">${initials}</div>
          <div class="platform-title-group">
            <h3>${platform.name}</h3>
            <span class="platform-category-tag">${platform.badge}</span>
          </div>
        </div>
        <label class="card-checkbox" title="Mark as applied / searched">
          <input type="checkbox" data-platform="${platform.id}" ${isChecked ? "checked" : ""}>
          <span class="card-check-box"></span>
        </label>
      </div>

      <div class="card-query-box" title="${query}">
        <span class="card-query-text">${query}</span>
      </div>

      <div class="card-actions">
        <a href="${targetUrl}" target="_blank" rel="noopener noreferrer" class="btn-open-search">
          <span>Search on ${capitalize(state.searchEngine)}</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
        <button type="button" class="btn-copy-card copy-url-btn" data-url="${targetUrl}" title="Copy direct search URL">
          Copy URL
        </button>
        <button type="button" class="btn-copy-card copy-dork-btn" data-query="${query}" title="Copy raw search dork">
          Dork
        </button>
      </div>
    `;

    dom.platformsContainer.appendChild(card);
  });
}

function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function updateAllViews() {
  // Update synthesized preview
  const coreQuery = getCoreQuery();
  dom.coreQueryPreview.textContent = coreQuery || "(No search query specified)";

  // Update total platforms count
  dom.totalPlatformsCount.textContent = PLATFORMS.length;

  // Render cards
  renderPlatformCards();
  updateSelectionStats();
  saveStateToStorage();
}

// --- 7. Persistence & URL Query String Sync ---
function saveStateToStorage() {
  const savedData = {
    jobTitle: state.jobTitle,
    titleMode: state.titleMode,
    techStack: state.techStack,
    stackLogic: state.stackLogic,
    location: state.location,
    customLocation: state.customLocation,
    workplaceType: state.workplaceType,
    experience: state.experience,
    timePosted: state.timePosted,
    searchEngine: state.searchEngine,
    checkedPlatforms: Array.from(state.checkedPlatforms),
  };
  localStorage.setItem("jobdork_config", JSON.stringify(savedData));
}

function updateTitleModeUI() {
  if (dom.titleModeUnquotedBtn) dom.titleModeUnquotedBtn.classList.toggle("active", state.titleMode !== "exact");
  if (dom.titleModeExactBtn) dom.titleModeExactBtn.classList.toggle("active", state.titleMode === "exact");
}

function loadStateFromStorage() {
  // Check URL parameters first
  const params = new URLSearchParams(window.location.search);
  const job = params.get("job");
  const stack = params.get("stack");
  const loc = params.get("loc");
  const time = params.get("time");
  const engine = params.get("engine");

  if (job) state.jobTitle = decodeURIComponent(job);
  if (stack) state.techStack = decodeURIComponent(stack).split(",").filter(Boolean);
  if (loc) state.location = loc;
  if (time) state.timePosted = time;
  if (engine) state.searchEngine = engine;

  if (!job && !stack && !loc) {
    const cached = localStorage.getItem("jobdork_config");
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (parsed.jobTitle) state.jobTitle = parsed.jobTitle;
        if (parsed.titleMode) state.titleMode = parsed.titleMode;
        if (parsed.techStack) state.techStack = parsed.techStack;
        if (parsed.stackLogic) state.stackLogic = parsed.stackLogic;
        if (parsed.location) state.location = parsed.location;
        if (parsed.customLocation) state.customLocation = parsed.customLocation;
        if (parsed.workplaceType) state.workplaceType = parsed.workplaceType;
        if (parsed.experience) state.experience = parsed.experience;
        if (parsed.timePosted) state.timePosted = parsed.timePosted;
        if (parsed.searchEngine) state.searchEngine = parsed.searchEngine;
        if (parsed.checkedPlatforms) state.checkedPlatforms = new Set(parsed.checkedPlatforms);
      } catch (e) {
        console.error("Failed to parse cached config", e);
      }
    }
  }

  // Sync inputs with state
  dom.jobTitleInput.value = state.jobTitle;
  dom.locationSelect.value = state.location;
  dom.customLocationInput.value = state.customLocation;
  if (dom.workplaceTypeSelect) dom.workplaceTypeSelect.value = state.workplaceType;
  dom.experienceSelect.value = state.experience;
  dom.timePostedSelect.value = state.timePosted;
  dom.searchEngineSelect.value = state.searchEngine;

  updateTitleModeUI();

  if (state.location === "custom") {
    dom.customLocWrapper.classList.remove("hidden");
  } else {
    dom.customLocWrapper.classList.add("hidden");
  }

  if (state.stackLogic === "OR") {
    dom.logicOrBtn.classList.add("active");
    dom.logicAndBtn.classList.remove("active");
  } else {
    dom.logicAndBtn.classList.add("active");
    dom.logicOrBtn.classList.remove("active");
  }

  // Match quick role pill
  const activePill = Array.from(dom.quickRoles.querySelectorAll(".preset-pill"))
    .find(p => p.getAttribute("data-role") === state.jobTitle);
  if (activePill) {
    dom.quickRoles.querySelectorAll(".preset-pill").forEach(p => p.classList.remove("active"));
    activePill.classList.add("active");
  }

  renderTechStack();
}

// --- 8. Event Listeners ---
function bindEvents() {
  // Title Mode Buttons
  dom.titleModeUnquotedBtn.addEventListener("click", () => {
    state.titleMode = "unquoted";
    updateTitleModeUI();
    updateAllViews();
  });

  dom.titleModeExactBtn.addEventListener("click", () => {
    state.titleMode = "exact";
    updateTitleModeUI();
    updateAllViews();
  });

  // Job Title Input
  dom.jobTitleInput.addEventListener("input", (e) => {
    state.jobTitle = e.target.value;
    // Check preset pills
    dom.quickRoles.querySelectorAll(".preset-pill").forEach(p => {
      p.classList.toggle("active", p.getAttribute("data-role") === state.jobTitle);
    });
    updateAllViews();
  });

  dom.clearJobBtn.addEventListener("click", () => {
    state.jobTitle = "";
    dom.jobTitleInput.value = "";
    dom.quickRoles.querySelectorAll(".preset-pill").forEach(p => p.classList.remove("active"));
    dom.jobTitleInput.focus();
    updateAllViews();
  });

  // Preset Role Pills
  dom.quickRoles.addEventListener("click", (e) => {
    const pill = e.target.closest(".preset-pill");
    if (!pill) return;
    const role = pill.getAttribute("data-role");
    state.jobTitle = role;
    dom.jobTitleInput.value = role;
    dom.quickRoles.querySelectorAll(".preset-pill").forEach(p => p.classList.remove("active"));
    pill.classList.add("active");
    updateAllViews();
  });

  // Tech Stack Logic Switch
  dom.logicAndBtn.addEventListener("click", () => {
    state.stackLogic = "AND";
    dom.logicAndBtn.classList.add("active");
    dom.logicOrBtn.classList.remove("active");
    updateAllViews();
  });

  dom.logicOrBtn.addEventListener("click", () => {
    state.stackLogic = "OR";
    dom.logicOrBtn.classList.add("active");
    dom.logicAndBtn.classList.remove("active");
    updateAllViews();
  });

  // Add Tech via Button or Enter
  dom.addTechBtn.addEventListener("click", () => {
    addTech(dom.customTechInput.value);
    dom.customTechInput.value = "";
  });

  dom.customTechInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTech(dom.customTechInput.value);
      dom.customTechInput.value = "";
    }
  });

  // Suggested Tech Pills Click
  dom.suggestedTechPills.addEventListener("click", (e) => {
    const pill = e.target.closest(".tech-pill");
    if (!pill) return;
    const tech = pill.getAttribute("data-tech");
    if (state.techStack.includes(tech)) {
      removeTech(tech);
    } else {
      addTech(tech);
    }
  });

  // Remove Tag Click
  dom.selectedStackList.addEventListener("click", (e) => {
    const removeBtn = e.target.closest(".stack-tag-remove");
    if (!removeBtn) return;
    const tech = removeBtn.getAttribute("data-tech");
    removeTech(tech);
  });

  // Location Select
  dom.locationSelect.addEventListener("change", (e) => {
    state.location = e.target.value;
    if (state.location === "custom") {
      dom.customLocWrapper.classList.remove("hidden");
      dom.customLocationInput.focus();
    } else {
      dom.customLocWrapper.classList.add("hidden");
    }
    updateAllViews();
  });

  dom.customLocationInput.addEventListener("input", (e) => {
    state.customLocation = e.target.value;
    updateAllViews();
  });

  if (dom.workplaceTypeSelect) {
    dom.workplaceTypeSelect.addEventListener("change", (e) => {
      state.workplaceType = e.target.value;
      updateAllViews();
    });
  }

  // Experience Level Select
  dom.experienceSelect.addEventListener("change", (e) => {
    state.experience = e.target.value;
    updateAllViews();
  });

  // Time Posted Select
  dom.timePostedSelect.addEventListener("change", (e) => {
    state.timePosted = e.target.value;
    updateAllViews();
  });

  // Search Engine Select
  dom.searchEngineSelect.addEventListener("change", (e) => {
    state.searchEngine = e.target.value;
    updateAllViews();
  });

  // Copy Core Query
  dom.copyCoreQueryBtn.addEventListener("click", () => {
    copyToClipboard(getCoreQuery(), "Base query copied!");
  });

  // Category Tabs
  dom.categoryTabs.addEventListener("click", (e) => {
    const tab = e.target.closest(".cat-tab");
    if (!tab) return;
    const cat = tab.getAttribute("data-cat");
    state.activeCategory = cat;
    dom.categoryTabs.querySelectorAll(".cat-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderPlatformCards();
  });

  // Filter Platforms Input
  dom.filterPlatformInput.addEventListener("input", (e) => {
    state.platformSearchQuery = e.target.value;
    dom.clearPlatformFilterBtn.classList.toggle("hidden", !state.platformSearchQuery);
    renderPlatformCards();
  });

  dom.clearPlatformFilterBtn.addEventListener("click", () => {
    state.platformSearchQuery = "";
    dom.filterPlatformInput.value = "";
    dom.clearPlatformFilterBtn.classList.add("hidden");
    renderPlatformCards();
  });

  // Card Clicks (Delegation for Copy & Checkbox)
  dom.platformsContainer.addEventListener("click", (e) => {
    // Copy URL
    const copyUrlBtn = e.target.closest(".copy-url-btn");
    if (copyUrlBtn) {
      const url = copyUrlBtn.getAttribute("data-url");
      copyToClipboard(url, "Platform Search URL copied!");
      return;
    }

    // Copy Dork
    const copyDorkBtn = e.target.closest(".copy-dork-btn");
    if (copyDorkBtn) {
      const dork = copyDorkBtn.getAttribute("data-query");
      copyToClipboard(dork, "Platform Dork copied!");
      return;
    }

    // Checkbox toggle
    const checkbox = e.target.closest(".card-checkbox input");
    if (checkbox) {
      const platformId = checkbox.getAttribute("data-platform");
      const card = document.getElementById(`card-${platformId}`);
      if (checkbox.checked) {
        state.checkedPlatforms.add(platformId);
        if (card) card.classList.add("checked-state");
      } else {
        state.checkedPlatforms.delete(platformId);
        if (card) card.classList.remove("checked-state");
      }
      updateSelectionStats();
      saveStateToStorage();
    }
  });

  // Select / Deselect All
  dom.selectAllBtn.addEventListener("click", () => {
    PLATFORMS.forEach(p => state.checkedPlatforms.add(p.id));
    renderPlatformCards();
    updateSelectionStats();
    saveStateToStorage();
    showToast(`Selected all ${PLATFORMS.length} platforms`);
  });

  dom.deselectAllBtn.addEventListener("click", () => {
    state.checkedPlatforms.clear();
    renderPlatformCards();
    updateSelectionStats();
    saveStateToStorage();
    showToast("Cleared selections");
  });

  // Open Selected in New Tabs
  dom.openSelectedBtn.addEventListener("click", () => {
    if (state.checkedPlatforms.size === 0) return;
    const selectedList = PLATFORMS.filter(p => state.checkedPlatforms.has(p.id));
    
    if (selectedList.length > 8) {
      const confirmOpen = confirm(`You are about to open ${selectedList.length} tabs at once. Your browser popup blocker might require permission. Continue?`);
      if (!confirmOpen) return;
    }

    let opened = 0;
    selectedList.forEach((platform, index) => {
      const query = getPlatformQuery(platform);
      const url = platform.customUrlBuilder 
        ? platform.customUrlBuilder(query, state)
        : buildSearchUrl(state.searchEngine, query, state.timePosted);

      // Stagger slightly to help browser popup handling
      setTimeout(() => {
        window.open(url, "_blank");
      }, index * 100);
      opened++;
    });

    showToast(`Opening ${opened} search tabs...`);
  });

  // Copy All URLs
  dom.copyAllUrlsBtn.addEventListener("click", () => {
    const list = PLATFORMS.map(platform => {
      const query = getPlatformQuery(platform);
      const url = platform.customUrlBuilder 
        ? platform.customUrlBuilder(query, state)
        : buildSearchUrl(state.searchEngine, query, state.timePosted);
      return `- **${platform.name}**: ${url}`;
    });

    const markdownList = `# JobDork Search URLs (${state.jobTitle})\n` + list.join("\n");
    copyToClipboard(markdownList, `Copied all ${PLATFORMS.length} search URLs!`);
  });

  // Theme Toggle
  dom.themeToggleBtn.addEventListener("click", () => {
    const isDark = document.body.getAttribute("data-theme") !== "light";
    if (isDark) {
      document.body.setAttribute("data-theme", "light");
      dom.moonIcon.classList.add("hidden");
      dom.sunIcon.classList.remove("hidden");
      localStorage.setItem("jobdork_theme", "light");
    } else {
      document.body.removeAttribute("data-theme");
      dom.sunIcon.classList.add("hidden");
      dom.moonIcon.classList.remove("hidden");
      localStorage.setItem("jobdork_theme", "dark");
    }
  });

  // Share Search Config
  dom.shareConfigBtn.addEventListener("click", () => {
    const url = new URL(window.location.origin + window.location.pathname);
    url.searchParams.set("job", state.jobTitle);
    if (state.techStack.length > 0) {
      url.searchParams.set("stack", state.techStack.join(","));
    }
    url.searchParams.set("loc", state.location);
    url.searchParams.set("time", state.timePosted);
    url.searchParams.set("engine", state.searchEngine);

    copyToClipboard(url.toString(), "Search configuration URL copied to clipboard!");
  });
}

// --- 9. Initialization ---
function init() {
  // Theme initialization
  const savedTheme = localStorage.getItem("jobdork_theme");
  if (savedTheme === "light") {
    document.body.setAttribute("data-theme", "light");
    dom.moonIcon.classList.add("hidden");
    dom.sunIcon.classList.remove("hidden");
  }

  loadStateFromStorage();
  bindEvents();
  updateAllViews();
}

document.addEventListener("DOMContentLoaded", init);
