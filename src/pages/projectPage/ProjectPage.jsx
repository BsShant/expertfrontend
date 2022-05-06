import React from 'react'
import './styles.css'
import ClimateChange from '../../assets/images/climateChange.jpeg'
import Esewa from '../../assets/images/esewa.png'
import Khalti from '../../assets/images/khalti.png'
import ImePay from '../../assets/images/imePay.png'

const ProjectPage = () => {
    return (
        <div className='project-page-container'>
            <div className="container">
                <div className="project-page-inner-container">
                    <div className="row">
                        <div className="col-lg-7 order-1 order-lg-2" style={{ marginBottom: "40px" }}>
                            <div className="small-mobile-image">
                                <div className="project-category">Environment</div>
                                <div className="project-title col-lg-0 col-xl-0">
                                    Fund raiser for climate change
                                </div>
                            </div>
                            <div className="project-page-image-container">
                                <img src={ClimateChange} alt="Climate change" />
                            </div>

                        </div>
                        <div className="col-lg-5 order-lg-1 order-3">
                            <div className="large-device-project-heading">
                                <div className="project-category">Environment</div>
                                <div className="project-title col-lg-0 col-xl-0">
                                    Fund raiser for climate change
                                </div>
                            </div>
                            <div className="people-supported">15 People have supported our project</div>
                            <div className="progress-container">
                                <div className="funding-collected">
                                    <div className="funding-raised-left">Rs. 12000 raised</div>
                                    <div className="funding-raised-right">80%</div>
                                </div>
                                <div className="funding-bar">
                                    <div className="funding-inner-bar" style={{ background: "#0991be" }}></div>
                                </div>
                                <div className="days-left">
                                    15 days remains
                                </div>

                            </div>
                            <div className="support-container">
                                <a href="#" class="btn-flip aos-init aos-animate" data-back="+ SUPPORT" data-front="+ SUPPORT" data-aos="fade-up"></a>
                                {/* <button className='alternate-button'>Support</button> */}
                            </div>
                            <div className="we-accept-container">
                                <div className="we-accept-heading">
                                    We accept
                                </div>
                                <div className="we-accept">
                                    <div className="esewa">
                                        <img src={Esewa} alt="Esewa" />
                                    </div>
                                    <div className="khalti">
                                        <img src={Khalti} alt="Khalti" />
                                    </div>
                                    <div className="ime-pay">
                                        <img src={ImePay} alt="Ime Pay" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="row"> */}
                        <div className="col-12 order-lg-3 order-2">
                            <div className="project-page-text">
                                This project aims to plant thousand trees as well as create awareness and motivation for carbon net zero.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                This project aims to plant thousand trees as well as create awareness and motivation for carbon net zero.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage