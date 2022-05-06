import { useState } from 'react'
import { CodeBlock, nord } from "react-code-blocks";

import Button from "./generics/Button"

import { getRandomQuote } from '../lib/api';


export default function DemoRun() {

    const [text, setText] = useState(`{  }`);
    const [loading, setLoading] = useState(false);

    const handleRunClick = async () => {
        setLoading(true);
        setText(`{  }`);
        const quote = await getRandomQuote();
        setLoading(false);
        setText(`       {
            "origin": "${quote.origin}",
            "author": "${quote.character}",
            "quote": "${quote.quote}"
        }`);
    }


    return(
        <div id='try-it' className='container px-2 relative mx-auto max-w-4xl mt-32 mb-20'>
            <h1 className="mb-5 text-2xl sm:text-4xl font-bold font-display">
                <span className="text-indigo-500">» </span>
                Try it
            </h1>
            <h2 className="mb-8 text-lg">Run this code to get a random quote 🚀</h2>
            
            <CodeBlock
                text={`fetch('https://quote-wars.vercel.app/api/random')
                .then(res => res.json())
                .then(quote => console.log(quote))`}
                language='javascript'
                showLineNumbers={false}
                wrapLines
                theme={nord}
                customStyle={{padding:'1.25rem'}}
            />

            <button
                onClick={handleRunClick}
                type="button"
                className="inline-flex items-center my-8 bg-gradient-to-r from-indigo-500 to-sky-500 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 rounded"
            >
                {
                    loading &&
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                }

                Run
            </button>

            <CodeBlock
                text={text}
                language='json'
                showLineNumbers={false}
                wrapLines
                theme={nord}
                customStyle={{padding:'1.25rem'}}
            />

       </div>
    )
}