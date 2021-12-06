import { getUrlUtils, data } from '../../src/utils/getUrl.utils';

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
    process.env.BASE_PATH = 'https://api.newscatcherapi.com/v2';
    process.env.SEARCH_PATH = '/search';
    process.env.SEARCH_PARAM = 'q=';
    process.env.SEARCH_PAGE_SIZE = 'page_size=';
    process.env.SEARCH_SORT = 'sort_by=';
    process.env.SEARCH_PAGE_NUMBER = 'page=';

    const hits = {
      searchRequest: 'test',
      pageNumber: 2,
      pageSize: 1,
      sortType: 'relevancy',
    };

    const compareStr = `https://api.newscatcherapi.com/v2/search?q=test&page_size=1&sort_by=relevancy&page=2`;
    const result = getUrlUtils(hits);

    expect(result).toEqual(compareStr);
    expect(result).not.toBeUndefined();
  });

  it('get header data', () => {
    process.env.API_KEY = '123456789';
    const result = data();

    expect(result).toEqual({
      method: 'GET',
      headers: {
        'x-api-key': '123456789',
      },
    });
    expect(result).not.toBeUndefined();
  });
});
