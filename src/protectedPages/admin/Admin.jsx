import React, { useEffect, useState } from "react";
import AdminBottom from "../../protectedComponents/adminBottom/AdminBottom";
import Logo from "../../assets/images/logo.png";
import AboutPage from "../aboutPage/AboutPage";
import Dashboard from "../dashboard/Dashboard";
import FooterPage from "../footerPage/FooterPage";
import FundRaiserPage from "../fundRaiserPage/FundRaiserPage";
import LandingPage from "../landingPage/LandingPage";
import ProductPage from "../productPage/ProductPage";
import ServicePage from "../servicePage/ServicePage";
import "./styles.css";

import ProtectedHeader from "../../protectedComponents/header/ProtectedHeader";
import { NavProvider } from "../../protectedComponents/NavProvider/NavProvider";
import SmallDashboard from "../SmallDashboard/SmallDashboard";
import ContactPage from "../contactPage/ContactPage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProtectedNav from "../../protectedComponents/nav/ProtectedNav";
import AdminBody from "../../protectedComponents/adminBody/AdminBody";
const Admin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [adminSlider, setAdminSlider] = useState(true);
  return (
    <div>
      <NavProvider>
        <AdminBody />
      </NavProvider>
    </div>
  );
};

export default Admin;
