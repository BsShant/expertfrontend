import React from "react";
import ServiceItem from "../../components/serviceItem/ServiceItem";
import "./styles.css";
import CategoriesSider from "../../components/categoriesSider/CategoriesSider";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { services } from "../../assets/dummy/services";

const ServicePage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.categoryStore.selectedCategory
  );
  const [sliderCollapse, setSliderCollapse] = useState(false);
  const service = useSelector((state) => state.serviceStore.service);

  return (
    <div className="service-page-container">
      <div className="container" style={{ display: "flex" }}>
        <div className={`${sliderCollapse ? "hide-slider" : ""}`}>
          <CategoriesSider />
        </div>
        <div className="service-page-inner-container">
          <div className="category-inner-body">
            <div className="service-body container">
              <div className="service-page-heading">
                <div className="sider-toggle">
                  <FontAwesomeIcon
                    icon={faBars}
                    style={{
                      fontSize: "24px",
                      color: "black",
                      cursor: "pointer",
                    }}
                    onClick={() => dispatch(setSliderCollapse((prev) => !prev))}
                  />
                </div>
                <div className="page-header">Our Services</div>
              </div>
              <div className="service-page-body">
                <div className="row">
                  {service
                    .filter((service) => service.category === selectedCategory)
                    .map((serv) => {
                      return (
                        <div
                          className="col-12 col-lg-4 col-md-6 col-sm-12 col-xs-12"
                          style={{ marginBottom: "30px" }}
                        >
                          <ServiceItem
                            loanType={serv.loanType}
                            title={serv.title}
                            detail={serv.detail}
                            image={serv.image}
                            thumbnail={serv.thumbnail}
                            category={serv.category}
                            id={serv.id}
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
