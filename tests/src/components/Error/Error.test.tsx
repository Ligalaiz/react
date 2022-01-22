import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Error } from '../../../../src/components/Error';

describe('Error', () => {
  it('Render Error component', () => {
    const { getByAltText } = render(<Error />);

    expect(getByAltText(/octopus/i)).toBeInTheDocument();
    expect(getByAltText(/spaceship/i)).toBeInTheDocument();
    expect(getByAltText(/circle/i)).toBeInTheDocument();
    expect(getByAltText(/shadow/i)).toBeInTheDocument();
  });
});
