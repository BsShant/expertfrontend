import {
  FETCHING_LOAN_ELIGIBILITY_FAILURE,
  FETCHING_LOAN_ELIGIBILITY_SUCCESS,
  FETCHING_LOAN_FACTORS_FAILURE,
  FETCHING_LOAN_FACTORS_SUCCESS,
  FETCHING_LOAN_TYPE_FAILURE,
  FETCHING_LOAN_TYPE_SUCCESS,
  FETCHING_LOAN_WHATIS_FAILURE,
  FETCHING_LOAN_WHATIS_SUCCESS,
  LOAN_ELIGIBILITY_SPINNER_STARTS,
  LOAN_ELIGIBILITY_SPINNER_STOPS,
  LOAN_FACTORS_SPINNER_STARTS,
  LOAN_FACTORS_SPINNER_STOPS,
  LOAN_TYPE_SPINNER_STARTS,
  LOAN_TYPE_SPINNER_STOPS,
  LOAN_WHATIS_SPINNER_STARTS,
  LOAN_WHATIS_SPINNER_STOPS,
} from "./loanStore.actionTypes";

const INITIAL_STATE = {
  loanWhatIs: [],
  loanWhatIsSpinner: false,
  loanWhatIsError: null,
  loanEligibility: [],
  loanEligibilitySpinner: false,
  loanEligibilityError: null,
  loanFactors: [],
  loanFactorsSpinner: false,
  loanFactorsError: null,
  loanType: [],
  loanTypeSpinner: false,
  loanTypeError: null,
};

export const loanReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_LOAN_WHATIS_SUCCESS:
      return {
        ...state,
        loanWhatIs: action.payload,
      };
    case FETCHING_LOAN_WHATIS_FAILURE:
      return {
        ...state,
        loanWhatIsError: action.payload,
      };
    case LOAN_WHATIS_SPINNER_STARTS:
      return {
        ...state,
        loanWhatIsSpinner: true,
      };
    case LOAN_WHATIS_SPINNER_STOPS:
      return {
        ...state,
        loanWhatIsSpinner: false,
      };

    case FETCHING_LOAN_FACTORS_SUCCESS:
      return {
        ...state,
        loanFactors: action.payload,
      };
    case FETCHING_LOAN_FACTORS_FAILURE:
      return {
        ...state,
        loanFactorsError: action.payload,
      };
    case LOAN_FACTORS_SPINNER_STARTS:
      return {
        ...state,
        loanFactors: true,
      };
    case LOAN_FACTORS_SPINNER_STOPS:
      return {
        ...state,
        loanFactors: false,
      };

    case FETCHING_LOAN_ELIGIBILITY_SUCCESS:
      return {
        ...state,
        loanEligibility: action.payload,
      };
    case FETCHING_LOAN_ELIGIBILITY_FAILURE:
      return {
        ...state,
        loanEligibilityError: action.payload,
      };
    case LOAN_ELIGIBILITY_SPINNER_STARTS:
      return {
        ...state,
        loanEligibilitySpinner: true,
      };
    case LOAN_ELIGIBILITY_SPINNER_STOPS:
      return {
        ...state,
        loanEligibilitySpinner: false,
      };

    case FETCHING_LOAN_TYPE_SUCCESS:
      return {
        ...state,
        loanEligibility: action.payload,
      };
    case FETCHING_LOAN_TYPE_FAILURE:
      return {
        ...state,
        loanType: action.payload,
      };
    case LOAN_TYPE_SPINNER_STARTS:
      return {
        ...state,
        loanTypeSpinner: true,
      };
    case LOAN_TYPE_SPINNER_STOPS:
      return {
        ...state,
        loanTypeSpinner: false,
      };
    default:
      return state;
  }
};
