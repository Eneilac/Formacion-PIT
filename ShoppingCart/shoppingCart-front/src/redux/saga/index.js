import { takeEvery } from "redux-saga/effects";
import { ITEM_ACTION_REQUEST_STARTED, ITEM_DEL_ACTION_REQUEST_STARTED, ITEM_POST_ACTION_REQUEST_STARTED } from "../../constants/actionTypes/item.actionTypes";
import { CART_ACTION_REQUEST_STARTED } from "../../constants/actionTypes/cart.actionTypes";
import fetchCart from "./cart.saga";
import { delItem, fetchItem, postItem } from './item.saga'



function* rootSaga() {
    yield takeEvery(ITEM_ACTION_REQUEST_STARTED, fetchItem);
    yield takeEvery(CART_ACTION_REQUEST_STARTED, fetchCart);
    yield takeEvery(ITEM_POST_ACTION_REQUEST_STARTED, postItem);
    yield takeEvery(ITEM_DEL_ACTION_REQUEST_STARTED, delItem);

}

export default rootSaga;