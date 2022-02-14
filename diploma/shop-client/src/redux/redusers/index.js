import { combineReducers } from "redux";

import categories from "./categories";
import products from "./products";
import user from "./user";
import cart from "./cart";

const rootReducer = combineReducers({ categories, products, user, cart });
export default rootReducer;
