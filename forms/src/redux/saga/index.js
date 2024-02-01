import { takeEvery } from "redux-saga/effects";
import { LOGIN_ACTION_REQUEST_STARTED } from "../../constants/actionTypes/login.actionTypes";
import fetchUser from "./auth.saga";
import { REGISTER_ACTION_REQUEST_STARTED } from "../../constants/actionTypes/register.actionTypes";
import registerUser from "./register.saga";

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery(LOGIN_ACTION_REQUEST_STARTED, fetchUser);
  yield takeEvery(REGISTER_ACTION_REQUEST_STARTED, registerUser);
}

export default mySaga;
