import generateNumber from './utils/RandomNumber.js';
import { SETTING } from './Constants.js';

// @TODO: airbnb style guide 맞추기
class Game {
  #answerNumbers;

  constructor() {
    this.init();
  }

  init() {
    this.#answerNumbers = generateNumber(SETTING.MIN, SETTING.MAX);
  }

  /**
   * @description 두 값을 비교하여 판정을 내리는 함수
   * @param {string} input
   * @returns {object} {strikeCount: number, ballCount: number}
   */
  checkGuess(input) {
    const randomNumber = this.#answerNumbers.join('');
    let strikeCount = 0;
    let ballCount = 0;

    for (let i = 0; i < SETTING.MAX_INPUT_LENGTH; i++) {
      if (input[i] === randomNumber[i]) {
        strikeCount++;
        continue;
      }
      if (randomNumber.includes(input[i])) {
        ballCount++;
      }
    }
    return { ballCount, strikeCount };
  }
}

export default Game;
