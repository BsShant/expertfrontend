
import {
  FETCHING_PRODUCT_HERO_FAILURE,
  FETCHING_PRODUCT_HERO_SUCCESS,
  FETCHING_PRODUCTS_FAILURE,
  FETCHING_PRODUCTS_SUCCESS,
  PRODUCTS_SPINNER_STARTS,
  PRODUCTS_SPINNER_STOPS,
  PRODUCT_HERO_SPINNER_STOPS,
  PRODUCT_HERO_SPINNER_STARTS
} from "./productStore.actionTypes";

const INITIAL_STATE = {
  products: [],
  productsSpinner: false,
  productsError: null,
  productHero: null,
  productHeroError: null,
  productHeroSpinner: false,
};

export const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    case FETCHING_PRODUCTS_FAILURE:
      return {
        ...state,
        productsError: action.payload,
      };
    case PRODUCTS_SPINNER_STARTS:
      return {
        ...state,
        productsSpinner: true,
      };
    case PRODUCTS_SPINNER_STOPS:
      return {
        ...state,
        productsSpinner: false,
      };

    case FETCHING_PRODUCT_HERO_SUCCESS:
      return {
        ...state,
        productHero: action.payload,
      };
    case FETCHING_PRODUCT_HERO_FAILURE:
      return {
        ...state,
        productHeroError: action.payload,
      };
    case PRODUCT_HERO_SPINNER_STARTS:
      return {
        ...state,
        productHeroSpinner: true,
      };
    case PRODUCT_HERO_SPINNER_STOPS:
      return {
        ...state,
        productHeroSpinner: false,
      };

    default:
      return state;
  }
};
