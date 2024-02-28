import { call, put } from 'redux-saga/effects'
import { get } from '../../services/request';
import { cartActionRequestSuccess, cartActionRequestFailed } from '../actions/'

function* fetchCart(action) {
    try {
        const response = yield call(get, action.payload);
        yield put(cartActionRequestSuccess(response));

    } catch (e) {
        yield put(cartActionRequestFailed(e))
    }
}

export default fetchCart