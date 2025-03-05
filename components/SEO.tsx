import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: string
  twitterHandle?: string
  keywords?: string
}

export default function SEO({
  title = 'LawLinkGlobal Dokümantasyon',
  description = 'LawLinkGlobal platformu resmi dokümantasyonu',
  canonical = 'https://docs.lawlinkglobal.com',
  ogImage = 'https://docs.lawlinkglobal.com/og-image.png',
  ogType = 'website',
  twitterHandle = '@lawlinkglobal',
  keywords = 'hukuk, avukat, dava yönetimi, belge yönetimi, hukuk yazılımı'
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="LawLinkGlobal Dokümantasyon" />
      <meta property="og:locale" content="tr_TR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  )
} 