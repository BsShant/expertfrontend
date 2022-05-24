import {
  FETCHING_SERVICE_CATEGORY_FAILURE,
  FETCHING_SERVICE_CATEGORY_SUCCESS,
  SERVICE_CATEGORY_SPINNER_STARTS,
  SERVICE_CATEGORY_SPINNER_STOPS,
  SET_SELECTED_CATEGORY,
  TRIGGER_SLIDER_COLLAPSE,
  TRIGGER_SLIDER_MOBILE_COLLAPSE,
} from "./categoryStore.actionTypes";

const INITIAL_STATE = {
  categoryCollapse: false,
  categoryMobileCollapse: true,
  selectedCategory: "financial-services",
  serviceCategory: [],
  serviceCategorySpinner: false,
  serviceCategoryError: null,
};

export const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRIGGER_SLIDER_COLLAPSE:
      return {
        ...state,
        categoryCollapse: !state.categoryCollapse,
        categoryMobileCollapse: !state.categoryMobileCollapse,
      };
    case TRIGGER_SLIDER_MOBILE_COLLAPSE:
      return {
        ...state,
        categoryMobileCollapse: !state.categoryMobileCollapse,
      };
    case SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case FETCHING_SERVICE_CATEGORY_SUCCESS:
      return {
        ...state,
        serviceCategory: action.payload,
      };
    case FETCHING_SERVICE_CATEGORY_FAILURE:
      return {
        ...state,
        serviceCategoryError: action.payload,
      };
    case SERVICE_CATEGORY_SPINNER_STARTS:
      return {
        ...state,
        serviceCategorySpinner: true,
      };
    case SERVICE_CATEGORY_SPINNER_STOPS:
      return {
        ...state,
        serviceCategorySpinner: false,
      };

    default:
      return state;
  }
};
