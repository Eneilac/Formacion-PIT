import {
    CART_ACTION_REQUEST_FAILED,
    CART_ACTION_REQUEST_STARTED,
    CART_ACTION_REQUEST_SUCCESS,
    CART_DEL_ACTION_REQUEST_FAILED,
    CART_DEL_ACTION_REQUEST_STARTED,
    CART_DEL_ACTION_REQUEST_SUCCESS,
    CART_POST_ACTION_REQUEST_FAILED,
    CART_POST_ACTION_REQUEST_STARTED,
    CART_POST_ACTION_REQUEST_SUCCESS,
} from "../../constants/actionTypes/cart.actionTypes.js";



const INITIAL_STATE = {
    Cart: [],
    error: null,
    post: null,
    del: null
};



//***************************************************GET****************************************************/
const getCartStarted = (state) => {
    return {
        ...state
    }
};

const getCartSuccess = (state, action) => {
    return {
        ...state,
        Cart: action.payload.CartInfo
    }
};

const getCartFailed = (state, action) => ({
    ...state,
    error: action.payload.code
});


//***************************************************POST****************************************************/

const postCartStarted = (state) => ({
    ...state
});

const postCartSuccess = (state, action) => {
    const updatedCart = [...state.Cart, action.payload.Cart];

    return {
        ...state,
        Cart: updatedCart,
        post: action.payload.CartPost
    };
};

const postCartFailed = (state, action) => ({
    ...state,
    error: action.payload.code
});

//***************************************************DEL****************************************************/
const delCartStarted = (state) => ({
    ...state
});

const delCartSuccess = (state, action) => {
    const updatedCart = state.Cart.filter(Cart => Cart.id !== action.payload.CartDel.id);

    console.log(action.payload.CartDel)

    return {
        ...state,
        Cart: updatedCart,
        del: action.payload.CartDel
    };
};

const delCartFailed = (state, action) => ({
    ...state,
    error: action.payload.code
});

function CartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CART_ACTION_REQUEST_STARTED: {
            return getCartStarted(state);
        }
        case CART_ACTION_REQUEST_SUCCESS: {
            return getCartSuccess(state, action);
        }
        case CART_ACTION_REQUEST_FAILED: {
            return getCartFailed(state, action);
        }
        case CART_POST_ACTION_REQUEST_STARTED: {
            return postCartStarted(state)
        }
        case CART_POST_ACTION_REQUEST_SUCCESS: {
            return postCartSuccess(state, action)
        }
        case CART_POST_ACTION_REQUEST_FAILED: {
            return postCartFailed(state, action)
        }
        case CART_DEL_ACTION_REQUEST_STARTED: {
            return delCartStarted(state, action)
        }
        case CART_DEL_ACTION_REQUEST_SUCCESS: {
            return delCartSuccess(state, action)
        }
        case CART_DEL_ACTION_REQUEST_FAILED: {
            return delCartFailed(state, action)
        }

        default: return state;

    }

}

export default CartReducer;


