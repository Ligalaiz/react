import { getLocalDataUtils } from '../../../src/utils';

describe('getLocalDataUtils return data from localStorage', () => {
  it('get same structure', () => {
    const hits = {
      searchRequest: 'test',
      pageNumber: 2,
      pageSize: 1,
      sortType: 'relevancy',
    };

    const result = getLocalDataUtils(hits);
    expect(result).toEqual(hits);
    expect(result).not.toBeUndefined();

    const resultWithLocalData = getLocalDataUtils(hits, hits);
    expect(resultWithLocalData).toEqual(hits);
    expect(resultWithLocalData).not.toBeUndefined();
  });
});
