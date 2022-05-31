import React from "react";
import "./newStyles.css";
import BusinessMeeting from "../../assets/images/businessMeeting.jpg";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Talking from "../../assets/images/talking.gif";
import OurProductsNew from "../ourProductsNew/OurProducts";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { imageServer } from "../../utils/fetch";

const AboutUsSection = () => {
  let oos = {
    heading: "A NEW WAY TO CREATE PROJECT FOR YOUR COMPANY.",
    blueSpan: "NEW WAY",
  };
  const landingAbout = useSelector((state) => state.landingStore.landingAbout);
  const landingService = useSelector(
    (state) => state.landingStore.landingService
  );

  return (
    <section className="about-us-section-container snap-y">
      {/* <OurProductsNew naa /> */}
      <div className="container" style={{ position: "relative" }}>
        <section class="about-section section">
          <div class="container">
            <div class="section-title">
              <h1>ABOUT</h1>
            </div>
            <div class="about-container">
              <Link
                to="/about-us"
                class="btn-flip"
                data-back="+ VIEW MORE"
                data-front="+ VIEW MORE"
                data-aos="fade-up"
              ></Link>
              <div class="row" style={{ height: "100%" }}>
                <div class="col-sm-12 col-md-6 my-auto">
                  <div
                    class="about-title fade-right"
                    data-aos="fade-right"
                    dangerouslySetInnerHTML={{
                      __html: landingAbout
                        ? landingAbout.heading.replace(
                            landingAbout.blueSpan,
                            `<span>${landingAbout.blueSpan}</span>`
                          )
                        : "",
                    }}
                  >
                    {/* A <span>NEW WAY</span> TO CREATE PROJECT FOR YOUR COMPANY. */}
                  </div>
                  <div class="about-desc" data-aos="fade-right">
                    <p>{landingAbout ? landingAbout.detail : null}</p>
                    {/* <p>
                      Expert Business serves professional and specialist
                      business support to businesses of all sizes and in all
                      sectors. We provide a support service to a company from
                      pre incorporation to operation till winding-up.
                    </p>

                    <p>
                      We’re trusted to provide flexible business services to
                      some of the leading public and private companies.
                    </p> */}
                  </div>
                </div>
                <div class="col-sm-12 col-md-6">
                  <img
                    src={
                      landingAbout
                        ? `${imageServer}/${landingAbout.image}`
                        : null
                    }
                    alt=""
                    data-aos="fade-left"
                  />
                </div>
              </div>
            </div>
            <div class="tech-container">
              <div class="row" style={{ height: "100%" }}>
                
                <div class="col-sm-12 col-md-7 order-2 order-sm-2 order-lg-1 order-md-1">
                  <div class="tech-desc" data-aos="fade-right">
                    {landingService ? landingService.detail : null}
                    {/* At Expert Business, we’re problem solvers. And we specialize
                    in solving those specifically in the business field. Our
                    team of experts has created the best service process that
                    not only saves time for the client but also gets them the
                    best prospect for business. */}
                  </div>
                </div>
                <div class="col-sm-12 col-md-5 order-1 order-sm-1 order-lg-2 order-md-2">
                  <h3 class="tech-title" data-aos="fade-left"
                  dangerouslySetInnerHTML={{
                    __html: landingService
                      ? landingService.heading.replace(
                          landingService.blueSpan,
                          `<span>${landingService.blueSpan}</span>`
                        )
                      : "",
                  }}>
                    {/* WHAT YOU CAN GET <span>FROM US</span> */}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutUsSection;
