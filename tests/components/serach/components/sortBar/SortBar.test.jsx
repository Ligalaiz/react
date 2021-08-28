import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import SortBar from '../../../../../src/components/search/components/sortBar/SortBar';
import rootReducer from '../../../../../src/store/rootReducer';
import { sortTypeAction } from '../../../../../src/store/sortTypeReducer';

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

describe('SortBar', () => {
  it('Choice relevancy', () => {
    store.dispatch(sortTypeAction('popularity'));
    const { getByTestId } = render(
      <Provider store={store}>
        <SortBar />
      </Provider>,
    );

    const btn = getByTestId('relevancy');
    userEvent.click(btn);
    expect(btn).toHaveStyle('background-color: #D43728');
  });

  it('Choice popularity', () => {
    store.dispatch(sortTypeAction('popularity'));
    const { getByTestId } = render(
      <Provider store={store}>
        <SortBar />
      </Provider>,
    );

    const btn = getByTestId('popularity');
    userEvent.click(btn);
    expect(btn).toHaveStyle('background-color: #D43728');
  });

  it('Choice publishedAt', () => {
    store.dispatch(sortTypeAction('popularity'));
    const { getByTestId } = render(
      <Provider store={store}>
        <SortBar />
      </Provider>,
    );

    const btn = getByTestId('publishedAt');
    userEvent.click(btn);
    expect(btn).toHaveStyle('background-color: #D43728');
  });
});
