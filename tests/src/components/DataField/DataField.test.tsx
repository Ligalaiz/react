import { App } from '../../../../src/components/App';
import { DataField } from '../../../../src/components/DataField';
import '@testing-library/jest-dom';
import { render, fireEvent, act } from '@testing-library/react';

describe('Check Name Field', () => {
  test('Name Field render', () => {
    const { getByTestId, getByPlaceholderText } = render(<App />);
    const fieldElement = getByTestId('name');

    expect(fieldElement).toBeInTheDocument();
    expect(getByPlaceholderText(/^Name/i)).toBeInTheDocument();
  });

  test('filling Name Field', async () => {
    const { getByTestId } = render(<App />);
    const fieldElement = getByTestId('name');
    expect(fieldElement).toBeInTheDocument();

    expect(fieldElement).toHaveValue('');
    await act(async () => {
      fireEvent.change(fieldElement, {
        target: { value: 'Username' },
      });
    });
    expect(fieldElement).toHaveValue('Username');
  });
});

describe('Check Surname Field', () => {
  test('Surname Field render', () => {
    const { getByTestId, getByPlaceholderText } = render(<App />);
    const fieldElement = getByTestId('surname');

    expect(fieldElement).toBeInTheDocument();
    expect(getByPlaceholderText(/^Surname/i)).toBeInTheDocument();
  });

  test('filling Surname Field', async () => {
    const { getByTestId } = render(<App />);
    const fieldElement = getByTestId('surname');
    expect(fieldElement).toBeInTheDocument();

    expect(fieldElement).toHaveValue('');
    await act(async () => {
      fireEvent.change(fieldElement, {
        target: { value: 'User Surname' },
      });
    });
    expect(fieldElement).toHaveValue('User Surname');
  });
});

describe('Check Phone Field', () => {
  test('Phone Field render', () => {
    const { getByTestId } = render(<App />);
    const fieldElement = getByTestId('phone');

    expect(fieldElement).toBeInTheDocument();
  });

  test('filling Phone Field', async () => {
    const { getByTestId } = render(<App />);
    const fieldElement = getByTestId('phone');
    expect(fieldElement).toBeInTheDocument();

    expect(fieldElement).toHaveValue('');
    await act(async () => {
      fireEvent.change(fieldElement, {
        target: { value: 1234567891 },
      });
    });
    expect(fieldElement).toHaveValue('1234567891');
  });
});
describe('Check Error Message Field', () => {
  test('Phone Field render', () => {
    const props = {
      name: 'surname',
      value: 'value',
      handleChange: () => {},
      maxLength: 0,
      minLength: 0,
      type: 'type',
      handleBlur: () => {},
      touched: { surname: 'touched name' },
      errors: { surname: 'errors name' },
    };
    const { getByTestId } = render(<DataField {...props} />);
    const fieldElement = getByTestId('surname');

    expect(fieldElement).toBeInTheDocument();
  });
});
