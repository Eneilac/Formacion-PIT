import { takeEvery } from "redux-saga/effects";
import { ITEM_ACTION_REQUEST_STARTED, ITEM_POST_ACTION_REQUEST_STARTED } from "../../constants/actionTypes/item.actionTypes";
import { CART_ACTION_REQUEST_STARTED } from "../../constants/actionTypes/cart.actionTypes";
import fetchCart from "./cart.saga";
import { fetchItem, postItem } from './item.saga'



function* rootSaga() {
    yield takeEvery(ITEM_ACTION_REQUEST_STARTED, fetchItem);
    yield takeEvery(CART_ACTION_REQUEST_STARTED, fetchCart);
    yield takeEvery(ITEM_POST_ACTION_REQUEST_STARTED, postItem)
}

export default rootSaga;