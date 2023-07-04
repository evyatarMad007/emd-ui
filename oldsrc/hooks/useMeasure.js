"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useMeasure = () => {
    const [rect, setRect] = (0, react_1.useState)(null);
    const ref = (0, react_1.useRef)(null);
    const updateRect = (0, react_1.useCallback)(() => {
        if (ref.current) {
            setRect(ref.current.getBoundingClientRect());
        }
    }, []);
    (0, react_1.useLayoutEffect)(() => {
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
exports.default = useMeasure;
