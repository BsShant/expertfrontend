import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  fetchingProductsSuccess,
  fetchingProductsFailure,
  productsSpinnerStarts,
  productsSpinnerStops,
  fetchingProductHeroFailure,
  fetchingProductHeroSuccess,
  productHeroSpinnerStarts,
  productHeroSpinnerStops,
} from "./productStore.actions";
import {
  fetchProducts,
  fetchProductHero,
} from "../../utils/api-calls/productCalls";
import {
  START_FETCHING_PRODUCTS,
  START_FETCHING_PRODUCTS_WITH_SPINNER,
  START_FETCHING_PRODUCT_HERO_WITH_SPINNER,
  START_FETCHING_PRODUCT_HERO,
} from "./productStore.actionTypes";

export function* productsFetch() {
  try {
    let fetchData = yield fetchProducts();
    yield put(fetchingProductsSuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingProductsFailure(error));
  }
}

export function* productsFetchWithSpinner() {
  try {
    yield put(productsSpinnerStarts());
    let fetchData = yield fetchProducts();
    yield put(fetchingProductsSuccess(fetchData.data));
    yield put(productsSpinnerStops());
  } catch (error) {
    yield put(fetchingProductsFailure(error));
  }
}

export function* startProductsFetch() {
  yield takeLatest(START_FETCHING_PRODUCTS, productsFetch);
}

export function* startProductsFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_PRODUCTS_WITH_SPINNER,
    productsFetchWithSpinner
  );
}

export function* productHeroFetch() {
  try {
    let fetchData = yield fetchProductHero();
    yield put(fetchingProductHeroSuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingProductHeroFailure(error));
  }
}

export function* productHeroFetchWithSpinner() {
  try {
    yield put(productHeroSpinnerStarts());
    let fetchData = yield fetchProductHero();
    yield put(fetchingProductHeroSuccess(fetchData.data));
    yield put(productHeroSpinnerStops());
  } catch (error) {
    yield put(fetchingProductHeroFailure(error));
  }
}

export function* startProductHeroFetch() {
  yield takeLatest(START_FETCHING_PRODUCT_HERO, productHeroFetch);
}

export function* startProductHeroFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_PRODUCT_HERO_WITH_SPINNER,
    productHeroFetchWithSpinner
  );
}

export function* productMode() {
  yield all([
    call(startProductsFetch),
    call(startProductsFetchWithSpinner),
    call(startProductHeroFetch),
    call(startProductHeroFetchWithSpinner),
  ]);
}
