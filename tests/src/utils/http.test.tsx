// @ts-nocheck
import { http } from '../../../src/utils';

const originalFetch = global.fetch;
const data = {
  method: 'GET',
  headers: {
    'x-api-key': `${process.env.API_KEY}`,
  },
};

describe('test', () => {
  afterEach(() => {
    global.fetch = originalFetch;
  });
  test('check test', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({

        json: () => Promise.resolve({status: 'ok', result: { test: 123 }}),
      }),
    );
    const response = await http('http://test.com', data);
    expect(response).toEqual({status: 'ok', result: { test: 123 }});
  });
});
