import ERROR from "./baseball_error.js"

function InputValidator(USER_INPUT, gameSettings) {
  const DIGITS = USER_INPUT.split("").map(Number);
  if (DIGITS.length != gameSettings.ballSize) {
    throw new Error(ERROR.ballSizeErrorMsg);
  }
  if (DIGITS.some((DIGIT) => DIGIT < gameSettings.ballMinSize || gameSettings.ballMaxSize < DIGIT)) {
    throw new Error(ERROR.ballRangeErrorMsg);
  }
  if (DIGITS.some(isNaN)) {
    throw new Error(ERROR.ballTypeErrorMsg);
  }
  if (new Set(DIGITS).size != gameSettings.ballSize) {
    throw new Error(ERROR.ballDuplicatedErrorMsg);
  }
  return DIGITS;
}

export default InputValidator;