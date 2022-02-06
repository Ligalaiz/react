import { configureStore } from '@reduxjs/toolkit';
import { newsReducer, authReducer } from './reducer';

const store = configureStore({
  reducer: {
    news: newsReducer,
    auth: authReducer,
  },
});

export { store };
