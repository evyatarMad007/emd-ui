import { validation } from "./constants";

interface Checks {
  isEmpty: (inputValue: string) => string | undefined;
  isTooShort: (inputValue: string, length: number) => string | undefined;
  isTooLong: (inputValue: string, length: number) => string | undefined;
  isValidByRegex: (inputValue: string, regExp: RegExp, errorMsg: string) => string | undefined;
  isNumber: (inputValue: string) => string | undefined;
}

const checks: Checks = {
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

export const validateInput = (fieldType: string, inputValue: string) => {
  const regexList = {
    [validation.name]: /^[a-zA-Z0-9]*$/,
    [validation.freeText]: /^[a-zA-Z0-9 ]*$/,
  };

  type FieldRule = [(...args: any[]) => string | undefined, ...any[]];

  const fieldRules: { [key: string]: FieldRule[] } = {
    [validation.name]: [
      [checks.isEmpty, inputValue],
      [checks.isTooShort, inputValue, 3],
      [checks.isTooLong, inputValue, 35],
      [checks.isValidByRegex, inputValue, regexList[fieldType], "cannot contain special characters or spaces"]
    ],
    [validation.freeText]: [
      [checks.isEmpty, inputValue],
      [checks.isTooShort, inputValue, 10],
      [checks.isTooLong, inputValue, 150],
      [checks.isValidByRegex, inputValue, regexList[fieldType], "cannot contain special characters"]
    ],
    [validation.number]: [
      [checks.isEmpty, inputValue],
      [checks.isNumber, inputValue],
      [checks.isTooShort, inputValue, 1],
      [checks.isTooLong, inputValue, 3],
    ],
    [validation.code]: [
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

export default validateInput;
