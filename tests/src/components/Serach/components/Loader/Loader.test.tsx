import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Loader } from '../../../../../../src/components/Search/components/Loader';

describe('Loader', () => {
  it('Render Loader component', () => {
    const { getByTestId } = render(<Loader />);

    expect(getByTestId('loader')).toBeInTheDocument();
    expect(getByTestId('loader')).toHaveClass('loader');
  });
});
