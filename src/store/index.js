import { configureStore } from '@reduxjs/toolkit';
import { newsReducer } from './reducer';

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export { store };
