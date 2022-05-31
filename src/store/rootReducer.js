import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { categoryReducer } from "./categoryReducer/categoryStore.reducer";
import { layoutReducer } from "./layoutStore/layoutStore.reducer";
import { fundCategoryReducer } from "./fundRaiserCategoryReducer/fundRaiserCategoryStore.reducer";
import { landingReducer } from "./landingReducer/landingStore.reducer";
import { fundRaiserReducer } from "./fundRaiserReducer/fundRaiserStore.reducer";
import { serviceReducer } from "./serviceReducer/serviceStore.reducer";
import { productReducer } from "./productReducer/productStore.reducer";
import { loanReducer } from "./loanReducer/loanStore.reducer";
import { aboutReducer } from "./aboutReducer/aboutStore.reducer";
import { footerReducer } from "./footerReducer/footerStore.reducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};
const rootReducer = combineReducers({
  categoryStore: categoryReducer,
  layoutStore: layoutReducer,
  fundCategoryStore: fundCategoryReducer,
  landingStore: landingReducer,
  fundRaiserStore: fundRaiserReducer,
  serviceStore: serviceReducer,
  productStore: productReducer,
  loanStore: loanReducer,
  aboutStore: aboutReducer,
  footerStore: footerReducer,
});

export default persistReducer(persistConfig, rootReducer);
