import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newsActions, authActions } from '@root/store/reducer';
import {
  newsRequestAction,
  loginRequestAction,
  signUpRequestAction,
  signOutRequestAction,
} from '@root/saga';

const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      newsRequestAction,
      loginRequestAction,
      signUpRequestAction,
      signOutRequestAction,
      ...newsActions,
      ...authActions,
    },
    dispatch,
  );
};

export { useAction };
