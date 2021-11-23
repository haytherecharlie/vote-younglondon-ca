import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { ga } from 'services/firebase'
import { formatMessage } from 'ui/language/translations'

const baseURL = 'https://vote.younglondon.ca'

const SEO = ({ page, crawl }) => {
  const { origin = baseURL, pathname } = useLocation()

  useEffect(() => {
    if (origin === baseURL) ga().logEvent(`page_view`)
  }, [])

  return (
    <Helmet>
      <html lang={formatMessage('active-lang')} />
      <base href={origin} />

      {/* Primary Meta Tags */}
      <title>{formatMessage(`${page}-seo-title`)}</title>
      <meta name="title" content={formatMessage(`${page}-seo-title`)} />
      <meta name="description" content={formatMessage(`${page}-seo-description`)} />
      <link rel="canonical" href={`${baseURL}${pathname}`} />
      <meta name="robots" content={crawl ? 'index, follow' : 'noindex, follow'} />
      <meta
        name="keywords"
        content="Young London, LYAC, Election, Vote"
      />
      <meta name="author" content="Young London" />
      <meta name="publisher" content="Young London" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${baseURL}${pathname}`} />
      <meta property="og:title" content={formatMessage(`${page}-seo-title`)} />
      <meta property="og:description" content={formatMessage(`${page}-seo-description`)} />
      <meta property="og:image" content={`${baseURL}/social/og-image.jpg`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${baseURL}${pathname}`} />
      <meta property="twitter:title" content={formatMessage(`${page}-seo-title`)} />
      <meta property="twitter:description" content={formatMessage(`${page}-seo-description`)} />
      <meta property="twitter:image" content={`${baseURL}/social/og-image.jpg`} />

      {/* Favicons */}
      <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/favicons/manifest.json" />
      <meta name="msapplication-TileColor" content="#6039A9" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#6039A9" />
    </Helmet>
  )
}

export default SEO
