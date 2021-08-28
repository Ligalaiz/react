import {
  pageNumberReducer,
  pageNumberAction,
} from '../../src/store/pageNumberReducer';

describe('Page Number Reducer', () => {
  it('Action with data', () => {
    const result = pageNumberReducer(undefined, pageNumberAction('100'));
    expect(result.pageNumber).toEqual('100');
  });

  it('Action without data', () => {
    const result = pageNumberReducer(undefined, pageNumberAction(''));
    expect(result.pageNumber).toEqual('');
  });
});
