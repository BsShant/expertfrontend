import React from 'react'
import Products from '../../components/products/Products'
import './styles.css'
import SalesImage from '../../assets/images/sales.png'
import JobRecruitment from '../../assets/images/recruitJob.jpg';
import JobPaucha from '../../assets/images/jobpaucha.jpg'
import Insurance from '../../assets/images/insurance.png'
import ExpertTraning from '../../assets/images/expertTraning.jpg'
import ExpertServices from '../../assets/images/expertBusiness.png'

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
      <div className="container">
        <div className="products-page-inner-container">
          <div className="products-page-heading">
            <div className="page-header">
              Our Products
            </div>
          </div>

          <div className="products-page-body">
            <div className="row">
              {products.map(product => {
                return <div className="col-6 col-lg-4 col-md-4 col-sm-4 col-xs-6 product-margin-bottom">
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