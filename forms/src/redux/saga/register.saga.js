import { call, put } from 'redux-saga/effects'
import { register } from '../../services/auth'
import { REGISTER_ACTION_REQUEST_FAILED, REGISTER_ACTION_REQUEST_SUCCESS } from '../../constants/actionTypes/register.actionTypes'

function* registerUser(action) {
    try {
        const user = yield call(register, action.payload);

        yield put({
            type: REGISTER_ACTION_REQUEST_SUCCESS,
            payload: {
                username: user.username,
                password: user.password,
                mail: user.mail
            }
        });

    } catch (e) {
        yield put({ type: REGISTER_ACTION_REQUEST_FAILED, payload: e })
    }
}

export default registerUser;





