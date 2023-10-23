import generateNumber from './utils/RandomNumber.js';
import { print, input } from './view/View.js';
import { MESSAGE, SETTING } from './Constants.js';
import { validateInput, validateRestartInput } from './utils/Validator.js';

export default class App {
  #answerNumbers;
  #isFinish = false;

  constructor() {
    this.init();
  }

  async play() {
    try {
      while (!this.#isFinish) {
        print(MESSAGE.GAME_START);
        const inputNumber = (await input(MESSAGE.INPUT_NUMBER)).trim();
        validateInput(inputNumber);
        const { ballCount, strikeCount } = this.checkGuess(inputNumber);
        const message = this.feedbackMessage(ballCount, strikeCount);
        print(message);

        if (strikeCount !== SETTING.MAX_STRIKE_COUNT) continue;

        const restartNumber = Number(await input(MESSAGE.SUGGEST_NEW_GAME));
        validateRestartInput(restartNumber) && restartNumber === 1
          ? this.init()
          : (this.#isFinish = true);
      }
    } catch (e) {
      throw new Error(e.message);
    }
  }

  init() {
    this.#answerNumbers = generateNumber(SETTING.MIN, SETTING.MAX);
    // console.log(this.#answerNumbers);
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

  /**
   * @description 스트라이크와 볼의 갯수를 판별하여 메세지를 반환하는 함수
   * @param {number} ball
   * @param {number} strike
   * @returns {string} message
   */
  feedbackMessage(ball, strike) {
    let message = '';

    if (strike === SETTING.MAX_STRIKE_COUNT) {
      return `${strike}${MESSAGE.STRIKE}\n${MESSAGE.SUCCESS}`;
    }
    if (ball > 0) {
      message += `${ball}${MESSAGE.BALL} `;
    }
    if (strike > 0) {
      message += `${strike}${MESSAGE.STRIKE}`;
    }
    return message.trim() || `${MESSAGE.NOTHING}`;
  }
}

const app = new App();
app.play();
