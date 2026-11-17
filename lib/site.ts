// TODO (handoff): update SITE_ORIGIN, REPO_SLUG, and REPO_URL when transferring the repo to the UCSD Center for Energy Research GitHub org,
// and again if/when hosting migrates to Vercel (see CLAUDE.md "Bring up to Groupmates" for both pending steps).
// These drive the OpenGraph URL in layout.tsx, robots.txt, sitemap.xml, and the footer GitHub link — change here and everything updates.
export const SITE_ORIGIN = "https://sammyg82.github.io";
export const REPO_SLUG = "cer-energy-dashboard";
export const SITE_URL = `${SITE_ORIGIN}/${REPO_SLUG}`;
// GitHub source repository (github.com), distinct from the GitHub Pages SITE_URL above.
export const REPO_URL = "https://github.com/SammyG82/cer-energy-dashboard";
