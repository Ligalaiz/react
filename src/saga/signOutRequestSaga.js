import { put, takeEvery, call } from 'redux-saga/effects';
import { getAuth, signOut } from 'firebase/auth';
import { authActions } from '../store/reducer';

function* signOutRequestWorker() {
  try {
    yield put(authActions.authRequestStart());

    const auth = yield call(getAuth);
    yield call(() => signOut(auth));

    yield put(authActions.authRequestEnd());
  } catch (e) {
    console.log(e.message);
    yield put(authActions.setAuthError({ authError: e.message }));
  }
}

function* signOutRequestWatcher() {
  yield takeEvery('signOutRequestSaga', signOutRequestWorker);
}

const signOutRequestAction = () => ({
  type: 'signOutRequestSaga',
});

export { signOutRequestWatcher, signOutRequestAction };
