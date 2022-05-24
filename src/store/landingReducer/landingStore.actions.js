import { FETCHING_LANDING_SERVICE_FAILURE, FETCHING_LANDING_SERVICE_SUCCESS, LANDING_SERVICE_SPINNER_STARTS, LANDING_SERVICE_SPINNER_STOPS, START_FETCHING_LANDING_SERVICE, START_FETCHING_LANDING_SERVICE_WITH_SPINNER } from "./landingStore.actionTypes";
import {

  FETCHING_LANDING_ABOUT_FAILURE,
  FETCHING_LANDING_ABOUT_SUCCESS,
  FETCHING_LANDING_HERO_FAILURE,
  FETCHING_LANDING_HERO_SUCCESS,
  LANDING_ABOUT_SPINNER_STARTS,
  LANDING_ABOUT_SPINNER_STOPS,
  LANDING_HERO_SPINNER_STARTS,
  LANDING_HERO_SPINNER_STOPS,
  START_FETCHING_LANDING_ABOUT,
  START_FETCHING_LANDING_ABOUT_WITH_SPINNER,
  START_FETCHING_LANDING_HERO,
  START_FETCHING_LANDING_HERO_WITH_SPINNER,
} from "./landingStore.actionTypes";

export const fetchingLandingHeroStarts = () => {
  return {
    type: START_FETCHING_LANDING_HERO,
  };
};
export const fetchingLandingHeroWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_LANDING_HERO_WITH_SPINNER,
  };
};

export const fetchingLandingHeroSuccess = (data) => {
  return {
    type: FETCHING_LANDING_HERO_SUCCESS,
    payload: data,
  };
};
export const fetchingLandingHeroFailure = (error) => {
  return {
    type: FETCHING_LANDING_HERO_FAILURE,
    payload: error,
  };
};

export const landingHeroSpinnerStarts = () => {
  return {
    type: LANDING_HERO_SPINNER_STARTS,
  };
};
export const landingHeroSpinnerStops = () => {
  return {
    type: LANDING_HERO_SPINNER_STOPS,
  };
};



export const fetchingLandingAboutStarts = () => {
  return {
    type: START_FETCHING_LANDING_ABOUT,
  };
};
export const fetchingLandingAboutWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_LANDING_ABOUT_WITH_SPINNER,
  };
};

export const fetchingLandingAboutSuccess = (data) => {
  return {
    type: FETCHING_LANDING_ABOUT_SUCCESS,
    payload: data,
  };
};
export const fetchingLandingAboutFailure = (error) => {
  return {
    type: FETCHING_LANDING_ABOUT_FAILURE,
    payload: error,
  };
};

export const landingAboutSpinnerStarts = () => {
  return {
    type: LANDING_ABOUT_SPINNER_STARTS,
  };
};
export const landingAboutSpinnerStops = () => {
  return {
    type: LANDING_ABOUT_SPINNER_STOPS,
  };
};


export const fetchingLandingServiceStarts = () => {
  return {
    type: START_FETCHING_LANDING_SERVICE,
  };
};
export const fetchingLandingServiceWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_LANDING_SERVICE_WITH_SPINNER,
  };
};

export const fetchingLandingServiceSuccess = (data) => {
  return {
    type: FETCHING_LANDING_SERVICE_SUCCESS,
    payload: data,
  };
};
export const fetchingLandingServiceFailure = (error) => {
  return {
    type: FETCHING_LANDING_SERVICE_FAILURE,
    payload: error,
  };
};

export const landingServiceSpinnerStarts = () => {
  return {
    type: LANDING_SERVICE_SPINNER_STARTS,
  };
};
export const landingServiceSpinnerStops = () => {
  return {
    type: LANDING_SERVICE_SPINNER_STOPS,
  };
};





