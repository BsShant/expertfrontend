import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  fetchingLandingHeroSuccess,
  fetchingLandingHeroFailure,
  landingHeroSpinnerStops,
  fetchingLandingAboutSuccess,
  fetchingLandingAboutFailure,
  landingAboutSpinnerStops,
  fetchingLandingServiceSuccess,
  landingHeroSpinnerStarts,
  landingAboutSpinnerStarts,
  fetchingLandingServiceFailure,
  landingServiceSpinnerStarts,
  landingServiceSpinnerStops,
} from "./landingStore.actions";
import { fetchLandingService, fetchLandingAbout, fetchLandingHero } from "../../utils/api-calls/landingCalls";
import {
  START_FETCHING_LANDING_HERO,
  START_FETCHING_LANDING_HERO_WITH_SPINNER,
  START_FETCHING_LANDING_ABOUT,
  START_FETCHING_LANDING_ABOUT_WITH_SPINNER,
  START_FETCHING_LANDING_SERVICE,
  START_FETCHING_LANDING_SERVICE_WITH_SPINNER,
} from "./landingStore.actionTypes";

export function* landingHeroFetch() {
  try {
    let fetchData = yield fetchLandingHero();
    yield put(fetchingLandingHeroSuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingLandingHeroFailure(error));
  }
}

export function* landingHeroFetchWithSpinner() {
  try {
    yield put(landingHeroSpinnerStarts());
    let fetchData = yield fetchLandingHero();
    yield put(fetchingLandingHeroSuccess(fetchData.data));
    yield put(landingHeroSpinnerStops());
  } catch (error) {
    yield put(fetchingLandingHeroFailure(error));
  }
}

export function* startLandingHeroFetch() {
  yield takeLatest(START_FETCHING_LANDING_HERO, landingHeroFetch);
}

export function* startLandingHeroFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_LANDING_HERO_WITH_SPINNER,
    landingHeroFetchWithSpinner
  );
}

export function* landingAboutFetch() {
  try {
    let fetchData = yield fetchLandingAbout();
    yield put(fetchingLandingAboutSuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingLandingAboutFailure(error));
  }
}

export function* landingAboutFetchWithSpinner() {
  try {
    yield put(landingAboutSpinnerStarts());
    let fetchData = yield fetchLandingAbout();
    yield put(fetchingLandingAboutSuccess(fetchData.data));
    yield put(landingAboutSpinnerStops());
  } catch (error) {
    yield put(fetchingLandingAboutFailure(error));
  }
}

export function* startLandingAboutFetch() {
  yield takeLatest(START_FETCHING_LANDING_ABOUT, landingAboutFetch);
}

export function* startLandingAboutFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_LANDING_ABOUT_WITH_SPINNER,
    landingAboutFetchWithSpinner
  );
}




export function* landingServiceFetch() {
  try {
    let fetchData = yield fetchLandingService();
    yield put(fetchingLandingServiceSuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingLandingServiceFailure(error));
  }
}

export function* landingServiceFetchWithSpinner() {
  try {
    yield put(landingServiceSpinnerStarts());
    let fetchData = yield fetchLandingService();
    yield put(fetchingLandingServiceSuccess(fetchData.data));
    yield put(landingServiceSpinnerStops());
  } catch (error) {
    yield put(fetchingLandingServiceFailure(error));
  }
}

export function* startLandingServiceFetch() {
  yield takeLatest(START_FETCHING_LANDING_SERVICE, landingServiceFetch);
}

export function* startLandingServiceFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_LANDING_SERVICE_WITH_SPINNER,
    landingServiceFetchWithSpinner
  );
}


export function* landingMode() {
  yield all([
    call(startLandingHeroFetch),
    call(startLandingHeroFetchWithSpinner),
    call(startLandingAboutFetch),
    call(startLandingAboutFetchWithSpinner),
    call(startLandingServiceFetch),
    call(startLandingServiceFetchWithSpinner),
  ]);
}
