import { call, put } from 'redux-saga/effects'
import { get, post } from '../../services/request';
import { itemActionRequestSuccess, itemActionRequestFailed, itemPostActionRequestSuccess, itemPostActionRequestFailed } from '../actions/'

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
        console.log(action.payload)
        const response = yield call(post, action.payload);
        yield put(itemPostActionRequestSuccess(response))
    } catch (e) {
        yield put(itemPostActionRequestFailed(e))
    }
}