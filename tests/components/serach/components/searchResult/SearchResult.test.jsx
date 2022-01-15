import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { SearchResult } from '../../../../../src/components/search/components/searchResult/SearchResult';
import { store } from '../../../../../src/store';
import '@testing-library/jest-dom';
import { NEWS_TYPES } from '../../../../../src/store/reducer/reducer';
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

describe('SearchResult return list articles', () => {
  it('List renders', () => {
    store.dispatch({
      type: NEWS_TYPES.SET_NEWS_LOCAL,
      payload: articles,
    });
    const { getAllByText, getAllByRole } = render(
      <Provider store={store}>
        <SearchResult />
      </Provider>,
    );

    expect(getAllByText(/Published/i)).toHaveLength(2);
    expect(getAllByText(/Author/i)).toHaveLength(1);
    expect(getAllByRole('heading')).toHaveLength(2);
  });
});
