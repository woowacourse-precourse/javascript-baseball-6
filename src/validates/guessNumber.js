import { MESSAGE } from "../constants/message.js";

export const validateGuessNumberLength = (answer) => {
  if (answer.length !== 3) {
    throw new Error(MESSAGE.ERROR_GUESS_NUMBER_INPUT_WRONG);
  }
};

export const validateOnlyOneToNine = (answer) => {
  const isIncludeNonNumeric = answer
    .split("")
    .some((element) => element > "9" || element < "1");

  if (isIncludeNonNumeric) {
    throw new Error(MESSAGE.ERROR_GUESS_NUMBER_INPUT_WRONG);
  }
};

export const validateDuplicate = (answer) => {
  const isDuplicateNumber = answer
    .split("")
    .some(
      (element, _, array) =>
        array.indexOf(element) !== array.lastIndexOf(element)
    );

  if (isDuplicateNumber) {
    throw new Error(MESSAGE.ERROR_GUESS_NUMBER_INPUT_WRONG);
  }
};
