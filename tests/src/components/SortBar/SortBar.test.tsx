import { Search } from '../../../../src/components/Search/components/Search';
import { SortBar } from '../../../../src/components/Search/components/SortBar';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

describe('Check SortBar component', () => {
  test('Render SortBar', () => {
    const { getByTestId } = render(
      <Router>
        <Search />
      </Router>,
    );

    const sortBtnLeft = getByTestId('sortBtnLeft');
    const sortBtnCenter = getByTestId('sortBtnCenter');
    const sortBtnRight = getByTestId('sortBtnRight');

    expect(sortBtnLeft).toBeInTheDocument();
    expect(sortBtnCenter).toBeInTheDocument();
    expect(sortBtnRight).toBeInTheDocument();
  });

  test('Render SortBar', () => {
    const setSortType = jest.fn();
    const { getByTestId } = render(
      <Router>
        <SortBar sortType="relevancy" setSortType={setSortType} />
      </Router>,
    );

    const sortBtnLeft = getByTestId('sortBtnLeft');
    const sortBtnCenter = getByTestId('sortBtnCenter');
    const sortBtnRight = getByTestId('sortBtnRight');

    fireEvent.click(sortBtnLeft);
    fireEvent.click(sortBtnCenter);
    fireEvent.click(sortBtnRight);

    expect(setSortType).toHaveBeenCalledTimes(3);
  });
});
