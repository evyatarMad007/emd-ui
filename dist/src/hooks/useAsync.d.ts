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
declare const useAsync: <T>(asyncFunction: () => Promise<T>, immediate?: boolean) => UseAsyncReturn<T>;
export default useAsync;
