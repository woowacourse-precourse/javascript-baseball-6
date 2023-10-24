import { Console } from '@woowacourse/mission-utils';

class Game {
  constructor() {
    this.gameCount = 0;
  }

  start() {
    this.gameCount
      ? Console.print(`플레이한 게임 수: ${this.gameCount}`)
      : Console.print('숫자 야구 게임을 시작합니다.');

    this.getUserInput();
  }

  async getUserInput() {
    const USER_INPUT = await Console.readLineAsync(
      '1~9를 이용하여 각 자리가 중복되지 않는 세자리 숫자를 입력해주세요 : '
    );

    this.validateUserInput(USER_INPUT);
  }

  validateUserInput(input) {
    const USER_INPUT_NUMBER = Number(input);
    const DIGITS = input.split('');

    if (
      isNaN(USER_INPUT_NUMBER) ||
      DIGITS.some((digit) => Number(digit) < 1 || Number(digit) > 9) ||
      DIGITS.length > 3
    ) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }

    if (new Set(DIGITS).size !== DIGITS.length) {
      throw new Error('[ERROR] 숫자가 중복됩니다.');
    }

    return true;
  }
}

export default Game;
