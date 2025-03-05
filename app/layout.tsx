import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: {
    default: 'LawLinkGlobal Dokümantasyon',
    template: '%s | LawLinkGlobal Docs',
  },
  description: 'LawLinkGlobal platformu resmi dokümantasyonu',
  keywords: ['hukuk', 'avukat', 'dava yönetimi', 'belge yönetimi', 'hukuk yazılımı'],
  authors: [{ name: 'LawLinkGlobal Ekibi' }],
  creator: 'LawLinkGlobal',
  publisher: 'LawLinkGlobal',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://docs.lawlinkglobal.com'),
  alternates: {
    canonical: '/',
    languages: {
      'tr-TR': '/tr',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: 'LawLinkGlobal Dokümantasyon',
    description: 'LawLinkGlobal platformu resmi dokümantasyonu',
    url: 'https://docs.lawlinkglobal.com',
    siteName: 'LawLinkGlobal Docs',
    images: [
      {
        url: 'https://docs.lawlinkglobal.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LawLinkGlobal Dokümantasyon',
    description: 'LawLinkGlobal platformu resmi dokümantasyonu',
    creator: '@lawlinkglobal',
    images: ['https://docs.lawlinkglobal.com/twitter-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: 'https://docs.lawlinkglobal.com/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
} 