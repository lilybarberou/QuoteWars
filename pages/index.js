import Head from 'next/head'

import Nav from '../components/Nav';
import Header from '../components/Header';
import DemoRun from '../components/DemoRun';
import Footer from '../components/Footer';
import Demo from '../components/generics/Demo';


export default function Home() {

  return (
    <>
      <Head>
        
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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

        <title>Quote Wars API</title>
        <meta name="description" content="Quote Wars is a free API serving quality serie & movie quotes!" />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <Nav/>

      <Header/>

      <DemoRun/>

      <Demo
        req="'https://quote-wars.vercel.app/api/origin/gameofthrones'"
        res='{
          "origin": "Game of Thrones",
          "author": "Arya Stark",
          "quote": "Winter is coming"
        }'
        title='Get quote by specific origin'
      />

      <Demo
        req="'https://quote-wars.vercel.app/api/origin/starwars/darkvador'"
        res='{
          "origin": "Star Wars",
          "author": "Dark Vador",
          "quote": "I am your father"
        }'
        title='Get quote by specific character'
        dark={true}
      />

      <Demo
        req="'https://quote-wars.vercel.app/api/origins'"
        res='[
          "Game of Thrones",
          "Star Wars",
          "The Mandalorian",
          "..."
        ]'
        title='Get available origins'
      />

      <Demo
        req="'https://quote-wars.vercel.app/api/characters/gameofthrones'"
        res='[
          "Jon Snow",
          "Arya Stark",
          "Sandor Clegane",
          "..."
        ]'
        title='Get available characters from an origin'
        dark={true}
      />
      
      <Footer/>

     </>
  )
}
