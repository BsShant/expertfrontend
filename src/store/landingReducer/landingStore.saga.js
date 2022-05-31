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
  fetchingTeamSuccess,
  fetchingTeamFailure,
  teamSpinnerStarts,
  teamSpinnerStops,
  fetchingTestimonialSuccess,
  fetchingTestimonialFailure,
  testimonialSpinnerStarts,
  testimonialSpinnerStops,
} from "./landingStore.actions";
import {
  fetchLandingService,
  fetchLandingAbout,
  fetchLandingHero,
  fetchTeam,
  fetchTestimonial,
} from "../../utils/api-calls/landingCalls";
import {
  START_FETCHING_LANDING_HERO,
  START_FETCHING_LANDING_HERO_WITH_SPINNER,
  START_FETCHING_LANDING_ABOUT,
  START_FETCHING_LANDING_ABOUT_WITH_SPINNER,
  START_FETCHING_LANDING_SERVICE,
  START_FETCHING_LANDING_SERVICE_WITH_SPINNER,
  START_FETCHING_TEAM,
  START_FETCHING_TEAM_WITH_SPINNER,
  START_FETCHING_TESTIMONIAL,
  START_FETCHING_TESTIMONIAL_WITH_SPINNER,
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

export function* teamFetch() {
  try {
    let fetchData = yield fetchTeam();
    yield put(fetchingTeamSuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingTeamFailure(error));
  }
}

export function* teamFetchWithSpinner() {
  try {
    yield put(teamSpinnerStarts());
    let fetchData = yield fetchTeam();
    yield put(fetchingTeamSuccess(fetchData.data));
    yield put(teamSpinnerStops());
  } catch (error) {
    yield put(fetchingTeamFailure(error));
  }
}

export function* startTeamFetch() {
  yield takeLatest(START_FETCHING_TEAM, teamFetch);
}

export function* startTeamFetchWithSpinner() {
  yield takeLatest(START_FETCHING_TEAM_WITH_SPINNER, teamFetchWithSpinner);
}

export function* testimonialFetch() {
  try {
    let fetchData = yield fetchTestimonial();
    yield put(fetchingTestimonialSuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingTestimonialFailure(error));
  }
}

export function* testimonialFetchWithSpinner() {
  try {
    yield put(testimonialSpinnerStarts());
    let fetchData = yield fetchTestimonial();
    yield put(fetchingTestimonialSuccess(fetchData.data));
    yield put(testimonialSpinnerStops());
  } catch (error) {
    yield put(fetchingTestimonialFailure(error));
  }
}

export function* startTestimonialFetch() {
  yield takeLatest(START_FETCHING_TESTIMONIAL, testimonialFetch);
}

export function* startTestimonialFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_TESTIMONIAL_WITH_SPINNER,
    testimonialFetchWithSpinner
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
    call(startTeamFetch),
    call(startTeamFetchWithSpinner),
    call(startTestimonialFetch),
    call(startTestimonialFetchWithSpinner),
  ]);
}
