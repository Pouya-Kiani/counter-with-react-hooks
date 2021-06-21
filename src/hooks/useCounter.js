import { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

const useCounter = (interval, isRunning) => {
  const counterReducer = (state, action) => {
    switch (action) {
      case 'UPDATE':
        return state + 1;
      case 'RESET':
        return 0;
      default:
        return state;
    }
  };
  const [counterValue, dispatch] = useReducer(counterReducer, 0);
  // Update counter
  useEffect(() => {
    if (!isRunning) return undefined;
    const timerInterval = setInterval(() => dispatch('UPDATE'), interval);
    return () => {
      clearInterval(timerInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counterValue, isRunning]);

  const resetCounter = () => {
    dispatch('RESET');
  };

  return { counterValue, resetCounter };
};

useCounter.propTypes = {
  interval: PropTypes.number,
  isRunning: PropTypes.bool,
};

export default useCounter;
