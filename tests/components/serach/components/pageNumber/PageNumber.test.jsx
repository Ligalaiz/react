import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import PageNumber from '../../../../../src/components/search/components/pageNumber/PageNumber';
import '@testing-library/jest-dom';
import { pageNumberAction } from '../../../../../src/store/pageNumberReducer';
import rootReducer from '../../../../../src/store/rootReducer';

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

describe('PageNumber', () => {
  it('Render PageNumber component', () => {
    store.dispatch(pageNumberAction('1'));
    const { getByTestId } = render(
      <Provider store={store}>
        <PageNumber />
      </Provider>,
    );

    const field = getByTestId('pageNumber');
    fireEvent.change(field, { target: { value: '23' } });
    expect(field).toHaveValue(23);
    fireEvent.change(field, { target: { value: '-2' } });
    expect(field).toHaveValue(1);
  });
});
