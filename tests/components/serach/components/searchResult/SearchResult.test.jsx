import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import SearchResult from '../../../../../src/components/search/components/searchResult/SearchResult';
import { itemsAction } from '../../../../../src/store/itemsReducer';
import rootReducer from '../../../../../src/store/rootReducer';
import '@testing-library/jest-dom';
import { articles } from '../../../../data';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: '/another-route',
    search: '',
    hash: '',
    state: null,
    key: '5',
  }),
  Link: jest.fn().mockImplementation(({ children }) => {
    return children;
  }),
}));

let store;

beforeEach(() => {
  store = createStore(rootReducer);
});

describe('SearchResult return list articles', () => {
  it('List renders', () => {
    store.dispatch(itemsAction(articles));
    const { getAllByText, getAllByRole } = render(
      <Provider store={store}>
        <SearchResult />
      </Provider>,
    );

    expect(getAllByText(/Published/i)).toHaveLength(2);
    expect(getAllByText(/Author/i)).toHaveLength(2);
    expect(getAllByRole('heading')).toHaveLength(2);
  });
});
