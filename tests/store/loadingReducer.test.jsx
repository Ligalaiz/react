import {
  loadingReducer,
  addLoadingAction,
} from '../../src/store/loadingReducer';

describe('Loading Reducer', () => {
  it('True Action', () => {
    const result = loadingReducer(undefined, addLoadingAction(true));
    expect(result.loading).toEqual(true);
  });

  it('False Action', () => {
    const result = loadingReducer(undefined, addLoadingAction(false));
    expect(result.loading).toEqual(false);
  });
});
