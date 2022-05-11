import React, { Suspense, useState } from "react";
import Header from "../header/Header";
import Nav from "../nav/Nav";
import './styles.css'
import {
    solid,
    regular,
    brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BusinessMan from '../../assets/images/businessman-under-workload.png'
import GreenBusiness from '../../assets/images/greenBusiness.png'
import { useNavigate } from "react-router-dom";
import TransparentEarth from '../../assets/images/transparentEarth.png'
import { useEffect } from "react";
import * as Three from "three";
import { useRef } from "react";
import $ from "jquery";
import Earth from "../earth/earth";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
const HeroSection = () => {
    const navigate = useNavigate()
    const [renderer, setRenderer] = useState()
    const containerRef = useRef()


    return (
        <section className="hero-container snap-y">
            <Header />
            <div className="container">

                <div className="hero-inner-container">
                    <div className="hero-text">
                        <div className="row" style={{ height: "100%" }}>
                            <div className="hero-text-container order-2 order-md-1 col-lg-6 col-12 order-lg-1 order-2" style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                                <h2 className="hero-title" data-aos="fade-down"
                                    data-aos-easing="ease-in-sine">
                                    We Are <br />
                                    The Expert Business
                                </h2>
                                <div className="hero-detail" data-aos="fade-up"
                                    data-aos-easing="ease-in-sine">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy...
                                </div>
                                <div className="button-section">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="register-button-container">
                                                <button className="primary-button" onClick={() => navigate('/our-services')} data-aos="fade-right"
                                                    data-aos-easing="ease-in-sine">Our Services</button>
                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-6">
                                <div className="earth-container">
                                    <img src={TransparentEarth} alt="" srcset="" />
                                </div>
                            </div> */}
                            {/* <div className="col-sm-12 col-md-6 globe-container">
                                <div className="globe-earth" ref={containerRef}>
                                    <canvas style={{ width: "640px", height: "653px" }} tabindex="0" width="640" height="653"></canvas>
                                </div>
                            </div> */}
                            <div className="col-lg-6 order-1 order-md-2" style={{height:"calc(100vh - 90px)"}}>
                                <Canvas camera={{zoom:2.5 ,position:[-50, 100, 600], fov:28, near: 20, far:1000000, rotateY:45/180*Math.PI}}>
                                    <ambientLight intensity={1} />
                                    <Suspense fallback={null}>
                                        <Earth />
                                    </Suspense>
                                    <OrbitControls enablePan={false} enableZoom={false}/>
                                </Canvas>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeroSection
