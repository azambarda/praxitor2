import { Cormorant_Garamond, Instrument_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  adjustFontFallback: false,
})

const instrumentSans = Instrument_Sans({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-instrument',
  display: 'optional',
  adjustFontFallback: true,
})

export const metadata = {
  title: 'Praxitor — Premium Brandable Domains',
  description:
    'Curated portfolio of premium brandable domains available for direct acquisition. No brokers, full escrow protection.',
  metadataBase: new URL('https://praxitor.com'),
  openGraph: {
    title: 'Praxitor — Premium Brandable Domains',
    description: 'The right name is already available.',
    type: 'website',
    url: 'https://praxitor.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Praxitor — Premium Brandable Domains',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Praxitor — Premium Brandable Domains',
    description: 'The right name is already available.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${instrumentSans.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
