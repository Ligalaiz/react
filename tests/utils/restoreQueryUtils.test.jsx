import restoreQueryUtils from '../../src/utils/restoreQuery.utils';

describe('restoreQueryUtils return query string', () => {
  it('get query string from query', () => {
    const search =
      '?searchRequest=test&pageNumber=1&pageSize=1&sortType=relevancy';
    const router = [];

    restoreQueryUtils({ search, router });
    expect(router[0]).toEqual(
      '?searchRequest=test&pageNumber=1&pageSize=1&sortType=relevancy',
    );
  });

  it('get query string from default data', () => {
    const requestData = {
      searchRequest: 'test',
      pageNumber: '1',
      pageSize: '1',
      sortType: 'relevancy',
    };
    const search = null;
    const router = [];

    restoreQueryUtils({ router, requestData, search });
    expect(router[0]).toEqual(
      '?searchRequest=test&pageNumber=1&pageSize=1&sortType=relevancy',
    );
  });
});
