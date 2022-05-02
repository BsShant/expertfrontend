import React from 'react'
import Products from '../products/Products'
import './styles.css'
import SalesImage from '../../assets/images/sales.png'
import JobRecruitment from '../../assets/images/recruitJob.jpg';
import JobPaucha from '../../assets/images/jobpaucha.jpg'
import Insurance from '../../assets/images/insurance.png'
// import ProductsNew from '../productsNew/Products';
import ReactOwlCarousel from 'react-owl-carousel';


const OurProducts = (props) => {
    const { naa } = props
    return (
        <section className={`our-products-container ${naa ? "snap-y" : ""}`}>
            <div className="container">
                <div className="our-products-inner-container">
                    <div className="top-title">Our products</div>
                    <div className="heading">We have you covered</div>
                    {/* <div className="detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and.</div> */}
                    <div className="row" style={{padding: "0 50px"}}>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 products-margin"><Products image={JobRecruitment} name="Recruit me in job" /> </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 products-margin"><Products image={SalesImage} name="Sales deal in nepal" /> </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 products-margin"><Products image={Insurance} name="Insurance service in nepal" /> </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 products-margin"><Products image={JobPaucha} name="Job paucha" /> </div>
                    </div>
                    {/* <ReactOwlCarousel className='owl-theme' loop={true} margin={30} autoPlay={false} items={1} nav={false}
                        responsiveClass={true} responsive={{
                            0: {
                                items: 1,
                                autoplay: true
                            },
                            768: {
                                items: 1,
                                autoplay: true
                            },
                            992: {
                                items: 1,
                                autoplay: false
                            }
                        }}>
                        <ProductsNew image={JobRecruitment} name="Recruit me in job" />
                        <ProductsNew image={SalesImage} name="Sales deal in nepal" />
                        <ProductsNew image={Insurance} name="Insurance service in nepal" />
                        <ProductsNew image={JobPaucha} name="Job paucha" />


                    </ReactOwlCarousel> */}
                </div>
            </div>
        </section>

    )
}

export default OurProducts