import {
  NUMBER_ERROR,
  DUPLICATION_ERROR,
  LENGTH_ERROR,
  INVALID_INPUT_ERROR,
} from "../constants/error-message.js";
import {
  GAME_RESTART,
  GAME_EXIT,
} from "../constants/game-control-command.js.js";

/**
 * 사용자가 입력한 숫자의 길이가 3인지 확인하는 함수
 * @param {string} userInputNumber 사용자가 입력한 숫자
 * @throw 입력한 숫자의 길이가 3이 아니라면 throw 에러
 * @returns 입력한 숫자의 길이가 3이라면 false 반환
 */
function isLengthError(userInputNumber) {
  if (userInputNumber.length !== 3) throw new Error(LENGTH_ERROR);
  return false;
}

/**
 * 사용자가 입력한 숫자에 중복된 값이 포함되었는지 확인하는 함수
 * @param {string} userInputNumber 사용자가 입력한 숫자
 * @throw 입력한 숫자에 중복된 값이 포함되었다면 throw 에러
 * @returns 입력한 숫자에 중복된 값이 포함되어있지 않다면 false 반환
 */
function isDuplicationError(userInputNumber) {
  for (let i = 0; i < userInputNumber.length; i++) {
    if (userInputNumber.substring(i + 1).includes(userInputNumber[i])) {
      throw new Error(DUPLICATION_ERROR);
    }
  }
  return false;
}

/**
 * 사용자가 입력한 숫자에 문자가 포함되었는지 확인하는 함수
 * @param {string} userInputNumber 사용자가 입력한 숫자
 * @throw 사용자가 입력한 숫자에 문자가 포함되었다면 throw 에러
 * @returns 사용자가 입력한 숫자에 문자가 포함되어있지 않다면 false 반환
 */
function isNumberError(userInputNumber) {
  for (let i = 0; i < userInputNumber.length; i++) {
    if (!(userInputNumber[i] >= "0" && userInputNumber[i] <= "9")) {
      throw new Error(NUMBER_ERROR);
    }
  }
  return false;
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
}

/**
 * 사용자가 입력한 선택값(재시작 혹은 종료)에 대한 에러를 검증하는 함수
 * @param {string} userSelectNumber 사용자가 입력한 숫자
 * @throw 사용자가 입력한 선택값이 재시작 혹은 종료가 아니라면 throw 에러
 * @returns 사용자가 입력한 선택값에 에러가 없다면 false 반환
 */
function validateUserSelectNumber(userSelectNumber) {
  if (userSelectNumber !== GAME_RESTART && userSelectNumber !== GAME_EXIT) {
    throw new Error(INVALID_INPUT_ERROR);
  }
  return false;
}

export {
  isLengthError,
  isDuplicationError,
  isNumberError,
  validateUserInputNumber,
  validateUserSelectNumber,
};
