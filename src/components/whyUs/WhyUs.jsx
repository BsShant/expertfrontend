import React from 'react'
import UnderPressure from '../../assets/images/businessman-under-workload.png'
import Growth from '../../assets/images/growth.png'
import Support from '../../assets/images/supp.png'
import {
    solid,
    regular,
    brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import './styles.css'
import { faBars, faChartLine, faCheckCircle, faHandshake, faSackDollar, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const WhyUs = () => {
    return (
        <section className="small-services-outer-container snap-y">
            <div className="container" styles={{minHeight:"100vh"}}>
                <div className="service-box-inner-container">
                    <div className="small-service-info" >
                        <div className="small-service-top-title">
                            Why Choose Us

                        </div>
                        <div className="small-service-info-heading">
                            What The Expert Offers
                        </div>

                        {/* <div className="service-info-button-container">
                                    <button className='primary-button'>View All</button>
                                </div> */}
                    </div>
                    <div className="row" style={{ width: "85%", margin: "auto" }}>
                        <div className="col-lg-4 col-md-12 small-service-box-margin">
                            <div className="small-service-box" data-aos="fade-up"
                                data-aos-easing="ease-in-sine">
                                <div className="small-service-icon">
                                    <FontAwesomeIcon icon={faSackDollar} />

                                </div>
                                <div className="small-service-body">
                                    <div className="small-service-heading">
                                        Manage Investment
                                    </div>
                                    {/* <div className="small-service-paragraph">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry

                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 small-service-box-margin">
                            <div className="small-service-box" data-aos="fade-up"
                                data-aos-easing="ease-in-sine">
                                <div className="small-service-icon">
                                    <FontAwesomeIcon icon={faSackDollar} />

                                </div>
                                <div className="small-service-body">
                                    <div className="small-service-heading">
                                        Manage Investment
                                    </div>
                                    {/* <div className="small-service-paragraph">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry

                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 small-service-box-margin">
                            <div className="small-service-box" data-aos="fade-up"
                                data-aos-easing="ease-in-sine">
                                <div className="small-service-icon">
                                    <FontAwesomeIcon icon={faUsers} />

                                </div>
                                <div className="small-service-body">
                                    <div className="small-service-heading">
                                        Customer Oriented
                                    </div>
                                    {/* <div className="small-service-paragraph">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry

                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 small-service-box-margin">
                            <div className="small-service-box" data-aos="fade-up"
                                data-aos-easing="ease-in-sine">
                                <div className="small-service-icon">
                                    <FontAwesomeIcon icon={faHandshake} />

                                </div>
                                <div className="small-service-body">
                                    <div className="small-service-heading">
                                        Reliable Partners
                                    </div>
                                    {/* <div className="small-service-paragraph">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry

                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 small-service-box-margin">
                            <div className="small-service-box" data-aos="fade-up"
                                data-aos-easing="ease-in-sine">
                                <div className="small-service-icon">
                                    <FontAwesomeIcon icon={faChartLine} />

                                </div>
                                <div className="small-service-body">
                                    <div className="small-service-heading">
                                        Growth
                                    </div>
                                    {/* <div className="small-service-paragraph">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry

                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 small-service-box-margin">
                            <div className="small-service-box" data-aos="fade-up"
                                data-aos-easing="ease-in-sine">
                                <div className="small-service-icon">
                                    <FontAwesomeIcon icon={faCheckCircle} />


                                    {/* <FontAwesomeIcon icon={solid("map-marker-alt")} color="black" /> */}

                                </div>
                                <div className="small-service-body">
                                    <div className="small-service-heading">
                                        Success
                                    </div>
                                    {/* <div className="small-service-paragraph">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry

                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs