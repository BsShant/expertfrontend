import React from 'react';
import AboutUsSection from '../../components/aboutUs/AboutUs';
import ChooseUs from '../../components/chooseUs/ChooseUs';
import FooterSection from '../../components/footerSection/FooterSection';
import HeroSection from '../../components/heroSection/HeroSection';
import OurProducts from '../../components/ourProducts/OurProducts';
import OurServices from '../../components/ourServices/OurServices';
import Products from '../../components/products/Products';
import Testimonials from '../../components/testimonials/Testimonials';

import './styles.css'
import Bottom from '../../components/bottom/Bottom';
import WhyUs from '../../components/whyUs/WhyUs';
import OurProductsNew from '../../components/ourProductsNew/OurProducts';
import EasyServices from '../../components/easyServices/EasyServices';
import EasyFooter from '../../components/easyFooter/EasyFooter';
import EasyTeam from '../../components/team/team';
import EasyHero from '../../components/eastHero/EasyHero';
import Header from '../../components/header/Header';
const LandingPage = () => {
    return (
        <div className='bruhh'>
            <Header header />
            <EasyHero />
            <AboutUsSection />
            {/* <WhyUs /> */}


            {/* 
            <div className="choose-outer-container">
                <div className="container">
                    <div className="choose-inner-container">
                        <div className="choose-heading-section">
                            <h3 className="top-title">Why choose expert</h3>
                            <h2 className="heading">Expert has lots to offer</h2>
                            <p className="para">   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and...</p>
                        </div>
                        <ChooseUs title="We help you grow" image={Growth}
                            detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and." />
                        <ChooseUs odd={true} title="We are customer oriented" image={Support}
                            detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and." />
                        {/* <ChooseUs title="We reduce your pressure" image={UnderPressure}
                            detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and." /> 
                    </div>
                </div>
            </div>
             */}
            <EasyServices naa />
            <EasyTeam />
            <EasyFooter />
            {/* <Testimonials /> */}
            {/* <FooterSection naa /> */}
            {/* <Bottom naa /> */}
        </div>
    )
}

export default LandingPage