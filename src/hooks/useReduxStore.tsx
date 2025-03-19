import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {AppDispatch, RootState} from '../redux/reducer';

const useReduxStore = () => {
  const dispatch = useDispatch<AppDispatch>();

  const getState = <T extends keyof RootState>(key: T): RootState[T] =>
    useSelector((state: RootState) => state[key], shallowEqual); // Select only the required state slice

  return {dispatch, getState};
};

export default useReduxStore;
