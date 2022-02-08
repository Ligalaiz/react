import { put, takeEvery, call } from 'redux-saga/effects';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { authActions } from '../store/reducer';

function* signUpRequestWorker({ payload }) {
  try {
    yield put(authActions.authRequestStart());

    const auth = yield call(getAuth);
    const { user } = yield call(() =>
      createUserWithEmailAndPassword(auth, payload.email, payload.password),
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

function* signUpRequestWatcher() {
  yield takeEvery('signUpRequestSaga', signUpRequestWorker);
}

const signUpRequestAction = (payload) => ({
  type: 'signUpRequestSaga',
  payload,
});

export { signUpRequestWatcher, signUpRequestAction };
