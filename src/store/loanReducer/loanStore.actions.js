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
  START_FETCHING_LOAN_ELIGIBILITY,
  START_FETCHING_LOAN_ELIGIBILITY_WITH_SPINNER,
  START_FETCHING_LOAN_FACTORS,
  START_FETCHING_LOAN_FACTORS_WITH_SPINNER,
  START_FETCHING_LOAN_TYPE,
  START_FETCHING_LOAN_TYPE_WITH_SPINNER,
  START_FETCHING_LOAN_WHATIS,
  START_FETCHING_LOAN_WHATIS_WITH_SPINNER,
} from "./loanStore.actionTypes";

export const fetchingLoanWhatIsStarts = () => {
  return {
    type: START_FETCHING_LOAN_WHATIS,
  };
};
export const fetchingLoanWhatIsWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_LOAN_WHATIS_WITH_SPINNER,
  };
};

export const fetchingLoanWhatIsSuccess = (data) => {
  return {
    type: FETCHING_LOAN_WHATIS_SUCCESS,
    payload: data,
  };
};
export const fetchingLoanWhatIsFailure = (error) => {
  return {
    type: FETCHING_LOAN_WHATIS_FAILURE,
    payload: error,
  };
};

export const loanWhatIsSpinnerStarts = () => {
  return {
    type: LOAN_WHATIS_SPINNER_STARTS,
  };
};
export const loanWhatIsSpinnerStops = () => {
  return {
    type: LOAN_WHATIS_SPINNER_STOPS,
  };
};

export const fetchingLoanFactorsStarts = () => {
  return {
    type: START_FETCHING_LOAN_FACTORS,
  };
};
export const fetchingLoanFactorsWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_LOAN_FACTORS_WITH_SPINNER,
  };
};

export const fetchingLoanFactorsSuccess = (data) => {
  return {
    type: FETCHING_LOAN_FACTORS_SUCCESS,
    payload: data,
  };
};
export const fetchingLoanFactorsFailure = (error) => {
  return {
    type: FETCHING_LOAN_FACTORS_FAILURE,
    payload: error,
  };
};

export const loanFactorsSpinnerStarts = () => {
  return {
    type: LOAN_FACTORS_SPINNER_STARTS,
  };
};
export const loanFactorsSpinnerStops = () => {
  return {
    type: LOAN_FACTORS_SPINNER_STOPS,
  };
};

export const fetchingLoanEligibilityStarts = () => {
  return {
    type: START_FETCHING_LOAN_ELIGIBILITY,
  };
};
export const fetchingLoanEligibilityWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_LOAN_ELIGIBILITY_WITH_SPINNER,
  };
};

export const fetchingLoanEligibilitySuccess = (data) => {
  return {
    type: FETCHING_LOAN_ELIGIBILITY_SUCCESS,
    payload: data,
  };
};
export const fetchingLoanEligibilityFailure = (error) => {
  return {
    type: FETCHING_LOAN_ELIGIBILITY_FAILURE,
    payload: error,
  };
};

export const loanEligibilitySpinnerStarts = () => {
  return {
    type: LOAN_ELIGIBILITY_SPINNER_STARTS,
  };
};
export const loanEligibilitySpinnerStops = () => {
  return {
    type: LOAN_ELIGIBILITY_SPINNER_STOPS,
  };
};

export const fetchingLoanTypeStarts = () => {
  return {
    type: START_FETCHING_LOAN_TYPE,
  };
};
export const fetchingLoanTypeWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_LOAN_TYPE_WITH_SPINNER,
  };
};

export const fetchingLoanTypeSuccess = (data) => {
  return {
    type: FETCHING_LOAN_TYPE_SUCCESS,
    payload: data,
  };
};
export const fetchingLoanTypeFailure = (error) => {
  return {
    type: FETCHING_LOAN_TYPE_FAILURE,
    payload: error,
  };
};

export const loanTypeSpinnerStarts = () => {
  return {
    type: LOAN_TYPE_SPINNER_STARTS,
  };
};
export const loanTypeSpinnerStops = () => {
  return {
    type: LOAN_TYPE_SPINNER_STOPS,
  };
};
