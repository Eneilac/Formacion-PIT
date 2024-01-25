import {
    LOGIN_ACTION_REQUEST_FAILED,
    LOGIN_ACTION_REQUEST_STARTED,
    LOGIN_ACTION_REQUEST_SUCCESS
} from "../../constants/actionTypes/login.actionTypes";


const INITIAL_STATE = {
    user: null,
    isLoggedIn: false,
    error: null
}


const applyGetLoginStarted = (state, action) => ({
    ...state,
    user: action.payload.loginStarted || null,
    isLoggedIn: true
})


const applyGetLoginSuccess = (state, action) => ({
    ...state,
    user: action.payload.loginInfo || localStorage.getItem("accessToken"),
    isLoggedIn: false
})


const applyGetLoginFailed = (state, action) => ({
    ...state,
    user: null,
    isLoggedIn: false,
    error: action.payload.error
})


function loginReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN_ACTION_REQUEST_STARTED: {
            return applyGetLoginStarted(state, action);
        }

        case LOGIN_ACTION_REQUEST_SUCCESS: {
            return applyGetLoginSuccess(state, action);
        }

        case LOGIN_ACTION_REQUEST_FAILED: {
            return applyGetLoginFailed(state, action);
        }
        default: return state;
    }

}

export default loginReducer;