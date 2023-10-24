import ERROR from "./baseball_error.js"

function InputValidator(USER_INPUT, gameSettings) {
  const DIGITS = USER_INPUT.split("").map(Number);
  if (DIGITS.length != gameSettings.ballLength) {
    throw new Error(ERROR.ballLengthErrorMsg);
  }
  if (DIGITS.some((DIGIT) => DIGIT < gameSettings.ballMinSize || gameSettings.ballMaxSize < DIGIT)) {
    throw new Error(ERROR.ballRangeErrorMsg);
  }
  if (DIGITS.some(isNaN)) {
    throw new Error(ERROR.ballTypeErrorMsg);
  }
  if (new Set(DIGITS).size != gameSettings.ballLength) {
    throw new Error(ERROR.ballDuplicatedErrorMsg);
  }
  return DIGITS;
}

export default InputValidator;