import { App } from '../../../../src/components/App';
import '@testing-library/jest-dom';
import { render, fireEvent, act } from '@testing-library/react';

describe('Check Birthday Field', () => {
  test('Birthday Field render', () => {
    const { getByTestId } = render(<App />);
    const fieldElement = getByTestId('birthdayField');

    expect(fieldElement).toBeInTheDocument();
  });

  test('Set birthday date', async () => {
    const { getByTestId } = render(<App />);
    const fieldElement = getByTestId('birthdayField');

    await act(async () => {
      fireEvent.change(fieldElement, {
        target: { value: '2020-05-12' },
      });
    });

    expect(fieldElement).toHaveValue('2020-05-12');
  });
});
