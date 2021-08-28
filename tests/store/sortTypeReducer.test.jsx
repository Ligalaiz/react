import {
  sortTypeReducer,
  sortTypeAction,
} from '../../src/store/sortTypeReducer';

describe('Sort Type Reducer', () => {
  it('Action with data', () => {
    const result = sortTypeReducer(undefined, sortTypeAction('popularity'));
    expect(result.sortType).toEqual('popularity');
  });

  it('Action without data', () => {
    const result = sortTypeReducer(undefined, sortTypeAction(''));
    expect(result.sortType).toEqual('');
  });
});
