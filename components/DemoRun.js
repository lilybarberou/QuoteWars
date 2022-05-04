import { useState } from 'react'
import { CodeBlock, CopyBlock, nord } from "react-code-blocks";

import Button from "./generics/Button"

import { getRandomQuote } from '../lib/api';


export default function DemoRun() {

    const [text, setText] = useState(`{  }`);

    const handleRunClick = async () => {
        const quote = await getRandomQuote();
        setText(`       {
            "serie": "${quote.serie}",
            "author": "${quote.character}",
            "quote": "${quote.quote}"
        }`);
    }


    return(
        <div id='try-it' className='container px-2 relative mx-auto max-w-4xl mt-32 mb-20'>
            <h1 className="mb-5 text-4xl font-bold font-display">Try it</h1>
            <h2 className="mb-8 text-lg">Run this code to get a random quote 🚀</h2>
            <CopyBlock
                text={`fetch('https://quote-wars.vercel.app/api/random')
                .then(res => res.json())
                .then(quote => console.log(quote))`}
                language='javascript'
                showLineNumbers={false}
                wrapLines
                theme={nord}
                customStyle={{padding:'1.25rem'}}
            />

            <Button onClick={handleRunClick} value="Run"/>

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