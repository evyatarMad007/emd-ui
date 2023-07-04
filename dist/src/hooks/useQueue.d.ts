type Queue<T> = {
    enqueue: (item: T) => void;
    dequeue: () => T | undefined;
    size: () => number;
    isEmpty: () => boolean;
    peek: () => T | undefined;
};
/**
 * Custom hook to create and manage a queue
 */
declare function useQueue<T>(): Queue<T>;
export default useQueue;
