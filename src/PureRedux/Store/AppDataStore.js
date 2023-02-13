// import { createStore, applyMiddleware } from "redux";
// import reducers from "../Reducers";
// // Logger with default options
// import logger from "redux-logger";
// import thunk from "redux-thunk";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// const persistConfig = {
//   key: "root",
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, reducers);
// let store = createStore(persistedReducer, applyMiddleware(logger, thunk));
// let persistor = persistStore(store);

// return { store, persistor };

// export default store;

import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import reducers from "../Reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
const middleWare = [thunk, logger];
const composeEnhancers = compose(applyMiddleware(...middleWare));
const store = createStore(persistedReducer, undefined, composeEnhancers);
const persistor = persistStore(store);
export { store, persistor };
