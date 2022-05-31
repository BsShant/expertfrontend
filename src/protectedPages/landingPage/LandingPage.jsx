import React, { useRef, useState } from "react";
import LandingHero from "../../protectedComponents/landingHero/LandingHero";
import AboutSection from "../../protectedComponents/aboutSection/AboutSection";
import "./styles.css";
import LandingService from "../../protectedComponents/landingService/LandingService";
import ProductPage from "../productPage/ProductPage";
import TeamData from "../../protectedComponents/teamData/teamData";
import TeamTable from "../../protectedComponents/teamTable/teamTable";
import { server } from "../../utils/fetch";
import DataInputModal from "../../protectedComponents/dataInputmodal/DataInputModal";
import TestimonialData from "../../protectedComponents/testimonialData/testimonialData";
import TestimonialTable from "../../protectedComponents/testimonialTable/testimonialTable";
import { useNav } from "../../protectedComponents/UseNav/UseNav";
const LandingPage = () => {
  const landingRef = useNav('Landing');

  const [teamDataModalVisible, setTeamDataModalVisible] = useState(false);
  const [testimonialDataModalVisible, setTestimonialDataModalVisible] =
    useState(false);

  return (
    <div ref={landingRef} id="LandingContainer">
      <div className="container">
        <div className="admin-landing-inner-section">
          <div className="admin-header">Landing Page Section</div>
          <LandingHero />
          {/* <AboutSection /> */}
          {/* <LandingService /> */}
          <div className="admin-inner-section">
            <div className="admin-sub-heading">Team Section</div>
            <button
              className="choose-button"
              onClick={() => setTeamDataModalVisible(true)}
            >
              Add Team
            </button>
            <DataInputModal
              setDataModalVisible={setTeamDataModalVisible}
              dataModalVisible={teamDataModalVisible}
            >
              <TeamData url={`${server}/team`} method="POST" />
            </DataInputModal>
            <TeamTable />
          </div>

          <div className="admin-inner-section">
            <div className="admin-sub-heading">Testimonial Section</div>
            <button
              className="choose-button"
              onClick={() => setTestimonialDataModalVisible(true)}
            >
              Add Testimonial
            </button>
            <DataInputModal
              setDataModalVisible={setTestimonialDataModalVisible}
              dataModalVisible={testimonialDataModalVisible}
            >
              <TestimonialData url={`${server}/testimonial`} method="POST" />
            </DataInputModal>
            <TestimonialTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
