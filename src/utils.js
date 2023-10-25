import { Console } from '@woowacourse/mission-utils';
import { SETTING, ERROR_MESSAGE } from './constants';

/**
 * @param {string} message: 출력할 메세지
 */
const printMessage = (message) => {
  return Console.print(message);
}

/**
 * @param {string} message: 출력할 메세지
 * @returns {Promise<string>} 사용자가 입력한 문자
 */
const readLineAsync = async (message) => {
  return Console.readLineAsync(message);
}

/**
 * @param {string} input: 사용자가 입력한 값
 * @description 사용자가 입력한 값이 유효한 값인지 검사하는 함수
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
 * @returns {number} 검증에 통과한 유효한 값
 * @throws {Error} 입력값이 유효하지 않을 때
 */
const getValidRetryInput = (input) => {
  input = Number(input.trim());
  const { RESTART_NUMBER, EXIT_NUMBER } = SETTING;
  const { NOT_RETRY_NUMBER } = ERROR_MESSAGE;

  if (input !== RESTART_NUMBER && input !== EXIT_NUMBER) {
    throw new Error(`${NOT_RETRY_NUMBER}`);
  }

  return input;
}

export { printMessage, readLineAsync, isValidAnswerInput, getValidRetryInput };