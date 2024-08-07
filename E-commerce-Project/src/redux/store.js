import { createStore } from "redux";
import { cartReducer } from "./cart/cartReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cartStore: cartReducer,
});

const reduxStore = createStore(rootReducer);

export default reduxStore;
