import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Team from '../components/Team/Team'
import Head from 'next/head'
import Newsletter from '../components/Newsletter/Newsletter'

const team = () => {
    return (
        <>
            <Head>
                <title>Team - Ashiq The Dev</title>
                <meta name='keywords' content='team, ashiq, tasdid, ashiquzzaman, khan, atd, AshiqTheDev, Ashiq, The, Dev, Dev, Developing That Matters'/>
                <meta name='description' content='We are a team of Talented Developers and designers, we provide various kinds of IT Servcies, Here are the infos about our Team'/>
            </Head>
            <Navbar />
            <Team />
            <Newsletter/>
            <Footer />
        </>
    )
}

export default team