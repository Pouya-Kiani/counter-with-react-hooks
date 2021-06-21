const inputValueReducer = (_state, input) => {
  // this reducer can either be called directly or used as an input event callback function.
  const value = input?.target?.value || input;
  return parseInt(value, 10) || '';
};

export default inputValueReducer;
