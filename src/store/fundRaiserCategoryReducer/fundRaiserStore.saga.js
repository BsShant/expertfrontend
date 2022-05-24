import { takeLatest, call, put, all } from 'redux-saga/effects';
import { fetchingFundCategoryFailure, fetchingFundCategorySuccess, FundCategorySpinnerStops, FundCategorySpinnerStarts } from './fundRaiserCategoryStore.actions';
import { fetchFundCategory } from '../../utils/api-calls/fundCategoryCalls';
import { START_FETCHING_FUND_CATEGORY, START_FETCHING_FUND_CATEGORY_WITH_SPINNER } from './fundRaiserCategoryStore.actionTypes';

export function* FundCategoryFetch(){

    try {
        let fetchData = yield fetchFundCategory();
        yield put(fetchingFundCategorySuccess(fetchData.data))
    } catch (error) {
        yield put(fetchingFundCategoryFailure(error))
    }
}

export function* FundCategoryFetchWithSpinner(){

    try {
        yield put(FundCategorySpinnerStarts())
        let fetchData = yield fetchFundCategory();
        yield put(fetchingFundCategorySuccess(fetchData.data))
        yield put(FundCategorySpinnerStops())

    } catch (error) {
        yield put(fetchingFundCategoryFailure(error))
        // yield put(publicationSpinnerStops())

    }
}



export function* startFundCategoryFetch(){
    yield takeLatest(START_FETCHING_FUND_CATEGORY, FundCategoryFetch)

    
}

export function* startFundCategoryFetchWithSpinner(){
    yield takeLatest(START_FETCHING_FUND_CATEGORY_WITH_SPINNER, FundCategoryFetchWithSpinner)

    
}

export function* fundCategoryMode(){
    yield all([call(startFundCategoryFetch), call(startFundCategoryFetchWithSpinner)])
}