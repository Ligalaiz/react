import getDateUtils from '../../src/utils/getDate.utils';

describe('getDateUtils retrun current date', () => {
  it('current date', () => {
    const currentDate = new Date();
    const checkingCurrentDate = new Date(getDateUtils());

    const lesssTenDate = new Date();
    lesssTenDate.setMonth(3);
    lesssTenDate.setDate(3);

    const overTenDate = new Date();
    overTenDate.setMonth(11);
    overTenDate.setDate(14);

    const checkingLessDate = getDateUtils(lesssTenDate).split('-');
    const checkingOverDate = getDateUtils(overTenDate).split('-');

    expect(checkingCurrentDate.getFullYear()).toBe(currentDate.getFullYear());
    expect(checkingCurrentDate.getMonth()).toBe(currentDate.getMonth() - 1);
    expect(checkingCurrentDate.getDate()).toBe(currentDate.getDate());

    expect(checkingLessDate[1]).toHaveLength(2);
    expect(checkingLessDate[2]).toHaveLength(2);

    expect(checkingOverDate[1]).toHaveLength(2);
    expect(checkingOverDate[2]).toHaveLength(2);
  });
});
