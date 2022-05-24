import { call, all } from "redux-saga/effects";
import { ServiceCategoryMode } from "./categoryReducer/categoryStore.saga";
import { fundCategoryMode } from "./fundRaiserCategoryReducer/fundRaiserStore.saga";
import { fundRaiserMode } from "./fundRaiserReducer/fundRaiserStore.saga";
import { landingMode } from "./landingReducer/landingStore.saga";
import { loanMode } from "./loanReducer/loanStore.saga";
import { productMode } from "./productReducer/productStore.saga";
import { serviceMode } from "./serviceReducer/serviceStore.saga";

export default function* rootSaga() {
  yield all([
    call(ServiceCategoryMode),
    call(landingMode),
    call(fundCategoryMode),
    call(fundRaiserMode),
    call(serviceMode),
    call(productMode),
    call(loanMode)
  ]);
}
