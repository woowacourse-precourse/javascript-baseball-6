import { Console, Random } from '@woowacourse/mission-utils';

export default class Baseball {
  #computer = [];

  generateComputerNumber() {
    while (this.#computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.#computer.includes(number)) {
        this.#computer.push(number);
      }
    }
  }

  async inputUserNumber() {
    return await Console.readLineAsync('숫자를 입력해주세요 : ');
  }

  validateUserNumber(input) {
    const regex = /^[1-9]{3}$/;
    if (!regex.test(input)) {
      throw new Error('[ERROR] 1~9를 이용하여 3자리의 숫자를 입력 해주세요.');
    }

    const array = input.split('').map(Number);
    const set = new Set(array);
    if (!(set.size === input.length)) {
      throw new Error('[ERROR] 중복된 숫자를 입력 했습니다.');
    }
  }

  getGameResult(input) {
    const result = { strike: 0, boll: 0 };
    const user = input.split('').map(Number);

    for (let i = 0; i < user.length; i++) {
      if (this.#computer[i] === user[i]) {
        result.strike += 1;
      } else if (this.#computer.includes(user[i])) {
        result.boll += 1;
      }
    }
    this.printGameResult(result);

    const isGameEnd = result.strike === 3;
    return isGameEnd;
  }

  printGameResult(result) {
    const { strike, boll } = result;

    let message = '';
    if (strike && boll) message = `${boll}볼 ${strike}스트라이크`;
    else if (strike) message = `${strike}스트라이크`;
    else if (boll) message = `${boll}볼`;
    else message = '낫싱';

    Console.print(message);
  }

  async play() {
    this.generateComputerNumber();

    while (true) {
      const input = await this.inputUserNumber();
      this.validateUserNumber(input);

      const isGameEnd = this.getGameResult(input);
      if (isGameEnd) {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        break;
      }
    }
  }
}
