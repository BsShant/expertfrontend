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
import LoanManagement from '../../assets/images/loan.jpg'
import Cyber from '../../assets/images/cyber.jpeg'
import ITImage from '../../assets/images/it.jpeg'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { triggerMobileSliderCollapse, triggerSliderCollapse } from '../../store/categoryReducer/categoryStore.actions';
import ServiceItemMobile from '../../components/serviceItemMobile/ServiceItem';
const categories = [
  {
    image: FinancePlanning,
    category: "financial-services",
  },


  {
    image: Registration,
    category: "legal-services",

  },


  {
    image: Advocacy,
    category: "legal-services",
  },


  {

    image: ITImage,
    category: "it-services",

  },
  {
    image: Cyber,
    category: "security-services",
  },

  {
    image: Consulting,
    category: "insurance-services",
  },


]
const ServicePageMobile = () => {
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const categoryCollapse = useSelector(state => state.categoryStore.categoryCollapse)
  const selectedCategory = useSelector(state => state.categoryStore.selectedCategory)
  const [sliderCollapse, setSliderCollapse] = useState(false)
  console.log(categoryCollapse)
  // const [selectedCategory, setSelectedCategory] = useState("legal service")

  return (
    <div className='mobile-service-page-container'>
      <div className="container" style={{ display: "flex" }}>
        
        <div className="service-page-inner-container">

          <div className="category-inner-body">
            <div className="service-body container">
              <div className="service-page-heading">
                <div className="page-header">
                  Our Services
                </div>
              </div>
              <div className="service-page-body">
                <div className="row">
                  {categories.map(category => {
                    return <div className="col-12 col-lg-4 col-md-6 col-sm-6 col-xs-12" style={{ marginBottom: "30px" }}>
                      <ServiceItemMobile category={category.category} image={category.image} />
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

export default ServicePageMobile