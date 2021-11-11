import { App } from '../../../../src/components/App';
import { SearchCheckbox } from '../../../../src/components/SearchCheckbox';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

describe('Check Search Checkbox render', () => {
  test('Search Search Checkbox render', () => {
    const { getByTestId } = render(<App />);

    const checkboxElement = getByTestId('searchCheckbox');
    expect(checkboxElement).toBeInTheDocument();
  });
});

describe('Check Search Checkbox render', () => {
  test('Search Search Checkbox render', () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <SearchCheckbox
        handleCheckboxChange={handleChange}
        petsAllowed={false}
      />,
    );

    const checkboxElement = getByTestId('searchCheckbox');

    expect(checkboxElement).not.toBeChecked();
    fireEvent.click(checkboxElement);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(checkboxElement).toBeChecked();
  });
});
