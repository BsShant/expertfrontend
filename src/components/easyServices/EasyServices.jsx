import React from 'react'
import ReactOwlCarousel from 'react-owl-carousel'
import './styles.css'
import Work1 from '../../images/work/1.jpg'
import Work2 from '../../images/work/2.jpg'
import Work3 from '../../images/work/3.jpg'

import ReactImg from '../../images/tech/react.png'
import Rails from '../../images/tech/rails.png'
import Apple from '../../images/tech/apple.png'
import Node from '../../images/tech/node.png'
import {Link} from 'react-router-dom'
import SalesImage from '../../assets/images/sales.png'
import JobRecruitment from '../../assets/images/jobRecruitment.png';
import JobPaucha from '../../assets/images/jobPaucha.png'
import Insurance from '../../assets/images/insurance.png'
import ExpertTraning from '../../assets/images/expertTraining.png'
import ExpertServices from '../../assets/images/expertBusiness.png'
const EasyServices = () => {
    return (

        <section class="work-section section">
            <div class="container">
                <div class="section-title">
                    <h1>
                        SERVICES
                    </h1>
                </div>
                <div class="work-container" data-aos="fade-up">
                    <div class="row">
                        <div class="col-sm-12 col-md-4">
                            <Link to="/our-services/service-page" >
                                <div class="work-card">
                                    <img src={Work1} alt="" width="100%" />
                                    <div class="work-card-overlay">
                                        <div class="card-content">
                                            <h3>Financial Services</h3>
                                            {/* <h5>Websites</h5> */}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <Link to="/our-services/service-page" >

                                <div class="work-card">
                                    <img src={Work3} alt="" width="100%" />
                                    <div class="work-card-overlay">
                                        <div class="card-content">
                                            <h3>Legal Services</h3>
                                            {/* <h5>Websites</h5> */}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <Link to="/our-services/service-page" >

                                <div class="work-card">
                                    <img src={Work2} alt="" width="100%" />
                                    <div class="work-card-overlay">
                                        <div class="card-content">
                                            <h3>Consulting Services</h3>
                                            {/* <h5>Websites</h5> */}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class=" col-sm-12 col-md-4">
                            <Link to="/our-services/service-page" >
                                <div class="work-card">
                                    <img src={Work3} alt="" width="100%" />
                                    <div class="work-card-overlay">
                                        <div class="card-content">
                                            <h3>IT service</h3>
                                            {/* <h5>Websites</h5> */}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <Link to="/our-services/service-page" >
                                <div class="work-card">
                                    <img src={Work2} alt="" width="100%" />
                                    <div class="work-card-overlay">
                                        <div class="card-content">
                                            <h3>Linguistic Services</h3>
                                            {/* <h5>Websites</h5> */}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <Link to="/our-services/service-page" >
                                <div class="work-card">
                                    <img src={Work1} alt="" width="100%" />
                                    <div class="work-card-overlay">
                                        <div class="card-content">
                                            <h3>Marketing Services</h3>
                                            {/* <h5>Websites</h5> */}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <a href="/our-services" class="btn-flip" data-back="+ VIEW MORE" data-front="+ VIEW MORE"></a>
                </div>
            </div>

            <div class="tech-container full-slider">
                <div class="row" style={{ height: "100%", backgroundColor: "#f8f9fa" }}>
                    <div class="col-12 my-auto" data-aos="fade-left">
                        <ReactOwlCarousel loop={true} nav={false}
                            margin={30} dots={false} slideTransition='linear' autoplaySpeed={6000} smartSpeed={6000} center={true} autoPlay={true} items={1} nav={false}
                            responsiveClass={true} responsive={{
                                0: {
                                    items: 4,
                                    autoplay: true
                                },
                                768: {
                                    items: 5,
                                    autoplay: true
                                },
                                992: {
                                    items: 7,
                                    autoplay: true
                                }
                            }} class="tech-list owl-carousel">
                            <div class="tech-card">
                                <div class="tech-card-img">
                                    <div class="img-holder">
                                        <img src={SalesImage} alt="" class="first-image" />
                                        <img src={SalesImage} alt="" class="second-image" />
                                    </div>
                                </div>
                            </div>
                            <div class="tech-card">
                                <div class="tech-card-img">
                                    <div class="img-holder">
                                        <img src={ExpertServices} alt="" class="first-image" />
                                        <img src={ExpertServices} alt="" class="second-image" />
                                    </div>
                                </div>
                            </div>
                            <div class="tech-card">
                                <div class="tech-card-img">
                                    <div class="img-holder">
                                        <img src={ExpertTraning} alt="" class="first-image" />
                                        <img src={ExpertTraning} alt="" class="second-image" />
                                    </div>
                                </div>
                            </div>
                            <div class="tech-card">
                                <div class="tech-card-img">
                                    <div class="img-holder">
                                        <img src={Insurance} alt="" class="first-image" />
                                        <img src={Insurance} alt="" class="second-image" />
                                    </div>
                                </div>
                            </div>
                            <div class="tech-card">
                                <div class="tech-card-img">
                                    <div class="img-holder">
                                        <img src={JobRecruitment} alt="" class="first-image" />
                                        <img src={JobRecruitment} alt="" class="second-image" />
                                    </div>
                                </div>
                            </div>
                            <div class="tech-card">
                                <div class="tech-card-img">
                                    <div class="img-holder">
                                        <img src={JobPaucha} alt="" class="first-image" />
                                        <img src={JobPaucha} alt="" class="second-image" />
                                    </div>
                                </div>
                            </div>
                        </ReactOwlCarousel>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default EasyServices