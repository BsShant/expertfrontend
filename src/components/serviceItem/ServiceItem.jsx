import React from 'react'
import './styles.css'
import {
    solid,
    regular,
    brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PRIMARY_COLOR } from '../../constants/color';
import Sales from '../../assets/images/sales.png'
import { Link } from 'react-router-dom';
const ServiceItem = (props) => {
    const { image, title, detail } = props
    return (
        <div className="service-item-container" data-aos="fade-up"
            data-aos-easing="ease-in-sine">
            <div className="service-item-image">
                <Link to="/our-services/service-page">
                    <img src={image} alt="Services" />
                </Link>
            </div>
            <div className="service-name-box">
                <div className="service-name">{title}</div>
                <div className="service-item-button">
                    <Link className='btn-flip btn-flip-alternate btn-flip-product' data-back='+ VIEW' data-front='+ VIEW' to="/our-services/service-page"></Link>
                </div>
            </div>
        </div>
    )
}

export default ServiceItem;