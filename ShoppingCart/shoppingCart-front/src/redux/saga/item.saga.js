import { call, put } from 'redux-saga/effects'
import { del, get, post } from '../../services/request';
import { itemActionRequestSuccess, itemActionRequestFailed, itemPostActionRequestSuccess, itemPostActionRequestFailed, itemDelActionRequestSuccess, itemDelActionRequestFailed } from '../actions/'

export function* fetchItem(action) {
    try {
        const response = yield call(get, action.payload);
        yield put(itemActionRequestSuccess(response));

    } catch (e) {
        yield put(itemActionRequestFailed(e))
    }
}

export function* postItem(action) {
    try {
        const response = yield call(post, action.payload);
        yield put(itemPostActionRequestSuccess(response))
    } catch (e) {
        yield put(itemPostActionRequestFailed(e))
    }
}

export function* delItem(action) {
    console.log(action)
    try {
        const response = yield call(del, action.payload);
        yield put(itemDelActionRequestSuccess(response))
    } catch (e) {
        yield put(itemDelActionRequestFailed(e))
    }
}