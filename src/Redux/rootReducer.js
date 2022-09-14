import { combineReducers } from "redux";
import { cartReducer, productReducer, selectedReducer } from "./REDUCER/ProductReducers";

const rootReducer = combineReducers({
    allProducts : productReducer,
    product : selectedReducer,
    cart : cartReducer
})

export default rootReducer