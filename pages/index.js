import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { CodeBlock, CopyBlock, nord } from "react-code-blocks";

import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Quote Wars API</title>
        <meta name="description" content="An Api to listen to your best mates!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav/>

      <Header/>

      <div id='try-it' className='container px-2 relative mx-auto max-w-4xl mt-20 pt-20 pb-10 bg-gradient-to-r'>
          <h1 className="mb-5 text-4xl font-bold font-display">Try it</h1>
          <h2 className="mb-8 text-lg">Run this code to get a random quote 🚀</h2>
          <CopyBlock
            text={`fetch('https://sqa.vercel.app/random')
            .then(response => response.json())
            .then(quote => console.log(quote))`}
            language='javascript'
            showLineNumbers={false}
            wrapLines
            theme={nord}
            customStyle={{padding:'1.25rem'}}
          />

          <button type="button" className="my-8 bg-gradient-to-r from-indigo-500 to-sky-500 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 rounded">
            Run
          </button>

          <CodeBlock
            text={`{  }`}
            language='javascript'
            showLineNumbers={false}
            wrapLines
            theme={nord}
            customStyle={{padding:'1.25rem'}}
          />

      </div>

      
      <Footer/>

     </div>
  )
}
