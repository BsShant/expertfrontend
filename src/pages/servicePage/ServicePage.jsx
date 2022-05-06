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
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { triggerMobileSliderCollapse, triggerSliderCollapse } from '../../store/categoryReducer/categoryStore.actions';
const services = [
  {
    title: "Financial Planning",
    image: FinancePlanning,
    category: "financial-services",
    detail: "We help you to secure financially"
  },
  {
    title: "Investment",
    image: Finance,
    category: "financial-services",
    detail: "We help you to make good investment"
  },
  {
    title: "Accounting Services",
    image: Accounting,
    category: "financial-services",
    detail: "We help you to make good accounts"
  },
  {
    title: "Loan Management",
    image: LoanManagement,
    category: "financial-services",
    detail: "We help you to make good loans"
  },
  {
    title: "Tax Management",
    image: Tax,
    category: "financial-services",
    detail: "We help you to make pay taxes"
  },
  {
    title: "Credit Cards",
    image: CreditCard,
    category: "financial-services",
    detail: "We help you to obtain and renew credit cards"
  },
  {
    title: "Registration, Update, Renew and Close",
    image: Registration,
    category: "legal-services",
    detail: "We help you to register vital events. "

  },


  {
    title: "Legal and Advocacy",
    image: Advocacy,
    category: "legal-services",
    detail: "We help you to deal with your legal issues. "

  },
  {
    title: "IP/Patents",
    image: Patents,
    category: "legal-services",
    detail: "We help you to deal with your copyright issues. "

  },
  {
    title: "Corporate Lawyer",
    image: CorporateLawyer,
    category: "legal-services",
    detail: "We help you to deal with your copyright lawyer. "

  },
  {
    title: "Civil Lawyer",
    image: CivilLawyer,
    category: "legal-services",
    detail: "We help you with your civil cases. "

  },
  {
    title: "Marriage Lawyer",
    image: Advocacy,
    category: "legal-services",
    detail: "We help you with your marriage cases. "

  },

  {
    title: "Information Technology ",
    image: ITImage,
    category: "it-services",
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
  },
  {
    title: "IDS proection",
    image: Cyber,
    category: "security-services",
    detail: "We help you to prevent IDS"
  },
  {
    title: "CCTV",
    image: CCTV,
    category: "security-services",
    detail: "We help you to get CCTV"
  },
  {
    title: "Detection Systems",
    image: Detection,
    category: "security-services",
    detail: "We help you to get detection systems"
  },
  {
    title: "Security Guards",
    image: SecurityGuards,
    category: "security-services",
    detail: "We help you to get security guards"
  },
  {
    title: "Alarm Systems",
    image: AlarmSystems,
    category: "security-services",
    detail: "We help you to get alarm system"
  },
  {
    title: "Access Control System",
    image: AccessControl,
    category: "security-services",
    detail: "We help you to control who gets access"
  },
  {
    title: "Insurance (Life and Non Life)",
    image: Consulting,
    category: "insurance-services",
    detail: "We ensure you get insured. "
  },


]
const ServicePage = () => {
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const categoryCollapse = useSelector(state => state.categoryStore.categoryCollapse)
  const selectedCategory = useSelector(state => state.categoryStore.selectedCategory)
  const [sliderCollapse, setSliderCollapse] = useState(false)
  console.log(categoryCollapse)
  // const [selectedCategory, setSelectedCategory] = useState("legal service")

  return (
    <div className='service-page-container'>
      <div className="container" style={{ display: "flex" }}>
        <div className={`${sliderCollapse ? 'hide-slider' : ""}`}>
          <CategoriesSider />
        </div>
        <div className="service-page-inner-container">

          <div className="category-inner-body">
            <div className="service-body container">
              <div className="service-page-heading">
                <div className="sider-toggle">
                  <FontAwesomeIcon icon={faBars} style={{ fontSize: "24px", color: "black", cursor: "pointer" }} onClick={() => dispatch(setSliderCollapse(prev => !prev))} />

                </div>
                <div className="page-header">
                  Our Services
                </div>
              </div>
              <div className="service-page-body">
                <div className="row">
                  {services.filter(service => service.category === selectedCategory).map(service => {
                    return <div className="col-12 col-lg-4 col-md-6 col-sm-12 col-xs-12" style={{ marginBottom: "30px" }}>
                      <ServiceItem title={service.title} detail={service.detail} image={service.image} />

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

export default ServicePage