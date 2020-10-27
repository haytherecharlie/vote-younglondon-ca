// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-ui-pages-ballot-tsx": () => import("./../../../src/ui/pages/Ballot.tsx" /* webpackChunkName: "component---src-ui-pages-ballot-tsx" */),
  "component---src-ui-pages-closed-tsx": () => import("./../../../src/ui/pages/Closed.tsx" /* webpackChunkName: "component---src-ui-pages-closed-tsx" */),
  "component---src-ui-pages-results-tsx": () => import("./../../../src/ui/pages/Results.tsx" /* webpackChunkName: "component---src-ui-pages-results-tsx" */),
  "component---src-ui-pages-thanks-tsx": () => import("./../../../src/ui/pages/Thanks.tsx" /* webpackChunkName: "component---src-ui-pages-thanks-tsx" */)
}

