import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Newsletter from '../components/Newsletter/Newsletter'
import Head from 'next/head'
import Mail from '../components/Mail/Mail'

const contact = () => {
  return (
    <>
    <Head>
      <title>Contact - Ashiq The Dev</title>
    </Head>
    <Navbar/>
    <Mail/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default contact