import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newsRequest } from '@root/module';
import { newsActions } from '@root/store/reducer';

const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators({ newsRequest, ...newsActions }, dispatch);
};

export { useAction };
