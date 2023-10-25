import { Console } from '@woowacourse/mission-utils';

export default class InputProcessor {
  static async inputNumber() {
    const inputString = await Console.readLineAsync('숫자를 입력해주세요: ');
    const inputArray = this.convertStringToNumArray(inputString);

    if (!this.isValidNumberList(inputArray)) {
      throw new Error('[ERROR] 잘못된 숫자 형식입니다.');
    }
    return inputArray;
  }

  static convertStringToNumArray(inputString) {
    return [...inputString].map((char) => Number(char));
  }

  static isValidNumberList(inputArray) {
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
