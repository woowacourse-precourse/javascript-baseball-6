import PATTERN from "../constant/PATTERN.js";

export const isNotEmpty = (input) => {
  return input !== null && input.trim() !== "";
};

export const isValidNumber = (input) => {
  return PATTERN.UNIQUE_NATURAL_THREE_DIGITS.test(input);
};

export const areDigitsUnique = (input) => {
  const uniqueDigits = [...new Set(input)];
  return uniqueDigits.length === input.length;
};
