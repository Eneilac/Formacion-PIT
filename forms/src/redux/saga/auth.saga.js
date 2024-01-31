import { call, put } from 'redux-saga/effects'
import { LOGIN_ACTION_REQUEST_FAILED, LOGIN_ACTION_REQUEST_SUCCESS } from '../../constants/actionTypes/login.actionTypes'
import { login } from '../../services/auth'

function* fetchUser(action) {
    try {
        const user = yield call(login, action.payload);

        yield put({
            type: LOGIN_ACTION_REQUEST_SUCCESS,
            payload: {
                username: user.username,
                password: user.password
            }
        });


    } catch (e) {
        yield put({ type: LOGIN_ACTION_REQUEST_FAILED, payload: e })
    }
}

export default fetchUser





