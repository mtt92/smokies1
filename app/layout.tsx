import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SchemaOrg from '@/components/SchemaOrg'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://smokies.it'),
  title: {
    default: 'SMOKIES Digital Smoke | Vape Shop Liguria - Voltri, Bolzaneto, Savona',
    template: '%s | SMOKIES Digital Smoke'
  },
  description: 'Il punto di riferimento per lo svapo in Liguria. 3 sedi a Voltri, Bolzaneto e Savona. Dispositivi pod, liquidi certificati, mod premium e accessori. Consulenza professionale e prodotti di qualità.',
  keywords: [
    'vape shop liguria',
    'sigaretta elettronica genova',
    'pod system',
    'liquidi svapo',
    'e-liquid certificati',
    'vape voltri',
    'vape bolzaneto',
    'vape savona',
    'smokies',
    'digital smoke',
    'atomizzatori',
    'mod box',
    'nicotina salt',
    'svapo genova'
  ],
  authors: [{ name: 'SMOKIES Digital Smoke' }],
  creator: 'SMOKIES Digital Smoke',
  publisher: 'SMOKIES Digital Smoke',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://smokies.it',
    siteName: 'SMOKIES Digital Smoke',
    title: 'SMOKIES | Il punto di riferimento per lo svapo in Liguria',
    description: '3 sedi in Liguria: Voltri, Bolzaneto e Savona. Dispositivi, liquidi certificati e consulenza professionale.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SMOKIES Digital Smoke - Vape Shop Liguria',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SMOKIES | Vape Shop Liguria',
    description: 'Il punto di riferimento per lo svapo. 3 sedi a tua disposizione.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://smokies.it" />
      </head>
      <body className={montserrat.className}>
        <SchemaOrg />
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
