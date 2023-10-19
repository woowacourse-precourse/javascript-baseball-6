function isLengthError(userNumbers) {
  if (userNumbers.length !== 3)
    throw new Error("입력받은 숫자가 3개가 아닙니다.");

  return false;
}

function isDuplicationError(userNumbers) {
  for (let i = 0; i < userNumbers.length; i++) {
    if (userNumbers.substring(i + 1).includes(userNumbers[i])) {
      throw new Error("입력받은 숫자에 중복이 포함되어 있습니다.");
    }
  }

  return false;
}

function isNumberError(userNumbers) {
  for (let i = 0; i < userNumbers.length; i++) {
    if (!(userNumbers[i] >= "0" && userNumbers[i] <= "9")) {
      throw new Error("입력받은 숫자에 문자가 포함되어 있습니다.");
    }
  }

  return false;
}

export { isLengthError, isDuplicationError, isNumberError };
