/**
 * JobDorked - Precision ATS Job Search & Direct Queries
 * Redesigned UI Controller & Query Engine
 */

// --- 1. ATS Platform Definitions (Ad-Free, Direct ATS Targets) ---
const PLATFORMS = [
  // Top Tier Tech ATS
  {
    id: "greenhouse",
    name: "Greenhouse",
    shortName: "Greenhouse",
    category: "top-tech",
    badge: "Top Tech ATS",
    logoClass: "logo-greenhouse",
    logoLetter: "g",
    dork: "(site:boards.greenhouse.io OR site:job-boards.greenhouse.io)",
    description: "Used by premier tech scale-ups and high-growth engineering teams."
  },
  {
    id: "lever",
    name: "Lever",
    shortName: "Lever",
    category: "top-tech",
    badge: "Top Tech ATS",
    logoClass: "logo-lever",
    logoLetter: "L",
    dork: "(site:jobs.lever.co OR site:lever.co) -jobgether",
    description: "Standard ATS for innovative tech organizations and modern startups."
  },
  {
    id: "ashby",
    name: "Ashby",
    shortName: "Ashby",
    category: "top-tech",
    badge: "Top Tech ATS",
    logoClass: "logo-ashby",
    logoLetter: "A",
    dork: "(site:jobs.ashbyhq.com OR site:ashbyhq.com)",
    description: "Fast-growing high-performance ATS favored by top AI and SaaS companies."
  },
  {
    id: "rippling",
    name: "Rippling",
    shortName: "Rippling",
    category: "top-tech",
    badge: "Top Tech ATS",
    logoClass: "logo-rippling",
    logoLetter: "〰",
    dork: "(site:rippling.com OR site:rippling-ats.com)",
    description: "All-in-one HR & ATS platform for fast-scaling engineering teams."
  },
  {
    id: "dover",
    name: "Dover",
    shortName: "Dover",
    category: "top-tech",
    badge: "Top Tech ATS",
    logoClass: "logo-dover",
    logoLetter: "D",
    dork: "(site:dover.io OR site:dover.com)",
    description: "Modern recruiting engine and career pages for venture-backed startups."
  },

  // Enterprise ATS
  {
    id: "workday",
    name: "Workday Jobs",
    shortName: "Workday",
    category: "enterprise",
    badge: "Enterprise ATS",
    logoClass: "logo-workday",
    logoLetter: "W",
    dork: "site:myworkdayjobs.com",
    description: "The primary ATS used by Fortune 500, global tech giants, and enterprise firms."
  },
  {
    id: "smartrecruiters",
    name: "SmartRecruiters",
    shortName: "SmartRecruiters",
    category: "enterprise",
    badge: "Enterprise ATS",
    logoClass: "logo-smartrecruiters",
    logoLetter: "S",
    dork: "site:jobs.smartrecruiters.com",
    description: "Enterprise talent acquisition system for large global enterprises."
  },
  {
    id: "icims",
    name: "iCIMS",
    shortName: "iCIMS",
    category: "enterprise",
    badge: "Enterprise ATS",
    logoClass: "logo-icims",
    logoLetter: "iC",
    dork: "site:icims.com",
    description: "Cloud recruiting platform for high-volume enterprise employers."
  },
  {
    id: "oraclecloud",
    name: "Oracle Cloud HCM",
    shortName: "Oracle",
    category: "enterprise",
    badge: "Enterprise ATS",
    logoClass: "logo-oracle",
    logoLetter: "O",
    dork: "site:oraclecloud.com",
    description: "Direct enterprise careers hosted on Oracle Cloud Recruiting."
  },
  {
    id: "successfactors",
    name: "SAP SuccessFactors",
    shortName: "SAP",
    category: "enterprise",
    badge: "Enterprise ATS",
    logoClass: "logo-sap",
    logoLetter: "SAP",
    dork: "site:successfactors.com",
    description: "Enterprise career portal standard across global enterprise companies."
  },
  {
    id: "taleo",
    name: "Oracle Taleo",
    shortName: "Taleo",
    category: "enterprise",
    badge: "Enterprise ATS",
    logoClass: "logo-taleo",
    logoLetter: "T",
    dork: "site:taleo.net",
    description: "Enterprise ATS legacy system with thousands of active global postings."
  },
  {
    id: "adp",
    name: "ADP Workforce",
    shortName: "ADP",
    category: "enterprise",
    badge: "Enterprise ATS",
    logoClass: "logo-adp",
    logoLetter: "ADP",
    dork: "(site:workforcenow.adp.com OR site:myjobs.adp.com)",
    description: "Direct career listings hosted on ADP Workforce Now."
  },
  {
    id: "dayforce",
    name: "Dayforce",
    shortName: "Dayforce",
    category: "enterprise",
    badge: "Enterprise ATS",
    logoClass: "logo-dayforce",
    logoLetter: "DF",
    dork: "site:dayforcehcm.com",
    description: "Human capital management enterprise career portals."
  },
  {
    id: "paylocity",
    name: "Paylocity",
    shortName: "Paylocity",
    category: "enterprise",
    badge: "Enterprise ATS",
    logoClass: "logo-paylocity",
    logoLetter: "P",
    dork: "site:recruiting.paylocity.com",
    description: "Popular recruiting portal for mid-market and enterprise businesses."
  },
  {
    id: "avature",
    name: "Avature",
    shortName: "Avature",
    category: "enterprise",
    badge: "Enterprise ATS",
    logoClass: "logo-avature",
    logoLetter: "Av",
    dork: "site:avature.net",
    description: "Enterprise talent acquisition used by corporate consulting and tech leaders."
  },
  {
    id: "trinethire",
    name: "TriNet Hire",
    shortName: "TriNet",
    category: "enterprise",
    badge: "Enterprise ATS",
    logoClass: "logo-trinet",
    logoLetter: "TN",
    dork: "site:trinethire.com",
    description: "Recruiting platform for tech startups and medium-sized corporations."
  },

  // Modern & Growth ATS
  {
    id: "workable",
    name: "Workable",
    shortName: "Workable",
    category: "growth",
    badge: "Modern ATS",
    logoClass: "logo-workable",
    logoLetter: "W",
    dork: "(site:jobs.workable.com OR site:apply.workable.com)",
    description: "Leading hiring platform with thousands of active tech openings."
  },
  {
    id: "breezy",
    name: "BreezyHR",
    shortName: "Breezy",
    category: "growth",
    badge: "Modern ATS",
    logoClass: "logo-breezy",
    logoLetter: "B",
    dork: "site:breezy.hr",
    description: "Streamlined modern hiring platform for fast-growing businesses."
  },
  {
    id: "recruitee",
    name: "Recruitee / Tellent",
    shortName: "Recruitee",
    category: "growth",
    badge: "Modern ATS",
    logoClass: "logo-recruitee",
    logoLetter: "R",
    dork: "(site:recruitee.com OR site:tellent.com)",
    description: "Collaborative hiring platform popular among European & US tech firms."
  },
  {
    id: "teamtailor",
    name: "Teamtailor",
    shortName: "Teamtailor",
    category: "growth",
    badge: "Modern ATS",
    logoClass: "logo-teamtailor",
    logoLetter: "TT",
    dork: "site:teamtailor.com",
    description: "Employer branding and candidate career portal for top design & engineering firms."
  },
  {
    id: "personio",
    name: "Personio",
    shortName: "Personio",
    category: "growth",
    badge: "Modern ATS",
    logoClass: "logo-personio",
    logoLetter: "P",
    dork: "(site:personio.com OR site:personio.de)",
    description: "Leading European HR and recruitment portal for high-growth tech companies."
  },
  {
    id: "pinpoint",
    name: "Pinpoint",
    shortName: "Pinpoint",
    category: "growth",
    badge: "Modern ATS",
    logoClass: "logo-pinpoint",
    logoLetter: "PP",
    dork: "site:pinpointhq.com",
    description: "Modern ATS designed to attract top software talent."
  },
  {
    id: "join",
    name: "Join.com",
    shortName: "Join",
    category: "growth",
    badge: "Modern ATS",
    logoClass: "logo-join",
    logoLetter: "J",
    dork: "site:join.com",
    description: "Fast-expanding tech hiring engine across North America and Europe."
  },
  {
    id: "factorial",
    name: "Factorial",
    shortName: "Factorial",
    category: "growth",
    badge: "Modern ATS",
    logoClass: "logo-factorial",
    logoLetter: "F",
    dork: "site:factorialhr.com",
    description: "HR and recruitment portal popular among modern engineering shops."
  },
  {
    id: "keka",
    name: "Keka HR",
    shortName: "Keka",
    category: "growth",
    badge: "Modern ATS",
    logoClass: "logo-keka",
    logoLetter: "K",
    dork: "site:keka.com",
    description: "Widely used HR & ATS platform for engineering teams across APAC & global."
  },
  {
    id: "zoho",
    name: "Zoho Recruit",
    shortName: "Zoho",
    category: "growth",
    badge: "Modern ATS",
    logoClass: "logo-zoho",
    logoLetter: "Z",
    dork: "site:zohorecruit.com",
    description: "Recruitment portal for product companies and technology startups."
  },
  {
    id: "jazzhr",
    name: "JazzHR",
    shortName: "JazzHR",
    category: "growth",
    badge: "Modern ATS",
    logoClass: "logo-jazzhr",
    logoLetter: "J",
    dork: "site:applytojob.com",
    description: "Direct job application portal for high-velocity tech hiring."
  },
  {
    id: "jobvite",
    name: "Jobvite",
    shortName: "Jobvite",
    category: "growth",
    badge: "Modern ATS",
    logoClass: "logo-jobvite",
    logoLetter: "JV",
    dork: "site:jobvite.com",
    description: "Comprehensive talent platform used by mid-market tech enterprises."
  },
  {
    id: "gem",
    name: "Gem",
    shortName: "Gem",
    category: "growth",
    badge: "Modern ATS",
    logoClass: "logo-gem",
    logoLetter: "G",
    dork: "site:gem.com",
    description: "Modern sourcing and recruitment platform used by premier Silicon Valley firms."
  },
  {
    id: "trakstar",
    name: "Trakstar Hire",
    shortName: "Trakstar",
    category: "growth",
    badge: "Modern ATS",
    logoClass: "logo-trakstar",
    logoLetter: "TS",
    dork: "site:trakstar.com",
    description: "Talent acquisition portal for software engineering and modern startups."
  },
  {
    id: "homerun",
    name: "Homerun",
    shortName: "Homerun",
    category: "growth",
    badge: "Modern ATS",
    logoClass: "logo-homerun",
    logoLetter: "H",
    dork: "site:homerun.co",
    description: "Creative & tech-friendly job boards for boutique engineering studios."
  },
  {
    id: "cats",
    name: "Catsone",
    shortName: "Catsone",
    category: "growth",
    badge: "Modern ATS",
    logoClass: "logo-catsone",
    logoLetter: "C",
    dork: "site:catsone.com",
    description: "Applicant tracking system used by specialized tech search agencies."
  },
  {
    id: "gusto",
    name: "Gusto Jobs",
    shortName: "Gusto",
    category: "growth",
    badge: "Modern ATS",
    logoClass: "logo-gusto",
    logoLetter: "Gu",
    dork: "site:jobs.gusto.com",
    description: "Direct job listings for companies hosted on Gusto's hiring portal."
  },
  {
    id: "notion",
    name: "Notion Job Pages",
    shortName: "Notion",
    category: "growth",
    badge: "Modern ATS",
    logoClass: "logo-notion",
    logoLetter: "N",
    dork: "site:notion.site",
    description: "Direct startup career boards published on public Notion workspaces."
  },

  // Startup Portals
  {
    id: "wellfound",
    name: "Wellfound (AngelList)",
    shortName: "Wellfound",
    category: "startups",
    badge: "Startup Portal",
    logoClass: "logo-wellfound",
    logoLetter: "W",
    dork: "site:wellfound.com",
    description: "Direct engineering opportunities at seed to Series B startups."
  },
  {
    id: "workatastartup",
    name: "Y Combinator",
    shortName: "Y Combinator",
    category: "startups",
    badge: "Startup Portal",
    logoClass: "logo-yc",
    logoLetter: "Y",
    dork: "site:ycombinator.com",
    description: "Direct job opportunities, careers, and portfolio roles on Y Combinator."
  },
  {
    id: "builtin",
    name: "Built In",
    shortName: "Built In",
    category: "startups",
    badge: "Startup Portal",
    logoClass: "logo-builtin",
    logoLetter: "B",
    dork: "site:builtin.com/job/",
    description: "Tech hub job directory covering major US tech hubs & remote hubs."
  },
  {
    id: "linkedin_dork",
    name: "LinkedIn (Direct via Search)",
    shortName: "LinkedIn",
    category: "startups",
    badge: "Direct Dork",
    logoClass: "logo-linkedin",
    logoLetter: "in",
    dork: "site:linkedin.com/jobs -\"No longer accepting applications\" \"apply\"",
    description: "Bypasses sponsored ads to surface fresh, directly active LinkedIn postings."
  },

  // Aggregated & Catch-All Dorks
  {
    id: "careers_subdomains",
    name: "Careers Pages Subdomains",
    shortName: "Careers Pages",
    category: "catchall",
    badge: "Catch-All Dork",
    logoClass: "logo-subdomains",
    logoLetter: "CP",
    dork: "(site:careers.* OR site:*/careers/* OR site:*/career/*)",
    description: "Finds direct company careers portals hosted on proprietary corporate domains."
  },
  {
    id: "jobs_subdomains",
    name: "Jobs Subdomains",
    shortName: "Jobs Subdomains",
    category: "catchall",
    badge: "Catch-All Dork",
    logoClass: "logo-jobs-sub",
    logoLetter: "JB",
    dork: "site:jobs.*",
    description: "Matches any company running dedicated jobs.company.com career subdomains."
  },
  {
    id: "people_talent_subdomains",
    name: "People & Talent Subdomains",
    shortName: "People & Talent",
    category: "catchall",
    badge: "Catch-All Dork",
    logoClass: "logo-people",
    logoLetter: "PT",
    dork: "(site:people.* OR site:talent.*)",
    description: "Matches internal recruiting portals under people.* or talent.* prefixes."
  },
  {
    id: "tail_ats_dork",
    name: "Other 15+ ATS Dork (BambooHR, Taleo, etc.)",
    shortName: "15+ ATS Dork",
    category: "catchall",
    badge: "Multi-ATS Dork",
    logoClass: "logo-multi-ats",
    logoLetter: "15+",
    dork: "(site:bamboohr.com OR site:recruiting.ultipro.com OR site:careerplug.com OR site:paycomonline.net OR site:brassring.com OR site:csod.com OR site:freshteam.com OR site:comeet.com OR site:careers-page.com OR site:jobscore.com OR site:applicantpro.com OR site:applicantstack.com OR site:careers.hireology.com OR site:work.fountain.com OR site:workstream.us)",
    description: "Massive boolean dork catching BambooHR, Paycom, Comeet, UltiPro and 12+ other ATS systems."
  },
  {
    id: "direct_openings_dork",
    name: "Direct Openings & Vacancies",
    shortName: "Direct Openings",
    category: "catchall",
    badge: "Direct Pages Dork",
    logoClass: "logo-direct-pages",
    logoLetter: "DO",
    dork: "(site:*/employment/* OR site:*/vacancies/* OR site:*/opportunities/* OR site:*/openings/* OR site:*/join-us/* OR site:*/work-with-us/*)",
    description: "Deep crawl of unindexed career pages matching join-us, vacancies, and opportunities."
  }
];

