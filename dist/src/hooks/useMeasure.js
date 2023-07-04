import { useState, useCallback, useLayoutEffect, useRef } from 'react';
const useMeasure = () => {
    const [rect, setRect] = useState(null);
    const ref = useRef(null);
    const updateRect = useCallback(() => {
        if (ref.current) {
            setRect(ref.current.getBoundingClientRect());
        }
    }, []);
    useLayoutEffect(() => {
        updateRect();
        const handleResize = () => {
            updateRect();
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [updateRect]);
    return [ref, rect];
};
export default useMeasure;
