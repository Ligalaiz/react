import { App } from '../../../../src/components/App';
import { SortBar } from '../../../../src/components/SortBar';
import '@testing-library/jest-dom';
import { render, fireEvent, act, screen } from '@testing-library/react';

describe('Check SortBar component', () => {
  test('Render SortBar', () => {
    const { getByTestId } = render(<App />);

    const sortBtnLeft = getByTestId('sortBtnLeft');
    const sortBtnCenter = getByTestId('sortBtnCenter');
    const sortBtnRight = getByTestId('sortBtnRight');

    expect(sortBtnLeft).toBeInTheDocument();
    expect(sortBtnCenter).toBeInTheDocument();
    expect(sortBtnRight).toBeInTheDocument();
  });

  test('Render SortBar', () => {
    const setSortType = jest.fn();
    const { getByTestId } = render(<SortBar
      sortType='relevancy'
      setSortType={setSortType}
      />);

    const sortBtnLeft = getByTestId('sortBtnLeft');
    const sortBtnCenter = getByTestId('sortBtnCenter');
    const sortBtnRight = getByTestId('sortBtnRight');

    fireEvent.click(sortBtnLeft);
    fireEvent.click(sortBtnCenter);
    fireEvent.click(sortBtnRight);

    expect(setSortType).toHaveBeenCalledTimes(3)
  });
});
