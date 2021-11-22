// @ts-nocheck
import { App } from '../../../../src/components/App';
import { PageSize } from '../../../../src/components/PageSize';
import { PageNumber } from '../../../../src/components/PageNumber';
import { PageTotal } from '../../../../src/components/PageTotal';
import '@testing-library/jest-dom';
import { render, fireEvent, act, screen } from '@testing-library/react';

describe('Check PageBar component', () => {
  test('Render PageBar', () => {
    const { getByTestId } = render(<App />);

    const pageSize = getByTestId('pageSize');
    const pageNumber = getByTestId('pageNumber');
    const pageTotal = getByTestId('pageTotal');

    expect(pageSize).toBeInTheDocument();
    expect(pageNumber).toBeInTheDocument();
    expect(pageTotal).toBeInTheDocument();
  });

  test('Check PageSize', async () => {
    const { getByTestId, getAllByTestId } = render(<App />);
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
      <PageSize pageSize={pageSize} setPageSize={setPageSize} />,
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
      <PageNumber
        pageTotal={pageTotal}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />,
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
