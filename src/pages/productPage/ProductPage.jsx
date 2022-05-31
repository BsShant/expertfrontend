import React from "react";
import Products from "../../components/products/Products";
import "./styles.css";
import SalesImage from "../../assets/images/sales.png";
import JobRecruitment from "../../assets/images/recruitJob.jpg";
import JobPaucha from "../../assets/images/jobpaucha.jpg";
import Insurance from "../../assets/images/insurance.png";
import ExpertTraning from "../../assets/images/expertTraning.jpg";
import ExpertServices from "../../assets/images/expertBusiness.png";
import ProductBg from "../../assets/images/productBg.png";
import { useSelector } from "react-redux";
import { imageServer } from "../../utils/fetch";

const ProductPage = () => {
  const products = useSelector((state) => state.productStore.products);
  const productHero = useSelector((state) => state.productStore.productHero);

  return (
    <div className="products-page-container">
      <div className="our-products-top-half">
        <div className="container">
          <div className="our-products-upper-half-inner-container">
            <div
              className="row"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="col-md-6 order-md-1 order-2">
                <div className="products-upper-half-text">
                  <div className="products-upper-half-heading">
                    {productHero ? productHero.heading : null} <br />
                    <span>{productHero ? productHero.blueSpan : null}</span>
                  </div>
                  <div className="products-upper-half-para">
                    {productHero ? productHero.detail : null}
                  </div>
                </div>
                {/* <div className="products-upper-half-button"></div> */}
              </div>
              <div className="col-md-6 order-md-2 order-1">
                <div className="products-upper-half-image">
                  <img
                    src={
                      productHero ? `${imageServer}/${productHero.image}` : null
                    }
                    alt="Product Bg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="products-page-inner-container">
          <div className="products-page-body">
            <div className="row">
              {products.length > 0
                ? products.map((product, index) => {
                    return (
                      <div className="col-12 col-lg-3 col-md-4 col-sm-4 col-xs-6 product-margin-bottom">
                        <Products
                          key={index}
                          name={product.name}
                          image={`${imageServer}/${product.image}`}
                          link={product.link}
                        />
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
