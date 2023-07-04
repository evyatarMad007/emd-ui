"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useDrop = (onDrop) => {
    const ref = (0, react_1.useRef)(null);
    const handleDragOver = (0, react_1.useCallback)((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);
    const handleDrop = (0, react_1.useCallback)((event) => {
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
exports.default = useDrop;
