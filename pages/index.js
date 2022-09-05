import Head from 'next/head'
import Image from 'next/image'
import Features, { Feature } from '../components/Features/Features'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import Newsletter from '../components/Newsletter/Newsletter'
import Stat from '../components/Stat/Stat'
import styles from '../styles/Home.module.css'
import Waw from '../components/WAW/Waw'
import Faq from '../components/Faq/Faq'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ashiq The Dev - Developing That Matters</title>
    </Head>
    <Navbar/>
    <Hero/>
    <Features/>
    <Stat/>
    <Waw/>
    <Faq/>
    <Newsletter/>
    <Footer/>
    </>
  )
}
