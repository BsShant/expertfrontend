import {
  FETCHING_FUND_FAILURE,
  FETCHING_FUND_SUCCESS,
  FUND_SPINNER_STARTS,
  FUND_SPINNER_STOPS,
} from "./fundRaiserStore.actionTypes";

const INITIAL_STATE = {
  fundRaiser: [],
  fundRaiserSpinner: false,
  fundRaiserError: null,
};

export const fundRaiserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_FUND_SUCCESS:
      return {
        ...state,
        fundRaiser: action.payload,
      };
    case FETCHING_FUND_FAILURE:
      return {
        ...state,
        fundRaiserError: action.payload,
      };
    case FUND_SPINNER_STARTS:
      return {
        ...state,
        fundRaiserSpinner: true,
      };
    case FUND_SPINNER_STOPS:
      return {
        ...state,
        fundRaiserSpinner: false,
      };

    default:
      return state;
  }
};
