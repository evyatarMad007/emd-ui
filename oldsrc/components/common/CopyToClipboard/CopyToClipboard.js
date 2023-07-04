"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const CopyToClipboard_styled_1 = require("./CopyToClipboard.styled");
const Icon_1 = __importDefault(require("../Icon/Icon"));
const CopyToClipboard = ({ text, children }) => {
    const [isCopied, setIsCopied] = (0, react_1.useState)(false);
    const copyToClipboard = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield navigator.clipboard.writeText(text);
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        }
        catch (err) { }
    });
    return ((0, jsx_runtime_1.jsxs)(CopyToClipboard_styled_1.CopyToClipboardStyled, { children: [(0, jsx_runtime_1.jsx)("p", { className: "CopyToClipboard-text", children: text }), (0, jsx_runtime_1.jsx)("button", { className: "CopyToClipboard-button", onClick: copyToClipboard, children: isCopied ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Icon_1.default, { iconType: "done" }), " Copied!"] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Icon_1.default, { iconType: "copy" }), " Copy Link"] })) }), children] }));
};
exports.default = CopyToClipboard;
