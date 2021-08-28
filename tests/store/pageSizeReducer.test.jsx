import {
  pageSizeReducer,
  pageSizeAction,
} from '../../src/store/pageSizeReducer';

describe('Page Size Reducer', () => {
  it('Action with data', () => {
    const result = pageSizeReducer(undefined, pageSizeAction('100'));
    expect(result.pageSize).toEqual('100');
  });

  it('Action without data', () => {
    const result = pageSizeReducer(undefined, pageSizeAction(''));
    expect(result.pageSize).toEqual('');
  });
});
