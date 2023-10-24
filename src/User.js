import { Console, Random } from '@woowacourse/mission-utils';
export default class User {
  // 입력받은 숫자 배열
  #threeNummer;

  // 입력받은 숫자를 배열에 넣고, 예외를 검사
  async setThreeNummber() {
    const number = await this.getNumber();
    this.#threeNummer = Array.from(number, (char) => {
      if (isNaN(Number(char) || Number(char) === 0)) {
        throw new Error('[ERROR}');
      }
      return Number(char);
    });
    if (this.isCheckedSameNumber() || this.isCheckedThreeNumberLength()) {
      throw new Error('[ERROR}');
    }
  }

  // 입력받은 숫자 배열을 반환하는 함수
  getThreeNummber() {
    return this.#threeNummer;
  }

  // 입력받은 숫자가 전부 다른 숫자인지 검사
  isCheckedSameNumber() {
    return new Set(this.#threeNummer).size !== 3;
  }

  // 입력받은 숫자 배열의 길이를 검사
  isCheckedThreeNumberLength() {
    return this.#threeNummer.length !== 3;
  }

  //숫자자를 입력받는 함수
  async getNumber() {
    try {
      const number = await Console.readLineAsync('숫자를 입력해주세요 : ');
      return number;
    } catch (error) {
      return 'nertwork err';
    }
  }
}
