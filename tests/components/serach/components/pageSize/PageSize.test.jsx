import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { LocalStorageMock } from '@react-mock/localstorage';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import rootReducer from '../../../../../src/store/rootReducer';
import PageSize from '../../../../../src/components/search/components/pageSize/PageSize';
import { pageSizeAction } from '../../../../../src/store/pageSizeReducer';

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

describe('PageSize', () => {
  it('Render PageSize component', () => {
    store.dispatch(pageSizeAction(10));

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
    expect(getByText('50').selected).toBeTruthy();
  });
});
