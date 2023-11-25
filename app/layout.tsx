import type { Viewport } from 'next'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/styles/globals.css'
import Footer from '@/components/footer'

export const dynamic = 'force-dynamic'

const sfRoundMedium = localFont({
  src: '../public/fonts/sf-round-medium.otf',
  weight: '500',
  variable: '--font-sfRoundMedium',
});

const sfRoundBold = localFont({
  src: '../public/fonts/sf-round-bold.otf',
  weight: '700',
  variable: '--font-sfRoundBold',
});

export const metadata: Metadata = {
  title: 'BluPrnt',
  description: 'BluPrnt is a personal and opinionated subscription design service by Parth Patel based in New York.',
  icons: {
    icon: 'favicons/favicon.ico',
    shortcut: 'favicons/favicon-16x16.png',
    apple: 'favicons/apple-touch-icon.png'
  },
  openGraph: {
    images: [
      {
        url: 'images/bluprnt-og.png',
        width: 900,
        height: 450,
        alt: 'BluPrnt OG Image',
      },
    ],
    locale: 'en_US',
  },
}

export const viewport: Viewport = {
  themeColor: '#007AFF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sfRoundMedium.className} scroll-smooth tracking-tight leading-none text-newblack bg-newwhite selection:bg-newblue/25 selection:text-newblue`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}