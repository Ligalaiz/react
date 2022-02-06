import { data } from '@root/utils/getUrl.utils';
import { createAsyncThunk } from '@reduxjs/toolkit';

const newsRequest = createAsyncThunk(
  'news/newsRequest',
  async (url, { rejectWithValue }) => {
    try {
      const response = await fetch(url, data());
      const result = await response.json();
      if (!response.ok) {
        throw new Error('Ошибка загрузки новостей');
      }

      return result;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export { newsRequest };