// --- 2. State Management ---
const state = {
  jobTitle: "Backend Engineer",
  titleMode: "unquoted", // "unquoted" (default) or "exact"
  techStack: ["Python", "Django"],
  stackLogic: "OR", // "OR" or "AND"
  location: "india",
  customLocation: "",
  workplaceType: "all", // "all", "remote_only", or "onsite"
  experience: "",
  timePosted: "72h", // Past 72 Hours as in reference mockup
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

  // 1. Job Title
  let rawTitle = state.jobTitle.trim();
  if (state.experience) {
    rawTitle = `${state.experience} ${rawTitle}`;
  }

  if (rawTitle) {
    if (state.titleMode === "exact") {
      parts.push(`"${rawTitle}"`);
    } else {
      parts.push(rawTitle);
    }
  }

  // 2. Tech Stack: Skills quoted
  if (state.techStack.length > 0) {
    const quotedSkills = state.techStack.map(t => {
      const clean = t.trim().replace(/^"|"$/g, "");
      return `"${clean}"`;
    });

    if (quotedSkills.length === 1) {
      parts.push(quotedSkills[0]);
    } else {
      if (state.stackLogic === "OR") {
        parts.push(`(${quotedSkills.join(" OR ")})`);
      } else {
        parts.push(quotedSkills.join(" AND "));
      }
    }
  }

  // 3. Location & Workplace handling (Strict Geographic Filtering)
  let locExpr = "";
  const loc = state.location;
  const wp = state.workplaceType;

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
      locExpr = `${baseRegion} remote`;
    } else if (wp === "onsite") {
      locExpr = `${baseRegion} -remote`;
    } else {
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

// --- 5. DOM References ---
const dom = {
  jobTitleInput: document.getElementById("jobTitleInput"),
  roleStyleSelect: document.getElementById("roleStyleSelect"),
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
  toggleAdvancedBtn: document.getElementById("toggleAdvancedBtn"),
  advancedPanel: document.getElementById("advancedPanel"),
  logicAndBtn: document.getElementById("logicAndBtn"),
  logicOrBtn: document.getElementById("logicOrBtn"),
  resetBtn: document.getElementById("resetBtn"),
  generateBtn: document.getElementById("generateBtn"),
  coreQueryPreview: document.getElementById("coreQueryPreview"),
  copyCoreQueryBtn: document.getElementById("copyCoreQueryBtn"),
  platformsHeading: document.querySelector(".platforms-heading"),
  platformsCountBadge: document.getElementById("platformsCountBadge"),
  filterPlatformInput: document.getElementById("filterPlatformInput"),
  categoryTabs: document.getElementById("categoryTabs"),
  platformsContainer: document.getElementById("platformsContainer"),
  themeToggleBtn: document.getElementById("themeToggleBtn"),
  sunIcon: document.getElementById("sunIcon"),
  moonIcon: document.getElementById("moonIcon"),
  shareConfigBtn: document.getElementById("shareConfigBtn"),
  toast: document.getElementById("toast"),
};

// --- 6. UI Update Functions ---
function showToast(message) {
  dom.toast.textContent = message;
  dom.toast.classList.add("show");
  setTimeout(() => {
    dom.toast.classList.remove("show");
  }, 2400);
}

function copyToClipboard(text, successMsg = "Copied to clipboard!") {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMsg);
  }).catch(() => {
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
  state.techStack.forEach(tech => {
    const tag = document.createElement("span");
    tag.className = "tag-badge";
    tag.innerHTML = `
      <span>${tech}</span>
      <button type="button" class="tag-remove-btn" data-tech="${tech}" title="Remove ${tech}" aria-label="Remove ${tech}">&times;</button>
    `;
    dom.selectedStackList.appendChild(tag);
  });

  // Update popular pills selection
  const pills = dom.suggestedTechPills.querySelectorAll(".popular-pill");
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
  const clean = techName.trim().replace(/^"|"$/g, "");
  if (clean && !state.techStack.includes(clean)) {
    state.techStack.push(clean);
    renderTechStack();
  }
}

function removeTech(techName) {
  state.techStack = state.techStack.filter(t => t.toLowerCase() !== techName.toLowerCase());
  renderTechStack();
}

function getPlatformLogoHtml(platform) {
  switch (platform.id) {
    case "greenhouse":
      return '<span class="logo-letter">g</span>';
    case "lever":
      return '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M7 4h3.5v11.5H18V19H7V4z"/></svg>';
    case "ashby":
      return '<span class="logo-letter">A</span>';
    case "rippling":
      return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#f97316" stroke-width="2.6" stroke-linecap="round"><path d="M4 7.5c2.3-1.8 5.7-1.8 8 0s5.7 1.8 8 0"/><path d="M4 12c2.3-1.8 5.7-1.8 8 0s5.7 1.8 8 0"/><path d="M4 16.5c2.3-1.8 5.7-1.8 8 0s5.7 1.8 8 0"/></svg>';
    case "dover":
      return '<span class="logo-letter">D</span>';
    case "workday":
      return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path d="M3 13c3-3.5 6-5.5 9-5.5s6 2 9 5.5" stroke="#f59e0b" stroke-width="2.8" stroke-linecap="round"/><path d="M7 16l2.5-6 2.5 4.5 2.5-4.5 2.5 6" stroke="#0284c7" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    case "smartrecruiters":
      return '<span class="logo-letter">S</span>';
    case "icims":
      return '<span class="logo-letter" style="font-size: 1rem;">iC</span>';
    case "oraclecloud":
      return '<span class="logo-letter">O</span>';
    case "successfactors":
      return '<span class="logo-letter" style="font-size: 0.8rem;">SAP</span>';
    case "taleo":
      return '<span class="logo-letter">T</span>';
    case "adp":
      return '<span class="logo-letter" style="font-size: 0.85rem;">ADP</span>';
    case "workable":
      return '<span class="logo-letter">W</span>';
    case "breezy":
      return '<span class="logo-letter">B</span>';
    case "recruitee":
      return '<span class="logo-letter">R</span>';
    case "teamtailor":
      return '<span class="logo-letter" style="font-size: 0.9rem;">TT</span>';
    case "wellfound":
      return '<span class="logo-letter">W</span>';
    case "workatastartup":
      return '<span class="logo-letter">Y</span>';
    case "builtin":
      return '<span class="logo-letter">B</span>';
    case "linkedin_dork":
      return '<span class="logo-letter" style="font-size: 1rem; font-weight:700;">in</span>';
    default:
      return `<span class="logo-letter">${platform.logoLetter || platform.name.charAt(0)}</span>`;
  }
}

function renderPlatformCards() {
  const filteredPlatforms = PLATFORMS.filter(platform => {
    if (state.activeCategory !== "all" && platform.category !== state.activeCategory) {
      return false;
    }
    if (state.platformSearchQuery) {
      const q = state.platformSearchQuery.toLowerCase();
      const matchName = platform.name.toLowerCase().includes(q);
      const matchShort = (platform.shortName || "").toLowerCase().includes(q);
      const matchDork = (platform.dork || "").toLowerCase().includes(q);
      if (!matchName && !matchShort && !matchDork) return false;
    }
    return true;
  });

  dom.platformsContainer.innerHTML = "";

  if (filteredPlatforms.length === 0) {
    dom.platformsContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <p style="font-size: 1rem; font-weight: 600;">No platforms match your search filter.</p>
        <p style="font-size: 0.85rem; margin-top: 0.4rem;">Try clearing the search box or switching category tabs.</p>
      </div>
    `;
    return;
  }

  filteredPlatforms.forEach(platform => {
    const query = getPlatformQuery(platform);
    const targetUrl = buildSearchUrl(state.searchEngine, query, state.timePosted);

    const card = document.createElement("div");
    card.className = "platform-card";
    card.id = `card-${platform.id}`;

    const short = platform.shortName || platform.name;

    card.innerHTML = `
      <div class="card-header">
        <div class="card-logo-and-name">
          <div class="platform-logo ${platform.logoClass || 'logo-default'}">
            ${getPlatformLogoHtml(platform)}
          </div>
          <div class="card-meta">
            <h3 class="platform-name">${platform.name}</h3>
            <span class="platform-badge">${platform.badge.toUpperCase()}</span>
          </div>
        </div>
        <a href="${targetUrl}" target="_blank" rel="noopener noreferrer" class="card-external-link" title="Open search in new tab">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      </div>

      <div class="card-query-snippet" title="${query}">
        ${query}
      </div>

      <div class="card-footer">
        <a href="${targetUrl}" target="_blank" rel="noopener noreferrer" class="btn-search-platform">
          <span>Search on ${short}</span>
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      </div>
    `;

    dom.platformsContainer.appendChild(card);
  });
}

function updateAllViews() {
  const coreQuery = getCoreQuery();
  dom.coreQueryPreview.textContent = coreQuery || "(No search parameters specified)";
  dom.platformsCountBadge.textContent = `${PLATFORMS.length} platforms`;

  renderPlatformCards();
  saveStateToStorage();
}

// --- 7. Persistence & URL Params ---
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
  };
  localStorage.setItem("jobdorked_config", JSON.stringify(savedData));
}

function loadStateFromStorage() {
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
    const cached = localStorage.getItem("jobdorked_config") || localStorage.getItem("jobdork_config");
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (parsed.jobTitle) {
          state.jobTitle = parsed.jobTitle;
        } else {
          state.jobTitle = "Backend Engineer";
        }
        if (parsed.titleMode !== undefined) state.titleMode = parsed.titleMode;
        if (parsed.techStack && parsed.techStack.length > 0) {
          state.techStack = parsed.techStack;
        } else {
          state.techStack = ["Python", "Django"];
        }
        if (parsed.stackLogic !== undefined) state.stackLogic = parsed.stackLogic;
        if (parsed.location !== undefined) state.location = parsed.location;
        if (parsed.customLocation !== undefined) state.customLocation = parsed.customLocation;
        if (parsed.workplaceType !== undefined) state.workplaceType = parsed.workplaceType;
        if (parsed.experience !== undefined) state.experience = parsed.experience;
        if (parsed.timePosted !== undefined) state.timePosted = parsed.timePosted;
        if (parsed.searchEngine !== undefined) state.searchEngine = parsed.searchEngine;
      } catch (e) {
        console.error("Failed to parse cached config", e);
      }
    }
  }

  if (!state.jobTitle) state.jobTitle = "Backend Engineer";
  if (!state.techStack || state.techStack.length === 0) state.techStack = ["Python", "Django"];

  // Sync inputs
  dom.jobTitleInput.value = state.jobTitle;
  dom.roleStyleSelect.value = state.titleMode;
  dom.locationSelect.value = state.location;
  dom.customLocationInput.value = state.customLocation;
  if (dom.workplaceTypeSelect) dom.workplaceTypeSelect.value = state.workplaceType;
  dom.experienceSelect.value = state.experience;
  dom.timePostedSelect.value = state.timePosted;
  dom.searchEngineSelect.value = state.searchEngine;

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

  renderTechStack();
}

// --- 8. Event Listeners ---
function bindEvents() {
  // Job Title Input
  dom.jobTitleInput.addEventListener("input", (e) => {
    state.jobTitle = e.target.value;
    updateAllViews();
  });

  // Role Style Select
  dom.roleStyleSelect.addEventListener("change", (e) => {
    state.titleMode = e.target.value;
    updateAllViews();
  });

  // Add Tech via Button
  dom.addTechBtn.addEventListener("click", () => {
    addTech(dom.customTechInput.value);
    dom.customTechInput.value = "";
    dom.customTechInput.focus();
  });

  // Add Tech via Enter Key
  dom.customTechInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTech(dom.customTechInput.value);
      dom.customTechInput.value = "";
    }
  });

  // Remove Tag Click
  dom.selectedStackList.addEventListener("click", (e) => {
    const removeBtn = e.target.closest(".tag-remove-btn");
    if (!removeBtn) return;
    const tech = removeBtn.getAttribute("data-tech");
    removeTech(tech);
  });

  // Popular Suggestions Click
  dom.suggestedTechPills.addEventListener("click", (e) => {
    const pill = e.target.closest(".popular-pill");
    if (!pill) return;
    const tech = pill.getAttribute("data-tech");
    if (state.techStack.includes(tech)) {
      removeTech(tech);
    } else {
      addTech(tech);
    }
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

  // Date Posted Select
  dom.timePostedSelect.addEventListener("change", (e) => {
    state.timePosted = e.target.value;
    updateAllViews();
  });

  // Search Engine Select
  dom.searchEngineSelect.addEventListener("change", (e) => {
    state.searchEngine = e.target.value;
    updateAllViews();
  });

  // Advanced Toggle Button
  dom.toggleAdvancedBtn.addEventListener("click", () => {
    const isCollapsed = dom.advancedPanel.classList.toggle("collapsed");
    dom.toggleAdvancedBtn.classList.toggle("open", !isCollapsed);
    dom.toggleAdvancedBtn.setAttribute("aria-expanded", !isCollapsed);
  });

  // Logic Switch Buttons (Advanced)
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

  // Reset Button
  dom.resetBtn.addEventListener("click", () => {
    state.jobTitle = "Backend Engineer";
    state.titleMode = "unquoted";
    state.techStack = ["Python", "Django"];
    state.stackLogic = "OR";
    state.location = "india";
    state.customLocation = "";
    state.workplaceType = "all";
    state.experience = "";
    state.timePosted = "72h";
    state.searchEngine = "google";
    state.activeCategory = "all";
    state.platformSearchQuery = "";

    dom.jobTitleInput.value = state.jobTitle;
    dom.roleStyleSelect.value = state.titleMode;
    dom.locationSelect.value = state.location;
    dom.customLocationInput.value = "";
    dom.customLocWrapper.classList.add("hidden");
    if (dom.workplaceTypeSelect) dom.workplaceTypeSelect.value = "all";
    dom.experienceSelect.value = "";
    dom.timePostedSelect.value = "72h";
    dom.searchEngineSelect.value = "google";
    dom.filterPlatformInput.value = "";

    dom.categoryTabs.querySelectorAll(".cat-pill").forEach(t => {
      t.classList.toggle("active", t.getAttribute("data-cat") === "all");
    });

    renderTechStack();
    showToast("Search filters reset to default theme settings");
  });

  // Generate Search Links Button
  dom.generateBtn.addEventListener("click", () => {
    updateAllViews();
    showToast(`Updated search queries for 43 ATS platforms!`);
    dom.platformsHeading.scrollIntoView({ behavior: "smooth" });
  });

  // Copy Core Query Button
  dom.copyCoreQueryBtn.addEventListener("click", () => {
    copyToClipboard(getCoreQuery(), "Generated search query copied!");
  });

  // Filter Platform Input
  dom.filterPlatformInput.addEventListener("input", (e) => {
    state.platformSearchQuery = e.target.value;
    renderPlatformCards();
  });

  // Category Tabs
  dom.categoryTabs.addEventListener("click", (e) => {
    const pill = e.target.closest(".cat-pill");
    if (!pill) return;
    const cat = pill.getAttribute("data-cat");
    state.activeCategory = cat;
    dom.categoryTabs.querySelectorAll(".cat-pill").forEach(t => t.classList.remove("active"));
    pill.classList.add("active");
    renderPlatformCards();
  });

  // Theme Toggle Button
  dom.themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme") || "light";
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    document.body.setAttribute("data-theme", nextTheme);

    if (nextTheme === "light") {
      dom.sunIcon.classList.remove("hidden");
      dom.moonIcon.classList.add("hidden");
    } else {
      dom.moonIcon.classList.remove("hidden");
      dom.sunIcon.classList.add("hidden");
    }

    localStorage.setItem("jobdorked_theme", nextTheme);
  });

  // Share Search Config Button
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

// --- 9. App Initialization ---
function init() {
  const savedTheme = localStorage.getItem("jobdorked_theme") || localStorage.getItem("jobdork_theme") || "light";
  document.body.setAttribute("data-theme", savedTheme);
  if (savedTheme === "light") {
    dom.sunIcon.classList.remove("hidden");
    dom.moonIcon.classList.add("hidden");
  } else {
    dom.moonIcon.classList.remove("hidden");
    dom.sunIcon.classList.add("hidden");
  }

  loadStateFromStorage();
  bindEvents();
  updateAllViews();
}

document.addEventListener("DOMContentLoaded", init);
