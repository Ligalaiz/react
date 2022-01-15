import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Contacts } from '../../../src/components/contacts/contacts';

describe('Contacts', () => {
  it('renders Contacts component', () => {
    const { getByAltText } = render(<Contacts />);

    expect(getByAltText(/RSschool/i)).toBeInTheDocument();
  });
});
