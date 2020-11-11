const { resolve } = require('path')

module.exports = [
  /* ---- App ---- */
  { path: '/', component: resolve(`src/ui/pages/Ballot.tsx`) },
  { path: '/thanks', component: resolve(`src/ui/pages/Thanks.tsx`) },
  { path: '/results', component: resolve(`src/ui/pages/Results.tsx`) },
  { path: '/details', component: resolve(`src/ui/pages/Details.tsx`) },
  { path: '/closed', component: resolve(`src/ui/pages/Closed.tsx`) }
]
