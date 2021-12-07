import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { LocalStorageMock } from '@react-mock/localstorage';
import { store } from '../../../../../../src/store';
import { NewsTypes } from '../../../../../../src/interfaces/news';
import { SearchBar } from '../../../../../../src/components/Search/components/SearchBar';

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
    expect(getByTestId('searchBtn')).toBeInTheDocument();
    userEvent.click(getByTestId('searchBtn'));
  });

  it('Check SearchBar validate', () => {
    store.dispatch({
      type: NewsTypes.SET_SEARCH_REQUEST,
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
    userEvent.click(getByTestId('searchBtn'));
  });
});
