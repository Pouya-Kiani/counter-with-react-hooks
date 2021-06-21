import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

import inputValueReducer from '../reducers/inputValueReducer';

const Input = React.memo((props) => {
  const { id, label, value, onBlur, error, touched } = props;
  const [inputValue, setInputValue] = useReducer(inputValueReducer, value);

  useEffect(() => {
    if (error && error.length > 0) setInputValue(value);
    if (value && value !== inputValue) setInputValue(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, value]);

  return (
    <div className="input-wrapper">
      <label className="counter-interval-label" htmlFor={id}>
        {label}
      </label>
      <input
        className="counter-interval"
        id={id}
        value={inputValue}
        onChange={setInputValue}
        onBlur={onBlur}
      />
      {error && touched && <div className="error">{error}</div>}
    </div>
  );
});

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onBlur: PropTypes.func.isRequired,
  error: PropTypes.string,
  touched: PropTypes.bool,
};

Input.defaultProps = {
  id: 'number-input',
  label: null,
  value: '',
  error: '',
  touched: false,
};

export default Input;
