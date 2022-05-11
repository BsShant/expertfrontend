import React, { useState } from 'react'
import './styles.css'
import Registration from '../../assets/images/registration.jpg'
import Esewa from '../../assets/images/esewa.png'
import Khalti from '../../assets/images/khalti.png'
import ImePay from '../../assets/images/imePay.png'
import { useParams } from 'react-router-dom'
import ServiceInnerLoan from './ServiceInnerLoan'
import ServiceList from '../../components/serviceList/ServiceList'
import { services } from '../../assets/dummy/services'

const ServiceInner = () => {
    const { category, title } = useParams()
    const [myService, setMyService] = useState(services.find(serv => title === serv.title.toLowerCase().replaceAll(" ", "-")))
    return (
        <div className='service-inner-page-container'>
            <div className="container">
                <div className="service-inner-page-inner-container">
                    {category === 'loan-services' ? <ServiceInnerLoan category={category} title={title} /> : <div className="row">
                        <div className="col-lg-7 order-1 order-lg-1" style={{ marginBottom: "10px" }}>
                            {/* <div className="service-inner-header mb-3">
                                {title.replaceAll("-", " ")}
                            </div> */}
                            <div className="service-inner-page-image-container">
                                <img src={myService.image} alt="Service" />
                            </div>
                        </div>
                        <div className="col-lg-5 order-3 order-lg-2">
                            <div className="service-inner-page-heading col-lg-12">Package Info</div>
                            <div className="keypoints-container">
                                <div className="key-points-title">Key Points</div>
                                <ServiceList point='Fast Registration' />
                                <ServiceList point='Reliable Experts' />
                                <ServiceList point='24 hours customer service' />
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
                        <div className="col-12 order-2 order-lg-3 mt-5 mb-5">
                        <div className="service-inner-page-heading mb-2">{title.replaceAll("-", " ")}</div>

                            <div className="service-inner-page-text">
                                Financial planning is the practice of putting together a plan for your future,
                                specifically around how you will manage your finances and prepare for all of the
                                potential costs and issues that may arise. The process involves evaluating your
                                current financial situation, identifying your goals and then developing and
                                implementing relevant recommendations.

                                Financial planning is holistic and broad,
                                and it can encompass a variety of services, which we detail below.
                                Rather than focusing on a single aspect of your finances, it views clients as real
                                people with a variety of goals and responsibilities. It then addresses a number of financial
                                realities to figure out how to best enable people to make the most of their lives

                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div >
    )
}

export default ServiceInner