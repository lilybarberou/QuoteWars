import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/icon.ico" />
        <meta name="theme-color" content="#4f46e5"/>

        <meta name="keywords" content="quotewars, serie api, movie api, quote wars api, nahay" />
        <meta name= "author" content= "Lily B" />

        <meta property="og:title" content="Quote Wars - series & movie quotes API"/>
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Quote Wars is a free API serving serie & movie quotes!"/>
        <meta property="og:site_name" content="Quote Wars API"/>
        <meta property="og:image" content="https://raw.githubusercontent.com/Nahay/QuoteWars/main/public/static/images/banner.png"/>
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="590" />
        <meta property="og:image:height" content="300" />
        <meta property="og:url" content="https://quotewars.vercel.app"/>
        
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:image:alt" content="https://raw.githubusercontent.com/Nahay/QuoteWars/main/public/static/images/banner.png"/>

        <meta name="google-site-verification" content="ZFCVBtEpUhi4LdjJNKBjTqDLlOHtNWqSdHiF45NBKow" />

        <meta name="description" content="Quote Wars is a free API serving quality serie & movie quotes!" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}