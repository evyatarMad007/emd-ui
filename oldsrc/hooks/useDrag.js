"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useDrag = () => {
    const [isDragging, setIsDragging] = (0, react_1.useState)(false);
    const position = (0, react_1.useRef)({ x: 0, y: 0 });
    const handleMouseDown = (0, react_1.useCallback)((event) => {
        setIsDragging(true);
        position.current = {
            x: event.clientX - event.currentTarget.getBoundingClientRect().left,
            y: event.clientY - event.currentTarget.getBoundingClientRect().top,
        };
    }, []);
    const handleMouseMove = (0, react_1.useCallback)((event) => {
        if (isDragging) {
            const el = event.target;
            el.style.left = `${event.clientX - position.current.x}px`;
            el.style.top = `${event.clientY - position.current.y}px`;
        }
    }, [isDragging]);
    const handleMouseUp = (0, react_1.useCallback)(() => {
        setIsDragging(false);
    }, []);
    return {
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        isDragging,
    };
};
exports.default = useDrag;
