import {
  FETCHING_SERVICE_CATEGORY_FAILURE,
  FETCHING_SERVICE_CATEGORY_SUCCESS,
  SERVICE_CATEGORY_SPINNER_STARTS,
  SERVICE_CATEGORY_SPINNER_STOPS,
  SET_SELECTED_CATEGORY,
  START_FETCHING_SERVICE_CATEGORY,
  START_FETCHING_SERVICE_CATEGORY_WITH_SPINNER,
  TRIGGER_SLIDER_COLLAPSE,
  TRIGGER_SLIDER_MOBILE_COLLAPSE,
} from "./categoryStore.actionTypes";

export const triggerSliderCollapse = () => {
  return {
    type: TRIGGER_SLIDER_COLLAPSE,
  };
};
export const triggerMobileSliderCollapse = () => {
  return {
    type: TRIGGER_SLIDER_MOBILE_COLLAPSE,
  };
};

export const setSelectedCategory = (category) => {
  return {
    type: SET_SELECTED_CATEGORY,
    payload: category,
  };
};

export const fetchingServiceCategoryStarts = () => {
  return {
    type: START_FETCHING_SERVICE_CATEGORY,
  };
};
export const fetchingServiceCategoryWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_SERVICE_CATEGORY_WITH_SPINNER,
  };
};

export const fetchingServiceCategorySuccess = (data) => {
  return {
    type: FETCHING_SERVICE_CATEGORY_SUCCESS,
    payload: data,
  };
};
export const fetchingServiceCategoryFailure = (error) => {
  return {
    type: FETCHING_SERVICE_CATEGORY_FAILURE,
    payload: error,
  };
};

export const serviceCategorySpinnerStarts = () => {
  return {
    type: SERVICE_CATEGORY_SPINNER_STARTS,
  };
};
export const serviceCategorySpinnerStops = () => {
  return {
    type: SERVICE_CATEGORY_SPINNER_STOPS,
  };
};
