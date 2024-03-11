import { takeEvery } from "redux-saga/effects";
import { ITEM_ACTION_REQUEST_STARTED, ITEM_DEL_ACTION_REQUEST_STARTED, ITEM_POST_ACTION_REQUEST_STARTED } from "../../constants/actionTypes/item.actionTypes";
import { CART_ACTION_REQUEST_STARTED, CART_DEL_ACTION_REQUEST_STARTED, CART_POST_ACTION_REQUEST_STARTED } from "../../constants/actionTypes/cart.actionTypes";
import { fetchCart, postCart, delCart } from "./cart.saga";
import { delItem, fetchItem, postItem } from './item.saga'



function* rootSaga() {
    //**ITEM*/
    yield takeEvery(ITEM_ACTION_REQUEST_STARTED, fetchItem);
    yield takeEvery(ITEM_POST_ACTION_REQUEST_STARTED, postItem);
    yield takeEvery(ITEM_DEL_ACTION_REQUEST_STARTED, delItem);
    
    //**CART*/
    yield takeEvery(CART_ACTION_REQUEST_STARTED, fetchCart);
    yield takeEvery(CART_POST_ACTION_REQUEST_STARTED, postCart);
    yield takeEvery(CART_DEL_ACTION_REQUEST_STARTED, delCart);



}

export default rootSaga;