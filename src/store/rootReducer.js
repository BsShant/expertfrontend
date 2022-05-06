import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { categoryReducer } from "./categoryReducer/categoryStore.reducer";
import { layoutReducer } from "./layoutStore/layoutStore.reducer";
const persistConfig = {
  key: "root",
  storage,
    whitelist: [],
};
const rootReducer = combineReducers({
  categoryStore: categoryReducer,
  layoutStore: layoutReducer

});

export default persistReducer(persistConfig, rootReducer);