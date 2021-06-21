import { useState, useEffect } from 'react';

function useError(timeout = 3000) {
  const [error, setError] = useState(null);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (!error || error === '') return undefined;
    setTouched(true);
    const errorTimeout = setTimeout(() => {
      setError(null);
    }, timeout);
    return () => clearTimeout(errorTimeout);
  }, [error, timeout]);

  return { error, setError, touched, setTouched };
}

export default useError;
