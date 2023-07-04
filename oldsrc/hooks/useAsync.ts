import { useState, useEffect, useCallback } from 'react';

interface AsyncState<T> {
  status: 'idle' | 'pending' | 'success' | 'error';
  value: T | null;
  error: any;
}

interface UseAsyncReturn<T> {
  execute: () => Promise<void>;
  status: AsyncState<T>['status'];
  value: AsyncState<T>['value'];
  error: AsyncState<T>['error'];
}

const useAsync = <T>(asyncFunction: () => Promise<T>, immediate = true): UseAsyncReturn<T> => {
  const [status, setStatus] = useState<AsyncState<T>['status']>('idle');
  const [value, setValue] = useState<AsyncState<T>['value']>(null);
  const [error, setError] = useState<AsyncState<T>['error']>(null);

  const execute = useCallback(async () => {
    setStatus('pending');
    setValue(null);
    setError(null);

    try {
      const response = await asyncFunction();
      setValue(response);
      setStatus('success');
    } catch (error) {
      setError(error);
      setStatus('error');
    }
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, value, error };
};

export default useAsync;
