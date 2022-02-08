import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { newsReducer, authReducer } from './reducer';
import { rootSaga } from '../saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    news: newsReducer,
    auth: authReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export { store };
