import React from 'react'
import './styles.css';
import Logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EasyFooter = () => {
    return (
        <footer data-aos="fade-up">

            <div class="container">
                <div class="tech-container" style={{ padding: "0" }}>
                    <div class="row" style={{ height: "100%" }}>
                        <div class="col-sm-12 col-md-5">
                            <h3 class="tech-title text-left">We <span>collabrate</span> with ambitious
                                brands and people. Let's build something great together.
                            </h3>
                            {/* <img src="logo/logo-white.svg" alt="" width="167px" class="mt-2" /> */}
                            <Link to='/'>
                                <img src={Logo} alt="Company's Logo" width="167px" class="mt-2" />
                            </Link>
                        </div>
                        <div class="col-sm-12 col-md-7">
                            <div class="row">
                                <div class="col-sm-12 col-md-6 footer-links">
                                    <h4>LINKS</h4>
                                    <ul>
                                        <li> <a href="#">About Us</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                    </ul>
                                </div>
                                <div class="col-sm-12 col-md-6">
                                    <div class="footer-contact-info">
                                        <span> <i class="fa fa-envelope"></i> info@easyventure.com</span>
                                        <span> <i class="fa fa-phone"></i> +9779800000000, 015286235</span>
                                        <span> <i class="fa fa-map-marker"></i> Hongkong, Kathmandu</span>
                                    </div>
                                    <div class="social-media-links">
                                        <a class="social-media-link social-media-link--facebook" href="#">
                                        <FontAwesomeIcon icon={brands("facebook-f")} style={{ color: "white", zIndex:"1" }} />
                                        </a>
                                        <a class="social-media-link social-media-link--twitter" href="#">
                                        <FontAwesomeIcon icon={brands("twitter")} style={{ color: "white", zIndex:"1" }} />
                                        </a>
                                        <a class="social-media-link social-media-link--instagram" href="#">
                                        <FontAwesomeIcon icon={brands("instagram")} style={{ color: "white", zIndex:"1" }} />
                                        </a>
                                        <a class="social-media-link social-media-link--linkedin" href="#">
                                        <FontAwesomeIcon icon={brands("linkedIn")} style={{ color: "white", zIndex:"1" }} />
                                        </a>
                                        <a class="social-media-link social-media-link--youtube" href="#">
                                        <FontAwesomeIcon icon={brands("youtube")} style={{ color: "white", zIndex:"1" }} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default EasyFooter