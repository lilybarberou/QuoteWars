import { CodeBlock, CopyBlock, nord } from "react-code-blocks";

export default function Demo({ req, res, title }) {
    return(
        <div className='container px-2 relative mx-auto max-w-4xl my-20'>
            <h1 className="mb-5 text-4xl font-bold font-display">{title}</h1>
            <CopyBlock
                text={req}
                language='javascript'
                showLineNumbers={false}
                wrapLines
                theme={nord}
                customStyle={{padding:'1.25rem', marginBottom:'1rem'}}
            />

            <CodeBlock
                text={res}
                language='json'
                showLineNumbers={false}
                wrapLines
                theme={nord}
                customStyle={{padding:'1.25rem'}}
            />

        </div>
    )
}