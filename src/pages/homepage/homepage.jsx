import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Hero from '../../components/hero/hero'
import Listings from '../../components/listings/listings'

const HomePage = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <Navbar />
            <Hero />
            <Listings />
        </div>
    )
}

export default HomePage