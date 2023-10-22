import { MissionUtils } from '@woowacourse/mission-utils';
export default class User {
  #threeNummer; // 입력받은 숫자 배열
  constructor() {}

  async setThreeNummber() {
    const number = await this.getnumber();
    this.numberToArray(number);
    if (this.#threeNummer.length !== 3) {
      throw new Error(`[ERROR]`);
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

  async getnumber() {
    try {
      const number = await MissionUtils.Console.readLineAsync(
        '숫자를 입력해주세요 : '
      );
      return number;
    } catch (error) {
      return `nertwork err`;
    }
  }
}
