import React, { useState } from "react";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/images/logo.jpg";
import { Menu, DatePicker } from "antd";
import Nav from "../components/nav/Nav";
import LandingPage from "../pages/landingPage/LandingPage";
import { Outlet, Route, Router, Routes } from "react-router-dom";
import ContactPage from "../pages/contactPage/ContactPage";
import ServicePage from "../pages/servicePage/ServicePage";
import AboutPage from "../pages/aboutPage/AboutPage";
import ProductPage from "../pages/productPage/ProductPage";
import FooterSection from "../components/footerSection/FooterSection";
import Header from "../components/header/Header";
import PublicLayout from "../layout/publicLayout/PublicLayout";
import CategoryLayout from "../layout/categoryLayout/CategoryLayout";
import FundRaiserPage from "../pages/fundRaiserPage/FundRaiserPage";
import ProjectPage from "../pages/projectPage/ProjectPage";
import ServiceInner from "../pages/serviceInner/serviceInner";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";
import Login from "../pages/login/Login";
import ServicePageInner from "../pages/servicePageInner/ServicePage";
const IndexRoute = () => {

  return (
    <>
      <ScrollToTop>

        <Routes>
          <Route element={
            <PublicLayout>
              <Outlet />
            </PublicLayout>
          }>


            <Route path="/our-products" element={<ProductPage />} />
            <Route path="/fund-raiser" element={<FundRaiserPage />} />
            <Route path="/fund-raiser/project-page" element={<ProjectPage />} />
            <Route path="/our-services/service-page" element={<ServiceInner />} />

            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/our-services/:category" element={<ServicePageInner />} />
                        {/* <Route path="/our-services" element={<ServicePage />} /> */}


          </Route>

          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route element={
            <CategoryLayout>
              <Outlet />
            </CategoryLayout>
          }>
            <Route path="/our-services" element={<ServicePage />} />
            

          </Route>
        </Routes >
      </ScrollToTop>
    </>
  );
};

export default IndexRoute;
