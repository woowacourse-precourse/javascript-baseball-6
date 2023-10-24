import { Console } from '@woowacourse/mission-utils';
import { Random } from '@woowacourse/mission-utils';
import GameCalculator from './GameCalculator.js';

class BaseballGame {
  constructor() {
    this.gameCount = 0;
    this.randomNumber = null;
  }

  async gameStart() {
    this.randomNumber = this.randomNumberGenerator();
    this.gameCount += 1;

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
    this.showGameResult(USER_INPUT);
  }

  validateUserInput(userInput) {
    const USER_INPUT_NUMBER = Number(userInput);
    const DIGITS = userInput.split('');

    if (
      isNaN(USER_INPUT_NUMBER) ||
      DIGITS.some((digit) => Number(digit) < 1 || Number(digit) > 9) ||
      DIGITS.length !== 3
    ) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }

    if (new Set(DIGITS).size !== DIGITS.length) {
      throw new Error('[ERROR] 숫자가 중복됩니다.');
    }

    return true;
  }

  async showGameResult(validUserinput) {
    const GAME_CALCULATOR = new GameCalculator(
      validUserinput,
      this.randomNumber
    );

    const GAME_RESULT_STRING = GAME_CALCULATOR.getStringResult();
    Console.print(GAME_RESULT_STRING);

    if (GAME_CALCULATOR.validateAnswer()) {
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      const RESTART_INPUT = await Console.readLineAsync(
        '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
      );
      if (RESTART_INPUT === '1') {
        this.gameStart();
      } else if (RESTART_INPUT === '2') {
        return;
      }
    } else {
      this.getUserInput();
    }
  }

  randomNumberGenerator() {
    const RANDOM_NUMBERS = [];
    while (RANDOM_NUMBERS.length < 3) {
      const RANDOM_NUMBER = Random.pickNumberInRange(1, 9);
      if (!RANDOM_NUMBERS.includes(RANDOM_NUMBER)) {
        RANDOM_NUMBERS.push(RANDOM_NUMBER);
      }
    }

    return RANDOM_NUMBERS.join('');
  }
}

export default BaseballGame;
