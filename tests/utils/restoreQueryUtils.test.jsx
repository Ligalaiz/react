import { restoreQueryUtils } from '../../src/utils/restoreQuery.utils';

let entries;
let searchParams;
let setSearchParams;
let requestData;

describe('restoreQueryUtils return query string', () => {
  beforeEach(() => {
    entries = jest.fn().mockReturnValue([
      ['searchRequest', 'test'],
      ['pageNumber', '1'],
      ['pageSize', '1'],
      ['sortType', 'relevancy'],
    ]);
    searchParams = { entries };
    setSearchParams = jest.fn();
    requestData = {
      searchRequest: 'test',
      pageNumber: '1',
      pageSize: '1',
      sortType: 'relevancy',
    };
  })
  it('get query string from query', () => {
    const search = true;

    restoreQueryUtils({ searchParams, search, setSearchParams, requestData });
    expect(entries).toHaveBeenCalledTimes(1);
    expect(setSearchParams).toHaveBeenCalledTimes(1);
  });

  it('get query string from default data', () => {
    const search = false;

    restoreQueryUtils({ searchParams, search, setSearchParams, requestData });
    expect(setSearchParams).toHaveBeenCalledTimes(1);
  });
});
