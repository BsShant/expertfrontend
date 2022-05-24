import {

  FETCHING_PRODUCT_HERO_FAILURE,
  FETCHING_PRODUCT_HERO_SUCCESS,
  FETCHING_PRODUCTS_FAILURE,
  FETCHING_PRODUCTS_SUCCESS,
  PRODUCT_HERO_SPINNER_STARTS,
  PRODUCT_HERO_SPINNER_STOPS,
  PRODUCTS_SPINNER_STARTS,
  PRODUCTS_SPINNER_STOPS,
  START_FETCHING_PRODUCT_HERO,
  START_FETCHING_PRODUCT_HERO_WITH_SPINNER,
  START_FETCHING_PRODUCTS,
  START_FETCHING_PRODUCTS_WITH_SPINNER,
} from "./productStore.actionTypes";

export const fetchingProductsStarts = () => {
  return {
    type: START_FETCHING_PRODUCTS,
  };
};
export const fetchingProductsWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_PRODUCTS_WITH_SPINNER,
  };
};

export const fetchingProductsSuccess = (data) => {
  return {
    type: FETCHING_PRODUCTS_SUCCESS,
    payload: data,
  };
};
export const fetchingProductsFailure = (error) => {
  return {
    type: FETCHING_PRODUCTS_FAILURE,
    payload: error,
  };
};

export const productsSpinnerStarts = () => {
  return {
    type: PRODUCTS_SPINNER_STARTS,
  };
};
export const productsSpinnerStops = () => {
  return {
    type: PRODUCTS_SPINNER_STOPS,
  };
};



export const fetchingProductHeroStarts = () => {
  return {
    type: START_FETCHING_PRODUCT_HERO,
  };
};
export const fetchingProductHeroWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_PRODUCT_HERO_WITH_SPINNER,
  };
};

export const fetchingProductHeroSuccess = (data) => {
  return {
    type: FETCHING_PRODUCT_HERO_SUCCESS,
    payload: data,
  };
};
export const fetchingProductHeroFailure = (error) => {
  return {
    type: FETCHING_PRODUCT_HERO_FAILURE,
    payload: error,
  };
};

export const productHeroSpinnerStarts = () => {
  return {
    type: PRODUCT_HERO_SPINNER_STARTS,
  };
};
export const productHeroSpinnerStops = () => {
  return {
    type: PRODUCT_HERO_SPINNER_STOPS,
  };
};



