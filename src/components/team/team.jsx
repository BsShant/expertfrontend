import React from 'react'
import './styles.css';
import Team1 from '../../images/team/1.jpg'
import Team2 from '../../images/team/2.jpg'
import Team3 from '../../images/team/3.jpg'
import ReactOwlCarousel from 'react-owl-carousel';

const EasyTeam = () => {
    return (
        <section class="team-section section">
            <div class="container">
                <div class="section-title">
                    <h1>
                        Team
                    </h1>
                </div>
                <div class="team-list" data-aos="fade-up">
                    <div class="row">
                        <div class="col-sm-12 col-md-4">
                            <a href="#">
                                <div class="team-card">
                                    <img src={Team1} alt="" width="100%" />
                                    <div class="team-card-overlay">
                                        <div class="overlay-content">
                                            <div class="team-info">
                                                <h3>John Doe</h3>
                                                <h5>Graphic Designer</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <a href="#">
                                <div class="team-card">
                                    <img src={Team2} alt="" width="100%" />
                                    <div class="team-card-overlay">
                                        <div class="overlay-content">
                                            <div class="team-info">
                                                <h3>Chun Lee</h3>
                                                <h5>Accountant</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <a href="#">
                                <div class="team-card">
                                    <img src={Team3} alt="" width="100%" />
                                    <div class="team-card-overlay">
                                        <div class="overlay-content">
                                            <div class="team-info">
                                                <h3>Jhonny Walker</h3>
                                                <h5>Web Developer</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <a href="#">
                                <div class="team-card">
                                    <img src={Team3} alt="" width="100%" />
                                    <div class="team-card-overlay">
                                        <div class="overlay-content">
                                            <div class="team-info">
                                                <h3>Jhonny Walker</h3>
                                                <h5>Web Developer</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <a href="#">
                                <div class="team-card">
                                    <img src={Team3} alt="" width="100%" />
                                    <div class="team-card-overlay">
                                        <div class="overlay-content">
                                            <div class="team-info">
                                                <h3>Chun Lee</h3>
                                                <h5>Accountant</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <a href="#">
                                <div class="team-card">
                                    <img src={Team2} alt="" width="100%" />
                                    <div class="team-card-overlay">
                                        <div class="overlay-content">
                                            <div class="team-info">
                                                <h3>John Doe</h3>
                                                <h5>Graphic Designer</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="tech-container" style={{ paddingRight: "10px" }}>
                    <div class="row" style={{ height: "100%" }}>
                        <div class="col-sm-12 col-md-5 my-auto" data-aos="fade-right">
                            <h3 class="tech-title text-left">What Other Say <span> About Us</span></h3>
                        </div>
                        <div class="col-sm-12 col-md-7" data-aos="fade-left">
                            <ReactOwlCarousel nav={false}
                                loop={true}
                                margin={30}
                                items={1}
                                dots={true}
                                autoplay={true} className='tm-list owl-carousal owl-theme'>
                                <div class="tm-card">
                                    <div class="tm-desc">"Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
                                        libero venenatis faucibus. Nullam quis ante eti."</div>
                                    <h3 class="tm-name">John Doe - Creative Head</h3>
                                </div>
                                <div class="tm-card">
                                    <div class="tm-desc">"Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
                                        libero venenatis faucibus. Nullam quis ante eti."</div>
                                    <h3 class="tm-name">John Doe - Creative Head</h3>
                                </div>
                                <div class="tm-card">
                                    <div class="tm-desc">"Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
                                        libero venenatis faucibus. Nullam quis ante eti."</div>
                                    <h3 class="tm-name">John Doe - Creative Head</h3>
                                </div>
                            </ReactOwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default EasyTeam