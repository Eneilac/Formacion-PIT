import {
    CART_ACTION_REQUEST_STARTED,
    CART_ACTION_REQUEST_SUCCESS,
    CART_ACTION_REQUEST_FAILED,
    CART_DEL_ACTION_REQUEST_FAILED,
    CART_DEL_ACTION_REQUEST_STARTED,
    CART_DEL_ACTION_REQUEST_SUCCESS,
    CART_POST_ACTION_REQUEST_FAILED,
    CART_POST_ACTION_REQUEST_STARTED,
    CART_POST_ACTION_REQUEST_SUCCESS,
} from '../../../constants/actionTypes/cart.actionTypes';


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

//** POST  */

const cartPostActionRequestStarted = (query) => ({
    type: CART_POST_ACTION_REQUEST_STARTED,
    payload: query
});


const cartPostActionRequestSuccess = (cartPost) => {
    return {
        type: CART_POST_ACTION_REQUEST_SUCCESS,
        payload: {cart:cartPost.data.cart}
    }
};


const cartPostActionRequestFailed = (error) => ({
    type: CART_POST_ACTION_REQUEST_FAILED,
    payload: error
})

//** del  */

const cartDelActionRequestStarted = (query) => ({
    type: CART_DEL_ACTION_REQUEST_STARTED,
    payload: query
});


const cartDelActionRequestSuccess = (cartDel) => ({
    type: CART_DEL_ACTION_REQUEST_SUCCESS,
    payload: { cartDel }
});


const cartDelActionRequestFailed = (error) => ({
    type: CART_DEL_ACTION_REQUEST_FAILED,
    payload: error
})



export {
    cartActionRequestStarted,
    cartActionRequestSuccess,
    cartActionRequestFailed,
    cartPostActionRequestStarted,
    cartPostActionRequestSuccess,
    cartPostActionRequestFailed,
    cartDelActionRequestStarted,
    cartDelActionRequestSuccess,
    cartDelActionRequestFailed,
}