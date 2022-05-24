import {
  FETCHING_FUND_CATEGORY_FAILURE,
  FETCHING_FUND_CATEGORY_SUCCESS,
  FUND_CATEGORY_SPINNER_STARTS,
  FUND_CATEGORY_SPINNER_STOPS,
  START_FETCHING_FUND_CATEGORY,
  START_FETCHING_FUND_CATEGORY_WITH_SPINNER,

} from "./fundRaiserCategoryStore.actionTypes";


export const fetchingFundCategoryStarts = () => {
  return {
    type: START_FETCHING_FUND_CATEGORY,
  };
};
export const fetchingFundCategoryWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_FUND_CATEGORY_WITH_SPINNER,
  };
};

export const fetchingFundCategorySuccess = (data) => {
  return {
    type: FETCHING_FUND_CATEGORY_SUCCESS,
    payload: data,
  };
};
export const fetchingFundCategoryFailure = (error) => {
  return {
    type: FETCHING_FUND_CATEGORY_FAILURE,
    payload: error,
  };
};

export const FundCategorySpinnerStarts = () => {
  return {
    type: FUND_CATEGORY_SPINNER_STARTS,
  };
};
export const FundCategorySpinnerStops = () => {
  return {
    type: FUND_CATEGORY_SPINNER_STOPS,
  };
};
