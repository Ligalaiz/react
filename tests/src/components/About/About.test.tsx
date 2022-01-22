import { About } from '../../../../src/components/About';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('Check SortBar component', () => {
  test('Render SortBar', () => {
    const { getByTestId } = render(
      <Router>
        <About />
      </Router>,
    );

    const titleElement = getByTestId('title');
    expect(titleElement).toBeInTheDocument();
  });
});
