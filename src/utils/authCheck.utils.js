import { get } from '@root/utils';

const authCheckUtils = (user) => {
  let localState = get('user');

  return Boolean(user) || Boolean(localState);
};

export { authCheckUtils };
