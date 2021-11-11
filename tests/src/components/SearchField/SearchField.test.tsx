import { App } from '../../../../src/components/App';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

describe('Check Field render', () => {
  test('Search Field render', () => {
    const { getByTestId, getByPlaceholderText } = render(<App />);
    const fieldElement = getByTestId('searchField');

    expect(fieldElement).toBeInTheDocument();
    expect(getByPlaceholderText(/Start your search/i)).toBeInTheDocument();
    expect(fieldElement).toHaveValue('');
    fireEvent.change(fieldElement, {
      target: { value: 'Search React' },
    });
    expect(fieldElement).toHaveValue('Search React');
  });

  test('filling Search Field', () => {
    const { getByTestId } = render(<App />);
    const fieldElement = getByTestId('searchField');
    expect(fieldElement).toBeInTheDocument();

    expect(fieldElement).toHaveValue('');
    fireEvent.change(fieldElement, {
      target: { value: 'Search React' },
    });
    expect(fieldElement).toHaveValue('Search React');
  });
});
