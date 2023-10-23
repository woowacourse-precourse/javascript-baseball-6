import { MissionUtils, Console } from '@woowacourse/mission-utils';
import { SETTING } from './constants';

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
 * @description 1(MIN_NUMBER) ~ 9(MAX_NUMBER) 사이의 랜덤한 숫자를 반환하는 함수
 * @returns {number} computer: 길이가 3(SIZE)인 랜덤 숫자
 */
const generateRandomNumber = () => {
  const computer = [];
  while (computer.length < SETTING.SIZE) {
    const number = MissionUtils.Random.pickNumberInRange(SETTING.MIN_NUMBER, SETTING.MAX_NUMBER);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

export { printMessage, readLineAsync, generateRandomNumber };