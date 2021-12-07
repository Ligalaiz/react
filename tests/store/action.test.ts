import { fetchNews } from '../../src/store/action/news';
import { articles } from '../data';

let url;
let pageSize;
let set;

let dispatch;
let requestFunc;
const OLD_ENV = process.env;

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
  jest.resetModules();
  process.env = { ...OLD_ENV };
  url = 'https://teat.com';
  pageSize = 10;
  set = jest.fn();
  dispatch = jest.fn();
  requestFunc = fetchNews(url);
});

afterAll(() => {
  process.env = OLD_ENV;
});

describe('Fetch request', () => {
  it('get data', async () => {
    const fakeData = {
      status: 'ok',
      articles,
      json: async () => ({ success: true }),
    };
    process.env.API_KEY = '123456789';
    global.fetch = jest.fn().mockImplementation(setupFetchStub(fakeData));

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
