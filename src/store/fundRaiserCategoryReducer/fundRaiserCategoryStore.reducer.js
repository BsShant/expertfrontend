import {
  FETCHING_FUND_CATEGORY_FAILURE,
  FETCHING_FUND_CATEGORY_SUCCESS,
  FUND_CATEGORY_SPINNER_STARTS,
  FUND_CATEGORY_SPINNER_STOPS,

} from "./fundRaiserCategoryStore.actionTypes";

const INITIAL_STATE = {
  fundRaiserCategory: [],
  fundRaiserCategorySpinner: false,
  fundRaiserCategoryError: null,
};

export const fundCategoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
   
    case FETCHING_FUND_CATEGORY_SUCCESS:
      return {
        ...state,
        fundRaiserCategory: action.payload,
      };
    case FETCHING_FUND_CATEGORY_FAILURE:
      return {
        ...state,
        fundRaiserCategoryError: action.payload,
      };
    case FUND_CATEGORY_SPINNER_STARTS:
      return {
        ...state,
        fundRaiserCategorySpinner: true,
      };
    case FUND_CATEGORY_SPINNER_STOPS:
      return {
        ...state,
        fundRaiserCategorySpinner: false,
      };

    default:
      return state;
  }
};
