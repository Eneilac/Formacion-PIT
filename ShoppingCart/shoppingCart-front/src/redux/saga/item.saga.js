import { call, put } from 'redux-saga/effects'
import { get } from '../../services/request';
import { itemActionRequestSuccess, itemActionRequestFailed } from '../actions/'

function* fetchItem(action) {
    try {
        const response = yield call(get, action.payload);
        yield put(itemActionRequestSuccess(response));

    } catch (e) {
        yield put(itemActionRequestFailed(e))
    }
}

export default fetchItem