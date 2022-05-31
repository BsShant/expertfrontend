import React, { useEffect, useState } from "react";
import "./styles.css";
import Registration from "../../assets/images/registration.jpg";
import Esewa from "../../assets/images/esewa.png";
import Khalti from "../../assets/images/khalti.png";
import ImePay from "../../assets/images/imePay.png";
import { useParams } from "react-router-dom";
import ServiceInnerLoan from "./ServiceInnerLoan";
import ServiceList from "../../components/serviceList/ServiceList";
import { services } from "../../assets/dummy/services";
import HelmetContainer from "../../components/Helmet/Helemt";
import { useSelector } from "react-redux";
import { imageServer } from "../../utils/fetch";
const ServiceInner = () => {
  const { category, id } = useParams();
  const service = useSelector((state) => state.serviceStore.service);
  const [myService, setMyService] = useState(null);
  useEffect(() => {
    if (service.length > 0) {
      setMyService(
        service.find((serv) => {
          return id == serv.id;
        })
      );
    }
  }, [service]);
  return (
    <HelmetContainer
      title={`What is a ${myService ? myService.title : ""}?`}
      description={myService ? myService.para1 : null}
      image={myService ? myService.image : null}
    >
      <div className="service-inner-page-container">
        <div className="container">
          <div className="service-inner-page-inner-container">
            {category === "loan-services" ? (
              <ServiceInnerLoan myService={myService} category={category} id={id} />
            ) : (
              <div className="row">
                <div
                  className="col-lg-7 order-1 order-lg-1"
                  style={{ marginBottom: "10px" }}
                >
                  <div className="service-inner-page-image-container">
                    <img
                      src={`${imageServer}/${myService ? myService.image : ""}`}
                      alt="Service"
                    />
                  </div>
                </div>
                <div className="col-lg-5 order-3 order-lg-2">
                  <div className="service-inner-page-heading col-lg-12">
                    Package Info
                  </div>
                  <div className="keypoints-container">
                    <div className="key-points-title">Key Points</div>
                    {myService && myService.point1 ? (
                      <ServiceList point={myService.point1} />
                    ) : null}
                    {myService && myService.point2 ? (
                      <ServiceList point={myService.point2} />
                    ) : null}
                    {myService && myService.point3 ? (
                      <ServiceList point={myService.point3} />
                    ) : null}
                     {myService && myService.point4 ? (
                      <ServiceList point={myService.point4} />
                    ) : null}
                     {myService && myService.point5 ? (
                      <ServiceList point={myService.point5} />
                    ) : null}
                  </div>
                  <div className="service-price">
                    ${myService ? myService.price : null} for full package
                  </div>
                  <div className="support-container">
                    <a
                      href="/our-services"
                      class="btn-flip"
                      data-back="+ PURCHASE"
                      data-front="+ PURCHASE"
                    ></a>
                  </div>
                  <div className="service-we-accept-container">
                    <div className="we-accept-heading">We accept</div>
                    <div className="service-we-accept">
                      <div className="esewa">
                        <img src={Esewa} alt="Esewa" />
                      </div>
                      <div className="service-khalti">
                        <img src={Khalti} alt="Khalti" />
                      </div>
                      <div className="service-ime-pay">
                        <img src={ImePay} alt="Ime Pay" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 order-2 order-lg-3 mt-5 mb-5">
                  <div className="service-inner-page-heading mb-2">
                    {myService ? myService.title : null}
                  </div>

                  <div className="service-inner-page-text">
                    {myService ? myService.para1 : null}
                  </div>
                  {myService?.para2 ? (
                    <div className="service-inner-page-text">
                      {myService ? myService.para2 : null}
                    </div>
                  ) : null}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </HelmetContainer>
  );
};

export default ServiceInner;
