import getQueryUtils from '../../src/utils/getQuery.utils';

describe('getQueryUtils return data from query', () => {
  it('get query', () => {
    const url =
      'https://netlify.app/?searchRequest=test&pageNumber=1&pageSize=1&sortType=relevancy';
    const emptyURl = '';
    const withoutQueryURl = 'https://netlify.app';

    const hits = {
      searchRequest: 'test',
      pageNumber: '1',
      pageSize: '1',
      sortType: 'relevancy',
    };

    const result = getQueryUtils(url);
    expect(result).toEqual(hits);
    expect(result).not.toBeUndefined();

    const resultWithDefaultParam = getQueryUtils(url, hits);
    expect(resultWithDefaultParam).toEqual(hits);
    expect(resultWithDefaultParam).not.toBeUndefined();

    const resultEmptyUrl = getQueryUtils(emptyURl);
    expect(resultEmptyUrl).not.toEqual(hits);
    expect(resultEmptyUrl).not.toBeUndefined();

    const emptyUrlWithDefaultParam = getQueryUtils(emptyURl, hits);
    expect(emptyUrlWithDefaultParam).toEqual(hits);
    expect(emptyUrlWithDefaultParam).not.toBeUndefined();

    const withoutQuery = getQueryUtils(withoutQueryURl);
    expect(withoutQuery).not.toEqual(hits);
    expect(withoutQuery).not.toBeUndefined();

    const withoutQueryWithDefaultParam = getQueryUtils(withoutQueryURl, hits);
    expect(withoutQueryWithDefaultParam).toEqual(hits);
    expect(withoutQueryWithDefaultParam).not.toBeUndefined();
  });
});
