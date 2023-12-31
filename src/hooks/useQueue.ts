import { useState } from 'react';

// Define the Queue type
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
function useQueue<T>(): Queue<T> {
  const [queue, setQueue] = useState<T[]>([]);

  const enqueue = (item: T) => {
    setQueue((prevQueue) => [...prevQueue, item]);
  };

  const dequeue = () => {
    let result: T | undefined;
    setQueue((prevQueue) => {
      [result] = prevQueue;
      return prevQueue.slice(1);
    });
    return result;
  };

  const size = () => {
    return queue.length;
  };

  const isEmpty = () => {
    return queue.length === 0;
  };

  const peek = () => {
    return queue[0];
  };

  return { enqueue, dequeue, size, isEmpty, peek };
}

export default useQueue;


// example usage
// import React, { useEffect } from 'react';
// import useQueue from './useQueue';

// const MyComponent: React.FC = () => {
//   const queue = useQueue<number>();

//   useEffect(() => {
//     queue.enqueue(1);
//     queue.enqueue(2);
//     queue.enqueue(3);

//     console.log(queue.size()); // Outputs 3
//     console.log(queue.peek()); // Outputs 1

//     queue.dequeue();
//     console.log(queue.peek()); // Outputs 2

//     console.log(queue.isEmpty()); // Outputs false
//   }, []);

//   return <div>Check the console for queue operations</div>;
// };

// export default MyComponent;
