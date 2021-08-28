import { itemsReducer, itemsAction } from '../../src/store/itemsReducer';

describe('Items Reducer', () => {
  let array;
  beforeEach(() => {
    array = [1, 2, 3, 4];
  });

  it('Items with data', () => {
    const result = itemsReducer(undefined, itemsAction(array));
    expect(result.items).toEqual(array);
  });
  it('Empty Items', () => {
    const result = itemsReducer(undefined, itemsAction([]));
    expect(result.items).toEqual([]);
  });
});
