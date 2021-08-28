import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { LocalStorageMock } from '@react-mock/localstorage';
import rootReducer from '../../../../../src/store/rootReducer';
import SearchBar from '../../../../../src/components/search/components/searchBar/SearchBar';
import { searchRequestAction } from '../../../../../src/store/searchRequestReducer';

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
}));

let store;

beforeEach(() => {
  store = createStore(rootReducer);
});

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
    store.dispatch(searchRequestAction('Re'));
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
