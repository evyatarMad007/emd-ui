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
const useAsync = (asyncFunction, immediate = true) => {
    const [status, setStatus] = (0, react_1.useState)('idle');
    const [value, setValue] = (0, react_1.useState)(null);
    const [error, setError] = (0, react_1.useState)(null);
    const execute = (0, react_1.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
        setStatus('pending');
        setValue(null);
        setError(null);
        try {
            const response = yield asyncFunction();
            setValue(response);
            setStatus('success');
        }
        catch (error) {
            setError(error);
            setStatus('error');
        }
    }), [asyncFunction]);
    (0, react_1.useEffect)(() => {
        if (immediate) {
            execute();
        }
    }, [execute, immediate]);
    return { execute, status, value, error };
};
exports.default = useAsync;
