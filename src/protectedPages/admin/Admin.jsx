import React from "react";
import DemoLine from "../../protectedComponents/demo/DemoLine";
import DemoLiquid from "../../protectedComponents/demo/DemoWater";
import ServiceLines from "../../protectedComponents/demo/ServiceLines";
import VisitorGraph from "../../protectedComponents/demo/VisitorGraph";
import VisitorsDoughnut from "../../protectedComponents/demo/VisitorsDoughnut";
import StatsCardsContainer from "../../protectedComponents/statsCardsContainer/StatsCardsContainer";
import AboutPage from "../aboutPage/AboutPage";
import Dashboard from "../dashboard/Dashboard";
import FundRaiserPage from "../fundRaiserPage/FundRaiserPage";
import LandingPage from "../landingPage/LandingPage";
import ProductPage from "../productPage/ProductPage";
import ServicePage from "../servicePage/ServicePage";
import "./styles.css";
const Admin = () => {
  return (
    <div>
      <Dashboard />
      <div className="container">
        <StatsCardsContainer />
        <div className="row mt-2">
          <div className="col-lg-6 service-stats-container">
            <ServiceLines />
            <div className="service-stats-heading mt-3">
              Services Taken During This month
            </div>
          </div>
          <div className="col-lg-6 visitor-stats-container">
            <VisitorGraph />
            <div className="visitor-stats-heading mt-3">
              Visitors This month
            </div>
          </div>
          <div className="col-lg-6 visitor-doughnut-stats-container">
            <VisitorsDoughnut />
            <div className="visitor-doughnut-stats-heading">
              Visitors From Devices
            </div>
          </div>
        </div>
      </div>
      <LandingPage />
      <ServicePage />
      <ProductPage />
      <FundRaiserPage />
      <AboutPage />
    </div>
  );
};

export default Admin;
