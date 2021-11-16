import { App } from '../../../../src/components/App';
import '@testing-library/jest-dom';
import { render, fireEvent, screen, act } from '@testing-library/react';

describe('Check Experience Field', () => {
  test('Experience Field render', () => {
    const { getByTestId } = render(<App />);
    const fieldElement = getByTestId('experience');

    expect(fieldElement).toBeInTheDocument();
  });

  test('filling Experience Field', async () => {
    const { getByTestId, getAllByTestId } = render(<App />);
    const fieldElement = getByTestId('experience');
    const options = getAllByTestId('select-option');
    expect(fieldElement).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(fieldElement, {
        target: { value: 'middle' },
      });
    });
    expect(fieldElement).toHaveValue('middle');
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
    expect(options[2].selected).toBeFalsy();
  });
});
