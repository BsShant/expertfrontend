import { takeLatest, call, put, all } from 'redux-saga/effects';
import { fetchingServiceCategoryFailure, fetchingServiceCategorySuccess, serviceCategorySpinnerStops, serviceCategorySpinnerStarts } from './categoryStore.actions';
import { fetchServiceCategory } from '../../utils/api-calls/serviceCategoryCalls';
import { START_FETCHING_SERVICE_CATEGORY, START_FETCHING_SERVICE_CATEGORY_WITH_SPINNER } from './categoryStore.actionTypes';

export function* ServiceCategoryFetch(){

    try {
        let fetchData = yield fetchServiceCategory();
        yield put(fetchingServiceCategorySuccess(fetchData.data))
    } catch (error) {
        yield put(fetchingServiceCategoryFailure(error))
    }
}

export function* ServiceCategoryFetchWithSpinner(){

    try {
        yield put(serviceCategorySpinnerStarts())
        let fetchData = yield fetchServiceCategory();
        yield put(fetchingServiceCategorySuccess(fetchData.data))
        yield put(serviceCategorySpinnerStops())

    } catch (error) {
        yield put(fetchingServiceCategoryFailure(error))
        // yield put(publicationSpinnerStops())

    }
}



export function* startServiceCategoryFetch(){
    yield takeLatest(START_FETCHING_SERVICE_CATEGORY, ServiceCategoryFetch)

    
}

export function* startServiceCategoryFetchWithSpinner(){
    yield takeLatest(START_FETCHING_SERVICE_CATEGORY_WITH_SPINNER, ServiceCategoryFetchWithSpinner)

    
}

export function* ServiceCategoryMode(){
    yield all([call(startServiceCategoryFetch), call(startServiceCategoryFetchWithSpinner)])
}