import React from 'react'
import Bottom from '../../components/bottom/Bottom'
import CategoriesSider from '../../components/categoriesSider/CategoriesSider'
import FooterSection from '../../components/footerSection/FooterSection'
import Header from '../../components/header/Header'
import { useSelector } from 'react-redux'
import './styles.css'
import CategoriesSiderMobile from '../../components/categoriesSiderMobile/CategoriesSiderMobile'
const CategoryLayout = (props) => {
    const categoryCollapse = useSelector(state => state.categoryStore.categoryCollapse)
    const categoryMobileCollapse = useSelector(state => state.categoryStore.categoryMobileCollapse)
    return (
        <div>
            <Header />
            <div className="category-layout-inner">
                <div className='sider-layout'  style={{width:`${categoryCollapse? "0%" :"20%"}`}}>
                    <CategoriesSider />
                </div>
                <div className='sider-layout-mobile'  style={{width:`${categoryMobileCollapse? "0%" :"38%"}`}}>
                    <CategoriesSiderMobile />
                </div>
                <div className="category-body"  style={{width:`${categoryCollapse? "100%" :"80%"}` , marginLeft:`auto`}}>
                    {props.children}
                    <FooterSection />
                    {/* <Bottom /> */}
                </div>

            </div>
        </div>
    )
}

export default CategoryLayout