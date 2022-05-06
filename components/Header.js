import Button from "./generics/Button"

export default function Header() {

    const handleClick = () => {
        document.getElementById('try-it').scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        })
    }

    return(
        <main className="container px-2 relative mx-auto max-w-4xl text-center mt-20 pt-20 pb-10">
            <h1 className="lg:text-7xl sm:text-6xl text-4xl font-display font-bold text-shadow-md">Quote Wars API</h1>
            <div className="py-10">
                <h2 className="sm:text-2xl text-lg">A free restful API serving quality serie & movie quotes ✨</h2>
                <p className="my-2 text-sm sm:text-base">Powered by <a className='text-blue-700 underline' target="_blank" href="https://www.mongodb.com/">MongoDB</a></p>
            </div>

            <Button onClick={handleClick} value="Get Started" />

            <div className="mt-28">
                <button onClick={handleClick} className="text-gray-800 focus:outline-none" aria-label="Scroll Down">
                    <svg className="animate-bounce w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path>
                    </svg>
                </button>
            </div>
        </main>
    )
}