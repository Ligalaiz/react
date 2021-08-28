import '@testing-library/jest-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { LocalStorageMock } from '@react-mock/localstorage';
import Details from '../../../src/components/details/details';
import rootReducer from '../../../src/store/rootReducer';
import { itemsAction } from '../../../src/store/itemsReducer';
import { addErrorAction } from '../../../src/store/errorReducer';

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
  useParams: () => ({
    id: 0,
  }),
  Link: jest.fn().mockImplementation(({ children }) => {
    return children;
  }),
}));

let store;

beforeEach(() => {
  store = createStore(rootReducer);
});

describe('PageNumber', () => {
  it('Render PageNumber component', () => {
    store.dispatch(itemsAction([]));
    store.dispatch(addErrorAction({ message: 'Test error' }));
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
