import React from 'react'
import Bottom from '../../components/bottom/Bottom'
import CategoriesSider from '../../components/categoriesSider/CategoriesSider'
import FooterSection from '../../components/footerSection/FooterSection'
import Header from '../../components/header/Header'
import { useSelector } from 'react-redux'
import './styles.css'
import CategoriesSiderMobile from '../../components/categoriesSiderMobile/CategoriesSiderMobile'
import EasyFooter from '../../components/easyFooter/EasyFooter'
import ServicePageMobile from '../../pages/serviceMobilePage/ServicePage'
const CategoryLayout = (props) => {
    const categoryCollapse = useSelector(state => state.categoryStore.categoryCollapse)
    const categoryMobileCollapse = useSelector(state => state.categoryStore.categoryMobileCollapse)
    return (
        <div>
            <Header />


            <div className="category-body">
                {props.children}
                <EasyFooter />
            </div>
            <div className="category-body-mobile">
                <ServicePageMobile />
                <EasyFooter />

            </div>

        </div>
    )
}

export default CategoryLayout