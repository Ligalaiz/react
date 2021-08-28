import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { All } from '../src/index';

describe('App', () => {
  it('renders App component', async () => {
    const { getByText, getByRole, getByPlaceholderText, getByDisplayValue } =
      await render(<All />);

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
