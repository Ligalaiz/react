import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { TypedReducer } from '../store/reducer';

const useTypedUseSelector: TypedUseSelectorHook<TypedReducer> = useSelector;

export { useTypedUseSelector };
