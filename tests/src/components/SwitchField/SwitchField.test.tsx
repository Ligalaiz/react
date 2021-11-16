import { App } from '../../../../src/components/App';
import { SwitchField } from '../../../../src/components/SwitchField';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

describe('Check Switch Field', () => {
  test('Switch Field render', () => {
    const { getByTestId } = render(<App />);
    const fieldElement = getByTestId('switchField');
    expect(fieldElement).toBeInTheDocument();
  });
  test('Switch Field render', () => {
    const handleModeChange = jest.fn();
    const { getByTestId } = render(
      <SwitchField handleModeChange={handleModeChange} />,
    );
    const fieldElement = getByTestId('switchField');
    expect(fieldElement).toBeInTheDocument();

    expect(fieldElement).not.toBeChecked();
    fireEvent.click(fieldElement);
    expect(handleModeChange).toHaveBeenCalledTimes(1);
    expect(fieldElement).toBeChecked();
  });
});
