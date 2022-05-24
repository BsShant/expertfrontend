import {

  FETCHING_FUND_FAILURE,
  FETCHING_FUND_SUCCESS,
  FUND_SPINNER_STARTS,
  FUND_SPINNER_STOPS,
  START_FETCHING_FUND_RAISER,
  START_FETCHING_FUND_RAISER_WITH_SPINNER,

} from "./fundRaiserStore.actionTypes";


export const fetchingFundRaiserStarts = () => {
  return {
    type: START_FETCHING_FUND_RAISER,
  };
};
export const fetchingFundRaiserWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_FUND_RAISER_WITH_SPINNER,
  };
};

export const fetchingFundRaiserSuccess = (data) => {
  return {
    type: FETCHING_FUND_SUCCESS,
    payload: data,
  };
};
export const fetchingFundRaiserFailure = (error) => {
  return {
    type: FETCHING_FUND_FAILURE,
    payload: error,
  };
};

export const FundRaiserSpinnerStarts = () => {
  return {
    type: FUND_SPINNER_STARTS,
  };
};
export const FundRaiserSpinnerStops = () => {
  return {
    type: FUND_SPINNER_STOPS,
  };
};
