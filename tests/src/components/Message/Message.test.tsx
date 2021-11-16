import { Message } from '../../../../src/components/Message';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('Check Card', () => {
  test('Card render', () => {
    const { getByTestId } = render(<Message />);
    const fieldElement = getByTestId('message');
    expect(fieldElement).toBeInTheDocument();
  });
});
