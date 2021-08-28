import getUrlUtils from '../../src/utils/getUrl.utils';

describe('getUrlUtils return url string', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  it('get url', () => {
    process.env.BASE_PATH = 'https://newsapi.org/v2';
    process.env.SEARCH_PATH = '/everything';
    process.env.SEARCH_PARAM = 'q=';
    process.env.SEARCH_FROM = 'from=';
    process.env.SEARCH_PAGE_SIZE = 'pageSize=';
    process.env.SEARCH_SORT = 'sortBy=';
    process.env.SEARCH_PAGE_NUMBER = 'page=';
    process.env.SEARCH_API_KEY = 'apiKey=';
    process.env.API_KEY = '123456789';

    const hits = {
      searchRequest: 'test',
      pageNumber: 2,
      pageSize: 1,
      sortType: 'relevancy',
    };
    const testDate = '2021-10-10';
    const compareStr = `https://newsapi.org/v2/everything?q=test&from=${testDate}&pageSize=1&sortBy=relevancy&page=2&apiKey=123456789`;
    const result = getUrlUtils(hits, testDate);

    expect(result).toEqual(compareStr);
    expect(result).not.toBeUndefined();
  });
});
