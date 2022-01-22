import { Contacts } from '../../../../src/components/Contacts';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('Check SortBar component', () => {
  test('Render SortBar', () => {
    const { getByTestId } = render(
      <Router>
        <Contacts />
      </Router>,
    );

    const imgElement = getByTestId('rsschool');
    expect(imgElement).toBeInTheDocument();
  });
});
