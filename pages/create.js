import { useState } from "react";
import Head from 'next/head';
import axios from "axios";


export default function create () {

    const [invalid, setInvalid] = useState(false);
    const [success, setSuccess] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        setSuccess(false);
        setInvalid(false);

        const { password, origin, character, quote } = e.target;

        axios.post("/api/create", {
            password: password.value,
            origin: origin.value,
            character: character.value,
            quote: quote.value
        })
        .then(res => {
            (res.status === 203) && setInvalid(true);
            (res.status === 200 || res.status === 400) && setInvalid(false);

            if (res.status === 200) {
                setSuccess(true);
                quote.value = "";
            } 
        });
    };

    return(
        <>
            <Head>
                <link rel="icon" href="/icon.ico" />
                <title>Create a new quote</title>
                <meta name="description" content="Create a new quote for Quote Wars API!" />
            </Head>
            
            <div className='flex h-screen items-center justify-center'>
                <div className="w-full max-w-xs">
                    <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="origin">
                                Origin
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="origin" type="text" placeholder="Origin" required/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="character">
                                Character
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="character" type="text" placeholder="Character" required/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quote">
                                Quote
                            </label>
                            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quote" placeholder="Quote ..." required/>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className={`shadow appearance-none border ${invalid && "border-red-500"} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`} id="password" type="password" placeholder="******************" required/>
                            {invalid && <p className="text-red-500 text-xs italic">Wrong Password.</p>}
                            {success && <p className="text-green-500 text-xs italic">Added with success!</p>}
                        </div>
                        <div className="flex items-center justify-between">
                            <input value="Add" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:cursor-pointer" type="submit"/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}