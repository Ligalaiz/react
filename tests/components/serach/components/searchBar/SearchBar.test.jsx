import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { LocalStorageMock } from '@react-mock/localstorage';
import { store } from '../../../../../src/store';
import { NEWS_TYPES } from '../../../../../src/store/reducer/reducer';
import { SearchBar } from '../../../../../src/components/search/components/searchBar/SearchBar';

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

describe('SearchBar', () => {
  it('Render SearchBar component', () => {
    const { getByTestId, getByPlaceholderText } = render(
      <LocalStorageMock items={JSON.stringify({})}>
        <Provider store={store}>
          <SearchBar />
        </Provider>
      </LocalStorageMock>,
    );

    const field = getByPlaceholderText('Start your search');
    expect(field).toBeInTheDocument();
    userEvent.type(field, 'React');
    expect(getByTestId('search__btn')).toBeInTheDocument();
    userEvent.click(getByTestId('search__btn'));
  });

  it('Check SearchBar validate', () => {
    store.dispatch({
      type: NEWS_TYPES.SET_SEARCH_REQUEST,
      payload: 'Re',
    });
    const { getByTestId, getByPlaceholderText } = render(
      <LocalStorageMock items={JSON.stringify({})}>
        <Provider store={store}>
          <SearchBar />
        </Provider>
      </LocalStorageMock>,
    );

    const field = getByPlaceholderText('Start your search');
    expect(field).toBeInTheDocument();
    userEvent.click(getByTestId('search__btn'));
  });
});
