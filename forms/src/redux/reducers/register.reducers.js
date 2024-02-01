import {
    REGISTER_ACTION_REQUEST_FAILED,
    REGISTER_ACTION_REQUEST_STARTED,
    REGISTER_ACTION_REQUEST_SUCCESS,
} from "../../constants/actionTypes/register.actionTypes";


const INITIAL_STATE = {
    user: null,
    isRegisted: false,
    isLoading: false,
    error: null
}


const applyGetRegisterStarted = (state, action) => ({
    ...state,
    user: action.payload.registerStarted || null,
    isRegisted: false,
    isLoading: true,
    error: action.error
})


const applyGetRegisterSuccess = (state, action) => ({
    ...state,
    user: action.payload.registerInfo,
    isRegisted: true,
    isLoading: false,
    error: action.error

})

const applyGetRegisterFailed = (state, action) => ({
    ...state,
    user: null,
    isRegisted: false,
    isLoading: false,
    error: action.payload
})



function registerReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case REGISTER_ACTION_REQUEST_STARTED: {
            return applyGetRegisterStarted(state, action);
        }

        case REGISTER_ACTION_REQUEST_SUCCESS: {
            return applyGetRegisterSuccess(state, action);
        }

        case REGISTER_ACTION_REQUEST_FAILED: {
            return applyGetRegisterFailed(state, action);
        }

        default: return state;
    }

}

export default registerReducer;