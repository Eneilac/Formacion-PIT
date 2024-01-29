import {
    LOGIN_ACTION_REQUEST_STARTED,
    LOGIN_ACTION_REQUEST_SUCCESS,
    LOGIN_ACTION_REQUEST_FAILED
} from '../../constants/actionTypes/login.actionTypes';


const loginActionRequestStarted = (query) => ({
    type: LOGIN_ACTION_REQUEST_STARTED,
    payload: query
});


const loginActionRequestSuccess = (loginInfo) => ({
    type: LOGIN_ACTION_REQUEST_SUCCESS,
    payload: { loginInfo }
});


const loginActionRequestFailed = (error) => ({
    type: LOGIN_ACTION_REQUEST_FAILED,
})

const setLoggedIn = (isLoggedIn) => {
    return {
        type: 'SET_LOGGED_IN',
        payload: isLoggedIn,
    };
};


export {
    loginActionRequestStarted,
    loginActionRequestSuccess,
    loginActionRequestFailed,
    setLoggedIn
}

