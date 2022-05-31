import {
  FETCHING_LANDING_ABOUT_FAILURE,
  FETCHING_LANDING_ABOUT_SUCCESS,
  FETCHING_LANDING_HERO_FAILURE,
  FETCHING_LANDING_HERO_SUCCESS,
  FETCHING_LANDING_SERVICE_FAILURE,
  FETCHING_LANDING_SERVICE_SUCCESS,
  FETCHING_TEAM_FAILURE,
  FETCHING_TEAM_SUCCESS,
  FETCHING_TESTIMONIAL_FAILURE,
  FETCHING_TESTIMONIAL_SUCCESS,
  LANDING_ABOUT_SPINNER_STARTS,
  LANDING_ABOUT_SPINNER_STOPS,
  LANDING_HERO_SPINNER_STARTS,
  LANDING_HERO_SPINNER_STOPS,
  LANDING_SERVICE_SPINNER_STARTS,
  LANDING_SERVICE_SPINNER_STOPS,
  TEAM_SPINNER_STARTS,
  TEAM_SPINNER_STOPS,
  TESTIMONIAL_SPINNER_STARTS,
  TESTIMONIAL_SPINNER_STOPS,
} from "./landingStore.actionTypes";

const INITIAL_STATE = {
  landingHero: null,
  landingHeroSpinner: false,
  landingHeroError: null,
  landingAbout: null,
  landingAboutSpinner: false,
  landingAboutError: null,
  landingService: null,
  landingServiceSpinner: false,
  landingServiceError: null,
  team: null,
  teamSpinner: false,
  teamError: null,
  testimonial: null,
  testimonialSpinner: false,
  testimonialError: null,
};

export const landingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_LANDING_HERO_SUCCESS:
      return {
        ...state,
        landingHero: action.payload,
      };
    case FETCHING_LANDING_HERO_FAILURE:
      return {
        ...state,
        landingHeroError: action.payload,
      };
    case LANDING_HERO_SPINNER_STARTS:
      return {
        ...state,
        landingHeroSpinner: true,
      };
    case LANDING_HERO_SPINNER_STOPS:
      return {
        ...state,
        landingHeroSpinner: false,
      };

    case FETCHING_LANDING_ABOUT_SUCCESS:
      return {
        ...state,
        landingAbout: action.payload,
      };
    case FETCHING_LANDING_ABOUT_FAILURE:
      return {
        ...state,
        landingAboutError: action.payload,
      };
    case LANDING_ABOUT_SPINNER_STARTS:
      return {
        ...state,
        landingAboutSpinner: true,
      };
    case LANDING_ABOUT_SPINNER_STOPS:
      return {
        ...state,
        landingAboutSpinner: false,
      };

    case FETCHING_LANDING_SERVICE_SUCCESS:
      return {
        ...state,
        landingService: action.payload,
      };
    case FETCHING_LANDING_SERVICE_FAILURE:
      return {
        ...state,
        landingServiceError: action.payload,
      };
    case LANDING_SERVICE_SPINNER_STARTS:
      return {
        ...state,
        landingServiceSpinner: true,
      };
    case LANDING_SERVICE_SPINNER_STOPS:
      return {
        ...state,
        landingServiceSpinner: false,
      };

    case FETCHING_TEAM_SUCCESS:
      return {
        ...state,
        team: action.payload,
      };
    case FETCHING_TEAM_FAILURE:
      return {
        ...state,
        teamError: action.payload,
      };
    case TEAM_SPINNER_STARTS:
      return {
        ...state,
        teamSpinner: true,
      };
    case TEAM_SPINNER_STOPS:
      return {
        ...state,
        teamSpinner: false,
      };
    case FETCHING_TESTIMONIAL_SUCCESS:
      return {
        ...state,
        testimonial: action.payload,
      };
    case FETCHING_TESTIMONIAL_FAILURE:
      return {
        ...state,
        testimonialError: action.payload,
      };
    case TESTIMONIAL_SPINNER_STARTS:
      return {
        ...state,
        testimonialSpinner: true,
      };
    case TESTIMONIAL_SPINNER_STOPS:
      return {
        ...state,
        testimonialSpinner: false,
      };
    default:
      return state;
  }
};
