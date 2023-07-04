import { useState, useEffect } from 'react';
/**
 * Custom hook for debouncing any fast changing value. The debounced value will
 * only reflect the latest value when the useDebounce hook has not been called
 * for the specified time period.
 *
 * @param value - value to be debounced
 * @param delay - debounce delay in milliseconds
 */
function useDebounce(value, delay) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        // Set debouncedValue to value (passed in) after the specified delay
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        // Return a cleanup function that will be called every time
        // useEffect is re-called. useEffect will only be re-called
        // if value or delay changes (see the inputs array below).
        // This is how we prevent debouncedValue from changing if value is
        // changed within the delay period. Timeout gets cleared and restarted.
        return () => {
            clearTimeout(handler);
        };
    }, 
    // Only re-call effect if value or delay changes
    [value, delay]);
    return debouncedValue;
}
export default useDebounce;
// example usage
// import useDebounce from './useDebounce';
// // ...
// const searchTerm = 'query'; // this could come from state or props
// const debouncedSearchTerm = useDebounce(searchTerm, 500);
// useEffect(() => {
//   if (debouncedSearchTerm) {
//     // Perform the search here. debouncedSearchTerm will only contain the
//     // latest value of searchTerm if the searchTerm has not been updated
//     // within the last 500ms.
//   }
// }, [debouncedSearchTerm]);
