const { resolve } = require('path')

module.exports = [
  /* ---- App ---- */
  { path: '/', component: resolve(`src/ui/pages/WardFinder.tsx`) },
  { path: '/ballot', component: resolve(`src/ui/pages/Ballot.tsx`) },
  { path: '/check-email', component: resolve(`src/ui/pages/CheckEmail.tsx`) },
  { path: '/redirect', component: resolve(`src/ui/pages/Redirect.tsx`) },
  { path: '/verify', component: resolve(`src/ui/pages/VerifyVote.tsx`) },

  /* ---- 404 ---- */
  { matchPath: '*', path: '/404', component: resolve(`src/ui/pages/404.tsx`) }
]
