import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../src/App';
import { AppRouter } from '../src/components/appRouter/appRouter';
import { store } from '../src/store';

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
  useMatch: () => jest.fn(),
  useParams: () => ({
    id: 0,
  }),
  Link: jest.fn().mockImplementation(({ children }) => {
    return children;
  }),
}));

describe('App', () => {
  it('renders App component', () => {
    const { getByText, getByRole, getByPlaceholderText, getByDisplayValue } =
      render(
        <Router>
          <Provider store={store}>
            <App>
              <AppRouter />
            </App>
          </Provider>,
        </Router>,
      );

    expect(getByText(/home/i)).toBeInTheDocument();
    expect(getByText(/relevancy/i)).toBeInTheDocument();
    expect(getByRole('textbox')).toBeInTheDocument();
    expect(getByPlaceholderText('Start your search')).toHaveClass(
      'search__field',
    );

    userEvent.type(getByRole('textbox'), 'React');
    expect(getByDisplayValue('React')).toBeInTheDocument();
  });
});
