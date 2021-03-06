import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { imageServer } from "../../utils/fetch";
const ServiceItem = (props) => {
  const { image, title, thumbnail, category, loanType, id } = props;
  return (
    <div
      className="service-item-container"
      data-aos="fade-up"
      data-aos-easing="ease-in-sine"
      data-aos-offset="0"
    >
      <div className="service-item-image">
        <Link
          to={`/our-services/service-page/${category}/${id}/${title
            .toLowerCase()
            .replaceAll(" ", "-")}`}
        >
          <img
            src={`${imageServer}/${thumbnail ? thumbnail : image}`}
            alt="Services"
          />
        </Link>
      </div>
      <div className="service-name-box">
        <div className="service-name">{title}</div>
        <div className="service-item-button">
          <Link
            className="btn-flip btn-flip-alternate btn-flip-product"
            data-back="+ VIEW"
            data-front="+ VIEW"
            to={`/our-services/service-page/${category}/${id}/${title
              .toLowerCase()
              .replaceAll(" ", "-")}`}
          ></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
