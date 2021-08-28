import { createStore } from 'redux';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { LocalStorageMock } from '@react-mock/localstorage';
import userEvent from '@testing-library/user-event';
import rootReducer from '../../../../src/store/rootReducer';
import Search from '../../../../src/components/search/components/Search';
import { addErrorAction } from '../../../../src/store/errorReducer';
import { addLoadingAction } from '../../../../src/store/loadingReducer';
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
  useParams: () => ({
    id: 0,
    test: true,
  }),
  Link: jest.fn().mockImplementation(({ children }) => {
    return children;
  }),
}));

let store;

beforeEach(() => {
  store = createStore(rootReducer);
});

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
    store.dispatch(addErrorAction({ message: 'Test error' }));
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
    store.dispatch(addLoadingAction(true));
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
