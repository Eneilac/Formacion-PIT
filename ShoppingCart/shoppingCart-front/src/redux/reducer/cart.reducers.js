import {
    CART_ACTION_REQUEST_FAILED,
    CART_ACTION_REQUEST_STARTED,
    CART_ACTION_REQUEST_SUCCESS,
} from "../../constants/actionTypes/cart.actionTypes.js";


const INITIAL_STATE = {
    cart: null,
    paid: false,
    error: null
}

const applyGetCartStarted = (state, action) => ({
    ...state,
    cart: action.payload.getCart || null,
    paid: false
})


const applyGetCartSuccess = (state, action) => ({
    ...state,
    cart: action.payload.CartInfo,
})

const applyGetCartFailed = (state, action) => {
    return (
        {
            ...state,
            cart: null,
            error: action.payload.code
        })
}


function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CART_ACTION_REQUEST_STARTED: {
            return applyGetCartStarted(state, action);
        }

        case CART_ACTION_REQUEST_SUCCESS: {
            return applyGetCartSuccess(state, action);
        }

        case CART_ACTION_REQUEST_FAILED: {
            return applyGetCartFailed(state, action);
        }

        default: return state;
    }

}

export default cartReducer;