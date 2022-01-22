import { configureStore } from '@reduxjs/toolkit';
import { newsReducer } from './reducer';

const store = configureStore({
  reducer: { news: newsReducer },
});
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store, RootState, AppDispatch };
