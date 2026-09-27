# JobDork 🎯

> **Precision ATS Job Search & Direct Search Engine Dorking Platform**  
> Clean, modern, ad-free tool to search 40+ Applicant Tracking Systems (Greenhouse, Lever, Ashby, Workday, etc.) directly with tailored Tech Stack, Location, and Recency filters.

---

## ⚡ Features

- **💼 Target Job Roles**: Unquoted clean role matching with quick presets (Software Engineer, Full Stack, Frontend, Backend, DevOps, Data Engineer, Mobile, ML/AI) + optional exact phrase quotes.
- **⚡ Tech Stack Filtering**: Multi-tag chip selector + custom framework input. Encloses skills in strict quotes with boolean operators (e.g. `"Python" AND "FastAPI"`).
- **🌍 Geographic Accuracy & Workplace Controls**:
  - Region filters: India, United States, Canada, United Kingdom, Europe, Germany, Australia, or Custom City/Country.
  - **Workplace Arrangements**:
    - *All (On-site, Hybrid & Local Remote)* — strictly confines listings to the target region.
    - *Remote Only in Region* — finds remote jobs specifically hiring within that country/region (e.g. `India remote`).
    - *On-site / In-Office Only* — excludes remote listings (`-remote`).
    - *Worldwide Remote Only* — global remote listings.
- **⏱️ Granular Date Recency**:
  - `All (Any Time - Maximum Results)`
  - `Past Hour`, `Past 4 Hours`, `Past 8 Hours`, `Past 12 Hours`
  - `Past 24 Hours`, `Past 48 Hours`, `Past 72 Hours`
  - `Past Week`, `Past Month`
- **🏢 40+ Direct ATS Portals Supported**:
  - **Top Tier Tech ATS**: Greenhouse (`boards.greenhouse.io`), Lever (`jobs.lever.co`), Ashby (`jobs.ashbyhq.com`), Rippling, Dover
  - **Enterprise ATS**: Workday Jobs, SmartRecruiters, iCIMS, Oracle Cloud HCM, SAP SuccessFactors, Oracle Taleo, ADP Workforce, Dayforce, Paylocity, Avature, TriNet Hire
  - **Modern & Growth ATS**: Pinpoint, Workable, BreezyHR, Recruitee/Tellent, Teamtailor, Personio, Join.com, Factorial, Keka HR, Zoho Recruit, JazzHR, Jobvite, Gem, Trakstar, Homerun, Catsone, Gusto, Notion Job Pages
  - **Startup Portals**: Wellfound (AngelList), Y Combinator (Work at a Startup), Built In, LinkedIn Direct Search Dork
  - **Aggregated & Catch-All Dorks**: Direct `careers.*`, `jobs.*`, `people.*` & `talent.*` subdomains, and 15+ multi-ATS boolean dorks.
- **🛠️ Power Features**:
  - Real-time live query preview synthesizer.
  - 1-click search opening & 1-click query/URL copying.
  - Checklist tracking of applied/viewed platforms with `localStorage` persistence.
  - Batch "Open Selected" and "Copy All URLs" to Markdown.
  - Dark / Light mode toggle.
  - Zero ads, zero sponsored redirects, zero tracking cookies.

---

## 🚀 Getting Started

JobDork is a lightweight, zero-dependency static web application built with vanilla HTML5, CSS3, and JavaScript.

### Running Locally

You can run it with any static HTTP server:

```bash
# Using Python
python -m http.server 8080

# Using Node.js
npx serve .
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## 📄 License

MIT License. Free and open source for all job seekers!
