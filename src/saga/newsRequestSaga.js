import { put, takeEvery, call } from 'redux-saga/effects';
import { data } from '@root/utils/getUrl.utils';
import { newsActions } from '../store/reducer';

function* newsRequestWorker({ payload }) {
  const fetchNews = () => fetch(payload, data());

  try {
    yield put(newsActions.newsLoadingStart());
    const response = yield call(fetchNews);

    if (!response.ok) {
      throw new Error('Ошибка загрузки новостей');
    }

    const result = yield call(() => new Promise((res) => res(response.json())));
    yield put(newsActions.newsRequest(result));
    yield put(newsActions.newsLoadingEnd());
  } catch (e) {
    console.log(e.message);
    yield put(newsActions.setError({ error: e.message }));
  }
}

function* newsRequestWatcher() {
  yield takeEvery('newsRequestSaga', newsRequestWorker);
}

const newsRequestAction = (payload) => ({
  type: 'newsRequestSaga',
  payload,
});

export { newsRequestWatcher, newsRequestAction };
