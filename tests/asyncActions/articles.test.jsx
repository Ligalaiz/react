import { fetchArticles } from '../../src/asyncActions/articles';
import { articles } from '../data';

let url;
let pageSize;

function setupFetchStub(fakeData) {
  return function fetchStub() {
    return new Promise((resolve) => {
      resolve({
        json: () => Promise.resolve(fakeData),
      });
    });
  };
}

function setupFetchStubError() {
  return function fetchStub() {
    return new Promise(() => {
      throw Error('error');
    });
  };
}

beforeEach(() => {
  url = 'https://teat.com';
  pageSize = 10;
});

describe('Fetch request', () => {
  it('get data', async () => {
    const fakeData = {
      status: 'ok',
      articles,
      json: async () => ({ success: true }),
    };
    global.fetch = jest.fn().mockImplementation(setupFetchStub(fakeData));
    const dispatch = jest.fn();
    const requestFunc = fetchArticles({ url, pageSize });
    await requestFunc(dispatch);
    expect(window.fetch).toHaveBeenCalledTimes(1);

    global.fetch.mockClear();
    delete global.fetch;
  });

  it('get error with wrong status', async () => {
    const fakeData = {
      status: 'notOk',
      articles,
      message: 'error',
      json: async () => ({ success: true }),
    };
    global.fetch = jest.fn().mockImplementation(setupFetchStub(fakeData));
    const dispatch = jest.fn();
    const requestFunc = fetchArticles({ url, pageSize });

    try {
      await requestFunc(dispatch);
    } catch (e) {
      expect(e.message).toBe('error');
    }
    expect(window.fetch).toHaveBeenCalledTimes(1);

    global.fetch.mockClear();
    delete global.fetch;
  });

  it('get error with wrong data', async () => {
    global.fetch = jest.fn().mockImplementation(setupFetchStubError());
    const dispatch = jest.fn();
    const requestFunc = fetchArticles({ url, pageSize });

    try {
      await requestFunc(dispatch);
    } catch (e) {
      expect(e.message).toBe("Cannot read property 'json' of undefined");
    }
    expect(window.fetch).toHaveBeenCalledTimes(1);

    global.fetch.mockClear();
    delete global.fetch;
  });
});
