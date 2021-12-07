import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { LocalStorageMock } from '@react-mock/localstorage';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { store } from '../../../../../../src/store';
import { NewsTypes } from '../../../../../../src/interfaces/news';
import { PageSize } from '../../../../../../src/components/Search/components/PageSize';

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

describe('PageSize', () => {
  it('Render PageSize component', () => {
    store.dispatch({
      type: NewsTypes.SET_PAGE_SIZE,
      payload: 10,
    });

    const { getByText, getByRole, getByDisplayValue } = render(
      <LocalStorageMock
        items={JSON.stringify({
          requestData: {
            searchRequest: 'test',
            pageNumber: '1',
            pageSize: '10',
            sortType: '',
          },
        })}
      >
        <Provider store={store}>
          <PageSize />
        </Provider>
      </LocalStorageMock>,
    );

    expect(getByDisplayValue('10')).toBeInTheDocument();
    userEvent.selectOptions(getByRole('combobox'), '50');
    expect(getByText('50').selected).toBeTruthy(); //???
  });
});
