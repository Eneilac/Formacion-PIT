import { call, put } from 'redux-saga/effects'
import { del, get, post } from '../../services/request';
import { cartActionRequestSuccess, cartActionRequestFailed, cartPostActionRequestSuccess, cartPostActionRequestFailed, cartDelActionRequestSuccess, cartDelActionRequestFailed, cartItemsActionRequestSuccess, cartItemsActionRequestFailed, cartItemPostActionRequestSuccess, cartItemPostActionRequestFailed } from '../actions/'

export function* fetchCart(action) {
    try {
        const response = yield call(get, action.payload);
        yield put(cartActionRequestSuccess(response));

    } catch (e) {
        yield put(cartActionRequestFailed(e))
    }
}


export function* postCart(action) {
    try {
        const response = yield call(post, action.payload);
        yield put(cartPostActionRequestSuccess(response))
    } catch (e) {
        yield put(cartPostActionRequestFailed(e))
    }
}

export function* delCart(action) {
    try {
        const response = yield call(del, action.payload);
        yield put(cartDelActionRequestSuccess(response))
    } catch (e) {
        yield put(cartDelActionRequestFailed(e))
    }
}


export function* fetchItemsCart(action) {
    try {
        const response = yield call(get, action.payload);
        yield put(cartItemsActionRequestSuccess(response))
    } catch (e) {
        yield put(cartItemsActionRequestFailed(e))
    }
}



export function* postItemCart(action) {
    try {
        const response = yield call(post, action.payload);
        yield put(cartItemPostActionRequestSuccess(response))
    } catch (e) {
        yield put(cartItemPostActionRequestFailed(e))
    }
}




