import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { LocalStorageMock } from '@react-mock/localstorage';
import Details from '../../../src/components/details/details';
import { NEWS_TYPES } from '../../../src/store/reducer/reducer';
import { store } from '../../../src/store';
import { articles } from '../../data';

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
  useNavigate: () => ({
    navigate: jest.fn(),
  }),
  useSearchParams: () => [{}],
  useParams: () => ({
    id: 0,
  }),
  Link: jest.fn().mockImplementation(({ children }) => {
    return children;
  }),
}));

describe('PageNumber', () => {
  it('Render PageNumber component', () => {
    store.dispatch({ type: NEWS_TYPES.FETCH_NEWS });
    store.dispatch({
      type: NEWS_TYPES.FETCH_NEWS_ERROR,
      payload: 'Ошибка загрузки новостей',
    });
    const { getByText, getAllByRole } = render(
      <LocalStorageMock items={{ items: JSON.stringify(articles) }}>
        <Provider store={store}>
          <Details />
        </Provider>
      </LocalStorageMock>,
    );

    expect(getByText(/Published/i)).toHaveTextContent(
      'Published at 2021-07-02',
    );
    expect(getByText(/Author/i)).toHaveTextContent('Author: Reuters');
    expect(getAllByRole('heading')).toHaveLength(1);
  });
});
