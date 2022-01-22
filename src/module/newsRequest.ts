import { data } from '@src/utils/getUrl.utils';
import { createAsyncThunk } from '@reduxjs/toolkit';

const newsRequest = createAsyncThunk(
  'news/newsRequest',
  async (url: string, { rejectWithValue }) => {
    try {
      const response = await fetch(url, data());
      const result = await response.json();
      if (!response.ok) {
        throw new Error('Ошибка загрузки новостей');
      }
      return result;
    } catch (e) {
      const error: string = (e as Error).message;
      return rejectWithValue(error);
    }
  },
);

export { newsRequest };
