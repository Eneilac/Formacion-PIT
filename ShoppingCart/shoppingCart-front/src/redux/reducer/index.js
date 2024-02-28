import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from './cart.reducers'
import itemReducer from "./item.reducers";

const reducers = combineReducers({
    cartState: cartReducer,
    itemState: itemReducer
});

export default reducers;