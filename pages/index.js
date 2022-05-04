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
        <title>Quote Wars API</title>
        <meta name="description" content="An Api to listen to your best mates!" />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <Nav/>

      <Header/>

      <DemoRun/>

      <Demo
        req="'https://quote-wars.vercel.app/api/series/gameofthrones'"
        res='{
          "serie": "Game of Thrones",
          "author": "Arya Stark",
          "quote": "Winter is coming"
        }'
        title='Get quote by specific serie'
      />

      <Demo
        req="'https://quote-wars.vercel.app/api/series/starwars/darkvador'"
        res='{
          "serie": "Star Wars",
          "author": "Dark Vador",
          "quote": "I am your father"
        }'
        title='Get quote by specific character'
      />

      <Demo
        req="'https://quote-wars.vercel.app/api/series'"
        res='[
          "Game of Thrones",
          "Star Wars",
          "The Mandalorian",
          "..."
        ]'
        title='Get available series'
      />

      <Demo
        req="'https://quote-wars.vercel.app/api/characters/gameofthrones'"
        res='[
          "Jon Snow",
          "Arya Stark",
          "Sandor Clegane",
          "..."
        ]'
        title='Get available characters from a serie'
      />
      
      <Footer/>

     </>
  )
}
