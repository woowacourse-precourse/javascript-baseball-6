const LENGTH_ERROR = "[ERROR] 입력받은 숫자가 3개가 아닙니다.";
const DUPLICATION_ERROR = "[ERROR] 입력받은 숫자에 중복이 포함되어 있습니다.";
const NUMBER_ERROR = "[ERROR] 입력받은 숫자에 문자가 포함되어 있습니다.";

/**
 * 사용자가 입력한 숫자의 길이가 3인지 확인하는 함수
 * @param {string} userInputNumber 사용자가 입력한 숫자
 * @throw 입력한 숫자의 길이가 3이 아니라면 throw 에러
 * @returns 입력한 숫자의 길이가 3이라면 false 반환
 */
function isLengthError(userInputNumber) {
  if (userInputNumber.length !== 3) throw new Error(LENGTH_ERROR);

  return;
}

/**
 * 사용자가 입력한 숫자에 중복된 값이 포함되었는지 확인하는 함수
 * @param {string} userInputNumber 사용자가 입력한 숫자
 * @throw 입력한 숫자에 중복된 값이 포함되었다면 throw 에러
 * @returns 입력한 숫자에 중복된 값이 포함되어있지 않다면 false 반환
 */
function isDuplicationError(userInputNumber) {
  const uniqueNumber = new Set(userInputNumber);
  if (uniqueNumber.size !== 3) {
    throw new Error(DUPLICATION_ERROR);
  }

  return;
}

/**
 * 사용자가 입력한 숫자에 문자가 포함되었는지 확인하는 함수
 * @param {string} userInputNumber 사용자가 입력한 숫자
 * @throw 사용자가 입력한 숫자에 문자가 포함되었다면 throw 에러
 * @returns 사용자가 입력한 숫자에 문자가 포함되어있지 않다면 false 반환
 */
function isNumberError(userInputNumber) {
  for (const number of userInputNumber) {
    if (!(number >= "0" && number <= "9")) {
      throw new Error(NUMBER_ERROR);
    }
  }

  return;
}

/**
 * 사용자가 입력한 숫자에 대한 에러를 검증하는 함수
 * @param {string} userInputNumber 사용자가 입력한 숫자
 * @returns 사용자가 입력한 숫자에 에러가 없다면 false 반환
 */
function validateUserInputNumber(userInputNumber) {
  isLengthError(userInputNumber);
  isDuplicationError(userInputNumber);
  isNumberError(userInputNumber);

  return;
}

export {
  isLengthError,
  isDuplicationError,
  isNumberError,
  validateUserInputNumber,
};
