import { Console, Random } from '@woowacourse/mission-utils';
export default class User {
  #threeNummer; // 입력받은 숫자 배열
  constructor() {

  }

  async setThreeNummber() {
    const number = await this.getnumber();
    if (!isNaN(Number(number))) {
      this.numberToArray(number);
    }

    if (
      this.#threeNummer.length !== 3 ||
      this.checkSameNumber() ||
      !this.checkNonNumber ||
      isNaN(Number(number))
    ) {
      throw new Error('Error');
    }
  }
  numberToArray(n) {
    this.#threeNummer = [];
    const str = String(n);
    const mapfn = (arg) => Number(arg);
    this.#threeNummer = str.split('').map(mapfn);
  }

  getThreeNummber() {
    return this.#threeNummer;
  }

  checkSameNumber() {
    return new Set(this.#threeNummer).size !== 3;
  }

  checkNonNumber() {
    return this.#threeNummer.every((value) => value === 'number');
  }

  async getnumber() {
    try {
      const number = await Console.readLineAsync(
        '숫자를 입력해주세요 : '
      );
      return number;
    } catch (error) {
      return 'nertwork err';
    }
  }
}
