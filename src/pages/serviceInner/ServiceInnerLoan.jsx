import React, { useEffect, useState } from "react";
import "./loan.css";
import WhatIsLoan from "../../assets/images/whatIsLoan.png";
import EducationLoan from "../../assets/images/educationLoan.png";

import RepaymentCapacity from "../../assets/images/repayment.jpg";
import LoanTenure from "../../assets/images/tenure.jpg";
import LoanAmount from "../../assets/images/amount.jpg";
import WhyHome from "../../assets/images/whyHome.png";
import WhatIsGold from "../../assets/images/whatIsGold.png";
import WhyProperty from "../../assets/images/whyProperty.png";
import WhyBusiness from "../../assets/images/whyBusiness.png";

import CreditScore from "../../assets/images/creditScore.png";
import ServiceList from "../../components/serviceList/ServiceList";
import FactorsBox from "../../components/factorsBox/FactorsBox";
import ServiceInquiry from "./ServiceInquiry";
import HelemtContainer from "../../components/Helmet/Helemt";
import { imageServer } from "../../utils/fetch";
import { useSelector } from "react-redux";
const shuffle = [
  {
    title: "personal-loan",
    image: WhatIsLoan,
    category: "loan-services",
    detail:
      "A personal loan is an amount of money you can borrow to use for a variety of purposes. For instance, you may use a personal loan to consolidate debt, pay for home renovations, or plan a dream wedding. Personal loans can be offered by banks, credit unions, or online lenders. The money you borrow must be repaid over time, typically with interest. Some lenders may also charge fees for personal loans.",
  },
  {
    title: "home-loan",
    image: WhyHome,
    category: "loan-services",
    detail:
      "A loan against property, as a mortgage loan, is available for property owners. They can mortgage their existing residential or commercial property to get funds from the lending institution. The borrower submits property documents to the lender for the period of the loan repayment.",
  },
  {
    title: "education-loan",
    image: EducationLoan,
    category: "loan-services",
    detail:
      "A student loan is a type of loan designed to help students pay for post-secondary education and the associated fees, such as tuition, books and supplies, and living expenses. It may differ from other types of loans in the fact that the interest rate may be substantially lower and the repayment schedule may be deferred while the student is still in school. It also differs in many countries in the strict laws regulating renegotiating and bankruptcy.",
  },
  {
    title: "business-loan",
    image: WhyBusiness,
    category: "loan-services",
    detail:
      "A business loan is a loan specifically intended for business purposes. As with all loans, it involves the creation of a debt, which will be repaid with added interest. There are a number of different types of business loans, including bank loans, mezzanine financing, asset-based financing, invoice financing, microloans, business cash advances and cash flow loans.",
  },
  {
    title: "loan-against-property",
    image: WhyProperty,
    category: "loan-services",
    detail:
      "A personal loan is an amount of money you can borrow to use for a variety of purposes. For instance, you may use a personal loan to consolidate debt, pay for home renovations, or plan a dream wedding. Personal loans can be offered by banks, credit unions, or online lenders. The money you borrow must be repaid over time, typically with interest. Some lenders may also charge fees for personal loans.",
  },
  {
    title: "gold-loan",
    image: WhatIsGold,
    category: "loan-services",
    detail:
      "The gold loan, also referred as a loan against gold, is a secured loan that a borrower takes from a lender in lieu of gold ornaments such as gold jewelry. The loan amount sanctioned to you by lenders is generally a certain percentage of the gold’s value .",
  },
];
const ServiceInnerLoan = (props) => {
  const { id, category, myService } = props;
  const [inquiryModal, setInquiryModal] = useState(false);
  const [myWhatIs, setMyWhatIs] = useState(null);
  const [myFactors, setMyFactors] = useState([]);
  const [myEligibility, setMyEligibility] = useState(null);

  const loanWhatIs = useSelector((state) => state.loanStore.loanWhatIs);
  const loanEligibility = useSelector(
    (state) => state.loanStore.loanEligibility
  );
  const loanFactors = useSelector((state) => state.loanStore.loanFactors);
  console.log("loan factors", myFactors)
  useEffect(() => {
    if (myService) {
      if (loanWhatIs && loanWhatIs.length > 0) {
        setMyWhatIs(
          loanWhatIs.filter(
            (loanWhat) => loanWhat.loanType == myService.loanType
          )[0]
        );
      }
      if (loanEligibility && loanEligibility.length > 0) {
        setMyEligibility(
          loanEligibility.filter(
            (loanE) => loanE.loanType == myService.loanType
          )[0]
        );
      }
      if (loanFactors && loanFactors.length > 0) {
        setMyFactors(
          loanFactors.filter((loanF) => loanF.loanType == myService.loanType)
        );
      }
    }
  }, [loanEligibility, loanFactors, loanWhatIs, myService]);
  return (
    <HelemtContainer
      title={`What is a ${myService ? myService.title : null}?`}
      description={myService ? myService.detail : null}
      image={myService ? myService.image : null}
    >
      <div className="service-inner-page-loan">
        <div
          className="row"
          style={{
            display: "flex",
            alignItems: "center",
            minHeight: "calc(100vh - 100px)",
          }}
        >
          <div className="col-lg-6 order-2 order-md-2 order-lg-1">
            <div className="service-inner-loan-heading">
              {myWhatIs ? myWhatIs.title : null}
            </div>
            <div className="service-inner-loan-text">
              {myWhatIs ? myWhatIs.detail : null}
            </div>
          </div>

          <div className="col-lg-6 order-1 order-md-1 order-lg-2">
            <div className="loan-first-image">
              <img
                src={myWhatIs ? `${imageServer}/${myWhatIs.image}` : ""}
                alt="What is loan"
              />
            </div>
          </div>
        </div>
        <div className="factors-affecting-loan">
          <div className="service-inner-loan-heading">
            Factors affecting Personal loan
          </div>
          <div className="factors-boxes">
            <div className="row">
              {myFactors.length > 0
                ? myFactors.map((loanFactor, index) => {
                    return <div className="col-lg-3 col-md-6 col-sm-6 mb-5">
                      <FactorsBox
                        title={loanFactor.title}
                        image={`${imageServer}/${loanFactor.image}`}
                        detail={loanFactor.detail}
                      />
                    </div>;
                  })
                : null}
            </div>
          </div>
        </div>
        <div
          className="row"
          style={{ display: "flex", alignItems: "center", marginTop: "30px" }}
        >
          <div className="col-lg-12">
            <div className="service-inner-loan-heading">
              Personal Loan Eligibility
            </div>
            <div className="service-inner-loan-text">
              {myEligibility && myEligibility.point1 ? (
                <ServiceList point={myEligibility.point1} />
              ) : null}
              {myEligibility && myEligibility.point2 ? (
                <ServiceList point={myEligibility.point2} />
              ) : null}
              {myEligibility && myEligibility.point3 ? (
                <ServiceList point={myEligibility.point3} />
              ) : null}
              {myEligibility && myEligibility.point4 ? (
                <ServiceList point={myEligibility.point4} />
              ) : null}
              {myEligibility && myEligibility.point5 ? (
                <ServiceList point={myEligibility.point5} />
              ) : null}
            </div>
          </div>
        </div>
        <div className="loan-inquiry-button">
          <button
            onClick={() => setInquiryModal(true)}
            class="btn-flip"
            data-back="+ Inquire"
            data-front="+ Inquire"
            style={{ border: "none", padding: "0px" }}
          ></button>
        </div>
        <ServiceInquiry
          inquiryModal={inquiryModal}
          setInquiryModal={setInquiryModal}
        />
      </div>
    </HelemtContainer>
  );
};

export default ServiceInnerLoan;
