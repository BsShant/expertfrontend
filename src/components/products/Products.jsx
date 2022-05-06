import React from "react";
import './styles.css';
import SalesImage from '../../assets/images/sales.png'
import {
    solid,
    regular,
    brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import Bottom from '../bottom/Bottom';
import { faEnvelope, faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faWeibo } from "@fortawesome/free-brands-svg-icons";
const Products = (props) => {
    const { name, image } = props
    return (
        <div className="products-item-container" data-aos="fade-up"
            data-aos-easing="ease-in-sine">
            <div className="row product-small" style={{ height: "100%" }}>
                <div className="col-lg-12 col-md-12 col-12 col-sm-12 products-align">
                    <img src={image} alt="Sales" />
                    <div className="product-text">
                        <div className="product-heading">
                            {name}
                        </div>
                        <div className="product-para">
                            This product helps to solve your digital problem in quickest way 
                            possible. It is also efficient enough to return money for value.
                        </div>
                    </div>
                </div>
                {/* <div className="col-lg-12 col-md-12 col-sm-12 col-12 products-align"> */}
                {/* <div className="product-name">{name}</div> */}
                {/* <div className="product-body">
                <div className="prod-links">
                    <a href="facebook.com" target="_blank" className="facebook-icon" >
                        <FontAwesomeIcon icon={faWeibo} style={{ color: "white" }} />
                    </a>
                    <a href="facebook.com" target="_blank" className="facebook-icon" >
                        <FontAwesomeIcon icon={brands("facebook-f")} style={{ color: "white" }} />
                    </a>
                    <a href="facebook.com" target="_blank" className=" twitter-icon">
                        <FontAwesomeIcon icon={brands("twitter")} style={{ color: "white" }} />
                    </a>
                    <a href="facebook.com" target="_blank" className=" youtube-icon">
                        <FontAwesomeIcon icon={brands("youtube")} style={{ color: "white" }} />
                    </a>
                </div>
            </div> */}
                {/* </div> */}
            </div>
            {/* <img src={image} alt="Sales" />
            <div className="product-overlay"></div>
            <div className="product-name">{name}</div> */}
            {/* <div className="product-body">
                <div className="prod-name">{name}</div>
                <div className="prod-detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
                <div className="prod-links">
                    <a href="facebook.com" target="_blank" className="facebook-icon" >
                        <FontAwesomeIcon icon={faWeibo} style={{ color: "white" }} />
                    </a>
                    <a href="facebook.com" target="_blank" className="facebook-icon" >
                        <FontAwesomeIcon icon={brands("facebook-f")} style={{ color: "white" }} />
                    </a>
                    <a href="facebook.com" target="_blank" className=" twitter-icon">
                        <FontAwesomeIcon icon={brands("twitter")} style={{ color: "white" }} />
                    </a>
                    <a href="facebook.com" target="_blank" className=" youtube-icon">
                        <FontAwesomeIcon icon={brands("youtube")} style={{ color: "white" }} />
                    </a>
                </div>
            </div> */}

            {/* <div className="product-description">
                <div className="product-price">
                    Rs. 5000
                </div>
                <div className="prduct-name">
                    Sales Package
                </div>
                <div className="product-location">
                    Sinamangal, Kathmandu
                </div>
            </div> */}
        </div>
    )
}

export default Products;