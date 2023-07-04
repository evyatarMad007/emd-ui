interface LocalStorageValue<T> {
    storedValue: T;
    setValue: (value: T | ((val: T) => T)) => void;
}
declare const useLocalStorage: <T>(key: string, initialValue: T) => LocalStorageValue<T>;
export default useLocalStorage;
