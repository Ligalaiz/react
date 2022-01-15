import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { SortBar } from '../../../../../src/components/search/components/sortBar/SortBar';
import { store } from '../../../../../src/store';
import { NEWS_TYPES } from '../../../../../src/store/reducer/reducer';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: '/another-route',
    search: '',
    hash: '',
    state: null,
    key: '5',
  }),
  useSearchParams: () => [
    {
      entries: jest.fn().mockReturnValue([
        ['searchRequest', 'test'],
        ['pageNumber', '1'],
        ['pageSize', '1'],
        ['sortType', 'relevancy'],
      ]),
    },
    () => jest.fn(),
  ],
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('SortBar', () => {
  it('Choice relevancy', () => {
    store.dispatch({
      type: NEWS_TYPES.SET_SORT_TYPE,
      payload: 'relevancy',
    });
    const { getByTestId } = render(
      <Provider store={store}>
        <SortBar />
      </Provider>,
    );

    const btn = getByTestId('relevancy');
    userEvent.click(btn);
    expect(btn).toHaveStyle('background-color: #D43728');
  });

  it('Choice popularity', () => {
    store.dispatch({
      type: NEWS_TYPES.SET_SORT_TYPE,
      payload: 'date',
    });
    const { getByTestId } = render(
      <Provider store={store}>
        <SortBar />
      </Provider>,
    );

    const btn = getByTestId('date');
    userEvent.click(btn);
    expect(btn).toHaveStyle('background-color: #D43728');
  });

  it('Choice publishedAt', () => {
    store.dispatch({
      type: NEWS_TYPES.SET_SORT_TYPE,
      payload: 'rank',
    });
    const { getByTestId } = render(
      <Provider store={store}>
        <SortBar />
      </Provider>,
    );

    const btn = getByTestId('rank');
    userEvent.click(btn);
    expect(btn).toHaveStyle('background-color: #D43728');
  });
});
