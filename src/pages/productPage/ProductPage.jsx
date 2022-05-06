import React from 'react'
import Products from '../../components/products/Products'
import './styles.css'
import SalesImage from '../../assets/images/sales.png'
import JobRecruitment from '../../assets/images/recruitJob.jpg';
import JobPaucha from '../../assets/images/jobpaucha.jpg'
import Insurance from '../../assets/images/insurance.png'
import ExpertTraning from '../../assets/images/expertTraning.jpg'
import ExpertServices from '../../assets/images/expertBusiness.png'
import ProductBg from '../../assets/images/productBg.png'

const ProductPage = () => {
  const products = [
    {
      name: "Expert services",
      image: ExpertServices
    },
    {
      name: "Recruit me in job",
      image: JobRecruitment
    },
    {
      name: "Sales deal in nepal",
      image: SalesImage


    },
    {
      name: "Insurance service in nepal",
      image: Insurance
    },
    {
      name: "Job paucha",
      image: JobPaucha
    },
    {
      name: "ETC-Expert Trainings & Coaching",
      image: ExpertTraning
    }
  ]
  return (
    <div className='products-page-container'>
      <div className="our-products-top-half">
        <div className="container">
          <div className="our-products-upper-half-inner-container">
            <div className="row" style={{ display: "flex", alignItems: "center" }}>
              <div className="col-md-6 order-md-1 order-2">
                <div className="products-upper-half-text">
                  <div className="products-upper-half-heading">
                    One Stop Solution <br />
                    <span>For All Of Your Problems</span>
                  </div>
                  <div className="products-upper-half-para">
                    At expert, we have developed many products that help to solve your problems.
                    These products comes in both digital and physical form.
                    Take a look at some of the products we have made.
                  </div>
                </div>
                {/* <div className="products-upper-half-button"></div> */}
              </div>
              <div className="col-md-6 order-md-2 order-1">
                <div className="products-upper-half-image">
                  <img src={ProductBg} alt="Product Bg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="products-page-inner-container">
          {/* <div className="products-page-heading">
            <div className="page-header">
              Our Products
            </div>
          </div> */}


          <div className="products-page-body">
            <div className="row">
              {products.map(product => {
                return <div className="col-12 col-lg-3 col-md-4 col-sm-4 col-xs-6 product-margin-bottom">
                  <Products name={product.name} image={product.image} />

                </div>

              })}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage