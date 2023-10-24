import IOHandler from './IOHandler';
import Utils from './Utils';

class NumberBaseballGame {
  #min;
  #max;
  #count;
  #strike;
  #ball;

  static #GAME_MESSAGE = {
    START: '숫자 야구 게임을 시작합니다.',
    USER_INPUT: '숫자를 입력해주세요 : ',
    OUT: '낫싱',
    STRIKE: '스트라이크',
    BALL: '볼',
    WIN: '개의 숫자를 모두 맞히셨습니다! 게임 종료',
    ASK_PLAY_AGAIN: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  };

  static #ERROR_MESSAGE = {
    MIN_OUT_OF_RANGE:
      '[ERROR] : 최소값이 범위를 벗어났습니다. 예상 범위 : 1 ~ 8',
    MAX_OUT_OF_RANGE:
      '[ERROR] : 최대값이 범위를 벗어났습니다. 예상 범위 : 2 ~ 9',
    INCORRECT_INPUT_NUMBER_LENGTH:
      '[ERROR] : 입력한 숫자의 길이가 맞지 않습니다.',
    ONLY_ONE_OR_TWO: '[ERROR] : 1과 2만 입력 가능합니다.',
  };

  constructor(min, max, count) {
    this.#validateArguments(min, max, count);

    this.#min = min;
    this.#max = max;
    this.#count = count;
  }

  #validateArguments(min, max, count) {
    Utils.validateGetNumbersRange(min, max, count);

    if (min < 1 || min > 8) {
      throw new Error(NumberBaseballGame.#ERROR_MESSAGE.MIN_OUT_OF_RANGE);
    }

    if (max < 2 || max > 9) {
      throw new Error(NumberBaseballGame.#ERROR_MESSAGE.MAX_OUT_OF_RANGE);
    }
  }

  async play() {
    IOHandler.displayMessage(NumberBaseballGame.#GAME_MESSAGE.START);

    try {
      do {
        const targetNumbers = Utils.getUniqueRandomNumbersInRange(
          this.#min,
          this.#max,
          this.#count
        );

        do {
          this.#resetStrikeAndBall();

          const inputNumbers = await IOHandler.getUserInputNumber(
            NumberBaseballGame.#GAME_MESSAGE.USER_INPUT
          );
          this.#validateUserInput(inputNumbers);

          this.#calculateStrikeAndBall(targetNumbers, inputNumbers);
          this.#displayGameResult();
        } while (!this.#isGameWon());
      } while (await this.#askPlayAgain());
    } catch (error) {
      throw new Error(error.message);
    }
  }

  #resetStrikeAndBall() {
    this.#strike = 0;
    this.#ball = 0;
  }

  #validateUserInput(input) {
    if (input.length !== this.#count) {
      throw new Error(
        NumberBaseballGame.#ERROR_MESSAGE.INCORRECT_INPUT_NUMBER_LENGTH
      );
    }
  }

  #calculateStrikeAndBall(targetNumbers, inputNumbers) {
    for (let i = 0; i < this.#count; i++) {
      if (targetNumbers[i] === Number(inputNumbers[i])) {
        this.#strike++;
      } else if (targetNumbers.includes(Number(inputNumbers[i]))) {
        this.#ball++;
      }
    }
  }

  #displayGameResult() {
    if (!this.#ball && !this.#strike) {
      IOHandler.displayMessage(NumberBaseballGame.#GAME_MESSAGE.OUT);
    } else {
      let message = '';

      if (this.#ball && this.#strike) {
        message += this.#ball + NumberBaseballGame.#GAME_MESSAGE.BALL;
        message += ' ';
        message += this.#strike + NumberBaseballGame.#GAME_MESSAGE.STRIKE;
      } else if (this.#ball) {
        message += this.#ball + NumberBaseballGame.#GAME_MESSAGE.BALL;
      } else if (this.#strike) {
        message += this.#strike + NumberBaseballGame.#GAME_MESSAGE.STRIKE;
      }

      IOHandler.displayMessage(message);
    }
  }

  #isGameWon() {
    if (this.#strike === this.#count) {
      let message = '';
      message += this.#count;
      message += NumberBaseballGame.#GAME_MESSAGE.WIN;

      IOHandler.displayMessage(message);
      return true;
    }

    return false;
  }

  async #askPlayAgain() {
    const input = await IOHandler.getUserInputNumber(
      NumberBaseballGame.#GAME_MESSAGE.ASK_PLAY_AGAIN
    );

    if (input === '1') {
      return true;
    } else if (input === '2') {
      return false;
    } else {
      throw new Error(NumberBaseballGame.#ERROR_MESSAGE.ONLY_ONE_OR_TWO);
    }
  }
}

export default NumberBaseballGame;
