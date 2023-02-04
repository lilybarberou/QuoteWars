export default function Footer() {
    return (
        <>
            <div className='container relative mx-auto max-w-4xl mb-5 mt-40 text-center'>
                <p>
                    Created by {/* */}
                    <a className='text-indigo-600 underline' href='https://lilybarberou.fr/' target='_blank' rel='noreferrer'>
                        Lily B
                    </a>{' '}
                    🌊 © 2022
                </p>
            </div>
            <div className='bg-gradient-to-r from-indigo-500 to-sky-500 h-2 w-screen'></div>
        </>
    );
}
