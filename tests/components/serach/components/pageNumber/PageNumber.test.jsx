import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import { PageNumber } from '../../../../../src/components/search/components/pageNumber/PageNumber';
import '@testing-library/jest-dom';
import { store } from '../../../../../src/store';
import { NEWS_TYPES } from '../../../../../src/store/reducer/reducer';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({
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
      type: NEWS_TYPES.SET_PAGE_NUMBER,
      payload: '1',
    });
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
