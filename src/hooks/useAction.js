import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  newsRequest,
  loginRequest,
  signUpRequest,
  signOutRequest,
} from '@root/module';
import { newsActions, authActions } from '@root/store/reducer';

const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      newsRequest,
      loginRequest,
      signUpRequest,
      signOutRequest,
      ...newsActions,
      ...authActions,
    },
    dispatch,
  );
};

export { useAction };
