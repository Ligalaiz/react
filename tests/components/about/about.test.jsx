import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { About } from '../../../src/components/about/about';

describe('About', () => {
  it('Render about component', () => {
    const { getByText, getAllByText } = render(<About />);

    expect(getAllByText(/Metaeducation/i)).toHaveLength(2);
    expect(getByText(/Creative/i)).toBeInTheDocument();
  });
});
