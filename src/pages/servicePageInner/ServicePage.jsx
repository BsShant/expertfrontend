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
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { triggerMobileSliderCollapse, triggerSliderCollapse } from '../../store/categoryReducer/categoryStore.actions';
import ServiceItemMobile from '../../components/serviceItemMobile/ServiceItem';
import Products from '../../components/products/Products';
const services = [
  {
    title: "Financial Planning",
    image: FinancePlanning,
    category: "financial-services",
    detail: "We help you to secure financially"
  },
  {
    title: "Bank Accounts",
    image: FormFilling,
    category: "financial-services",
    detail: "We help you to open and manage bank accounts"
  },
  {
    title: "Dollar Card",
    image: DollarCard,
    category: "financial-services",
    detail: "We help you to get and maintain dollar card"
  },
  {
    title: "Mutual Funds",
    image: MutualFund,
    category: "financial-services",
    detail: "We help you with mutual funds"
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
    title: "Domain Registration ",
    image: Domain,
    category: "it-services",
    detail: "We help you with domain registration. "
  },

  {
    title: "Web Hosting ",
    image: webHosting,
    category: "it-services",
    detail: "We help you with web hosting"
  },

  {
    title: "Logo Design",
    image: LogoDesign,
    category: "it-services",
    detail: "We help with your company logo designs"
  },


  {
    title: "Websites",
    image: Website,
    category: "it-services",
    detail: "We can create your company website"
  },

  {
    title: "Mobile Apps",
    image: MobileApps,
    category: "it-services",
    detail: "We help to create your company's mobile app"
  },

  {
    title: "Social Media",
    image: SocialMedia,
    category: "it-services",
    detail: "We help to handle your social media."
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
    title: "Life Insurance",
    image: LifeInsurance,
    category: "insurance-services",
    detail: "We ensure you get insured. "
  },
  {
    title: "Motor Insurance",
    image: MotorInsurance,
    category: "insurance-services",
    detail: "We ensure you vehicles gets insured. "
  },
  {
    title: "Health Insurance",
    image: HealthInsurance,
    category: "insurance-services",
    detail: "We ensure you get good health policy. "
  },
  {
    title: "Travel Insurance",
    image: TravelInsurance,
    category: "insurance-services",
    detail: "We ensure your travels remain protected. "
  },
  {
    title: "Property Insurance",
    image: PropertyInsurance,
    category: "insurance-services",
    detail: "We ensure your property gets insured. "
  },
  {
    title: "Mobile Insurance",
    image: MobileInsurance,
    category: "insurance-services",
    detail: "We ensure your mobile gets insured. "
  },
]
const ServicePageInner = (props) => {
  const { pathname } = useLocation()
  const { category } = useParams()
  const dispatch = useDispatch()
  const categoryCollapse = useSelector(state => state.categoryStore.categoryCollapse)
  const selectedCategory = useSelector(state => state.categoryStore.selectedCategory)
  const [sliderCollapse, setSliderCollapse] = useState(false)
  // const [selectedCategory, setSelectedCategory] = useState("legal service")

  return (
    <div className='service-page-container'>
      <div className="container" style={{ display: "flex" }}>
        <div className="service-page-inner-container">

          <div className="category-inner-body">
            <div className="service-body container">
              <div className="service-page-heading">
                <div className="page-header" style={{ textTransform: "capitalize" }}>
                  {category.replace("-", " ")}
                </div>
              </div>
              <div className="service-page-body">
                <div className="row">
                  {services.filter(service => service.category === category).map(service => {
                    return <div className="col-12 col-lg-4 col-md-6 col-sm-6 col-xs-12" style={{ marginBottom: "30px" }}>
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

export default ServicePageInner