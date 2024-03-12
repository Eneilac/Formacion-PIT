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

    CART_GET_ITEMS_REQUEST_STARTED,
    CART_GET_ITEMS_REQUEST_SUCCESS,
    CART_GET_ITEMS_REQUEST_FAILED,
    CART_POST_ITEMS_REQUEST_STARTED,
    CART_POST_ITEMS_REQUEST_SUCCESS,
    CART_POST_ITEMS_REQUEST_FAILED,
} from '../../../constants/actionTypes/cart.actionTypes';


//**********************************GET********************************/

const cartActionRequestStarted = (query) => ({
    type: CART_ACTION_REQUEST_STARTED,
    payload: query
});


const cartActionRequestSuccess = (cartInfo) => {
    let uniqueCart = cartInfo[0]
    return {
        type: CART_ACTION_REQUEST_SUCCESS,
        payload: { uniqueCart }
    }
}


const cartActionRequestFailed = (error) => ({
    type: CART_ACTION_REQUEST_FAILED,
    payload: error
})


//*******************************? items get************************************************

const cartItemsActionRequestStarted = (query) => ({
    type: CART_GET_ITEMS_REQUEST_STARTED,
    payload: query
})


const cartItemsActionRequestSuccess = (cartInfo) => {
    return {
        type: CART_GET_ITEMS_REQUEST_SUCCESS,
        payload: { cartInfo }
    }
}


const cartItemsActionRequestFailed = (error) => ({
    type: CART_GET_ITEMS_REQUEST_FAILED,
    payload: error
})




//**************************************POST******************************/

const cartPostActionRequestStarted = (query) => ({
    type: CART_POST_ACTION_REQUEST_STARTED,
    payload: query
});


const cartPostActionRequestSuccess = (cartPost) => {
    return {
        type: CART_POST_ACTION_REQUEST_SUCCESS,
        payload: { cart: cartPost.data.cart }
    }
};


const cartPostActionRequestFailed = (error) => ({
    type: CART_POST_ACTION_REQUEST_FAILED,
    payload: error
})
//*******************************? items post************************************************

const cartItemPostActionRequestStarted = (query) => {
   console.log(query)
   
    return {
        type: CART_POST_ITEMS_REQUEST_STARTED,
        payload: query
    }
}



const cartItemPostActionRequestSuccess = (cartPost) => {
    return {
        type: CART_POST_ITEMS_REQUEST_SUCCESS,
        payload: { cart: cartPost.data.cart }
    }
};


const cartItemPostActionRequestFailed = (error) => ({
    type: CART_POST_ITEMS_REQUEST_FAILED,
    payload: error
})


//************************************DEL******************************/

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

//*******************************? items del ************************************************


export {
    //*Get
    cartActionRequestStarted,
    cartActionRequestSuccess,
    cartActionRequestFailed,

    cartItemsActionRequestStarted,
    cartItemsActionRequestSuccess,
    cartItemsActionRequestFailed,

    //*Post
    cartPostActionRequestStarted,
    cartPostActionRequestSuccess,
    cartPostActionRequestFailed,

    cartItemPostActionRequestStarted,
    cartItemPostActionRequestSuccess,
    cartItemPostActionRequestFailed,



    //*Del
    cartDelActionRequestStarted,
    cartDelActionRequestSuccess,
    cartDelActionRequestFailed,
}