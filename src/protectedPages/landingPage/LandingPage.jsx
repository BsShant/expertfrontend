import React, { useRef, useState } from 'react'
import LandingHero from '../../protectedComponents/landingHero/LandingHero'
import AboutSection from '../../protectedComponents/aboutSection/AboutSection'
import './styles.css'
import LandingService from '../../protectedComponents/landingService/LandingService'
import ProductPage from '../productPage/ProductPage'
const LandingPage = () => {

    return (
        <div id="admin-landing-section">
            <div className="container">
                <div className="admin-landing-inner-section">
                    <div className="admin-header">
                        Landing Page Section
                    </div>
                    <LandingHero />
                    <AboutSection />
                    <LandingService />
                </div>
            </div>
        </div>
    )
}

export default LandingPage