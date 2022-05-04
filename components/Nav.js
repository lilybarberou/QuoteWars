import Icon from '../public/static/images/icon.png';
import Image from 'next/image';


export default function Nav() {
    return(
        <nav className="w-screen shadow-md bg-gradient-to-r from-indigo-500 to-sky-500 px-10 py-3 text-white text-lg font-bold flex justify-center">
            <div className='w-full sm:w-8/12 flex justify-between'>
                <div className='flex align-center'>
                    <Image src={Icon} width={30} height={30} alt="Quote Wars Logo" className='rounded-full'/>
                    <span className='ml-4 cursor-default'>Quote Wars</span>
                </div>
                <div className='flex align-center'>
                    <a className="flex items-center cursor-pointer hover:opacity-75" href="https://github.com/Nahay/series-quotes-api">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" className="fill-current text-gray-800"><g data-name="Layer 2">
                            <path d="M12 1A10.89 10.89 0 001 11.77 10.79 10.79 0 008.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 00-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 011.68 1.11 2.37 2.37 0 003.2.89 2.33 2.33 0 01.7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 011.11-2.91 3.78 3.78 0 01.11-2.84s.93-.29 3 1.1a10.68 10.68 0 015.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 01.11 2.84A4.15 4.15 0 0119 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 01.75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0023 11.77 10.89 10.89 0 0012 1" data-name="github"></path></g>
                        </svg>
                        <span className="hidden sm:block ml-2">
                            Github
                        </span>
                    </a>
                </div>
            </div>
        </nav>
    )
}