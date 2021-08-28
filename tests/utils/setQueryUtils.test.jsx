import setQueryUtils from '../../src/utils/setQuery.utils';

describe('setQueryUtils return query string', () => {
  it('get query string with new param', () => {
    const search =
      '?searchRequest=test&pageNumber=1&pageSize=1&sortType=relevancy';
    const param = 'searchRequest';
    const paramValue = 'epam';
    const router = [];

    setQueryUtils({ search, router, param, paramValue });
    expect(router[0]).toEqual(
      '?searchRequest=epam&pageNumber=1&pageSize=1&sortType=relevancy',
    );
  });

  it('get query string without new param', () => {
    const search =
      '?searchRequest=test&pageNumber=1&pageSize=1&sortType=relevancy';
    const router = [];

    setQueryUtils({ search, router });
    expect(router[0]).toEqual(
      '?searchRequest=test&pageNumber=1&pageSize=1&sortType=relevancy&=',
    );
  });
});
