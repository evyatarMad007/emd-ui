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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useClipboard = () => {
    const [isCopied, setIsCopied] = (0, react_1.useState)(false);
    const copyToClipboard = (0, react_1.useCallback)((text) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield navigator.clipboard.writeText(text);
            setIsCopied(true);
        }
        catch (error) {
            setIsCopied(false);
        }
    }), []);
    const resetClipboard = (0, react_1.useCallback)(() => {
        setIsCopied(false);
    }, []);
    return { isCopied, copyToClipboard, resetClipboard };
};
exports.default = useClipboard;
