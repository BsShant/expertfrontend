import { takeLatest, call, put, all } from "redux-saga/effects";
import {

  fetchingFundRaiserSuccess,
  fetchingFundRaiserFailure,
  FundRaiserSpinnerStarts,
  FundRaiserSpinnerStops,
} from "./fundRaiserStore.actions";
import { fetchFundRaiser } from "../../utils/api-calls/fundRaiserCalls";
import {
  START_FETCHING_FUND_RAISER,
  START_FETCHING_FUND_RAISER_WITH_SPINNER,
} from "./fundRaiserStore.actionTypes";

export function* fundRaiserFetch() {
  try {
    let fetchData = yield fetchFundRaiser();
    yield put(fetchingFundRaiserSuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingFundRaiserFailure(error));
  }
}

export function* fundRaiserFetchWithSpinner() {
  try {
    yield put(FundRaiserSpinnerStarts());
    let fetchData = yield fetchFundRaiser();
    yield put(fetchingFundRaiserSuccess(fetchData.data));
    yield put(FundRaiserSpinnerStops());
  } catch (error) {
    yield put(fetchingFundRaiserFailure(error));
    // yield put(publicationSpinnerStops())
  }
}

export function* startFundRaiserFetch() {
  yield takeLatest(START_FETCHING_FUND_RAISER, fundRaiserFetch);
}

export function* startFundRaiserFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_FUND_RAISER_WITH_SPINNER,
    fundRaiserFetchWithSpinner
  );
}

export function* fundRaiserMode() {
  yield all([
    call(startFundRaiserFetch),
    call(startFundRaiserFetchWithSpinner),
  ]);
}
