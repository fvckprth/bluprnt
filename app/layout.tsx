import type { Viewport } from 'next'
import type { Metadata } from 'next'
import Head from 'next/head'
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
        url: 'images/bluprnt-final-og.png',
        width: 900,
        height: 450,
        alt: 'Amaya OG Image',
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
    <>
      <Head>
        <title>{(metadata.title as React.ReactNode) || 'Fallback Title'}</title>
        <meta name="description" content={metadata.description as string} />  {/* Type assertion to string */}
        <meta name="theme-color" content="#007AFF" />
        <meta name="apple-mobile-web-app-title" content="BluPrnt" />
        <meta property="og:site_name" content="BluPrnt" />
        <meta property="og:url" content="https://bluprnt.design" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title as string} />  {/* Type assertion to string */}
        <meta property="og:description" content={metadata.description as string} />  {/* Type assertion to string */}
        <meta property="og:image" content="/bluprnt-og.png" />
        <meta property="og:image:alt" content="BluPrnt OG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="bluprnt.vercel.app" />
        <meta property="twitter:url" content="https://bluprnt.design" />
        <meta name="twitter:title" content={metadata.title as string} />  {/* Type assertion to string */}
        <meta name="twitter:description" content={metadata.description as string} />  {/* Type assertion to string */}
        <meta name="twitter:image" content="/bluprnt-og.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script dangerouslySetInnerHTML={{
          __html: `
            window.intercomSettings = {
              api_base: "https://api-iam.intercom.io",
              app_id: "q9kulbz0",
              name: "user.name", // Replace with actual value
              email: "user.email", // Replace with actual value
              created_at: "user.createdAt" // Replace with actual value
            };
            (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/q9kulbz0';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
          `
        }} />
      </Head>
      <html lang="en">
      <body className={`${sfRoundMedium.variable} ${sfRoundBold.variable} antialiased scroll-smooth tracking-tight leading-none text-newblack bg-newwhite selection:bg-newblue/25 selection:text-newblue`}>
        {children}
        <Footer />
      </body>
    </html>
    </>
  )
}