import { useState, useCallback, useRef } from 'react';
const useDrag = () => {
    const [isDragging, setIsDragging] = useState(false);
    const position = useRef({ x: 0, y: 0 });
    const handleMouseDown = useCallback((event) => {
        setIsDragging(true);
        position.current = {
            x: event.clientX - event.currentTarget.getBoundingClientRect().left,
            y: event.clientY - event.currentTarget.getBoundingClientRect().top,
        };
    }, []);
    const handleMouseMove = useCallback((event) => {
        if (isDragging) {
            const el = event.target;
            el.style.left = `${event.clientX - position.current.x}px`;
            el.style.top = `${event.clientY - position.current.y}px`;
        }
    }, [isDragging]);
    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);
    return {
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        isDragging,
    };
};
export default useDrag;
