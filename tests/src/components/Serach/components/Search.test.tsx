import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { LocalStorageMock } from '@react-mock/localstorage';
import userEvent from '@testing-library/user-event';
import { store } from '../../../../../src/store';
import { Search } from '../../../../../src/components/search/components/Search';
import { NewsTypes } from '../../../../../src/interfaces/news';
import { articles } from './data';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: '/another-route',
    search: '',
    hash: '',
    state: null,
    key: '5',
  }),
  useHistory: () => ({
    push: jest.fn(),
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
  useParams: () => ({
    id: 0,
    test: true,
  }),
  Link: jest.fn().mockImplementation(({ children }) => {
    return children;
  }),
}));

describe('Search', () => {
  it('Render Search component', () => {
    const { getByTestId, getByPlaceholderText } = render(
      <LocalStorageMock items={{ items: JSON.stringify(articles) }}>
        <Provider store={store}>
          <Search />
        </Provider>
      </LocalStorageMock>,
    );

    expect(getByTestId(/pageNumber/i)).toBeInTheDocument();
    expect(getByPlaceholderText('Start your search')).toBeInTheDocument();
  });

  it('Render error message', () => {
    store.dispatch({
      type: NewsTypes.FETCH_NEWS_ERROR,
      payload: 'Test error',
    });
    const { getByText, queryByText } = render(
      <LocalStorageMock items={{ items: JSON.stringify(articles) }}>
        <Provider store={store}>
          <Search />
        </Provider>
      </LocalStorageMock>,
    );

    expect(getByText(/Test error/i)).toBeInTheDocument();
    expect(getByText(/close/i)).toBeInTheDocument();
    userEvent.click(getByText(/close/i));
    expect(queryByText(/Test error/i)).not.toBeInTheDocument();
  });

  it('Render loader', () => {
    store.dispatch({ type: NewsTypes.FETCH_NEWS });
    const { getByTestId } = render(
      <LocalStorageMock items={{ items: JSON.stringify(articles) }}>
        <Provider store={store}>
          <Search />
        </Provider>
      </LocalStorageMock>,
    );

    expect(getByTestId('loader')).toBeInTheDocument();
    expect(getByTestId('loader')).toHaveClass('loader');
  });
});
