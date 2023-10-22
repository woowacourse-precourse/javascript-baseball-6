import { InputError } from "../errors.js";

const isThreeNumbers = (str) => {
  return /^[1-9]{3}$/.test(str);
};

const isUniqueChars = (str) => {
  return new Set(str.split("")).size === str.length;
};

export const validateNumberInput = (input) => {
  if (!isThreeNumbers(input) || !isUniqueChars(input)) {
    throw new InputError("[ERROR] 서로 다른 3자리 숫자를 입력해 주세요.");
  }
};
