import React from 'react'
import './styles.css'
import ClimateChange from '../../assets/images/climateChange.jpeg'
import Registration from '../../assets/images/registration.jpg'
import Esewa from '../../assets/images/esewa.png'
import Khalti from '../../assets/images/khalti.png'
import ImePay from '../../assets/images/imePay.png'
import RedPanda from '../../assets/images/redPanda.jpg'

const ServiceInner = () => {
    return (
        <div className='service-inner-page-container'>
            <div className="container">
                <div className="service-inner-page-inner-container">
                    <div className="row">
                        <div className="col-lg-7" style={{ marginBottom: "40px" }}>
                            <div className="service-inner-page-image-container">
                                <img src={Registration} alt="Service" />
                            </div>
                            <div className="service-inner-page-heading">Registration, Update, Renew and Close</div>
                            <div className="service-inner-page-text">
                                This service-inner aims to plant thousand trees
                                as well as create awareness and motivation for carbon net zero.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,

                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="service-inner-page-heading col-lg-12">Registration, Update, Renew and Close</div>
                            <div className="keypoints-container">
                                <div className="key-points-title">Key Points</div>
                                <div className="key-points-list">
                                    <div className="key-point-list-item">-> Fast registration</div>
                                    <div className="key-point-list-item">-> Less legal issues</div>
                                    <div className="key-point-list-item">-> Reliable legal partners</div>


                                </div>
                            </div>
                            <div className="service-price">Rs. 12000 for full package</div>
                            <div className="support-container">
                                <a href="/our-services" class="btn-flip" data-back="+ PURCHASE" data-front="+ PURCHASE"></a>
                            </div>
                            <div className="service-we-accept-container">
                                <div className="we-accept-heading">
                                    We accept
                                </div>
                                <div className="service-we-accept">
                                    <div className="esewa">
                                        <img src={Esewa} alt="Esewa" />
                                    </div>
                                    <div className="service-khalti">
                                        <img src={Khalti} alt="Khalti" />
                                    </div>
                                    <div className="service-ime-pay">
                                        <img src={ImePay} alt="Ime Pay" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceInner