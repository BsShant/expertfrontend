import React, { useEffect, useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import IndexRoute from "./routes";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactGA from "react-ga";
import { useDispatch } from "react-redux";
import { fetchingServiceCategoryWithSpinnerStarts } from "./store/categoryReducer/categoryStore.actions";
import {
  fetchingLandingAboutWithSpinnerStarts,
  fetchingLandingHeroWithSpinnerStarts,
  fetchingLandingServiceWithSpinnerStarts,
  fetchingTeamWithSpinnerStarts,
  fetchingTestimonialWithSpinnerStarts,
} from "./store/landingReducer/landingStore.actions";
import { fetchingFundCategoryWithSpinnerStarts } from "./store/fundRaiserCategoryReducer/fundRaiserCategoryStore.actions";
import { fetchingFundRaiserWithSpinnerStarts } from "./store/fundRaiserReducer/fundRaiserStore.actions";
import { fetchingServiceWithSpinnerStarts } from "./store/serviceReducer/serviceStore.actions";
import {
  fetchingProductHeroWithSpinnerStarts,
  fetchingProductsWithSpinnerStarts,
} from "./store/productReducer/productStore.actions";
import {
  fetchingLoanEligibilityWithSpinnerStarts,
  fetchingLoanFactorsWithSpinnerStarts,
  fetchingLoanTypeWithSpinnerStarts,
  fetchingLoanWhatIsWithSpinnerStarts,
} from "./store/loanReducer/loanStore.actions";
import { fetchingAboutWithSpinnerStarts } from "./store/aboutReducer/aboutStore.actions";
import {
  fetchingFooterAboutWithSpinnerStarts,
  fetchingFooterContactWithSpinnerStarts,
  fetchingFooterLinksWithSpinnerStarts,
} from "./store/footerReducer/footerStore.actions";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    ReactGA.initialize("UA-228812119-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
    AOS.init();
    AOS.refresh();
    dispatch(fetchingServiceCategoryWithSpinnerStarts());
    dispatch(fetchingLandingAboutWithSpinnerStarts());
    dispatch(fetchingLandingHeroWithSpinnerStarts());
    dispatch(fetchingLandingServiceWithSpinnerStarts());
    dispatch(fetchingFundCategoryWithSpinnerStarts());
    dispatch(fetchingFundRaiserWithSpinnerStarts());
    dispatch(fetchingServiceWithSpinnerStarts());
    dispatch(fetchingProductsWithSpinnerStarts());
    dispatch(fetchingProductHeroWithSpinnerStarts());
    dispatch(fetchingLoanWhatIsWithSpinnerStarts());
    dispatch(fetchingLoanFactorsWithSpinnerStarts());
    dispatch(fetchingLoanEligibilityWithSpinnerStarts());
    dispatch(fetchingLoanTypeWithSpinnerStarts());
    dispatch(fetchingAboutWithSpinnerStarts());
    dispatch(fetchingTeamWithSpinnerStarts());
    dispatch(fetchingTestimonialWithSpinnerStarts());
    dispatch(fetchingFooterAboutWithSpinnerStarts());
    dispatch(fetchingFooterLinksWithSpinnerStarts());
    dispatch(fetchingFooterContactWithSpinnerStarts())
  }, []);
  return <IndexRoute />;
};

export default App;
