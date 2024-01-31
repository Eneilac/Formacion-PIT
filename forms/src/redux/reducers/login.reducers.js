import {
    LOGIN_ACTION_REQUEST_FAILED,
    LOGIN_ACTION_REQUEST_STARTED,
    LOGIN_ACTION_REQUEST_SUCCESS,
    LOGOUT_ACTION_REQUEST
} from "../../constants/actionTypes/login.actionTypes";


const INITIAL_STATE = {
    user: null,
    isLoggedIn: false,
    isLoading: false,
    error: null
}


const applyGetLoginStarted = (state, action) => ({
    ...state,
    user: action.payload.loginStarted || null,
    isLoggedIn: false,
    isLoading: true,
    error: action.error
})


const applyGetLoginSuccess = (state, action) => ({
    ...state,
    user: action.payload.loginInfo || localStorage.getItem("accessToken"),
    isLoggedIn: true,
    isLoading: false,
    error: action.error

})

const applyGetLoginFailed = (state, action) => ({
    ...state,
    user: null,
    isLoggedIn: false,
    isLoading: false,
    error: action.payload
})

const applyLogout = (state, action) => ({
    ...state,
    user: null,
    isLoggedIn: false,
    isLoading: false,
    error: null
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

        case LOGOUT_ACTION_REQUEST: {
            return applyLogout
        }

        default: return state;
    }

}

export default loginReducer;