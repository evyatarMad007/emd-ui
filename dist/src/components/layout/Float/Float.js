import { jsx as _jsx } from "react/jsx-runtime";
const Float = ({ position = 'relative', location, fullWidth, children, pX = "0px", pY = "0px" }) => {
    const [top, right, bottom, left] = location || [0, 0, 0, 0];
    return (_jsx("div", { style: {
            width: fullWidth ? "100%" : "380px",
            height: "max-content",
            position,
            top: `${top}px`,
            right: `${right}px`,
            bottom: `${bottom}px`,
            left: `${left}px`,
            padding: `${pX} ${pY}`,
        }, children: children }));
};
export default Float;
