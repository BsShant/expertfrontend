import React from 'react'
import './styles.css';
import Logo from "../../assets/images/expertBright.png";
import { Link } from 'react-router-dom';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarker, faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import Bottom from '../bottom/Bottom';

const EasyFooter = () => {
    return (
        <footer data-aos="fade-up">

            <div class="container">
                <div class="tech-container" style={{ padding: "0" }}>
                    <div class="row" style={{ height: "100%" }}>
                        <div class="col-sm-12 col-md-5 footer-bottom" style={{ position: "relative" }}>
                            <div className="row">
                                <h3 class="col-12 order-2 order-md-1 footer-about-text">We <span>collabrate</span> with ambitious
                                    brands and people. Let's build something great together.
                                </h3>
                                {/* <img src="logo/logo-white.svg" alt="" width="167px" class="mt-2" /> */}
                                <div className="col-12 order-md-2 order-1 footer-align">
                                    <Link className='home-link' to='/' >
                                        <img src={Logo} alt="Company's Logo" width="167px" class="mt-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-7 footer-bottom footer-align">
                            <div class="row">
                                <div class="col-sm-12 col-md-4 footer-links">
                                    <div className='links-inner'>
                                        <h4>LINKS</h4>
                                        <ul>
                                            {/* <li> <Link to="/">Home</Link></li> */}
                                            <li><Link to="/our-services">Our Services</Link></li>
                                            <li><Link to="/our-products">Our Products</Link></li>
                                            <li><Link to="/fund-raiser">Fund Raiser</Link></li>
                                            <li><Link to="/about-us">About Us</Link></li>
                                            <li><Link to="/contact-us">Contact Us</Link></li>

                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-8 footer-bottom">
                                    <div class="footer-contact-info">
                                        <div className="footer-info-box">
                                            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#1496d1", marginRight: "5px" }} />
                                            <span>  info@expertBusiness.com</span>
                                        </div>
                                        <div className="footer-info-box">
                                            <FontAwesomeIcon icon={faPhoneAlt} style={{ color: "#1496d1", marginRight: "5px" }} />
                                            <span>  +9779800000000, 015286235</span>

                                        </div>
                                        <div className="footer-info-box">
                                            <FontAwesomeIcon icon={faMapMarker} style={{ color: "#1496d1", marginRight: "5px" }} />
                                            <span>  Hongkong, Kathmandu</span>

                                        </div>
                                    </div>
                                    <div class="social-media-links footer-align  mb-3">
                                        <a class="social-media-link social-media-link--facebook" href="#">
                                            <FontAwesomeIcon icon={brands("facebook-f")} style={{ color: "white", zIndex: "1" }} />
                                        </a>
                                        <a class="social-media-link social-media-link--twitter" href="#">
                                            <FontAwesomeIcon icon={brands("twitter")} style={{ color: "white", zIndex: "1" }} />
                                        </a>
                                        <a class="social-media-link social-media-link--instagram" href="#">
                                            <FontAwesomeIcon icon={brands("instagram")} style={{ color: "white", zIndex: "1" }} />
                                        </a>
                                        <a class="social-media-link social-media-link--linkedin" href="#">
                                            <FontAwesomeIcon icon={brands("linkedIn")} style={{ color: "white", zIndex: "1" }} />
                                        </a>
                                        <a class="social-media-link social-media-link--youtube" href="#">
                                            <FontAwesomeIcon icon={brands("youtube")} style={{ color: "white", zIndex: "1" }} />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-12 privacy-link mb-2">
                                    <div><a href="#">Privacy Policy</a></div>
                                    <div><a href="#">Terms & Conditions</a></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Bottom />
        </footer>
    )
}

export default EasyFooter