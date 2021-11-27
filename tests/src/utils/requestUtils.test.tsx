// @ts-nocheck
import { requestUtils } from '../../../src/utils';

const originalFetch = global.fetch;
const data = {
  method: 'GET',
  headers: {
    'x-api-key': `${process.env.API_KEY}`,
  },
};
const setItems = jest.fn();

describe('test', () => {
  afterEach(() => {
    global.fetch = originalFetch;
  });
  test('check test', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ status: 'ok', articles: [{ test: 123 }] }),
      }),
    );
    const response = await requestUtils({
      setItems,
      url: 'http://test.com',
      data,
    });
    expect(response).toEqual({ status: 'ok', articles: [{ id: '0', test: 123 }] });
  });
});
