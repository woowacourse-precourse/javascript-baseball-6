import { Console } from '@woowacourse/mission-utils';

export default class InputProcessor {
  static async inputNumber() {
    const inputString = await Console.readLineAsync('숫자를 입력해주세요: ');
    const inputArray = this.convertStringToNumArray(inputString);

    return inputArray;
  }

  static convertStringToNumArray(inputString) {
    return [...inputString].map((char) => Number(char));
  }
}
