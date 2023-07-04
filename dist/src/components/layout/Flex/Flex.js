import { jsx as _jsx } from "react/jsx-runtime";
const Flex = ({ flexX, flexY, children, padding, flexDir, fullWidth, mW, margin, relative }) => {
    return (_jsx("div", { style: {
            width: fullWidth ? "100%" : "380px",
            maxWidth: mW || "100%",
            margin: margin || "0 auto",
            display: "flex",
            flexDirection: flexDir || "row",
            justifyContent: flexX || "flex-start",
            alignItems: flexY || "flex-start",
            direction: "rtl",
            padding: padding || "0",
            position: relative ? "relative" : "static"
        }, children: children }));
};
export default Flex;
