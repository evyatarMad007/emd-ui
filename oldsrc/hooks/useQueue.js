"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
/**
 * Custom hook to create and manage a queue
 */
function useQueue() {
    const [queue, setQueue] = (0, react_1.useState)([]);
    const enqueue = (item) => {
        setQueue((prevQueue) => [...prevQueue, item]);
    };
    const dequeue = () => {
        let result;
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
exports.default = useQueue;
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
