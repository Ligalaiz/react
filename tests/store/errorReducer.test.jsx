import { errorReducer, addErrorAction } from '../../src/store/errorReducer';

describe('Error Reducer', () => {
  it('True Action', () => {
    const result = errorReducer(undefined, addErrorAction(true));
    expect(result.error).toEqual(true);
  });
  it('False Action', () => {
    const result = errorReducer(undefined, addErrorAction(null));
    expect(result.error).toEqual(null);
  });
});
