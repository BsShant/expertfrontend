import React from 'react'
import Products from '../products/Products'
import './styles.css'
import SalesImage from '../../assets/images/sales.png'
import JobRecruitment from '../../assets/images/recruitJob.jpg';
import JobPaucha from '../../assets/images/jobpaucha.jpg'
import Insurance from '../../assets/images/insurance.png'
import ExpertTraning from '../../assets/images/expertTraning.jpg'
import ExpertServices from '../../assets/images/expertBusiness.png'
import ProductsNew from '../productsNew/ProductsNew';
import ReactOwlCarousel from 'react-owl-carousel';


const OurProductsNew = (props) => {
    const { naa } = props
    return (
        <section className={`our-products-new-container ${naa ? "snap-y" : ""}`}>
            <div className="container">
                <div className="our-products-new-inner-container">
                    <ReactOwlCarousel className='owl-theme' loop={true} nav={false}
                        margin={30} dots={false} slideTransition='linear' autoplaySpeed={6000} smartSpeed={6000} center={true} autoPlay={true} items={1} nav={false}
                        responsiveClass={true} responsive={{
                            0: {
                                items: 4,
                                autoplay: true
                            },
                            768: {
                                items: 5,
                                autoplay: true
                            },
                            992: {
                                items: 5,
                                autoplay: true
                            }
                        }}>
                        <ProductsNew image={JobRecruitment} name="Recruit me in job" />
                        <ProductsNew image={SalesImage} name="Sales deal in nepal" />
                        <ProductsNew image={Insurance} name="Insurance service in nepal" />
                        <ProductsNew image={JobPaucha} name="Job paucha" />
                        <ProductsNew image={ExpertServices} name="Job paucha" />
                        <ProductsNew image={ExpertTraning} name="Job paucha" />



                    </ReactOwlCarousel>
                </div>
            </div>
        </section>

    )
}

export default OurProductsNew