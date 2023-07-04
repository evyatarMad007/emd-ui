interface FetchResult<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
}
declare const useFetch: <T>(url: string, options: RequestInit) => FetchResult<T>;
export default useFetch;
