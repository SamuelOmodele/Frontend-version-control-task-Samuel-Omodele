import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Hero from '../../components/hero/hero'
import Listings from '../../components/listings/listings'
import Footer from '../../components/footer/footer'

const HomePage = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <Navbar />
            <Hero />
            <Listings />
            <Footer />
        </div>
    )
}

export default HomePage