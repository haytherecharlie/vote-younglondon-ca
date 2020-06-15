const { resolve } = require('path')

module.exports = [
  /* ---- App ---- */
  { path: '/', component: resolve(`src/ui/routes/Router.tsx`) },
  { path: '/ballot', component: resolve(`src/ui/routes/Router.tsx`) },
  { path: '/check-email', component: resolve(`src/ui/pages/CheckEmail.tsx`) },
  { path: '/thanks', component: resolve(`src/ui/pages/Thanks.tsx`) },
  { path: '/verify', component: resolve(`src/ui/pages/Verify.tsx`) },

  /* ---- 404 ---- */
  { path: '/404', component: resolve(`src/ui/pages/404.tsx`) }
]
