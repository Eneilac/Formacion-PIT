import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from './login.reducers'
import registerReducer from "./register.reducers";

const reducers = combineReducers({
    loginState: loginReducer,
    registerState: registerReducer
});




export default reducers;