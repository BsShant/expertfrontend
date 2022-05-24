import { takeLatest, call, put, all } from 'redux-saga/effects';
import { fetchingServiceFailure, fetchingServiceSuccess, serviceSpinnerStops, serviceSpinnerStarts } from './serviceStore.actions';
import { fetchService } from '../../utils/api-calls/serviceCalls';
import { START_FETCHING_SERVICE, START_FETCHING_SERVICE_WITH_SPINNER } from './serviceStore.actionTypes';

export function* serviceFetch(){

    try {
        let fetchData = yield fetchService();
        yield put(fetchingServiceSuccess(fetchData.data))
    } catch (error) {
        yield put(fetchingServiceFailure(error))
    }
}

export function* serviceFetchWithSpinner(){

    try {
        yield put(serviceSpinnerStarts())
        let fetchData = yield fetchService();
        yield put(fetchingServiceSuccess(fetchData.data))
        yield put(serviceSpinnerStops())

    } catch (error) {
        yield put(fetchingServiceFailure(error))
        // yield put(publicationSpinnerStops())

    }
}



export function* startServiceFetch(){
    yield takeLatest(START_FETCHING_SERVICE, serviceFetch)

    
}

export function* startServiceFetchWithSpinner(){
    yield takeLatest(START_FETCHING_SERVICE_WITH_SPINNER, serviceFetchWithSpinner)

    
}

export function* serviceMode(){
    yield all([call(startServiceFetch), call(startServiceFetchWithSpinner)])
}