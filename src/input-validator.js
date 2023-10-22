function InputValidator(USER_INPUT, BallSize, BALL_MIN_SIZE, ballMaxSize, ERROR) {
  const DIGITS = USER_INPUT.split("").map(Number);
  if (DIGITS.length != BallSize) {
    throw new Error(ERROR.ballSizeErrorMsg);
  }
  if (DIGITS.some((DIGIT) => DIGIT < BALL_MIN_SIZE || ballMaxSize < DIGIT)) {
    throw new Error(ERROR.ballRangeErrorMsg);
  }
  if (DIGITS.some(isNaN)) {
    throw new Error(ERROR.ballTypeErrorMsg);
  }
  if (new Set(DIGITS).size != BallSize) {
    throw new Error(ERROR.ballDuplicatedErrorMsg);
  }
  return DIGITS;
}

export default InputValidator;
