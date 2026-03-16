import { Helmet } from 'react-helmet-async'

function SEO({ title, description, image }) {
  const defaultTitle = 'MmcfraNkcsoc Academy — AI Education NGO Ghana'
  const defaultDescription = 'MmcfraNkcsoc Academy is a Ghana-based NGO bringing AI and technology education to children in rural and less-endowed communities.'
  const defaultImage = 'https://mmcfrankcsoc-academy.vercel.app/og-image.png'
  const siteUrl = 'https://mmcfrankcsoc-academy.vercel.app'

  const fullTitle = title ? `${title} | MmcfraNkcsoc Academy` : defaultTitle
  const fullDescription = description || defaultDescription
  const fullImage = image || defaultImage

  return (
    <Helmet>
      {/* Basic */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content="AI education Ghana, technology NGO Ghana, rural education Ghana, IT education children Ghana, MmcfraNkcsoc Academy" />
      <meta name="author" content="MmcfraNkcsoc Academy" />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="MmcfraNkcsoc Academy" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullImage} />

      {/* Extra */}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  )
}

export default SEO