import { put, takeEvery, call } from 'redux-saga/effects';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { authActions } from '../store/reducer';

function* loginRequestWorker({ payload }) {
  try {
    yield put(authActions.authRequestStart());
    const auth = yield call(getAuth);
    const { user } = yield call(() =>
      signInWithEmailAndPassword(auth, payload.email, payload.password),
    );

    yield put(
      authActions.authRequest({
        user: user.email,
        id: user.uid,
        token: user.accessToken,
      }),
    );

    yield put(authActions.authRequestEnd());
  } catch (e) {
    console.log(e.message);
    yield put(authActions.setAuthError({ authError: e.message }));
  }
}

function* loginRequestWatcher() {
  yield takeEvery('loginRequestSaga', loginRequestWorker);
}

const loginRequestAction = (payload) => ({
  type: 'loginRequestSaga',
  payload,
});

export { loginRequestWatcher, loginRequestAction };
