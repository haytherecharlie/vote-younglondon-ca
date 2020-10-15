const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-ui-pages-ballot-tsx": hot(preferDefault(require("/Users/haytrix/Documents/rcharleshay/vote.younglondon.ca/src/ui/pages/Ballot.tsx"))),
  "component---src-ui-pages-closed-tsx": hot(preferDefault(require("/Users/haytrix/Documents/rcharleshay/vote.younglondon.ca/src/ui/pages/Closed.tsx"))),
  "component---src-ui-pages-results-tsx": hot(preferDefault(require("/Users/haytrix/Documents/rcharleshay/vote.younglondon.ca/src/ui/pages/Results.tsx"))),
  "component---src-ui-pages-thanks-tsx": hot(preferDefault(require("/Users/haytrix/Documents/rcharleshay/vote.younglondon.ca/src/ui/pages/Thanks.tsx")))
}
