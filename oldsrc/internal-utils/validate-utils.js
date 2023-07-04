"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInput = void 0;
const constants_1 = require("./constants");
const checks = {
    isEmpty: (inputValue) => {
        if (inputValue.length === 0) {
            return "Input cannot be empty.";
        }
        return undefined;
    },
    isTooShort: (inputValue, length) => {
        if (inputValue.length < length) {
            return `Input must be at least ${length} characters long.`;
        }
        return undefined;
    },
    isTooLong: (inputValue, length) => {
        if (inputValue.length > length) {
            return `Input cannot be longer than ${length} characters.`;
        }
        return undefined;
    },
    isValidByRegex: (inputValue, regExp, errorMsg) => {
        if (!regExp.test(inputValue)) {
            return errorMsg;
        }
        return undefined;
    },
    isNumber: (inputValue) => {
        if (isNaN(parseFloat(inputValue))) {
            return "Input must be a number.";
        }
        return undefined;
    }
};
const validateInput = (fieldType, inputValue) => {
    const regexList = {
        [constants_1.validation.name]: /^[a-zA-Z0-9]*$/,
        [constants_1.validation.freeText]: /^[a-zA-Z0-9 ]*$/,
    };
    const fieldRules = {
        [constants_1.validation.name]: [
            [checks.isEmpty, inputValue],
            [checks.isTooShort, inputValue, 3],
            [checks.isTooLong, inputValue, 35],
            [checks.isValidByRegex, inputValue, regexList[fieldType], "cannot contain special characters or spaces"]
        ],
        [constants_1.validation.freeText]: [
            [checks.isEmpty, inputValue],
            [checks.isTooShort, inputValue, 10],
            [checks.isTooLong, inputValue, 150],
            [checks.isValidByRegex, inputValue, regexList[fieldType], "cannot contain special characters"]
        ],
        [constants_1.validation.number]: [
            [checks.isEmpty, inputValue],
            [checks.isNumber, inputValue],
            [checks.isTooShort, inputValue, 1],
            [checks.isTooLong, inputValue, 3],
        ],
        [constants_1.validation.code]: [
            [checks.isEmpty, inputValue],
            [checks.isTooShort, inputValue, 1],
            [checks.isTooLong, inputValue, 5000],
        ],
    };
    if (!fieldRules[fieldType]) {
        return { isError: false, errorMessage: "" };
    }
    for (let rule of fieldRules[fieldType]) {
        const [check, ...params] = rule;
        const errorMessage = check(...params);
        if (errorMessage) {
            return { isError: true, errorMessage };
        }
    }
    return { isError: false, errorMessage: "" };
};
exports.validateInput = validateInput;
exports.default = exports.validateInput;
