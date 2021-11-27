export const delayUtils = async <T,>(response: T): Promise<T> =>
  new Promise((res) => {
    setTimeout(() => res(response), 1500);
  });
