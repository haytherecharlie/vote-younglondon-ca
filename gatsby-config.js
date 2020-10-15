const path = require('path')

module.exports = {
  siteMetadata: {
    siteUrl: 'https://vote.younglondon.ca',
    title: `Vote Young London`,
    description: `Young London's Election Platform`,
    author: `Charles Hay`
  },
  plugins: [
    `gatsby-plugin-root-import`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-routes`,
      options: {
        path: `${__dirname}/gatsby-routes.js`
      }
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-1410569287706137`
      }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        api: path.join(__dirname, 'src/api'),
        config: path.join(__dirname, 'src/config'),
        services: path.join(__dirname, 'src/services'),
        ui: path.join(__dirname, 'src/ui')
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: []
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://vote.younglondon.ca',
        sitemap: 'https://vote.younglondon.ca/sitemap.xml',
        policy: [
          {
            userAgent: '*',
            allow: '/',
            disallow: []
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'G-LNVKE0TYJ0',
        head: true
      }
    }
  ]
}
