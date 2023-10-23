import { GAME_MESSAGE } from '../constants/constants';

/**
 * 재시작 여부 유효성 검사 함수
 * @param {string} re
 * @throws [ERROR] 메시지
 */
export function validateRestart(re) {
  if (re !== GAME_MESSAGE.RESTART && re !== GAME_MESSAGE.END) throw new Error(ERROR_MESSAGE.INPUT_INVALID);
}

/**
 * 유저 입력받은 숫자 유효성 검사 함수
 * @param {string} input 입력받은 숫자(문자열)
 * @throws [ERROR] 메시지
 */
export function validateInput(input) {
  const removeDuplicated = new Set(input.split('').map(Number));

  if (isNaN(Number(input))) throw new Error(ERROR_MESSAGE.INPUT_ONLY_NUMBER);
  if (input.length !== 3) throw new Error(ERROR_MESSAGE.NUMBER_LENGTH_MUST_THREE);
  if (removeDuplicated.size !== 3) throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);
}
