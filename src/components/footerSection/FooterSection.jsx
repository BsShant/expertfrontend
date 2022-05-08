import React from 'react'
import Logo from '../../assets/images/expertBright.png'
import {
    solid,
    regular,
    brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import './styles.css'
import Bottom from '../bottom/Bottom';
import { faEnvelope, faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const FooterSection = (props) => {
    const { naa } = props
    return (
        <div className={`footer-section  ${naa ? 'snap-y' : ""}`}>

            <div className={`footer-container`}>
                <div className="fooer-inner-container">
                    <div className="row reach-us-outer">
                        <div className="container">
                            <div className="reach-us-container">
                                <div className="row">
                                    <div className="col-12" style={{marginBottom:"15px"}}>
                                        <div className="reach-us-heading">
                                            How To Reach Us
                                        </div>
                                        {/* <div className="reach-us-text">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </div> */}
                                    </div>
                                    <div className="col-md-4 reach-us-margin-bottom" >
                                        <div className="reach-us-item">
                                            <div className="reach-us-icon">
                                                <FontAwesomeIcon icon={faPhone} color="black" />
                                            </div>
                                            <div className="reach-us-info">
                                                <div className="reach-us-info-heading">Call us at</div>
                                                <div className="reach-us-info-text">01-4467161</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 reach-us-margin-bottom">
                                        <div className="reach-us-item">
                                            <div className="reach-us-icon">
                                                <FontAwesomeIcon icon={solid("map-marker-alt")} color="black" />
                                            </div>
                                            <div className="reach-us-info">
                                                <div className="reach-us-info-heading">Find us at</div>
                                                <div className="reach-us-info-text">samakhushi, Kathmandu<br />Nepal</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 reach-us-margin-bottom">
                                        <div className="reach-us-item">
                                            <div className="reach-us-icon">
                                                <FontAwesomeIcon icon={faEnvelope} color="black" />
                                            </div>
                                            <div className="reach-us-info">
                                                <div className="reach-us-info-heading">Email us at</div>
                                                <div className="reach-us-info-text">expertservices@gmail.com</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="below-footer">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 footer-bottom" >
                                    <div className="footer-logo">
                                        <img src={Logo} alt="Footer Logo" />
                                        <div className="footer-about-us">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-3 col-sm-6 col-xs-12 footer-bottom">
                                    <div className="footer-header" style={{ justifyContent: 'flex-start' }}>
                                        Ask The Expert
                                    </div>
                                    <div className="find-expert-text">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </div>
                                    <div className="expert-button-container">
                                        <button className='primary-button' style={{ fontSize: "14px" }}>Ask the expert</button>
                                    </div>
                                    {/* <div className="contact-body">
                                        <div className="contact-body-item">
                                            <div className="footer-icon-contact-align">
                                                <FontAwesomeIcon icon={solid("map-marker-alt")} color="black" />
                                                <div className="footer-contact-text">
                                                    samakhusi,<br />
                                                    Kathmandu, Nepal
                                                </div>
                                            </div>
                                        </div>
                                        <div className="contact-body-item">
                                            <div className="footer-icon-contact-align">
                                                <FontAwesomeIcon icon={solid("map-marker-alt")} color="black" />
                                                <div className="footer-contact-text">
                                                    username@gmail.com
                                                </div>
                                            </div>
                                        </div>
                                        <div className="contact-body-item">
                                            <div className="footer-icon-contact-align">
                                                <FontAwesomeIcon icon={solid("phone-alt")} color="black" />
                                                <div className="footer-contact-text">
                                                    +9779841557799<br />
                                                    014467161
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="col-lg-2 ml-auto col-md-3 col-sm-6 col-xs-12 footer-bottom" >
                                    <div className="footer-header">
                                        Quick Links
                                    </div>
                                    <div className="links-container">
                                        <div className="footer-link">
                                            <Link to="/">Home</Link>
                                        </div>
                                        <div className="footer-link">
                                            <Link to="/about-us">About Us</Link>
                                        </div>
                                        <div className="footer-link">
                                            <Link to="/our-services">Our Services</Link>

                                        </div>
                                        <div className="footer-link">
                                            <Link to="/our-products">Our Products</Link>
                                        </div>
                                        <div className="footer-link">
                                            <Link to="/contact-us">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 ml-auto col-md-2 col-sm-6 col-xs-12 footer-bottom" >
                                    <div className="footer-header">
                                        Follow Us
                                    </div>
                                    <div className="follow-container">
                                        {/* <div className="follow-heading"></div> */}
                                        <div className="social-icons-container">
                                            <div className="social-media-buttons-container">
                                                <a href="facebook.com" target="_blank" className="social-media-button-icon facebook-icon" style={{ background: "#ccc" }}>
                                                    <FontAwesomeIcon icon={brands("facebook-f")} style={{ color: "white" }} />
                                                </a>
                                                <a href="facebook.com" target="_blank" className="social-media-button-icon twitter-icon" style={{ background: "#ccc" }}>
                                                    <FontAwesomeIcon icon={brands("twitter")} style={{ color: "white" }} />
                                                </a>
                                                <a href="facebook.com" target="_blank" className="social-media-button-icon youtube-icon" style={{ background: "#ccc" }}>
                                                    <FontAwesomeIcon icon={brands("youtube")} style={{ color: "white" }} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                naa ?
                    <Bottom naa />
                    : <Bottom />
            }
        </div>
    )
}


export default FooterSection