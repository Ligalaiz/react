import { get } from '@root/utils';

const authCheckUtils = (user) => {
  const localState = get('user');

  return Boolean(user) || Boolean(localState);
};

export { authCheckUtils };
