import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Newsletter from '../components/Newsletter/Newsletter'
import Waw from '../components/Waw/Waw'
import Faq from '../components/Faq/Faq'
import About from '../components/About/About'
import Head from 'next/head'

const about = () => {
  return (
    <>
    <Head>
      <title>About - Ashiq The Dev</title>
    </Head>
    <Navbar/>
    <About/>
    <Waw/>
    <Faq/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default about