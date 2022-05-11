import React from 'react'
import ServiceItem from '../../components/serviceItem/ServiceItem';
import './styles.css';
import Registration from '../../assets/images/registration.jpg'
import Consulting from '../../assets/images/consulting.jpg'
import Finance from '../../assets/images/investment.jpg'
import Advocacy from '../../assets/images/advocacy.jpg'
import Accounting from '../../assets/images/accounting.webp'
import CreditCard from '../../assets/images/creditCard.png';
import FinancePlanning from '../../assets/images/finance.webp'
import CategoriesSider from '../../components/categoriesSider/CategoriesSider';
import Tax from '../../assets/images/tax.jpg'
import Patents from '../../assets/images/patents.jpg'
import CorporateLawyer from '../../assets/images/corporateLaqwyer.jpg'
import CivilLawyer from '../../assets/images/civilLawyer.jpg'
import CCTV from '../../assets/images/cctv.webp'
import LoanManagement from '../../assets/images/loan.jpg'
import Cyber from '../../assets/images/cyber.jpeg'
import Detection from '../../assets/images/detection.jpeg'
import ITImage from '../../assets/images/it.jpeg'
import SecurityGuards from '../../assets/images/securityGuard.jpg'
import AlarmSystems from '../../assets/images/alarmSystem.jpg'
import AccessControl from '../../assets/images/accessControl.jpeg'
import Website from '../../assets/images/website.jpg'
import webHosting from '../../assets/images/webHosting.jpg'
import SocialMedia from '../../assets/images/socialMedia.jpeg'
import LogoDesign from '../../assets/images/logoDesign.jpg'
import MobileApps from '../../assets/images/mobileApps.jpeg'
import Domain from '../../assets/images/domain.jpeg'
import LifeInsurance from '../../assets/images/lifeInsuraance.jpeg'
import MotorInsurance from '../../assets/images/motorInsurance.jpeg'
import HealthInsurance from '../../assets/images/healthInsurance.png'
import TravelInsurance from '../../assets/images/travelInsurance.webp'
import MobileInsurance from '../../assets/images/mobileInsurance.png'
import PropertyInsurance from '../../assets/images/propertyInsurance.jpeg'
import FormFilling from '../../assets/images/formFilling.jpeg'
import DollarCard from '../../assets/images/dollarCard.png'
import MutualFund from '../../assets/images/mutualFund.jpg'
import LAP from '../../assets/images/lap.webp'
import GoldLoan from '../../assets/images/goldLoan.webp'
import HomeLoan from '../../assets/images/homeLoan.jfif'
import PersonalLoan from '../../assets/images/personalLoan.jpg'
import BusinessLoan from '../../assets/images/businessLoan.jfif'
import EducationLoan from '../../assets/images/educationLoan.jpg'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { triggerMobileSliderCollapse, triggerSliderCollapse } from '../../store/categoryReducer/categoryStore.actions';
import ServiceItemMobile from '../../components/serviceItemMobile/ServiceItem';
import Products from '../../components/products/Products';
import { services } from '../../assets/dummy/services';

const ServicePageInner = (props) => {
  const { pathname } = useLocation()
  const { category } = useParams()
 

  return (
    <div className='service-page-container'>
      <div className="container" style={{ display: "flex" }}>
        <div className="service-page-inner-container">

          <div className="category-inner-body">
            <div className="service-body container">
              <div className="service-page-heading">
                <div className="page-header" style={{ textTransform: "capitalize" }}>
                  {category.replaceAll("-", " ")}
                </div>
              </div>
              <div className="service-page-body">
                <div className="row">
                  {services.filter(service => service.category === category).map(service => {
                    return <div className="col-12 col-lg-4 col-md-6 col-sm-6 col-xs-12" style={{ marginBottom: "30px" }}>
                      <ServiceItem category={service.category} title={service.title} detail={service.detail} image={service.image} />

                    </div>

                  })}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ServicePageInner