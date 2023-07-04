import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { CopyToClipboardStyled } from "./CopyToClipboard.styled";
import Icon from "../Icon/Icon";
const CopyToClipboard = ({ text, children }) => {
    const [isCopied, setIsCopied] = useState(false);
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        }
        catch (err) { }
    };
    return (_jsxs(CopyToClipboardStyled, { children: [_jsx("p", { className: "CopyToClipboard-text", children: text }), _jsx("button", { className: "CopyToClipboard-button", onClick: copyToClipboard, children: isCopied ? (_jsxs(_Fragment, { children: [_jsx(Icon, { iconType: "done" }), " Copied!"] })) : (_jsxs(_Fragment, { children: [_jsx(Icon, { iconType: "copy" }), " Copy Link"] })) }), children] }));
};
export default CopyToClipboard;
