import React from 'react';
import './styles.css'
import AboutBg from '../../assets/images/aboutUsBg.jpg'
import SuitMan from '../../assets/images/suitMan.png'

import Testimonials from '../../components/testimonials/Testimonials';
import Header from '../../components/header/Header';
import Bottom from '../../components/bottom/Bottom';
import FooterSection from '../../components/footerSection/FooterSection';

const AboutPage = () => {
  return (
    <>

      <div className='about-page-container snap-y'>
        <Header />
        <div className="container">
          <div className="about-page-inner-container">
            <div className="row" style={{height:"100%"}}>
              <div className="col-md-12 col-sm-12 col-lg-6 order-md-2 order-lg-1 order-sm-2  order-2  order-xlg-1">
                <div className="about-text-detail">
                  <div className="top-title">About us</div>
                  <div className="header">We are Expert</div>
                  <div className="body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and...
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and...
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-lg-6 order-md-1 order-lg-2 order-sm-1 order-xs-1 order-1  order-xlg-2 about-page-image-container">
                <img src={AboutBg} alt="About us" data-aos="fade-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ourTeam-section snap-y">
        <div className="container">
          <div className="our-team-inner-container">
            <div className="our-team-heading">
              <div className="top-title">Our Team</div>
              <div className="body">Our team is composed of brilliant individual across diffeent sector.
                Each of them encompass different forms of skill</div>
            </div>
            <div className="our-team-body">
              <div className="row">
                <div className="col-6 col-md-3 col-sm-6 col-xs-6 col-lg-3">
                  <div className="team-box">
                    <div className="team-image">
                      <img src={SuitMan} alt="Team Member" />
                    </div>
                    <div className="team-detail">
                      <div className="team-name">Elon Musk</div>

                      <div className="team-role">C E O</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-sm-6 col-xs-6 col-lg-3">
                  <div className="team-box">
                    <div className="team-image">
                      <img src={SuitMan} alt="Team Member" />
                    </div>
                    <div className="team-detail">
                      <div className="team-name">Elon Musk</div>

                      <div className="team-role">C E O</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-sm-6 col-xs-6 col-lg-3">
                  <div className="team-box">
                    <div className="team-image">
                      <img src={SuitMan} alt="Team Member" />
                    </div>
                    <div className="team-detail">
                      <div className="team-name">Elon Musk</div>

                      <div className="team-role">C E O</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-sm-6 col-xs-6 col-lg-3">
                  <div className="team-box">
                    <div className="team-image">
                      <img src={SuitMan} alt="Team Member" />
                    </div>
                    <div className="team-detail">
                      <div className="team-name">Elon Musk</div>

                      <div className="team-role">C E O</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Testimonials type="about" naa />
      <FooterSection naa/>
      {/* <Bottom /> */}+
    </>
  )
}

export default AboutPage