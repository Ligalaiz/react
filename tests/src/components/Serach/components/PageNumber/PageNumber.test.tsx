import { Provider } from 'react-redux';
import { render, fireEvent, screen } from '@testing-library/react';
import { PageNumber } from '../../../../../../src/components/Search/components/PageNumber';
import '@testing-library/jest-dom';
import { store } from '../../../../../../src/store';
import { NewsTypes } from '../../../../../../src/interfaces/news';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: '/another-route',
    search: '',
    hash: '',
    state: null,
    key: '5',
  }),
  useTypedUseSelector: jest.fn().mockReturnValue({
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

describe('PageNumber', () => {
  it('Render PageNumber component', () => {
    store.dispatch({
      type: NewsTypes.SET_PAGE_NUMBER,
      payload: '1',
    });
    const { getByTestId } = render(
      <Provider store={store}>
        <PageNumber />
      </Provider>,
    );

    const field = getByTestId('pageNumber');
    expect(field).toHaveValue(1);
  });
});
