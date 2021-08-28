import {
  searchRequestReducer,
  searchRequestAction,
} from '../../src/store/searchRequestReducer';

describe('Search Request Reducer', () => {
  it('Action with data', () => {
    const result = searchRequestReducer(undefined, searchRequestAction('100'));
    expect(result.searchRequest).toEqual('100');
  });

  it('Action without data', () => {
    const result = searchRequestReducer(undefined, searchRequestAction(''));
    expect(result.searchRequest).toEqual('');
  });
});
