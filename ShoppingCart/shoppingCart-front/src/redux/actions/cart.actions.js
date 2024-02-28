import {
    CART_ACTION_REQUEST_STARTED,
    CART_ACTION_REQUEST_SUCCESS,
    CART_ACTION_REQUEST_FAILED,
} from '../../constants/actionTypes/cart.actionTypes';


const cartActionRequestStarted = (query) => ({
    type: CART_ACTION_REQUEST_STARTED,
    payload: query
});


const cartActionRequestSuccess = (cartInfo) => ({
    type: CART_ACTION_REQUEST_SUCCESS,
    payload: { cartInfo }
});


const cartActionRequestFailed = (error) => ({
    type: CART_ACTION_REQUEST_FAILED,
    payload: error
})


export {
    cartActionRequestStarted,
    cartActionRequestSuccess,
    cartActionRequestFailed,
}