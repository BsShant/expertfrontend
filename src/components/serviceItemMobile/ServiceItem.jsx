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
const ServiceItemMobile = (props) => {
    const { image, title, category } = props
    return (
        <div className="mobile-service-item-container" data-aos="fade-up"
            data-aos-easing="ease-in-sine">
            <div className="service-item-image">
                <Link to={`/our-services/${category}`}>
                    <img src={image} alt="Services" />
                </Link>
            </div>
          
            <div className="service-name-box">
                <div className="service-name">{category}</div>
                <div className="service-item-button">
                    <Link className='primary-button' to={`/our-services/${category}`}>Explore</Link>
                </div>
            </div>
            {/* <FontAwesomeIcon icon={solid("cog")} color={PRIMARY_COLOR} style={{ fontSize: "100px" }} /> */}
        </div>
    )
}

export default ServiceItemMobile;