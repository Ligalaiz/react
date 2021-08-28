import delayUtils from '../../src/utils/delay.utils';

describe('Delay utils', () => {
  it('Compare timers', async () => {
    const timer = delayUtils;
    const result = await timer('data');

    jest.useFakeTimers();

    setTimeout(() => {
      expect(result).toBe('data');
    }, 1500);

    jest.runAllTimers();
  });
});
