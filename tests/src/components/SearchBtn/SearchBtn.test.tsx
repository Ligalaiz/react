import { App } from '../../../../src/components/App';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('Check btn render', () => {
  test('Search btn render', () => {
    const { getByTestId } = render(<App />);
    const btnElement = getByTestId('searchBtn');
    expect(btnElement).toBeInTheDocument();
  });
});
