import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Button = React.memo((props) => {
  const { name, label, className, handleClick } = props;

  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (!isClicked) return undefined;
    const buttonInterval = setInterval(handleClick, 100);
    return () => {
      clearInterval(buttonInterval);
    };
  }, [handleClick, isClicked]);

  return (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <button
      className={`button${className && ` ${className}`}`}
      type="button"
      name={name}
      onClick={handleClick}
      onMouseDown={() => {
        setIsClicked(true);
      }}
      onMouseUp={() => {
        setIsClicked(false);
      }}
      onMouseOut={() => {
        setIsClicked(false);
      }}
    >
      {label}
    </button>
  );
});

Button.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  name: '',
  label: '',
  className: null,
};
export default Button;
