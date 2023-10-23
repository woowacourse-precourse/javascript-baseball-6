import generateNumber from './utils/Number.js';
import { print, input } from './view/View.js';
import { MESSAGE, SETTING, ERROR } from './utils/Constants.js';

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
        this.validateInput(inputNumber);
        const { ballCount, strikeCount } = this.checkGuess(inputNumber);
        const message = this.feedbackMessage(ballCount, strikeCount);
        print(message);

        if (strikeCount !== SETTING.MAX_STRIKE_COUNT) continue;

        const restartNumber = Number(await input(MESSAGE.SUGGEST_NEW_GAME));
        this.validateRestartInput(restartNumber) && restartNumber === 1
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
   * @description 사용자 입력값 검증 함수
   * 1.숫자가 아닌 다른 값의 유무 판단(공백포함) / 2.입력값의 길이 판단
   * 3.서로 다른 3개의 숫자 판단 / 4. 0을 지니고 있는지 판단
   * 5.서로 다른 3가지 숫자를 중복으로 입력받는 경우
   * @param {string} input
   * @returns {boolean} 유효성 검사 결과 반환
   *
   */

  validateInput(input) {
    const set = new Set(input.split(''));
    if (
      isNaN(Number(input)) ||
      input.length > SETTING.MAX_INPUT_LENGTH ||
      set.size !== SETTING.MAX_INPUT_LENGTH ||
      set.has('0')
    ) {
      throw new Error(`${ERROR.HEADER}${ERROR.INPUT}`);
    }
    return true;
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
      } else if (randomNumber.includes(input[i])) {
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

  /**
   * @description 재시작 사용자 입력값 검증 함수
   * @param {number} input
   * @returns {boolean}
   */

  validateRestartInput(input) {
    if (input !== SETTING.RESTART && input !== SETTING.END) {
      throw new Error(`${ERROR.RESTART}${ERROR.RESTART}`);
    }
    return true;
  }
}

const app = new App();
app.play();
