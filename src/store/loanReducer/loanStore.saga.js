import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  fetchingLoanWhatIsSuccess,
  fetchingLoanWhatIsFailure,
  loanWhatIsSpinnerStarts,
  loanWhatIsSpinnerStops,
  fetchingLoanEligibilityFailure,
  fetchingLoanEligibilitySuccess,
  loanEligibilitySpinnerStarts,
  loanEligibilitySpinnerStops,
  fetchingLoanFactorsFailure,
  fetchingLoanFactorsSuccess,
  loanFactorsSpinnerStarts,
  loanFactorsSpinnerStops,
  fetchingLoanTypeStarts,
  fetchingLoanTypeFailure,
  loanTypeSpinnerStarts,
  loanTypeSpinnerStops,
  fetchingLoanTypeWithSpinnerStarts,
  fetchingLoanTypeSuccess,
} from "./loanStore.actions";
import {
  fetchLoanWhatIs,
  fetchLoanEligibility,
  fetchLoanFactors,
  fetchLoanType,
} from "../../utils/api-calls/loanCalls";
import {
  START_FETCHING_LOAN_WHATIS,
  START_FETCHING_LOAN_WHATIS_WITH_SPINNER,
  START_FETCHING_LOAN_FACTORS,
  START_FETCHING_LOAN_ELIGIBILITY_WITH_SPINNER,
  START_FETCHING_LOAN_ELIGIBILITY,
  START_FETCHING_LOAN_FACTORS_WITH_SPINNER,
  START_FETCHING_LOAN_TYPE,
  START_FETCHING_LOAN_TYPE_WITH_SPINNER,
} from "./loanStore.actionTypes";

export function* loanWHatIsFetch() {
  try {
    let fetchData = yield fetchLoanWhatIs();
    yield put(fetchingLoanWhatIsSuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingLoanWhatIsFailure(error));
  }
}

export function* loanWHatISFetchWithSpinner() {
  try {
    yield put(loanWhatIsSpinnerStarts());
    let fetchData = yield fetchLoanWhatIs();
    yield put(fetchingLoanWhatIsSuccess(fetchData.data));
    yield put(loanWhatIsSpinnerStops());
  } catch (error) {
    yield put(fetchingLoanWhatIsFailure(error));
  }
}

export function* startLoanWhatISFetch() {
  yield takeLatest(START_FETCHING_LOAN_WHATIS, loanWHatIsFetch);
}

export function* startLoanWHatIsFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_LOAN_WHATIS_WITH_SPINNER,
    loanWHatISFetchWithSpinner
  );
}

export function* loanFactorsFetch() {
  try {
    let fetchData = yield fetchLoanEligibility();
    yield put(fetchingLoanFactorsSuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingLoanFactorsFailure(error));
  }
}

export function* loanFactorsFetchWithSpinner() {
  try {
    yield put(loanFactorsSpinnerStarts());
    let fetchData = yield fetchLoanEligibility();
    yield put(fetchingLoanFactorsSuccess(fetchData.data));
    yield put(loanFactorsSpinnerStops());
  } catch (error) {
    yield put(fetchingLoanFactorsFailure(error));
  }
}

export function* startLoanFactorsFetch() {
  yield takeLatest(START_FETCHING_LOAN_FACTORS, loanFactorsFetch);
}

export function* startLoanFactorsFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_LOAN_FACTORS_WITH_SPINNER,
    loanFactorsFetchWithSpinner
  );
}

export function* loanEligibilityFetch() {
  try {
    let fetchData = yield fetchLoanFactors();
    yield put(fetchingLoanEligibilitySuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingLoanEligibilityFailure(error));
  }
}

export function* loanEligibilityFetchWithSpinner() {
  try {
    yield put(loanEligibilitySpinnerStarts());
    let fetchData = yield fetchLoanFactors();
    yield put(fetchingLoanEligibilitySuccess(fetchData.data));
    yield put(loanEligibilitySpinnerStops());
  } catch (error) {
    yield put(fetchingLoanEligibilityFailure(error));
  }
}

export function* startLoanEligibilityFetch() {
  yield takeLatest(START_FETCHING_LOAN_ELIGIBILITY, loanEligibilityFetch);
}

export function* startLoanEligibilityFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_LOAN_ELIGIBILITY_WITH_SPINNER,
    loanEligibilityFetchWithSpinner
  );
}

export function* loanTypeFetch() {
  try {
    let fetchData = yield fetchLoanType();
    yield put(fetchingLoanTypeSuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingLoanTypeFailure(error));
  }
}

export function* loanTypeFetchWithSpinner() {
  try {
    yield put(loanTypeSpinnerStarts());
    let fetchData = yield fetchLoanType();
    yield put(fetchingLoanTypeSuccess(fetchData.data));
    yield put(loanTypeSpinnerStops());
  } catch (error) {
    yield put(fetchingLoanTypeFailure(error));
  }
}

export function* startLoanTypeFetch() {
  yield takeLatest(START_FETCHING_LOAN_TYPE, loanTypeFetch);
}

export function* startLoanTypeFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_LOAN_TYPE_WITH_SPINNER,
    loanTypeFetchWithSpinner
  );
}

export function* loanMode() {
  yield all([
    call(startLoanWhatISFetch),
    call(startLoanWHatIsFetchWithSpinner),
    call(startLoanFactorsFetch),
    call(startLoanFactorsFetchWithSpinner),
    call(startLoanEligibilityFetch),
    call(startLoanEligibilityFetchWithSpinner),
    call(startLoanTypeFetch),
    call(startLoanTypeFetchWithSpinner),
  ]);
}
