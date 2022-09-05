import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content="width=device-width, initial-scale=1" />
        <meta name='keywords' content='ashiqthedev, ashiq, atd, atd inc, developer, develop, it, blog, google, ashiquzzaman, md ashiquzzaman khan tasdid, ashiq tasdid'/>
        <meta name='description' content='Ashiq The Dev - Developing That Matters is an IT consultant company. We provide various kinds of IT services including Web & Software Development, SEO, Management & Much more'/>
      </Head>


      <Component {...pageProps} />
    </>
  )
}

export default MyApp
