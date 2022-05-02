import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import RootReducer from './rootReducer';

const middleware = [];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}
const store = createStore(RootReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);
export default store;