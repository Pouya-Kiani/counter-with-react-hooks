import React, { useCallback, useState } from 'react';
// custom hooks
import useCounter from './hooks/useCounter';
import useError from './hooks/useError';
import useCounterInterval from './hooks/useCounterInterval';
// components
import Input from './components/Input';
import Button from './components/Button';

import './App.css';

const App = React.memo(() => {
  const [isRunning, setIsRunning] = useState(false);
  const { intervalValue, increase, decrease, setValue } = useCounterInterval();
  const { counterValue, resetCounter } = useCounter(intervalValue, isRunning);
  const { error, setError, touched } = useError();

  const handleFieldBlur = useCallback(
    ({ target }) => {
      const value = parseInt(target.value, 10);
      if (!value || value <= 0) {
        setError('Invalid input...');
        return;
      }
      setValue(value);
    },
    [setError, setValue]
  );

  const handleReset = useCallback(() => {
    setIsRunning(false);
    resetCounter();
  }, [resetCounter]);

  return (
    <div className="App">
      <div className="app-wrapper">
        <h1 className="counter-value">{counterValue}</h1>
        <div className="counter-interval-wrapper">
          <Button
            className="in-form decrease"
            name="decrease"
            label="-"
            handleClick={() => decrease()}
          />
          <Input
            id="input-value"
            className="counter-interval-input"
            label="Counter Interval"
            error={error}
            touched={touched}
            value={intervalValue}
            onBlur={handleFieldBlur}
          />
          <Button
            className="in-form increase"
            name="increase"
            label="+"
            handleClick={() => increase()}
          />
        </div>
        <div className="action-buttons-wrapper">
          <button
            className="action-button start"
            type="button"
            name="start-stop"
            onClick={() => setIsRunning(!isRunning)}
          >
            {isRunning ? 'stop' : 'start'}
          </button>
          <button
            className="action-button reset"
            disabled={counterValue === 0}
            type="button"
            name="reset"
            onClick={() => handleReset()}
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
});

export default App;
