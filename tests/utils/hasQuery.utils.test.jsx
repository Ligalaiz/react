import hasQueryUtils from '../../src/utils/hasQuery.utils';

describe('hasQueryUtils return query string', () => {
  it('get query string', () => {
    const queries =
      '?searchRequest=test&pageNumber=1&pageSize=1&sortType=relevancy';
    const param = 'searchRequest';
    const result = hasQueryUtils(queries, param);

    expect(result).toEqual('test');
    expect(result).not.toBeUndefined();
  });
});
