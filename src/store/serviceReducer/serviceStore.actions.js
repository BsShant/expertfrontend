import {
  FETCHING_SERVICE_FAILURE,
  FETCHING_SERVICE_SUCCESS,
  SERVICE_SPINNER_STARTS,
  SERVICE_SPINNER_STOPS,
  START_FETCHING_SERVICE,
  START_FETCHING_SERVICE_WITH_SPINNER,

} from "./serviceStore.actionTypes";


export const fetchingServiceStarts = () => {
  return {
    type: START_FETCHING_SERVICE,
  };
};
export const fetchingServiceWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_SERVICE_WITH_SPINNER,
  };
};

export const fetchingServiceSuccess = (data) => {
  return {
    type: FETCHING_SERVICE_SUCCESS,
    payload: data,
  };
};
export const fetchingServiceFailure = (error) => {
  return {
    type: FETCHING_SERVICE_FAILURE,
    payload: error,
  };
};

export const serviceSpinnerStarts = () => {
  return {
    type: SERVICE_SPINNER_STARTS,
  };
};
export const serviceSpinnerStops = () => {
  return {
    type: SERVICE_SPINNER_STOPS,
  };
};
