import { get } from '@root/utils';

const authCheckUtils = (user) => {
  let localState = get('user');
  console.log(localState);
  console.log('user', user);

  if (localState) {
    // localState = Boolean(JSON.parse(localState));
    localState = true;
  } else {
    localState = false;
  }
  console.log('status', Boolean(user || localState));
  return user || localState;
};

export { authCheckUtils };
