import {
    REGISTER_ACTION_REQUEST_STARTED,
    REGISTER_ACTION_REQUEST_SUCCESS,
    REGISTER_ACTION_REQUEST_FAILED,
} from '../../constants/actionTypes/register.actionTypes';


const registerActionRequestStarted = (query) => ({
    type: REGISTER_ACTION_REQUEST_STARTED,
    payload: query
});


const registerActionRequestSuccess = (REGISTERInfo) => ({
    type: REGISTER_ACTION_REQUEST_SUCCESS,
    payload: { REGISTERInfo }
});


const registerActionRequestFailed = (error) => ({
    type: REGISTER_ACTION_REQUEST_FAILED,
    payload: error
})


export {
    registerActionRequestFailed,
    registerActionRequestStarted,
    registerActionRequestSuccess,
}

