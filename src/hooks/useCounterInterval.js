import { useReducer, useCallback } from 'react';

const useCounterInterval = () => {
  const intervalValueReducer = (state, action) => {
    switch (action.type) {
      case 'SET':
        return action.payload;
      case 'INCREASE':
        return state + action.payload;
      case 'DECREASE':
        return state - action.payload;
      default:
        return state;
    }
  };
  const [intervalValue, dispatch] = useReducer(intervalValueReducer, 1000);

  const increase = useCallback(
    (increaseAmount = 10) => {
      dispatch({ type: 'INCREASE', payload: increaseAmount });
    },
    [dispatch]
  );

  const decrease = useCallback(
    (increaseAmount = 10) => {
      dispatch({ type: 'DECREASE', payload: increaseAmount });
    },
    [dispatch]
  );

  const setValue = useCallback(
    (value = 10) => {
      dispatch({ type: 'SET', payload: value });
    },
    [dispatch]
  );

  return { intervalValue, increase, decrease, setValue };
};

export default useCounterInterval;
