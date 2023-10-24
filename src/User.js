import { Console, Random } from '@woowacourse/mission-utils';
export default class User {
  // 입력받은 숫자 배열
  #threeNummer;

  async setThreeNummber() {
    const number = await this.getNumber();
    this.#threeNummer = number.split('').map((char) => {
      if (isNaN(Number(char) || Number(char) === 0)) {
        throw new Error('[ERROR}');
      }
      return Number(char);
    });
    if (this.isCheckedSameNumber() || this.isCheckedThreeNumberLength()) {
      throw new Error('[ERROR}');
    }
  }

  getThreeNummber() {
    return this.#threeNummer;
  }

  isCheckedSameNumber() {
    return new Set(this.#threeNummer).size !== 3;
  }

  isCheckedThreeNumberLength() {
    return this.#threeNummer.length !== 3;
  }

  async getNumber() {
    try {
      const number = await Console.readLineAsync('숫자를 입력해주세요 : ');
      return number;
    } catch (error) {
      return 'nertwork err';
    }
  }
}
