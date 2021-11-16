import { App } from '../../../../src/components/App';
import { AgreementField } from '../../../../src/components/AgreementField';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

describe('Check Agreement Checkbox', () => {
  test('Agreement Checkbox render', () => {
    const { getByTestId } = render(<App />);

    const checkboxElement = getByTestId('agreementField');
    expect(checkboxElement).toBeInTheDocument();
  });
});

describe('Check Agreement Checkbox', () => {
  test('Agreement Checkbox to be checked', () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <AgreementField
      handleChange={handleChange}
      agreement={false}
      />,
    );

    const checkboxElement = getByTestId('agreementField');

    expect(checkboxElement).not.toBeChecked();
    fireEvent.click(checkboxElement);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(checkboxElement).toBeChecked();
  });
});
