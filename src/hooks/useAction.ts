import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newsRequest } from '@src/module';
import { newsActions } from '@src/store/reducer';

const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators({ newsRequest, ...newsActions }, dispatch);
};
export { useAction };
