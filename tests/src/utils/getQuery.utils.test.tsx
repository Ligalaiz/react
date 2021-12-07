import { getQueryUtils } from '../../../src/utils';

describe('getQueryUtils return data from query', () => {
  it('get query', () => {
    const get = jest.fn();
    const searchParams = { get };
    const search = 'true';
    const hits = undefined;
    const example = {
      searchRequest: '',
      pageNumber: '',
      pageSize: '',
      sortType: 'relevancy',
    };

    const result = getQueryUtils(search, hits, searchParams);
    expect(get).toHaveBeenCalledTimes(4);
    expect(result).toEqual(example);
  });
});
