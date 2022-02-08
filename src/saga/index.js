import { all } from 'redux-saga/effects';
import { newsRequestWatcher, newsRequestAction } from './newsRequestSaga';
import { loginRequestWatcher, loginRequestAction } from './loginRequestSaga';
import { signUpRequestWatcher, signUpRequestAction } from './signUpRequestSaga';
import {
  signOutRequestWatcher,
  signOutRequestAction,
} from './signOutRequestSaga';

function* rootSaga() {
  yield all([
    newsRequestWatcher(),
    loginRequestWatcher(),
    signUpRequestWatcher(),
    signOutRequestWatcher(),
  ]);
}

export {
  rootSaga,
  newsRequestAction,
  loginRequestAction,
  signUpRequestAction,
  signOutRequestAction,
};
