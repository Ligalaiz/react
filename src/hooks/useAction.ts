import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '@src/store/action';

const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(Actions, dispatch);
};
export { useAction };
