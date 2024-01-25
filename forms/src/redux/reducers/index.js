import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from './login.reducers'

const reducers = combineReducers({
    loginState: loginReducer,
});




export default reducers;