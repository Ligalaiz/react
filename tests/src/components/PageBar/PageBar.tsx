// @ts-nocheck
import { Search } from '../../../../src/components/Search/components/Search';
import { PageSize } from '../../../../src/components/Search/components/PageSize';
import { PageNumber } from '../../../../src/components/Search/components/PageNumber';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, fireEvent, act } from '@testing-library/react';

describe('Check PageBar component', () => {
  test('Render PageBar', () => {
    const { getByTestId } = render(
      <Router>
        <Search />
      </Router>,
    );

    const pageSize = getByTestId('pageSize');
    const pageNumber = getByTestId('pageNumber');
    const pageTotal = getByTestId('pageTotal');

    expect(pageSize).toBeInTheDocument();
    expect(pageNumber).toBeInTheDocument();
    expect(pageTotal).toBeInTheDocument();
  });

  test('Check PageSize', async () => {
    const { getByTestId, getAllByTestId } = render(
      <Router>
        <Search />
      </Router>,
    );
    const pageSizeElement = getByTestId('pageSize');
    const options = getAllByTestId('select-option');

    expect(pageSizeElement).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(pageSizeElement, {
        target: { value: '10' },
      });
    });

    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
    expect(options[2].selected).toBeFalsy();
    expect(options[2].selected).toBeFalsy();
  });

  test('Call PageSize handle function', async () => {
    const pageSize = '1';
    const setPageSize = jest.fn();

    const { getByTestId } = render(
      <Router>
        <PageSize pageSize={pageSize} setPageSize={setPageSize} />
      </Router>,
    );
    const pageSizeElement = getByTestId('pageSize');

    expect(pageSizeElement).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(pageSizeElement, {
        target: { value: '10' },
      });
    });

    expect(setPageSize).toHaveBeenCalledTimes(1);
  });

  test('Check PageNumber', async () => {
    const pageTotal = '10';
    const pageNumber = '1';
    const setPageNumber = jest.fn();

    const { getByTestId } = render(
      <Router>
        <PageNumber
          pageTotal={pageTotal}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </Router>,
    );
    const pageNumberElement = getByTestId('pageNumber');

    expect(pageNumberElement).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(pageNumberElement, {
        target: { value: '10' },
      });
    });
    expect(setPageNumber).toHaveBeenCalledTimes(1);
  });
});
