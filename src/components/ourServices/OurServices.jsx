import React from 'react'
import './styles.css'
import {
    solid,
    regular,
    brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PRIMARY_COLOR } from '../../constants/color';
import ServiceItem from '../serviceItem/ServiceItem';
import ExpertBusiness from '../../assets/images/expertBusiness.png'
import RecruitJob from '../../assets/images/recruitJob.jpg'
import Sales from '../../assets/images/sales.png'
import Registration from '../../assets/images/registration.jpg'
import Consulting from '../../assets/images/consulting.jpg';
import Finance from '../../assets/images/finance.jpg'
import Accounting from '../../assets/images/accounting.avif'

const OurServices = (props) => {
    const {naa} = props
    return (
        <section className={`services-container ${naa? "snap-y" :""}`}>
            <div className="container">
                <div className="services-inner-container">
                    <div className="heading-container">
                        <h3 className="top-title">Our Services</h3>
                        <h2 className="heading">We cover everything</h2>
                        <p className="para">   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and...</p>
                    </div>
                    <div className="services">
                        <div className="row">

                            <div className="col-sm-12 col-lg-4 our-services-margin-bottom" >
                                <ServiceItem image={Registration} title='Registration, Update, Renew and Close' detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                            </div>
                            <div className="col-sm-12 col-lg-4 our-services-margin-bottom">
                                <ServiceItem image={Consulting} title='Management Consulting' detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />

                            </div>
                            <div className="col-sm-12 col-lg-4 our-services-margin-bottom">
                                <ServiceItem image={Accounting} title='Account, Finance and Tax' detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurServices