import React from 'react'
import ServiceItem from '../../components/serviceItem/ServiceItem';
import './styles.css';
import Registration from '../../assets/images/registration.jpg'
import Consulting from '../../assets/images/consulting.jpg'
import Finance from '../../assets/images/accounting.avif'
import Advocacy from '../../assets/images/advocacy.jpg'
import CategoriesSider from '../../components/categoriesSider/CategoriesSider';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { triggerMobileSliderCollapse, triggerSliderCollapse } from '../../store/categoryReducer/categoryStore.actions';
const services = [
  {
    title: "Registration, Update, Renew and Close",
    image: Registration,
    category: "legal service",
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "

  },
  {
    title: "Management Consulting",
    image: Consulting,
    category: "consulting",
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "

  },
  {
    title: "Account, Finance and Tax",
    image: Finance,
    category: "finance",
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "

  },
  {
    title: "Legal and Advocacy",
    image: Advocacy,
    category: "legal service",
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "

  },
  {
    title: "Architecture and Engineering",
    image: Advocacy,
    category: "engineering",
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
  },
  {
    title: "Human Resources Management",
    image: Advocacy,
    category: "management",
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
  },
  {
    title: "Information Technology and Cyber Security",
    image: Advocacy,
    category: "it",
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
  },
  {
    title: "Training and Skill Development",
    image: Advocacy,
    category: "training",
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
  },
  {
    title: "Strategic Sourcing and Procurement",
    image: Advocacy,
    category: "strategy",
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
  },
  {
    title: "Marketing and Promotion",
    image: Advocacy,
    category: "marketing",
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
  },
  {
    title: "Insurance (Life and Non Life)",
    image: Advocacy,
    category: "insurance",
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
  },
  {
    title: " Research and Report",
    image: Advocacy,
    category: "research",
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
  }
  , {
    title: "Translation and Attestation",
    image: Advocacy,
    category: "language",
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
  },
  {
    title: "Foreign Investment ",
    image: Advocacy,
    category: "investment",
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
  },
  {
    title: "Design and Print",
    image: Advocacy,
    category: "designing",
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
  },
  {
    title: "Collaboration",
    image: Advocacy,
    category: "training",
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
  },

]
const ServicePage = () => {
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const categoryCollapse = useSelector(state => state.categoryStore.categoryCollapse)
  const selectedCategory = useSelector(state => state.categoryStore.selectedCategory)
  console.log(categoryCollapse)
  // const [selectedCategory, setSelectedCategory] = useState("legal service")

  return (
    <div className='service-page-container'>
      <div className="container">
        <div className="service-page-inner-container">
         
          <div className="category-inner-body">
            <div className="service-body container">
              <div className="service-page-heading">
                <div className="sider-toggle">
                  <FontAwesomeIcon icon={faBars} style={{ fontSize: "24px", color: "white", cursor: "pointer" }} onClick={() => dispatch(triggerSliderCollapse())} />

                </div>
                <div className="sider-toggle-mobile">
                  <FontAwesomeIcon icon={faBars} style={{ fontSize: "24px", color: "white", cursor: "pointer" }} onClick={() => dispatch(triggerMobileSliderCollapse())} />

                </div>
                <div className="page-header">
                  Our Services
                </div>
              </div>
              <div className="service-page-body">
                <div className="row">
                  {services.filter(service => service.category === selectedCategory).map(service => {
                    return <div className="col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{marginBottom:"30px"}}>
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