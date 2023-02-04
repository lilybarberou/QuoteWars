import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <meta charSet='utf-8' />
                <link rel='icon' href='/favicon.ico' />
                <meta name='theme-color' content='#4f46e5' />
                <link rel='manifest' href='/manifest.json' />
                <link rel='icon' href='/favicon.ico' />
                <link rel='apple-touch-icon' href='./apple-touch-icon.png' />
                <link rel='canonical' href='https://quotewars.lilybarberou.fr/' />

                <meta name='keywords' content='quotewars, serie api, movie api, quote wars api, nahay' />
                <meta name='author' content='Lily Barberou' />

                <meta property='og:title' content='Quote Wars | series & movie quotes API' />
                <meta property='og:type' content='website' />
                <meta
                    property='og:description'
                    content='Quote Wars is a free API serving quality serie & movie quotes! Get quotes about your favorites series and characters.'
                />
                <meta property='og:site_name' content='Quote Wars API' />
                <meta property='og:image' content='https://raw.githubusercontent.com/Nahay/QuoteWars/main/public/static/images/banner.png' />
                <meta property='og:image:type' content='image/png' />
                <meta property='og:image:width' content='590' />
                <meta property='og:image:height' content='300' />
                <meta property='og:url' content='https://quotewars.lilybarberou.fr/' />

                <meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:image:alt' content='https://raw.githubusercontent.com/Nahay/QuoteWars/main/public/static/images/banner.png' />

                <meta
                    name='description'
                    content='Quote Wars is a free API serving quality serie & movie quotes! Get quotes about your favorites series and characters.'
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
