/**
 * Custom hook for debouncing any fast changing value. The debounced value will
 * only reflect the latest value when the useDebounce hook has not been called
 * for the specified time period.
 *
 * @param value - value to be debounced
 * @param delay - debounce delay in milliseconds
 */
declare function useDebounce<T>(value: T, delay: number): T;
export default useDebounce;
