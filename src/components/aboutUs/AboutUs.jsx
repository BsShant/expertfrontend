import React from "react";
import './newStyles.css'
import BusinessMeeting from '../../assets/images/businessMeeting.jpg'
import {
    solid,
    regular,
    brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Talking from '../../assets/images/talking.gif'
import OurProductsNew from "../ourProductsNew/OurProducts";
const AboutUsSection = () => {
    return (
        <section className="about-us-section-container snap-y">
                        {/* <OurProductsNew naa /> */}
            <div className="container" style={{position:"relative"}}>
            <section class="about-section section">
        <div class="container">
            <div class="section-title">
                <h1>
                    ABOUT
                </h1>
            </div>
            <div class="about-container">
                <a href="#" class="btn-flip" data-back="+ VIEW MORE" data-front="+ VIEW MORE" data-aos="fade-up"></a>
                <div class="row" style={{height: "100%"}}>
                    <div class="col-sm-12 col-md-6 my-auto">
                        <div class="about-title fade-right" data-aos="fade-right">
                            A <span>NEW WAY</span> TO CREATE PROJECT FOR YOUR COMPANY.
                        </div>
                        <div class="about-desc" data-aos="fade-right">
                            <p>
                            Expert Business serves professional and specialist business support to businesses of all 
                            sizes and in all sectors. We provide a support service to a company from pre incorporation 
                            to operation till winding-up. 
                            </p>

                            <p>
                            We’re trusted to
                             provide flexible business services to some of the leading public and private companies.
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <img src="https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                            alt="" data-aos="fade-left" />
                    </div>
                </div>
            </div>
            <div class="tech-container">
                <div class="row" style={{height: "100%"}}>
                    <div class="col-sm-12 col-md-5 d-md-none">
                        <h3 class="tech-title" data-aos="fade-left">WHAT YOU CAN GET <span>FROM US</span></h3>
                    </div>
                    <div class="col-sm-12 col-md-7">
                        <div class="tech-desc" data-aos="fade-right">
                        At Expert Business, we’re problem solvers. And we specialize in solving those specifically
                         in the business field. Our team of experts has created the best service process
                         that not only saves time for the client but also gets them the best prospect for business.
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-5 d-none d-sm-block">
                        <h3 class="tech-title" data-aos="fade-left">WHAT YOU CAN GET <span>FROM US</span></h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
                    {/* <div className="row below-about-section">
                        <div className="col-md-6 col-lg-4 col-sm-12 order-md-2 order-sm-1 order-lg-2 order-1" style={{marginBottom:"60px"}}>
                            <div className="about-section-image-container">
                                <img src={Talking} alt="CEO" data-aos="fade-right"
                                    data-aos-easing="ease-in-sine" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-8 col-sm-12 order-md-1 order-sm-2 order-lg-1 order-2" style={{
                            alignItems: "center",
                            display: "flex"
                        }}>
                            <div className="about-section-text-container" data-aos="fade-left"
                                data-aos-easing="ease-in-sine">
                                <div className="top-title">About Us</div>
                                <div className="heading">We are expert</div>
                                <div className="details">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    <br /> <br />
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and...
                                    <br /> <br />
                                </div>
                                <div className="about-us-button-container">
                                    <button className="alternate-button">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default AboutUsSection;