import React from 'react'
import './styles.css'
import FundRaiserBox from '../../components/fundRaiserBox/FundRaiserBox'
import RedPanda from '../../assets/images/redPanda.jpg'
import ClimateChange from '../../assets/images/climateChange.jpeg'
import EarthGone from '../../assets/images/earthGone.jpeg'
import Electricity from '../../assets/images/electricity.jpg'
import SpaceImage from '../../assets/images/space.jpg'

import { Link } from 'react-router-dom'
const FundRaiserPage = () => {
    return (
        <div className='fund-raiser-page-container'>
            <div className="container">
                <div className="fund-raiser-page-inner-container">
                    <div className="fund-raiser-heading col-md-8">
                        <div className="fund-raiser-header">Fund Our Projects</div>
                        <div className="fund-raiser-para">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and...
                        </div>
                    </div>
                    <div className="featured-project">
                        {/* <div className="latest-projects-header">
                           Our Featued Project
                        </div> */}
                        <div className="row">
                            <div className="col-md-6">
                                <div className="featured-media">
                                    <Link to="/fund-raiser/project-page">
                                        <img src={RedPanda} alt="Red Panda" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6" style={{ display: "flex", alignItems: "center" }}>

                                <div className="featured-detail">
                                    <div className="fund-raiser-description">
                                        <div className="fund-raiser-type">Featured Environment</div>
                                        <div className="fund-raiser-title">Fund raiser for climate change</div>
                                        <div className="fund-raiser-info">This project aims to plant thousand trees
                                            as well as create awareness and motivation for carbon net zero.</div>
                                    </div>
                                    <div className="funding-section">
                                        <div className="funding-collected">
                                            <div className="funding-raised-left">Rs. 12000 raised</div>
                                            <div className="funding-raised-right">80%</div>
                                        </div>
                                        <div className="funding-bar">
                                            <div className="funding-inner-bar"></div>
                                        </div>
                                    </div>
                                    <div className="days-left">
                                        15 days remains
                                    </div>
                                    <Link to='/fund-raiser/project-page' className='alternate-button' style={{ marginTop: "15px" }}>Learn More</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fund-raiser-body">
                        <div className="latest-projects-header">
                            Latest Fund Raisers
                        </div>
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-lg-3 col-12 col-xl-3 fund-raiser-margin">
                                <FundRaiserBox title="Fund raiser for climate change" category="Environment" image={ClimateChange} />
                            </div>
                            <div className="col-md-3 col-sm-6 col-lg-3 col-12 col-xl-3 fund-raiser-margin">
                                <FundRaiserBox title="Fund raiser for pollution" category="Environment" image={EarthGone} />
                            </div>
                            <div className="col-md-3 col-sm-6 col-lg-3 col-12 col-xl-3 fund-raiser-margin">
                                <FundRaiserBox title="Fund raiser for hydro plant" category='Electricity' image={Electricity} />
                            </div>
                            <div className="col-md-3 col-sm-6 col-lg-3 col-12 col-xl-3 fund-raiser-margin">
                                <FundRaiserBox title="Fund raiser for space journey" category='space' image={SpaceImage} />
                            </div>
                            {/* <div className="col-md-3 col-sm-6 col-lg-3 col-12 col-xl-3 fund-raiser-margin">
                                <FundRaiserBox />
                            </div>
                            <div className="col-md-3 col-sm-6 col-lg-3 col-12 col-xl-3 fund-raiser-margin">
                                <FundRaiserBox />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FundRaiserPage