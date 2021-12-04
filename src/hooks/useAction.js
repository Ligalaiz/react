import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionsNews from '../store/action'

const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionsNews, dispatch);
};

export { useAction };
