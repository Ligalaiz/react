import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { SearchResult } from '../../../../../../src/components/Search/components/SearchResult';
import { store } from '../../../../../../src/store';
import '@testing-library/jest-dom';
import { NewsTypes } from '../../../../../../src/interfaces/news';
import { articles } from '../../../../../data';

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
      type: NewsTypes.SET_NEWS_LOCAL,
      payload: articles,
    });
    const { getAllByText, getAllByRole } = render(
      <Provider store={store}>
        <div>
          <SearchResult />
        </div>
      </Provider>,
    );

    expect(getAllByText(/Published/i)).toHaveLength(2);
    expect(getAllByText(/Author/i)).toHaveLength(1);
    expect(getAllByRole('heading')).toHaveLength(2);
  });
});
