import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import RootReducer from './rootReducer';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}
const store = createStore(RootReducer, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
export default store;