import {
  FETCHING_SERVICE_FAILURE,
  FETCHING_SERVICE_SUCCESS,
  SERVICE_SPINNER_STARTS,
  SERVICE_SPINNER_STOPS,

} from "./serviceStore.actionTypes";

const INITIAL_STATE = {
  service: [],
  serviceSpinner: false,
  serviceError: null,
};

export const serviceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
   
    case FETCHING_SERVICE_SUCCESS:
      return {
        ...state,
        service: action.payload,
      };
    case FETCHING_SERVICE_FAILURE:
      return {
        ...state,
        serviceError: action.payload,
      };
    case SERVICE_SPINNER_STARTS:
      return {
        ...state,
        serviceSpinner: true,
      };
    case SERVICE_SPINNER_STOPS:
      return {
        ...state,
        serviceSpinner: false,
      };

    default:
      return state;
  }
};
