import { Console } from '@woowacourse/mission-utils';
import { GAME_RESTART_OPTION, GAME_QUIT_OPTION } from './Constants.js';

export default class InputProcessor {
  static async askNumbers() {
    const inputString = await Console.readLineAsync('숫자를 입력해주세요: ');
    const inputArray = this.convertStringToNumArray(inputString);

    if (!this.isValidNumbers(inputArray)) {
      throw new Error('[ERROR] 잘못된 숫자 형식입니다.');
    }
    return inputArray;
  }

  static async askContinue() {
    const inputString = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
    );

    const inputNumber = Number(inputString);
    if (!this.isVaildOption(inputNumber)) {
      throw new Error('[ERROR] 존재하지 않는 선택지입니다.');
    }

    return inputNumber;
  }

  static convertStringToNumArray(inputString) {
    const RADIX = 10;
    return Array.from(inputString, (char) => parseInt(char, RADIX));
  }

  static isVaildOption(inputNumber) {
    return (
      inputNumber === GAME_RESTART_OPTION || inputNumber === GAME_QUIT_OPTION
    );
  }

  static isValidNumbers(inputArray) {
    return (
      this.isThreeDigit(inputArray) &&
      this.isOnlyNumber(inputArray) &&
      !this.isDuplicated(inputArray)
    );
  }

  static isThreeDigit(inputArray) {
    return inputArray.length === 3;
  }

  static isOnlyNumber(inputArray) {
    return inputArray.every((item) => typeof item === 'number');
  }

  static isDuplicated(inputArray) {
    const set = new Set(inputArray);
    return set.size !== inputArray.length;
  }
}
