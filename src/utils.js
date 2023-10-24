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
 * @returns {boolean} 입력이 유효하면 true반환, 유효하지 않으면 예외를 throw
 */
const isValidInput = (input) => {
  input = input.trim();
  const set = new Set(input);
  const splittedInput = input.split('').map(Number);
  const { SIZE, MIN_NUMBER, MAX_NUMBER } = SETTING;

  if (isNaN(input)) {
    throw new Error(`${ERROR_MESSAGE.NOT_NUMBER}`);
  } 

  if (input.length !== SIZE) {
    throw new Error(`${ERROR_MESSAGE.NOT_SIZE}`);
  } 
  
  if (set.size !== SIZE) {
    throw new Error(`${ERROR_MESSAGE.NOT_UNIQUE}`);
  } 
  
  if (splittedInput.filter(v => v < MIN_NUMBER || v > MAX_NUMBER).length > 0) {
    throw new Error(`${ERROR_MESSAGE.NOT_RANGE}`);
  }

  return true;
}

export { printMessage, readLineAsync, isValidInput };