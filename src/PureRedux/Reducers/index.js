import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";
import { productReducer } from "./ProductReducers";

const reducers = combineReducers({
  allProducts: productReducer,
  AuthMain: AuthReducer,
});

export default reducers;
