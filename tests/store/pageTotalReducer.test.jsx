import {
  pageTotalReducer,
  pageTotalAction,
} from '../../src/store/pageTotalReducer';

describe('Page Total Reducer', () => {
  it('Action with data', () => {
    const result = pageTotalReducer(undefined, pageTotalAction(1));
    expect(result.pageTotal).toEqual(1);
  });

  it('Action without data', () => {
    const result = pageTotalReducer(undefined, pageTotalAction(null));
    expect(result.pageTotal).toEqual(null);
  });
});
