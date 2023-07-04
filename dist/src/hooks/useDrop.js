import { useRef, useCallback } from 'react';
const useDrop = (onDrop) => {
    const ref = useRef(null);
    const handleDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);
    const handleDrop = useCallback((event) => {
        event.preventDefault();
        if (onDrop) {
            onDrop(event.dataTransfer.getData('text'));
        }
    }, [onDrop]);
    return {
        ref,
        handleDragOver,
        handleDrop,
    };
};
export default useDrop;
