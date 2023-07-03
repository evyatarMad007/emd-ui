// useLocalStorage: A hook to interface with local storage.
import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  // State to store our value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;


// example use
// import React from 'react';
// import useLocalStorage from './useLocalStorage';

// const MyComponent = () => {
//   const [name, setName] = useLocalStorage('name', 'Bob');

//   return (
//     <div>
//       <p>Hello, {name}</p>
//       <input 
//         type="text" 
//         value={name} 
//         onChange={e => setName(e.target.value)}
//       />
//     </div>
//   );
// };

// export default MyComponent;
