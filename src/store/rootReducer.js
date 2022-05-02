import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { categoryReducer } from "./categoryReducer/categoryStore.reducer";
const persistConfig = {
  key: "root",
  storage,
    whitelist: [],
};
const rootReducer = combineReducers({
  categoryStore: categoryReducer,

});

export default persistReducer(persistConfig, rootReducer);