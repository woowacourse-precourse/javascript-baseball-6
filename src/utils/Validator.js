import { ERROR, SETTING } from '../Constants';

/**
 * @description 사용자 입력값 검증 함수
 * 1.숫자가 아닌 다른 값의 유무 판단(공백포함) / 2.입력값의 길이 판단
 * 3.서로 다른 3개의 숫자 판단 / 4. 0을 지니고 있는지 판단
 * 5.서로 다른 3가지 숫자를 중복으로 입력받는 경우
 * @param {string} input
 * @returns {boolean} 유효성 검사 결과 반환
 *
 */

function validateInput(input) {
  const set = new Set(input.split(''));
  if (
    // eslint-disable-next-line no-restricted-globals
    isNaN(Number(input)) ||
    input.length > SETTING.MAX_INPUT_LENGTH ||
    set.size !== SETTING.MAX_INPUT_LENGTH ||
    set.has('0')
  ) {
    throw new Error(`${ERROR.HEADER}${ERROR.INPUT}`);
  }
  return true;
}

/**
 * @description 재시작 사용자 입력값 검증 함수
 * @param {number} input
 * @returns {boolean}
 */

function validateRestartInput(input) {
  if (input !== SETTING.RESTART && input !== SETTING.END) {
    throw new Error(`${ERROR.RESTART}${ERROR.RESTART}`);
  }
  return true;
}

export { validateRestartInput, validateInput };
