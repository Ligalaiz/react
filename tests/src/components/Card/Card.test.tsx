import { Card } from '../../../../src/components/Card';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('Check Card', () => {
  test('Card render', () => {
    const card = {
      fileCV: [{ name: 'test fileCV' }],
      letter: [{ name: 'test fileCV' }],
      task: [{ name: 'test fileCV' }],
      portfolio: [{ name: 'test fileCV' }],
      name: 'test name',
      surname: 'test surname',
      birthday: 'test birthday',
      experience: 'test junior',
      phone: 'test 1234567890',
      agreement: true,
    };
    const { getByTestId } = render(<Card card={card} index={0} />);
    const fieldElement = getByTestId('card');
    expect(fieldElement).toBeInTheDocument();
  });
});
