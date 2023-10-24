import { Console } from '@woowacourse/mission-utils';
import { SETTING, ERROR_MESSAGE } from './constants';

/**
 * @param {string} message: 출력할 메세지
 * @description 사용자에게 메세지를 출력하는 함수 
 */
const printMessage = (message) => {
  return Console.print(message);
}

/**
 * @param {string} message: 출력할 메세지
 * @description 사용자에게 메세지를 출력하고 입력을 받는 함수
 * @returns {Promise<string>} 사용자가 입력한 문자
 */
const readLineAsync = async (message) => {
  return Console.readLineAsync(message);
}

/**
 * @param {string} input: 사용자가 입력한 값
 * @description 사용자가 입력한 값이 유효한 값인지 검사하는 함수
 * - NOT_NUMBER: 모두 숫자로 이루어져 있지 않음
 * - NOT_SIZE:   3(SIZE)글자가 아님
 * - NOT_UNIQUE: 세 수가 중복이 없는 유니크한 값이 아님
 * - NOT_RANGE:  1(MIN_NUMBER) ~ 9(MAX_NUMBER) 사이의 숫자로 이루어져 있지 않음
 * @returns {boolean} 입력 값이 유효할 때 true 반환
 * @throws {Error} 입력 값이 유효하지 않을 때
 */
const isValidAnswerInput = (input) => {
  input = input.trim();
  const set = new Set(input);
  const splittedInput = input.split('').map(Number);
  const { SIZE, MIN_NUMBER, MAX_NUMBER } = SETTING;
  const { NOT_NUMBER, NOT_SIZE, NOT_UNIQUE, NOT_RANGE } = ERROR_MESSAGE;

  if (isNaN(input)) {
    throw new Error(`${NOT_NUMBER}`);
  } 

  if (input.length !== SIZE) {
    throw new Error(`${NOT_SIZE}`);
  } 
  
  if (set.size !== SIZE) {
    throw new Error(`${NOT_UNIQUE}`);
  } 
  
  if (splittedInput.filter(v => v < MIN_NUMBER || v > MAX_NUMBER).length > 0) {
    throw new Error(`${NOT_RANGE}`);
  }

  return true;
}

/**
 * @param {string} input: 사용자가 입력한 값
 * @description 사용자가 입력한 값이 유효한 값인지 검사하는 함수
 * - NOT_RETRY_NUMBER: 1(RESTART_NUMBER) 또는 2(EXIT_NUMBER)를 입력하지 않음
 * @returns {boolean} 입력 값이 유효할 때 true 반환
 * @throws {Error} 입력 값이 유효하지 않을 때
 */
const isValidRetryInput = (input) => {
  input = Number(input.trim());
  const { RESTART_NUMBER, EXIT_NUMBER } = SETTING;
  const { NOT_RETRY_NUMBER } = ERROR_MESSAGE;

  if (input !== RESTART_NUMBER && input !== EXIT_NUMBER) {
    throw new Error(`${NOT_RETRY_NUMBER}`);
  }

  return true;
}

export { printMessage, readLineAsync, isValidAnswerInput, isValidRetryInput };