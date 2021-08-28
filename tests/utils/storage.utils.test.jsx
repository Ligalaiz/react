import { get, set, del } from '../../src/utils/storage.utils';

describe('storageUtils', () => {
  it('return data from localStorage', () => {
    const KEY = 'foo';
    const VALUE = 'bar';
    get(KEY);
    set(KEY, VALUE);
    del(KEY);

    expect(localStorage.getItem).toHaveBeenLastCalledWith(KEY);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, `${'"bar"'}`);
    expect(localStorage.removeItem).toHaveBeenLastCalledWith(KEY);
  });
});
