// useAsync: A hook for handling promises.
import { useState, useEffect, useCallback } from 'react';

const useAsync = (asyncFunction, immediate = true) => {
  const [status, setStatus] = useState('idle');
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  // The execute function wraps asyncFunction and 
  // handles setting state for pending, value, and error
  const execute = useCallback(() => {
    setStatus('pending');
    setValue(null);
    setError(null);

    return asyncFunction()
      .then(response => {
        setValue(response);
        setStatus('success');
      })
      .catch(error => {
        setError(error);
        setStatus('error');
      });
  }, [asyncFunction]);

  // Execute the function immediately if immediate is set to true
  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, value, error };
};

export default useAsync;


// example use
// import React, { useCallback } from 'react';
// import useAsync from './useAsync';

// const MyComponent = () => {
//   const asyncFunction = useCallback(() => {
//     return fetch('https://api.example.com/data')
//       .then(res => res.json());
//   }, []);

//   const { execute, status, value, error } = useAsync(asyncFunction, true);

//   return (
//     <div>
//       {status === 'idle' && <div>Start your journey by clicking a button</div>}
//       {status === 'pending' && <div>Loading...</div>}
//       {status === 'success' && <div>{JSON.stringify(value)}</div>}
//       {status === 'error' && <div>Error: {error}</div>}
//       <button onClick={execute} disabled={status === 'pending'}>
//         Reload
//       </button>
//     </div>
//   );
// };

// export default MyComponent;
